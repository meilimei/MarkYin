import Link from "next/link";
import { Github, Twitter, Mail } from "lucide-react";
import { SITE_NAME } from "@/lib/site";

const SealLogo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="6" fill="#b03241" />
    <text x="50%" y="53%" fill="white" fontSize="24" fontFamily="serif" textAnchor="middle" dominantBaseline="middle" fontWeight="bold">華</text>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-white mt-auto border-t border-ink-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <SealLogo className="h-8 w-8 transform group-hover:scale-105 transition-transform duration-300" />
              <span className="font-display text-2xl font-bold tracking-tight text-white">
                China Heritage
              </span>
            </Link>
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
