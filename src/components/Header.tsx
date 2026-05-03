"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Landmark, Globe } from "lucide-react";

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

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-ink-100 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Landmark className="h-7 w-7 text-primary-600 group-hover:text-primary-700 transition-colors" />
            <span className="font-display text-xl font-bold text-ink-900 tracking-tight">
              Ancient<span className="text-primary-600">Echoes</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-ink-600 hover:text-primary-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Language Selector & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1.5 text-sm text-ink-500 hover:text-primary-600 transition-colors px-2 py-1 rounded-md hover:bg-primary-50"
              >
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline">EN</span>
              </button>
              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-ink-100 py-1 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className="w-full text-left px-4 py-2 text-sm text-ink-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
                      onClick={() => setLangMenuOpen(false)}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              className="md:hidden p-2 text-ink-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-ink-100 mt-2 pt-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2.5 text-sm font-medium text-ink-700 hover:text-primary-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
