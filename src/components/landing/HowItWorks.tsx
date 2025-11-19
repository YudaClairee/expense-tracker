import { UserPlus, Receipt, TrendingUp } from 'lucide-react'

const steps = [
  {
    icon: UserPlus,
    title: "Daftar Akun",
    description: "Buat akun gratis dalam hitungan detik. Cukup gunakan email atau akun Google kamu.",
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
  },
  {
    icon: Receipt,
    title: "Catat Transaksi",
    description: "Mulai catat pemasukan dan pengeluaranmu. Bisa manual atau upload struk (coming soon).",
    color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400"
  },
  {
    icon: TrendingUp,
    title: "Analisis & Hemat",
    description: "Lihat laporan keuangan otomatis dan dapatkan insight AI untuk mulai berhemat.",
    color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Mulai dalam 3 Langkah Mudah
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tidak perlu ribet. SpendSense didesain untuk siapapun yang ingin mengatur keuangan dengan simpel.
          </p>
        </div>

        <div className="relative grid md:grid-cols-3 gap-8">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-border to-transparent border-t-2 border-dashed border-muted-foreground/30 z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center group">
              <div className={`w-24 h-24 rounded-3xl ${step.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <step.icon className="w-10 h-10" />
              </div>
              
              <div className="bg-card border border-border p-6 rounded-2xl w-full hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
