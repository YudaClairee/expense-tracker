'use client'

import { BarChart3, PieChart, Smartphone, Target } from 'lucide-react'

const features = [
  {
    icon: PieChart,
    title: "AI Insight Cerdas",
    description: "Dapatkan analisis dan saran finansial dari AI berdasarkan pola pengeluaran kamu. Rekomendasi personal untuk mengoptimalkan keuangan.",
    color: "bg-primary/10 text-primary"
  },
  {
    icon: BarChart3,
    title: "Tracking Pengeluaran",
    description: "Catat dan pantau semua transaksi dengan mudah. Visualisasi data pengeluaran dalam grafik yang mudah dipahami.",
    color: "bg-chart-2/10 text-chart-2"
  },
  {
    icon: Target,
    title: "Kategorisasi Otomatis",
    description: "Sistem otomatis mengelompokkan transaksi berdasarkan kategori seperti makanan, transport, belanja, dll.",
    color: "bg-chart-3/10 text-chart-3"
  },
  {
    icon: Smartphone,
    title: "Interface Simpel",
    description: "Desain yang clean dan mudah digunakan. Akses cepat untuk input transaksi dan lihat summary keuangan.",
    color: "bg-chart-4/10 text-chart-4"
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Fitur-Fitur Canggih untuk
            <span className="text-primary block">Keuangan yang Lebih Baik</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            SpendSense membantu kamu melacak pengeluaran dengan mudah dan mendapatkan insight cerdas dari AI 
            untuk mengelola keuangan lebih baik.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6" />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-card border border-border rounded-2xl p-6">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i} 
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-chart-2 border-2 border-background flex items-center justify-center text-white text-sm font-semibold"
                >
                  {i}
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="font-semibold text-card-foreground">Bergabung dengan 500+ pengguna aktif</p>
              <p className="text-sm text-muted-foreground">yang sudah merasakan manfaatnya</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
