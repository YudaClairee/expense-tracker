"use client"

import { BarChart3 } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"


const chartConfig = {
  amount: {
    label: "Jumlah",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

interface ChartData {
  date: string
  amount: number
  label: string
}

interface ExpenseChartClientProps {
  chartData: ChartData[]
  totalRecords: number
  error: string | null
}

export function ExpenseChartClient({ chartData, totalRecords, error }: ExpenseChartClientProps) {
  // Onboarding state - no records yet
  if (totalRecords === 0) {
    return (
      <Card className="bg-background border border-border rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <BarChart3 className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="text-xl">Grafik Pengeluaran</CardTitle>
          <CardDescription className="text-center max-w-md mx-auto">
            
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="bg-muted/50 rounded-lg p-6 space-y-3">
            <h3 className="font-semibold text-muted-foreground">Belum Ada Data Pengeluaran</h3>
            <p className="font-semibold text-muted-foreground">Mulai catat pengeluaran kamu untuk melihat grafik dan insight cerdas dari AI. 
            Data yang kamu input akan ditampilkan dalam bentuk visualisasi yang mudah dipahami.</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Error state
  if (error) {
    return (
      <Card className="bg-background border border-border rounded-lg p-4 sm:p-6 mt-10 shadow-sm hover:shadow-md transition-shadow duration-300">
        <CardHeader className="text-center">
          <CardTitle className="text-destructive">Error</CardTitle>
          <CardDescription>{error}</CardDescription>
        </CardHeader>
      </Card>
    )
  }

  // Calculate total amount
  const totalAmount = chartData.reduce((sum, item) => sum + item.amount, 0)
  const topDate = chartData.length > 0 ? chartData.reduce((prev, current) => 
    prev.amount > current.amount ? prev : current
  ) : null

  return (
    <Card className="w-full bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <CardHeader>
        <CardTitle>Grafik Pengeluaran</CardTitle>
        <CardDescription>
          Visualisasi pengeluaran kamu berdasarkan tanggal. Total {totalRecords} transaksi tercatat.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="label"
              tickLine={false}
              tickMargin={10}
              axisLine={true}
              tickFormatter={(value) => value.slice(0, 8)}
            />
            <YAxis
              tickLine={true}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => `Rp ${(value / 1000).toFixed(0)}k`}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent 
                hideLabel 
                formatter={(value) => [
                  `Rp ${Number(value).toLocaleString('id-ID')} Total Pengeluaran`,
                  
                ]}
              />}
            />
            <Bar dataKey="amount" fill="var(--color-amount)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          <span>Total pengeluaran: Rp {totalAmount.toLocaleString('id-ID')}</span>
        </div>
        {topDate && (
          <div className="text-muted-foreground leading-none">
            Hari dengan pengeluaran terbesar: {topDate.label} (Rp {topDate.amount.toLocaleString('id-ID')})
          </div>
        )}
      </CardFooter>
    </Card>
  )
}
