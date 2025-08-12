'use client'

import { SignInButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs'
import React, { useState } from 'react'
import Link from 'next/link'
import { LayoutDashboard, Menu, X } from 'lucide-react'
import { Button } from './ui/button'

export default function Navbar() {
  const { isSignedIn } = useUser()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="bg-background shadow-lg border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-2">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="text-2xl font-bold text-primary">
                SpendSense
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link 
                href="/" 
                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-base font-semibold transition-colors"
              >
                Home
              </Link>
              <Link 
                href="/expenses" 
                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-base font-semibold transition-colors"
              >
                About
              </Link>
              <Link 
                href="/analytics" 
                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-base font-semibold transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isSignedIn ? (
            <div className="flex items-center space-x-6">
              <Link href="/dashboard">
                <Button className="hover:text-primary px-3 py-2 rounded-md text-md font-semibold transition-colors">
                  <LayoutDashboard className="w-4 h-4" />
                  Dashboard
                </Button>
              </Link>
              <UserButton afterSignOutUrl="/" appearance={{
                elements: {
                  avatarBox: "!bg-primary !rounded-full !size-8",
                },
              }} />
            </div>
            ) : (
              <div className="flex items-center space-x-3">
                <SignInButton>
                  <Button className="text-foreground hover:text-primary px-3 py-2 bg-transparent hover:bg-transparent rounded-md text-md font-semibold transition-colors">
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md text-md font-semibold transition-colors">
                    Sign Up
                  </Button>
                </SignUpButton>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <Menu className="h-6 w-6" />
              ) : (
                <X className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
            <Link 
              href="/" 
              onClick={closeMobileMenu}
              className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/expenses" 
              onClick={closeMobileMenu}
              className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              About
            </Link>
            <Link 
              href="/analytics" 
              onClick={closeMobileMenu}
              className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Contact
            </Link>
            
            {/* Mobile Auth */}
            <div className="pt-4 pb-3 border-t border-border">
              {isSignedIn ? (
                <div className="flex items-center px-3">
                  <UserButton afterSignOutUrl="/" />
                  <span className="ml-3 text-foreground text-base font-medium">Account</span>
                </div>
              ) : (
                <div className="space-y-3 px-3">
                  <SignInButton mode="modal">
                    <Button className="w-full text-left text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors">
                      Sign In
                    </Button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-3 py-2 rounded-md text-base font-medium transition-colors">
                      Sign Up
                    </Button>
                  </SignUpButton>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      </nav>
  )
}
