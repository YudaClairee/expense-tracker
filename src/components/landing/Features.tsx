'use client'

import { BarChart3, PieChart, Wallet, Bell, Smartphone, Lock, Target, Calendar } from 'lucide-react'

const features = [
  {
    icon: BarChart3,
    title: "Analisis Mendalam",
    description: "Visualisasi pengeluaran dengan grafik interaktif yang mudah dipahami. Lihat trend pengeluaran harian, mingguan, dan bulanan.",
    color: "bg-primary/10 text-primary"
  },
  {
    icon: PieChart,
    title: "Kategorisasi Otomatis",
    description: "AI akan secara otomatis mengelompokkan transaksi berdasarkan kategori. Hemat waktu dan dapatkan insight yang akurat.",
    color: "bg-chart-2/10 text-chart-2"
  },
  {
    icon: Wallet,
    title: "Multi-Akun Banking",
    description: "Sinkronisasi dengan berbagai bank dan e-wallet. Kelola semua akun finansial dalam satu platform terpadu.",
    color: "bg-chart-3/10 text-chart-3"
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Dapatkan notifikasi cerdas saat pengeluaran mendekati budget atau ada transaksi mencurigakan.",
    color: "bg-chart-4/10 text-chart-4"
  },
  {
    icon: Target,
    title: "Budget Planning",
    description: "Set target budget untuk setiap kategori dan pantau progress secara real-time dengan rekomendasi personal.",
    color: "bg-chart-5/10 text-chart-5"
  },
  {
    icon: Lock,
    title: "Keamanan Bank-Grade",
    description: "Data kamu dilindungi dengan enkripsi bank-grade dan standar keamanan internasional ISO 27001.",
    color: "bg-destructive/10 text-destructive"
  },
  {
    icon: Smartphone,
    title: "Mobile First Design",
    description: "Akses dimana saja, kapan saja. Interface yang responsif dan intuitif untuk semua perangkat.",
    color: "bg-secondary/30 text-secondary-foreground"
  },
  {
    icon: Calendar,
    title: "Perencanaan Finansial",
    description: "Tools perencanaan jangka panjang dengan proyeksi dan rekomendasi investasi berdasarkan pola pengeluaran.",
    color: "bg-accent/30 text-accent-foreground"
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
            SpendSense hadir dengan teknologi terdepan untuk memberikan kontrol penuh atas keuangan pribadi kamu. 
            Dari analisis mendalam hingga keamanan bank-grade.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <p className="font-semibold text-card-foreground">Bergabung dengan 10,000+ pengguna aktif</p>
              <p className="text-sm text-muted-foreground">yang sudah merasakan manfaatnya</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
