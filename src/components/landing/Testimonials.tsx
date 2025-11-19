'use client'

import { Star, Quote } from 'lucide-react'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    id: 1,
    name: "Andi Pratama",
    role: "Content Creator",
    location: "Jakarta",
    avatar: "AP",
    rating: 5,
    content: "Setelah pakai SpendSense, akhirnya aku bisa tau kemana aja duit habis tiap bulan. Fitur kategorisasinya otomatis detect pengeluaran buat makanan, transport, dll. AI insight-nya juga kasih saran buat hemat pengeluaran!",
    highlight: "kategorisasi otomatis"
  },
  {
    id: 2,
    name: "Sarah Kusuma",
    role: "Marketing Manager",
    location: "Bandung",
    avatar: "SK",
    rating: 5,
    content: "Input transaksinya gampang banget, grafik pengeluarannya juga mudah dipahami. Yang paling suka AI-nya bisa ngasih rekomendasi personal berdasarkan pola spending aku. Jadi lebih aware sama keuangan!",
    highlight: "AI insight"
  },
  {
    id: 3,
    name: "Rizki Maharani",
    role: "Freelance Designer",
    location: "Yogyakarta",
    avatar: "RM",
    rating: 5,
    content: "Sebagai freelancer yang income-nya ga tetap, SpendSense bantu banget buat tracking cash flow. Interface-nya simpel dan user friendly, jadi ga ribet buat catat pengeluaran setiap hari.",
    highlight: "tracking pengeluaran"
  },
  {
    id: 4,
    name: "Dimas Anggara",
    role: "Software Engineer",
    location: "Surabaya",
    avatar: "DA",
    rating: 5,
    content: "App-nya ringan dan responsive. Yang keren, AI-nya bisa analisis spending pattern dan ngasih insight yang berguna. Sekarang jadi lebih tau di kategori mana aku boros dan harus dikurangi.",
    highlight: "analisis AI"
  },
  {
    id: 5,
    name: "Maya Sari",
    role: "Teacher",
    location: "Medan",
    avatar: "MS",
    rating: 5,
    content: "Interface-nya simpel banget, cocok buat yang ga terlalu tech-savvy kayak aku. Bisa liat summary pengeluaran bulanan dengan mudah. AI-nya juga ngasih tips buat manage keuangan yang realistic.",
    highlight: "interface simpel"
  },
  {
    id: 6,
    name: "Bayu Firmansyah",
    role: "Entrepreneur",
    location: "Semarang",
    avatar: "BF",
    rating: 5,
    content: "Buat ngatur keuangan bisnis kecil, SpendSense cukup membantu. Kategorisasi otomatis bikin tracking expense jadi lebih teratur. AI insight-nya juga memberikan perspective baru tentang cash flow management.",
    highlight: "kategorisasi"
  }
]

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground tracking-tight">
            Apa Kata Mereka tentang
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-chart-2 block mt-2">SpendSense?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ribuan pengguna sudah merasakan perubahan positif dalam mengatur keuangan mereka.
            Dengar cerita sukses mereka!
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="mb-20">
          <div className="bg-card border border-border rounded-3xl p-8 lg:p-12 relative overflow-hidden shadow-lg">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 opacity-5">
              <Quote className="w-32 h-32 text-primary" />
            </div>

            <div className="relative z-10 grid lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-2 space-y-8">
                {/* Stars */}
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-xl lg:text-3xl font-medium text-card-foreground leading-relaxed">
                  &quot;{testimonials[currentTestimonial].content}&quot;
                </blockquote>

                {/* Author */}
                <div>
                  <div className="font-bold text-card-foreground text-xl">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-muted-foreground text-lg">
                    {testimonials[currentTestimonial].role} • {testimonials[currentTestimonial].location}
                  </div>
                </div>
              </div>

              {/* Avatar Large */}
              <div className="flex justify-center lg:justify-end">
                <div className="w-40 h-40 bg-gradient-to-br from-primary to-chart-2 rounded-full flex items-center justify-center text-white font-bold text-4xl shadow-2xl ring-8 ring-background">
                  {testimonials[currentTestimonial].avatar}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  index === currentTestimonial 
                    ? 'bg-primary w-8' 
                    : 'bg-muted w-2 hover:bg-primary/50'
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Grid of Mini Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={cn(
                "bg-card border border-border rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
                index === currentTestimonial ? 'ring-2 ring-primary/50 bg-primary/5' : ''
              )}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-chart-2 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <div className="flex space-x-0.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-4">
                &quot;{testimonial.content}&quot;
              </p>

              <div className="inline-block bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1 rounded-full">
                {testimonial.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
