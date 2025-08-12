'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Github, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2">
                <div className="text-2xl font-bold text-primary">SpendSense</div>
              </Link>
              <p className="mt-3 text-muted-foreground max-w-md">
                Platform terdepan untuk mengelola keuangan pribadi dengan teknologi AI dan keamanan bank-grade. 
                Mulai perjalanan finansial yang lebih cerdas bersama kami.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>hello@spendsense.id</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+62 21 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-muted/30 rounded-xl p-6">
              <h4 className="font-semibold text-card-foreground mb-2">Stay Updated</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Dapatkan tips finansial dan update produk terbaru
              </p>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Email kamu..."
                  className="flex-1 px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-card-foreground">Product</h4>
            <nav className="space-y-3">
              <Link href="#features" className="block text-muted-foreground hover:text-primary transition-colors">
                Features
              </Link>
              <Link href="#pricing" className="block text-muted-foreground hover:text-primary transition-colors">
                Pricing
              </Link>
              <Link href="/dashboard" className="block text-muted-foreground hover:text-primary transition-colors">
                Dashboard
              </Link>
              <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                API Documentation
              </Link>
              <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Integrations
              </Link>
            </nav>
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-card-foreground">Company</h4>
            <nav className="space-y-3">
              <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Careers
              </Link>
              <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Blog
              </Link>
              <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Press Kit
              </Link>
              <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>

            <div className="pt-4">
              <h5 className="font-medium text-card-foreground mb-3">Support</h5>
              <nav className="space-y-2">
                <Link href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Help Center
                </Link>
                <Link href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Community
                </Link>
                <Link href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Security
                </Link>
                <Link href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Status Page
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="text-center space-y-4">
            <p className="text-sm text-muted-foreground">Dipercaya oleh bank-bank terkemuka</p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              {/* Mock Bank Logos */}
              <div className="text-xs font-semibold text-muted-foreground px-3 py-1 border border-border rounded">BCA</div>
              <div className="text-xs font-semibold text-muted-foreground px-3 py-1 border border-border rounded">MANDIRI</div>
              <div className="text-xs font-semibold text-muted-foreground px-3 py-1 border border-border rounded">BNI</div>
              <div className="text-xs font-semibold text-muted-foreground px-3 py-1 border border-border rounded">BRI</div>
              <div className="text-xs font-semibold text-muted-foreground px-3 py-1 border border-border rounded">GOPAY</div>
              <div className="text-xs font-semibold text-muted-foreground px-3 py-1 border border-border rounded">OVO</div>
            </div>
          </div>
        </div>

        {/* Security & Compliance */}
        <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-muted/30 rounded-lg p-4">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
              <span className="text-primary font-bold text-sm">256</span>
            </div>
            <p className="text-sm font-medium text-card-foreground">SSL Encryption</p>
            <p className="text-xs text-muted-foreground">Bank-grade security</p>
          </div>
          <div className="bg-muted/30 rounded-lg p-4">
            <div className="w-8 h-8 bg-chart-2/10 rounded-lg flex items-center justify-center mx-auto mb-2">
              <span className="text-chart-2 font-bold text-xs">ISO</span>
            </div>
            <p className="text-sm font-medium text-card-foreground">ISO 27001 Certified</p>
            <p className="text-xs text-muted-foreground">Security standard</p>
          </div>
          <div className="bg-muted/30 rounded-lg p-4">
            <div className="w-8 h-8 bg-chart-3/10 rounded-lg flex items-center justify-center mx-auto mb-2">
              <span className="text-chart-3 font-bold text-xs">99.9%</span>
            </div>
            <p className="text-sm font-medium text-card-foreground">Uptime SLA</p>
            <p className="text-xs text-muted-foreground">Always available</p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © 2024 SpendSense. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5 mx-auto" />
      </button>
    </footer>
  )
}
