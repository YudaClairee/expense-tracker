import { Button } from '@/components/ui/button';
import { SignOutButton, UserButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server'
import { LogOut } from 'lucide-react';
import React from 'react'
import AddNewRecord from '@/components/dashboard/AddNewRecord';
import { ExpenseChart } from '@/components/dashboard/ExpenseChart';
import ExpenseStatistics from '@/components/dashboard/ExpenseStatistics';

export default async function page() {

  const user = await currentUser();
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-16'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <UserButton appearance={{
            elements: {
              avatarBox: "!bg-primary !rounded-full !size-10",
            },
          }} />
          <h1 className='text-2xl font-bold'>Haloo, {user?.firstName}</h1>
        </div>
        <SignOutButton>
          <Button>
            <LogOut className='w-4 h-4' />
            Sign Out
          </Button>
        </SignOutButton>
      </div>
      <div className='mt-10 w-3xl'>
        <h2 className='text-xl font-semibold'>Kamu dapat mencatat pengeluaran kamu dengan mudah dan dapatkan insight cerdas dari AI untuk mengelola keuangan kamu.</h2>
      </div>

      <AddNewRecord />
      <div className='mt-10 w-full flex gap-10'>
        <ExpenseChart />
        <ExpenseStatistics />
      </div>
    </div>
  )
}