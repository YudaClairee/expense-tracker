import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import getBestWorstExpense from '@/actions/getBestWorstExpense'
import getUserRecord from '@/actions/getUserRecord'
import { BanknoteArrowDown, BanknoteArrowUp } from 'lucide-react';

export default async function ExpenseStatistics() {
  const { bestExpense, worstExpense, error } = await getBestWorstExpense();
  const userRecordResult = await getUserRecord();

  if (error || !userRecordResult) {
    return <div>Error: {error || "Failed to fetch user records"}</div>;
  }

  const { record, daysWithRecords, error: recordError } = userRecordResult;

  const validRecord = record || 0;
  const validDays =
    daysWithRecords && daysWithRecords > 0 ? daysWithRecords : 1;
  const averageExpense = validRecord / validDays;
  
  if (recordError) {
    return <div>Error: {recordError}</div>;
  }

  return (
    <div className='w-full'>
      <Card className='bg-card shadow-sm hover:shadow-md transition-shadow duration-300'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold'>Statistik Pengeluaran</CardTitle>
          <CardDescription className='text-md text-muted-foreground'>Disini kamu bisa melihat statistik pengeluaran kamu</CardDescription>
        </CardHeader>
        <CardContent>
            <div className='flex flex-col gap-4'>
              <div className='bg-secondary-foreground/20 rounded-lg p-4'>
                <h2 className='text-xl font-semibold'>Rata-rata Pengeluaran</h2>
                <p className='text-md text-muted-foreground'>
                  Rata-rata pengeluaran kamu adalah <span className='text-md font-bold text-foreground'>Rp {averageExpense?.toLocaleString('id-ID')}</span>
                </p>
                <span className='text-sm text-muted-foreground'>Berdasarkan {validDays} hari</span>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <div className='bg-red-500/10 rounded-lg p-4 flex flex-col items-center gap-2'>
                <BanknoteArrowUp className='w-10 h-10 text-red-500' />
                  <h2 className='text-xl font-semibold text-center text-red-500'>Pengeluaran Terbesar</h2>
                  <p className='text-lg font-bold text-center text-red-600'>
                    Rp {worstExpense?.toLocaleString('id-ID')}
                  </p>
                </div>
                <div className='bg-accent rounded-lg p-4 flex flex-col items-center gap-2'>
                <BanknoteArrowDown className='w-10 h-10 text-green-500' />
                  <h2 className='text-xl font-semibold text-center text-green-500'>Pengeluaran Terkecil</h2>
                  <p className='text-lg font-bold text-center text-green-600'>
                    Rp {bestExpense?.toLocaleString('id-ID')}
                  </p>
                </div>
              </div>
              

            </div>
        </CardContent>
      </Card>
    </div>
  )
}
