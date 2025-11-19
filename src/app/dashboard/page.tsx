import React from "react";
import { currentUser } from "@clerk/nextjs/server";
import AddNewRecord from "@/components/dashboard/AddNewRecord";
import { ExpenseChart } from "@/components/dashboard/ExpenseChart";
import ExpenseStatistics from "@/components/dashboard/ExpenseStatistics";
import AIInsights from "@/components/dashboard/AIInsights";
import HistoricalExpenseTable from "@/components/dashboard/HistoricalExpenseTable";
import { SignOutButton } from "@clerk/nextjs";
import { LogOut } from "lucide-react";

export default async function page() {
  const user = await currentUser();

  return (
    <div className="container mx-auto px-4 py-6 md:px-6 lg:px-8 space-y-6">
      {/* Header Halaman */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Selamat datang kembali, {user?.firstName}. Ini ringkasan keuangan
              kamu.
            </p>
          </div>
          <div className="bg-green-400 px-4 py-2 text-white rounded-md hover:bg-green-500 cursor-pointer flex items-center gap-2">
            <LogOut className="h-4 w-4" />
            <SignOutButton />
          </div>
        </div>
        <div className="flex items-center gap-2">
          {/* Tombol Tambah Catatan Baru */}
          <AddNewRecord />
        </div>
      </div>

      {/* Stats & Charts Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4">
          <ExpenseChart />
        </div>
        <div className="col-span-3">
          <ExpenseStatistics />
        </div>
      </div>

      {/* AI Insights */}
      <div className="grid gap-4 md:grid-cols-1">
        <AIInsights />
      </div>

      {/* Recent Transactions / History */}
      <div className="grid gap-4 md:grid-cols-1">
        <HistoricalExpenseTable />
      </div>
    </div>
  );
}
