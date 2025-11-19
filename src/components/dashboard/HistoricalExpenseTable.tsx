'use client'

import { useEffect, useState } from "react";
import { getExpenseRecords } from "@/actions/getExpenseRecords";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

interface ExpenseRecord {
  id: string;
  text: string;
  amount: number;
  category: string;
  date: Date;
}

export default function HistoricalExpenseTable() {
  const [records, setRecords] = useState<ExpenseRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchRecords = async () => {
    setIsLoading(true);
    try {
      const { records } = await getExpenseRecords();
      setRecords(records);
    } catch (error) {
      console.error("Failed to fetch records:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'makanan':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'transportasi':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'belanja':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      case 'kesehatan':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'hiburan':
        return 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  return (
    <Card className="w-full shadow-lg border-none bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100">
          Riwayat Pengeluaran
        </CardTitle>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={fetchRecords} 
          disabled={isLoading}
          className="hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
        >
          <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3 rounded-l-lg">Tanggal</th>
                <th className="px-6 py-3">Keterangan</th>
                <th className="px-6 py-3">Kategori</th>
                <th className="px-6 py-3 text-right rounded-r-lg">Jumlah</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
                    Memuat data...
                  </td>
                </tr>
              ) : records.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
                    Belum ada data pengeluaran.
                  </td>
                </tr>
              ) : (
                records.map((record) => (
                  <tr key={record.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      {new Date(record.date).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                      {record.text}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${getCategoryColor(record.category)}`}>
                        {record.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right font-semibold text-red-600 dark:text-red-400">
                      Rp {record.amount.toLocaleString('id-ID')}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
