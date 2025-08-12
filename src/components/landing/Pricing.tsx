'use client'

import { Check, Clock, Zap, Crown, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

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
    color: "border-border"
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
    color: "border-primary"
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
    color: "border-chart-2"
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-muted/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-1/4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-chart-2/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Pilih Paket yang
            <span className="text-primary block">Sesuai Kebutuhan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Mulai gratis dan upgrade sesuai kebutuhan. Semua paket dilengkapi dengan keamanan bank-grade 
            dan support terbaik dari tim kami.
          </p>
        </div>

        {/* Coming Soon Banner */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-primary/10 via-chart-2/10 to-primary/10 border border-primary/20 rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center space-x-3 mb-3">
              <Clock className="w-6 h-6 text-primary" />
              <span className="text-lg font-semibold text-foreground">Paket Premium Coming Soon!</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Kami sedang mempersiapkan fitur-fitur canggih untuk paket Pro dan Enterprise. 
              Daftar waitlist sekarang dan dapatkan early bird discount hingga 50%!
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Join Waitlist
            </Button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-card border-2 ${plan.color} rounded-3xl p-8 transition-all duration-300 hover:shadow-xl ${
                plan.popular ? 'scale-105 ring-2 ring-primary/50' : 'hover:-translate-y-2'
              } ${!plan.available ? 'opacity-75' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Not Available Badge */}
              {!plan.available && (
                <div className="absolute -top-4 right-4">
                  <div className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>Coming Soon</span>
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 ${
                plan.available ? 'bg-primary/10 text-primary' : 'bg-muted/50 text-muted-foreground'
              }`}>
                <plan.icon className="w-6 h-6" />
              </div>

              {/* Plan Info */}
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-bold text-card-foreground">{plan.name}</h3>
                <div className="space-y-2">
                  <div className="flex items-baseline space-x-1">
                    <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                    {plan.period && (
                      <span className="text-muted-foreground text-sm">{plan.period}</span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.available ? 'bg-primary/10' : 'bg-muted/50'
                    }`}>
                      <Check className={`w-3 h-3 ${
                        plan.available ? 'text-primary' : 'text-muted-foreground'
                      }`} />
                    </div>
                    <span className="text-sm text-card-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                className={`w-full ${
                  plan.available 
                    ? plan.popular 
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                      : 'bg-secondary hover:bg-secondary/90 text-secondary-foreground'
                    : 'bg-muted text-muted-foreground cursor-not-allowed'
                }`}
                disabled={!plan.available}
              >
                {plan.available ? 'Mulai Sekarang' : 'Coming Soon'}
              </Button>
            </div>
          ))}
        </div>

        {/* FAQ Preview */}
        <div className="mt-16 text-center">
          <div className="bg-card border border-border rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-card-foreground mb-4">Frequently Asked Questions</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-medium text-card-foreground mb-2">Kapan paket Pro tersedia?</h4>
                <p className="text-sm text-muted-foreground">Paket Pro akan launch dalam Q2 2024. Join waitlist untuk update terbaru!</p>
              </div>
              <div>
                <h4 className="font-medium text-card-foreground mb-2">Apakah ada trial gratis?</h4>
                <p className="text-sm text-muted-foreground">Ya! Paket Pro akan include 14 hari trial gratis tanpa commitment.</p>
              </div>
              <div>
                <h4 className="font-medium text-card-foreground mb-2">Bisa upgrade/downgrade kapan saja?</h4>
                <p className="text-sm text-muted-foreground">Tentu! Kamu bisa ubah paket kapan saja sesuai kebutuhan.</p>
              </div>
              <div>
                <h4 className="font-medium text-card-foreground mb-2">Bagaimana dengan keamanan data?</h4>
                <p className="text-sm text-muted-foreground">Semua paket menggunakan enkripsi bank-grade dan compliance ISO 27001.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
