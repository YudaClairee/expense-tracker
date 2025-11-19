import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import getBestWorstExpense from "@/actions/getBestWorstExpense";
import getUserRecord from "@/actions/getUserRecord";
import { ArrowDown, ArrowUp, Wallet } from "lucide-react";

export default async function ExpenseStatistics() {
  const { bestExpense, worstExpense, error } = await getBestWorstExpense();
  const userRecordResult = await getUserRecord();

  if (error || !userRecordResult) {
    return (
      <Card className="bg-destructive/10">
        <CardContent className="pt-6">
          <p className="text-destructive">
            Error: {error || "Gagal mengambil data pengeluaran"}
          </p>
        </CardContent>
      </Card>
    );
  }

  const { record, daysWithRecords, error: recordError } = userRecordResult;

  const validRecord = record || 0;
  const validDays =
    daysWithRecords && daysWithRecords > 0 ? daysWithRecords : 1;
  const averageExpense = validRecord / validDays;

  if (recordError) {
    return (
      <Card className="bg-destructive/10">
        <CardContent className="pt-6">
          <p className="text-destructive">Error: {recordError}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid gap-4 grid-cols-1">
      {/* Kartu Rata-rata Pengeluaran */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Rata-rata Pengeluaran Harian
          </CardTitle>
          <Wallet className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            Rp {averageExpense?.toLocaleString("id-ID")}
          </div>
          <p className="text-xs text-muted-foreground">
            Berdasarkan {validDays} hari aktivitas
          </p>
        </CardContent>
      </Card>

      {/* Kartu Pengeluaran Tertinggi */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Pengeluaran Tertinggi
          </CardTitle>
          <ArrowUp className="h-4 w-4 text-red-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-red-600">
            Rp {worstExpense?.toLocaleString("id-ID")}
          </div>
          <p className="text-xs text-muted-foreground">
            Transaksi terbesar kamu
          </p>
        </CardContent>
      </Card>

      {/* Kartu Pengeluaran Terendah */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Pengeluaran Terendah
          </CardTitle>
          <ArrowDown className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-600">
            Rp {bestExpense?.toLocaleString("id-ID")}
          </div>
          <p className="text-xs text-muted-foreground">
            Transaksi terkecil kamu
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
