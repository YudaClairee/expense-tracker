"use client";

import { SignUpButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  TrendingUp,
  Shield,
  Smartphone,
  CheckCircle2,
  Brain,
} from "lucide-react";

export default function Hero() {
  const { isSignedIn } = useUser();

  return (
    <section className="relative overflow-hidden bg-background pt-20 pb-20 lg:pt-32 lg:pb-28">
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-chart-2/10 blur-3xl opacity-50 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-[10%] left-[20%] w-[30%] h-[30%] rounded-full bg-chart-3/10 blur-3xl opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium animate-fade-in-up">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              Platform Keuangan Indonesia
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                Kelola Uang <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-chart-2">
                  Tanpa Pusing
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                WallyAI membantu kamu melacak pengeluaran, menganalisis
                kebiasaan belanja, dan mencapai kebebasan finansial dengan
                bantuan AI.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {isSignedIn ? (
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg shadow-lg shadow-primary/20 transition-all hover:scale-105"
                  >
                    Buka Dashboard
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              ) : (
                <SignUpButton mode="modal">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg shadow-lg shadow-primary/20 transition-all hover:scale-105"
                  >
                    Mulai Gratis
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </SignUpButton>
              )}
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto px-8 py-6 text-lg border-2 hover:bg-accent/50"
              >
                Lihat Demo
              </Button>
            </div>

            <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Gratis Selamanya</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Tanpa Kartu Kredit</span>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative lg:h-[600px] flex items-center justify-center perspective-1000">
            <div className="relative w-full max-w-md lg:max-w-full aspect-square lg:aspect-auto lg:h-full">
              {/* Main Card */}
              <div className="absolute inset-x-0 top-10 bottom-10 bg-card/80 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl shadow-2xl p-6 transform rotate-y-12 transition-transform hover:rotate-y-0 duration-700 ease-out">
                {/* Header Mock */}
                <div className="flex items-center justify-between mb-8">
                  <div className="space-y-1">
                    <div className="h-2 w-24 bg-muted rounded-full"></div>
                    <div className="h-2 w-16 bg-muted rounded-full"></div>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-primary/20"></div>
                </div>

                {/* Balance Section */}
                <div className="bg-gradient-to-br from-primary/90 to-primary/70 rounded-2xl p-6 text-white mb-8 shadow-lg">
                  <p className="text-sm opacity-80 mb-1">Total Pengeluaran</p>
                  <h3 className="text-3xl font-bold mb-2">Rp 12.450.000</h3>
                  <div className="flex items-center text-sm bg-white/20 w-fit px-2 py-1 rounded-lg">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +15.2% dari bulan sebelumnya
                  </div>
                </div>

                {/* Recent Activity Mock */}
                <div className="space-y-4">
                  <div className="text-sm font-semibold text-muted-foreground mb-4">
                    Aktivitas Terbaru
                  </div>
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            i === 1
                              ? "bg-orange-100 text-orange-600"
                              : i === 2
                              ? "bg-blue-100 text-blue-600"
                              : "bg-green-100 text-green-600"
                          }`}
                        >
                          {i === 1 ? (
                            <Smartphone className="w-5 h-5" />
                          ) : i === 2 ? (
                            <Shield className="w-5 h-5" />
                          ) : (
                            <TrendingUp className="w-5 h-5" />
                          )}
                        </div>
                        <div>
                          <div className="h-2 w-20 bg-foreground/10 rounded-full mb-1"></div>
                          <div className="h-2 w-12 bg-foreground/5 rounded-full"></div>
                        </div>
                      </div>
                      <div className="h-2 w-16 bg-foreground/10 rounded-full"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-20 -right-4 lg:-right-12 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-border animate-bounce-slow z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Hemat</p>
                    <p className="text-sm font-bold text-green-600">
                      +Rp 2.5jt
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-32 -left-4 lg:-left-8 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-border animate-bounce-slow delay-700 z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600">
                    <Brain className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">AI insights</p>
                    <p className="text-sm font-bold">
                      Menganalisis pengeluaranmu
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
