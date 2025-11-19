'use client'

import { BarChart3, PieChart, Smartphone, Target, Zap, ShieldCheck, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const features = [
  {
    icon: PieChart,
    title: "AI Insight Cerdas",
    description: "Analisis mendalam pola pengeluaranmu dengan bantuan Artificial Intelligence. Dapatkan saran personal untuk berhemat.",
    className: "md:col-span-2",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: Zap,
    title: "Input Cepat",
    description: "Catat transaksi dalam hitungan detik. Tanpa ribet, langsung tercatat.",
    className: "md:col-span-1",
    color: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    gradient: "from-amber-500/20 to-orange-500/20"
  },
  {
    icon: Target,
    title: "Budgeting Goals",
    description: "Set target tabungan dan batasi pengeluaran per kategori agar tidak boncos.",
    className: "md:col-span-1",
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    gradient: "from-emerald-500/20 to-green-500/20"
  },
  {
    icon: BarChart3,
    title: "Visualisasi Data",
    description: "Grafik interaktif yang memanjakan mata dan mudah dipahami.",
    className: "md:col-span-2",
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-chart-2/5 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground tracking-tight">
            Fitur Premium untuk
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-chart-2 block mt-2">Keuangan Pribadi</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Kami menggabungkan teknologi AI dengan desain intuitif untuk memberikan pengalaman manajemen keuangan terbaik.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={cn(
                "group relative bg-card border border-border rounded-3xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden",
                feature.className
              )}
            >
              {/* Hover Gradient Background */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                feature.gradient
              )}></div>

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="space-y-4">
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110", feature.color)}>
                    <feature.icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-card-foreground group-hover:text-foreground transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-8 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  Pelajari lebih lanjut <ArrowUpRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-12">
          {[
            { label: "Pengguna Aktif", value: "10K+" },
            { label: "Transaksi Tercatat", value: "5M+" },
            { label: "Rating App Store", value: "4.9" },
            { label: "Negara", value: "ID" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
