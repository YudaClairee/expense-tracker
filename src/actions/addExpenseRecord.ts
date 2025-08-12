"use server"

import { checkUser } from "@/lib/checkUser"
import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export default async function addExpenseTracker(formData: FormData) {
  try {
    const user = await checkUser()
    
    if (!user) {
      return { error: "User not authenticated" }
    }

    const text = formData.get("text") as string
    const amount = parseFloat(formData.get("amount") as string)
    const category = formData.get("category") as string
    const dateString = formData.get("date") as string

    if (!text || !amount || !category || !dateString) {
      return { error: "All fields are required" }
    }

    const date = new Date(dateString)

    await prisma.record.create({
      data: {
        text,
        amount,
        category,
        date,
        userId: user.clerkUserId
      }
    })

    // Revalidate the dashboard page to show new data
    revalidatePath("/dashboard")
    
    return { success: true }
  } catch (error) {
    console.error("Error adding expense record:", error)
    return { error: "Failed to add expense record" }
  }
}
