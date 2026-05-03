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
              The real Chinese artifacts behind the games, films, and stories
              you love — traced back to the museums where you can see them
              today.
            </p>
          </div>

          {/* Discover */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Discover
            </h3>
            <ul className="space-y-2.5">
              {[
                { name: "Inspirations", href: "/inspirations" },
                { name: "Themes", href: "/topics" },
                { name: "All Artifacts", href: "/artifacts" },
                { name: "Museums", href: "/museums" },
                { name: "Treasures Abroad", href: "/treasures-abroad" },
                { name: "Dynasties", href: "/dynasties" },
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
                  name: "Black Myth: Wukong",
                  href: "/inspirations/black-myth-wukong",
                },
                {
                  name: "Genshin Impact: Liyue",
                  href: "/inspirations/genshin-impact-liyue",
                },
                {
                  name: "Sanxingdui Mysteries",
                  href: "/topics/sanxingdui-mysteries",
                },
                {
                  name: "Terracotta Warriors",
                  href: "/artifacts/terracotta-warriors",
                },
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
                { name: "Our Approach", href: "/about" },
                { name: "Methodology", href: "/methodology" },
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
            &copy; {new Date().getFullYear()} AncientEchoes. Educational
            content. All third-party trademarks belong to their owners.
          </p>
          <p className="text-xs text-ink-500">
            Where modern myths meet ancient stones
          </p>
        </div>
      </div>
    </footer>
  );
}
