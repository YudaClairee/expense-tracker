import { getExpenseChartData } from "@/actions/getExpenseRecords"
import { ExpenseChartClient } from "./ExpenseChartClient"

export async function ExpenseChart() {
  const { chartData, totalRecords, error } = await getExpenseChartData();
  
  return (
    <ExpenseChartClient 
      chartData={chartData} 
      totalRecords={totalRecords} 
      error={error} 
    />
  )
}
