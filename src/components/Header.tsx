"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import SearchBox from "@/components/SearchBox";

const navigation = [
  { name: "Inspirations", href: "/inspirations" },
  { name: "Themes", href: "/topics" },
  { name: "Artifacts", href: "/artifacts" },
  { name: "Museums", href: "/museums" },
  { name: "Abroad", href: "/treasures-abroad" },
  { name: "Dynasties", href: "/dynasties" },
];

const languages = [
  { code: "en", name: "English" },
  { code: "ja", name: "日本語" },
  { code: "ko", name: "한국어" },
  { code: "fr", name: "Français" },
  { code: "es", name: "Español" },
];

const SealLogo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="6" fill="#b03241" />
    <text x="50%" y="53%" fill="white" fontSize="24" fontFamily="serif" textAnchor="middle" dominantBaseline="middle" fontWeight="bold">華</text>
  </svg>
);

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  return (
    <header className="bg-paper/95 backdrop-blur-sm border-b border-ink-100 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <SealLogo className="h-9 w-9 transform group-hover:scale-105 transition-transform duration-300" />
            <span className="font-display text-2xl font-bold text-ink-900 tracking-tight">
              China Heritage
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-ink-600 hover:text-imperial-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Search + Language Selector + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <SearchBox />
            </div>
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1.5 text-sm text-ink-600 hover:text-imperial-600 transition-colors px-2 py-1.5 rounded-md hover:bg-imperial-50"
              >
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline font-medium">EN</span>
              </button>
              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-xl border border-ink-100 py-1 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className="w-full text-left px-4 py-2.5 text-sm font-medium text-ink-700 hover:bg-imperial-50 hover:text-imperial-700 transition-colors"
                      onClick={() => setLangMenuOpen(false)}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              className="md:hidden p-2 text-ink-600 hover:text-imperial-600 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6 border-t border-ink-100 mt-2 pt-6">
            <div className="mb-4">
              <SearchBox />
            </div>
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 rounded-lg text-base font-medium text-ink-700 hover:bg-imperial-50 hover:text-imperial-700 transition-colors"
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
