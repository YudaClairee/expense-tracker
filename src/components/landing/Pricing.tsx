'use client'

import { Check, Clock, Zap, Crown, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const plans = [
  {
    name: "Basic",
    price: "Gratis",
    description: "Sempurna untuk pemula yang baru mulai mengatur keuangan",
    features: [
      "Tracking pengeluaran unlimited",
      "5 kategori custom",
      "Laporan bulanan",
      "Sinkronisasi 2 akun bank",
      "Support email"
    ],
    popular: false,
    available: true,
    icon: Zap,
    color: "border-border bg-card",
    buttonVariant: "outline" as const
  },
  {
    name: "Pro",
    price: "Rp 49.000",
    period: "/bulan",
    description: "Untuk mereka yang serius dalam perencanaan finansial",
    features: [
      "Semua fitur Basic",
      "Kategori unlimited",
      "Analytics mendalam",
      "Budget planning & alerts",
      "Sinkronisasi unlimited akun",
      "Export ke Excel/PDF",
      "Priority support"
    ],
    popular: true,
    available: false,
    icon: Crown,
    color: "border-primary/50 bg-primary/5 shadow-2xl shadow-primary/10",
    buttonVariant: "default" as const
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Solusi untuk tim dan organisasi besar",
    features: [
      "Semua fitur Pro",
      "Multi-user dashboard",
      "API integration",
      "Custom reporting",
      "Dedicated account manager",
      "SLA 99.9% uptime",
      "White-label solution"
    ],
    popular: false,
    available: false,
    icon: Sparkles,
    color: "border-border bg-card",
    buttonVariant: "outline" as const
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-1/2 bg-gradient-to-r from-primary/5 via-chart-2/5 to-primary/5 blur-3xl transform -skew-y-6"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground tracking-tight">
            Pilih Paket yang
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-chart-2 block mt-2">Sesuai Kebutuhan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Mulai gratis dan upgrade sesuai kebutuhan. Semua paket dilengkapi dengan keamanan bank-grade 
            dan support terbaik dari tim kami.
          </p>
        </div>

        {/* Coming Soon Banner */}
        <div className="mb-16 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-primary/10 via-chart-2/10 to-primary/10 border border-primary/20 rounded-2xl p-8 text-center backdrop-blur-sm">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="p-2 bg-primary/20 rounded-full">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xl font-bold text-foreground">Paket Premium Coming Soon!</span>
            </div>
            <p className="text-muted-foreground mb-6 text-lg">
              Kami sedang mempersiapkan fitur-fitur canggih untuk paket Pro dan Enterprise. 
              Daftar waitlist sekarang dan dapatkan <span className="font-bold text-primary">early bird discount hingga 50%!</span>
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20">
              Join Waitlist
            </Button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={cn(
                "relative border-2 rounded-3xl p-8 transition-all duration-300",
                plan.color,
                plan.popular ? 'scale-105 z-10' : 'hover:-translate-y-2 opacity-80 hover:opacity-100'
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-chart-2 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Not Available Badge */}
              {!plan.available && !plan.popular && (
                <div className="absolute top-4 right-4">
                  <div className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>Soon</span>
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className={cn(
                "inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6",
                plan.available ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'
              )}>
                <plan.icon className="w-7 h-7" />
              </div>

              {/* Plan Info */}
              <div className="space-y-4 mb-8">
                <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                <div className="space-y-1">
                  <div className="flex items-baseline space-x-1">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    {plan.period && (
                      <span className="text-muted-foreground text-sm font-medium">{plan.period}</span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{plan.description}</p>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <div className={cn(
                      "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                      plan.available ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'
                    )}>
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                className="w-full h-12 text-base font-semibold"
                variant={plan.buttonVariant}
                disabled={!plan.available}
              >
                {plan.available ? 'Mulai Sekarang' : 'Coming Soon'}
              </Button>
            </div>
          ))}
        </div>

        {/* FAQ Preview */}
        <div className="mt-24 text-center">
          <div className="bg-card border border-border rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto shadow-sm">
            <h3 className="text-2xl font-bold text-foreground mb-8">Frequently Asked Questions</h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="font-bold text-foreground mb-2 text-lg">Kapan paket Pro tersedia?</h4>
                <p className="text-muted-foreground leading-relaxed">Paket Pro akan launch dalam Q2 2024. Join waitlist untuk update terbaru!</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2 text-lg">Apakah ada trial gratis?</h4>
                <p className="text-muted-foreground leading-relaxed">Ya! Paket Pro akan include 14 hari trial gratis tanpa commitment.</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2 text-lg">Bisa upgrade/downgrade kapan saja?</h4>
                <p className="text-muted-foreground leading-relaxed">Tentu! Kamu bisa ubah paket kapan saja sesuai kebutuhan.</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2 text-lg">Bagaimana dengan keamanan data?</h4>
                <p className="text-muted-foreground leading-relaxed">Semua paket menggunakan enkripsi bank-grade dan compliance ISO 27001.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
