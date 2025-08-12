'use client'

import { SignUpButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, TrendingUp, Shield, Smartphone } from 'lucide-react'

export default function Hero() {
  const { isSignedIn } = useUser()

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute top-32 right-20 w-32 h-32 bg-chart-2/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-chart-3/10 rounded-full blur-xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium">
              <TrendingUp className="w-4 h-4 mr-2" />
              Kelola keuangan dengan lebih cerdas
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Tracking Pengeluaran
                <span className="text-primary block">Jadi Mudah</span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-lg">
                Pantau setiap rupiah yang kamu keluarkan, analisis pola pengeluaran, dan capai target finansial dengan SpendSense.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {isSignedIn ? (
                <Link href="/dashboard">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 h-auto">
                    Buka Dashboard
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              ) : (
                <SignUpButton>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 h-auto">
                    Mulai Gratis Sekarang
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </SignUpButton>
              )}
              <Button variant="outline" size="lg" className="px-8 py-4 h-auto">
                Lihat Demo
              </Button>
            </div>

            {/* Features Preview */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">Keamanan Terjamin</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-chart-2/10 rounded-lg flex items-center justify-center">
                  <Smartphone className="w-4 h-4 text-chart-2" />
                </div>
                <span className="text-sm text-muted-foreground">Mobile Friendly</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-chart-3/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-chart-3" />
                </div>
                <span className="text-sm text-muted-foreground">Analytics Real-time</span>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative">
            <div className="relative bg-card border border-border rounded-2xl p-6 shadow-2xl">
              {/* Mock Dashboard */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-card-foreground">Dashboard Overview</h3>
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                </div>
                
                {/* Balance Card */}
                <div className="bg-gradient-to-r from-primary to-chart-2 rounded-xl p-4 text-white">
                  <p className="text-sm opacity-90">Total Balance</p>
                  <p className="text-2xl font-bold">Rp 8.420.000</p>
                  <p className="text-sm opacity-90">+12.5% dari bulan lalu</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted/50 rounded-lg p-3">
                    <p className="text-xs text-muted-foreground">Pengeluaran Bulan Ini</p>
                    <p className="text-lg font-semibold text-foreground">Rp 2.650.000</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-3">
                    <p className="text-xs text-muted-foreground">Kategori Tertinggi</p>
                    <p className="text-lg font-semibold text-foreground">Makanan</p>
                  </div>
                </div>

                {/* Chart Mock */}
                <div className="h-20 bg-muted/30 rounded-lg flex items-end justify-center space-x-1 p-2">
                  {[40, 65, 30, 80, 45, 70, 55].map((height, i) => (
                    <div 
                      key={i} 
                      className="bg-primary rounded-sm w-4 opacity-80"
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full animate-bounce delay-1000"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-chart-2/20 rounded-full animate-bounce delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
