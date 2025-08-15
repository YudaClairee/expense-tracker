'use server'

import { checkUser } from "@/lib/checkUser";
import { prisma } from "@/lib/prisma";
import { generateAIAnswer, ExpenseRecord } from "@/lib/ai";

export async function generateInsightAnswer(question: string) {
  try {
    const user = await checkUser();
    if (!user) {
      throw new Error("User not found");
    }

    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const expenses = await prisma.record.findMany({
      where: {
        userId: user.clerkUserId,
        createdAt: {
          gte: thirtyDaysAgo,
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: 50, // Limit to recent 50 expenses for analysis
    });

    const expenseData: ExpenseRecord[] = expenses.map((expense) => ({
      id: expense.id,
      amount: expense.amount,
      category: expense.category || 'Other',
      description: expense.text,
      date: expense.createdAt.toISOString(),
    }));

    const answer = await generateAIAnswer(question, expenseData);
    return answer;
  } catch (error) {
    console.error('Error generating AI answer:', error);
    return 'Terjadi kesalahan saat menghasilkan jawaban. Silakan coba lagi.';
  }
}