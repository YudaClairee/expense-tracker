'use server'

import { prisma } from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server"

async function getUserRecord(): Promise<{record?: number;
  daysWithRecords?: number;
  error?: string;
} | null> {
  const { userId } = await auth();

  if (!userId) {
    return { error: "User tidak ditemukan" }
  }

  try {
    const records = await prisma.record.findMany({
      where: {
        userId
      }
    })

    const record = records.reduce((sum, record) => sum + record.amount, 0);

    const daysWithRecords = records.filter((record) => record.amount > 0).length;

    return {record, daysWithRecords};
  } catch (error) {
    console.error('Error fetching user record:', error); // Log the error
    return { error: 'Database error' };
  }

}

export default getUserRecord;