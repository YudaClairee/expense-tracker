"use server"

import { checkUser } from "@/lib/checkUser"
import { prisma } from "@/lib/prisma"

export async function getExpenseRecords() {
  try {
    const user = await checkUser()
    
    if (!user) {
      return { records: [], error: "User not authenticated" }
    }

    const records = await prisma.record.findMany({
      where: {
        userId: user.clerkUserId
      },
      orderBy: {
        date: 'desc'
      }
    })

    return { records, error: null }
  } catch (error) {
    console.error("Error fetching records:", error)
    return { records: [], error: "Failed to fetch records" }
  }
}

export async function getExpenseChartData() {
  try {
    const user = await checkUser()
    
    if (!user) {
      return { chartData: [], totalRecords: 0, error: "User not authenticated" }
    }

    const records = await prisma.record.findMany({
      where: {
        userId: user.clerkUserId
      },
      orderBy: {
        date: 'asc'  // Changed to ascending for better chart visualization
      }
    })

    // Group by date for chart
    const dateData = records.reduce((acc, record) => {
      const dateKey = new Date(record.date).toLocaleDateString('id-ID', {
        day: '2-digit',
        month: 'short'
      })
      if (!acc[dateKey]) {
        acc[dateKey] = 0
      }
      acc[dateKey] += record.amount
      return acc
    }, {} as Record<string, number>)

    // Convert to chart format
    const chartData = Object.entries(dateData).map(([date, amount]) => ({
      date,
      amount: Math.round(amount),
      label: date
    }))

    return { chartData, totalRecords: records.length, error: null }
  } catch (error) {
    console.error("Error fetching chart data:", error)
    return { chartData: [], totalRecords: 0, error: "Failed to fetch chart data" }
  }
}