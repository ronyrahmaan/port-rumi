'use client';

import Link from 'next/link';
import { useState } from 'react';

const navigation = [
  { name: 'Research Projects', href: '/research-projects' },
  { name: 'Book Chapters', href: '/books' },
  { name: 'Publications', href: '/publications' },
  { name: 'Op-Eds', href: '/articles' },
  { name: 'Media', href: '/media' },
  { name: 'CV', href: '/cv' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-stone-200 shadow-sm">
      <nav className="mx-auto max-w-6xl px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-20 items-center justify-between">
          {/* Logo/Name */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-cinzel font-bold text-slate-800 tracking-tight hover:text-slate-600 transition-colors duration-300"
            >
              Maruf Hasan Rumi
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-space-grotesk font-medium text-slate-600 hover:text-slate-900 transition-colors duration-300 group"
                >
                  {item.name}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-slate-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="min-w-[44px] min-h-[44px] p-2 flex items-center justify-center text-slate-600 hover:text-slate-900 focus:outline-none transition-colors duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {!mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-stone-200 bg-white">
            <div className="py-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-base font-space-grotesk font-medium text-slate-600 hover:text-slate-900 hover:bg-stone-50 transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}