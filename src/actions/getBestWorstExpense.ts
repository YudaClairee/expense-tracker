"use server";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

async function getBestWorstExpense(): Promise<{
  bestExpense?: number;
  worstExpense?: number;
  error?: string;
}> {
  const { userId } = await auth();

  if (!userId) {
    return { error: "User tidak ditemukan" };
  }

  try {
    const records = await prisma.record.findMany({
      where: { userId },
      select: { amount: true },
    });

    if (!records || records.length === 0) {
      return { bestExpense: 0, worstExpense: 0 };
    }

    const amounts = records.map((record) => record.amount);

    const worstExpense = Math.max(...amounts); // Highest amount
    const bestExpense = Math.min(...amounts); // Lowest amount

    return { bestExpense, worstExpense };
  } catch (error) {
    console.error("Error fetching best and worst expense:", error);
    return { error: "Database error" };
  }
}

export default getBestWorstExpense;
