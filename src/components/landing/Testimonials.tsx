'use client'

import { Star, Quote } from 'lucide-react'
import { useState, useEffect } from 'react'

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
    <section id="testimonials" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-chart-2/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Apa Kata Mereka tentang
            <span className="text-primary block">SpendSense?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ribuan pengguna sudah merasakan perubahan positif dalam mengatur keuangan mereka.
            Dengar cerita sukses mereka!
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="mb-16">
          <div className="bg-card border border-border rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 opacity-10">
              <Quote className="w-24 h-24 text-primary" />
            </div>

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-xl lg:text-2xl text-card-foreground leading-relaxed mb-8">
                &quot;{testimonials[currentTestimonial].content}&quot;
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-chart-2 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <div>
                  <div className="font-semibold text-card-foreground text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-muted-foreground">
                    {testimonials[currentTestimonial].role} • {testimonials[currentTestimonial].location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-primary w-8' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Grid of Mini Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`bg-card border border-border rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                index === currentTestimonial ? 'ring-2 ring-primary/50 bg-primary/5' : ''
              }`}
            >
              {/* Stars */}
              <div className="flex space-x-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Highlight */}
              <div className="inline-block bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full mb-3">
                {testimonial.highlight}
              </div>

              {/* Content Preview */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                {testimonial.content.substring(0, 120)}...
              </p>

              {/* Author Mini */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-chart-2 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-medium text-card-foreground text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-primary">500+</div>
            <div className="text-muted-foreground">Pengguna Aktif</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-chart-2">4.8/5</div>
            <div className="text-muted-foreground">Rating Pengguna</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-chart-3">5,000+</div>
            <div className="text-muted-foreground">Transaksi Dicatat</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-chart-4">50+</div>
            <div className="text-muted-foreground">AI Insights Harian</div>
          </div>
        </div>
      </div>
    </section>
  )
}
