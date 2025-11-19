"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2">
                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-chart-2 text-transparent bg-clip-text tracking-tight group-hover:text-primary transition-colors">
                  WallyAI
                </div>
              </Link>
              <p className="mt-3 text-muted-foreground max-w-md">
                Platform Keuangan Indonesia untuk mengelola keuangan pribadi
                dengan teknologi AI. Mulai perjalanan finansial yang lebih
                cerdas bersama kami.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>djibyuda@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+62 812 3456 7890</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Bekasi, Indonesia</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-muted/30 rounded-xl p-6">
              <h4 className="font-semibold text-card-foreground mb-2">
                Stay Updated
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Dapatkan tips finansial dan update produk terbaru
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Email kamu..."
                  className="flex-1 px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <Button
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-card-foreground">Product</h4>
            <nav className="space-y-3">
              <Link
                href="#features"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Features
              </Link>
              <Link
                href="#pricing"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/dashboard"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Dashboard
              </Link>
              <Link
                href="#"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                API Documentation
              </Link>
              <Link
                href="#"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Integrations
              </Link>
            </nav>
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-card-foreground">Company</h4>
            <nav className="space-y-3">
              <Link
                href="#"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                About Us
              </Link>
              <Link
                href="#"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Careers
              </Link>
              <Link
                href="#"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Blog
              </Link>
              <Link
                href="#"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Press Kit
              </Link>
              <Link
                href="#"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © 2025 SpendSense. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Cookie Policy
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
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
  );
}
