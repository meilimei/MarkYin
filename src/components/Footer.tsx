import Link from "next/link";
import { Landmark } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Landmark className="h-6 w-6 text-primary-400" />
              <span className="font-display text-lg font-bold text-white">
                Ancient<span className="text-primary-400">Echoes</span>
              </span>
            </div>
            <p className="text-sm text-ink-400 leading-relaxed">
              Discover the stories behind China&apos;s greatest cultural
              treasures. From Bronze Age mysteries to imperial masterpieces.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {[
                { name: "All Artifacts", href: "/artifacts" },
                { name: "Museums", href: "/museums" },
                { name: "Dynasties", href: "/dynasties" },
                { name: "Categories", href: "/artifacts" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Popular
            </h3>
            <ul className="space-y-2.5">
              {[
                {
                  name: "Terracotta Warriors",
                  href: "/artifacts/terracotta-warriors",
                },
                {
                  name: "Sanxingdui Bronze Mask",
                  href: "/artifacts/gold-mask-sanxingdui",
                },
                { name: "Sword of Goujian", href: "/artifacts/sword-of-goujian" },
                { name: "Forbidden City", href: "/museums/the-palace-museum" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              About
            </h3>
            <ul className="space-y-2.5">
              {[
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/about" },
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Use", href: "/terms" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-ink-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-500">
            &copy; {new Date().getFullYear()} AncientEchoes. All rights
            reserved. Content for educational purposes.
          </p>
          <p className="text-xs text-ink-500">
            Exploring 5,000 years of Chinese heritage
          </p>
        </div>
      </div>
    </footer>
  );
}
