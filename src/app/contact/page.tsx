import { Metadata } from "next";
import Link from "next/link";
import {
  Mail,
  MessageSquare,
  AlertTriangle,
  ImageIcon,
  Lightbulb,
  ScrollText,
} from "lucide-react";
import { absoluteUrl, SITE_NAME } from "@/lib/site";

const CONTACT_EMAIL = "contact@chinaheritageguide.com";

export const metadata: Metadata = {
  title: `Contact — ${SITE_NAME}`,
  description:
    "Get in touch with China Heritage. Corrections, image licensing, museum partnerships, suggestions for new artifacts to feature.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact | ${SITE_NAME}`,
    description:
      "Send corrections, suggestions, licensing inquiries, and partnership ideas.",
    url: absoluteUrl("/contact"),
    type: "website",
  },
};

const REASONS = [
  {
    icon: AlertTriangle,
    title: "Corrections & errors",
    body:
      "Spotted a wrong date, mis-attribution, dodgy translation, or a broken citation? Send the URL, the specific error, and (ideally) a citation that supports the correct version. We update fast and credit substantive corrections.",
  },
  {
    icon: ImageIcon,
    title: "Image rights & licensing",
    body:
      "Are you a museum, photographer, or rights holder who believes an image is mis-credited? Tell us the URL, the image, and the rights you hold. We respond within 48 hours and remove or re-license as appropriate.",
  },
  {
    icon: Lightbulb,
    title: "Suggestions & new artifacts",
    body:
      "Know a Chinese artifact, museum, game, drama, or film we should cover? Tell us the work and why it matters. We especially welcome reader-driven Inspirations pages.",
  },
  {
    icon: MessageSquare,
    title: "Partnerships & licensing",
    body:
      "Educators wanting classroom permission, museums wanting an editorial collaboration, publishers wanting commercial reprint rights — we say yes more often than not.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-ink-50 to-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-widest text-primary-600 font-semibold mb-3">
            Get in Touch
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-ink-900 mb-6 leading-tight">
            Contact China Heritage
          </h1>
          <p className="text-lg text-ink-600 leading-relaxed">
            One human runs this site. We read every email and reply to almost
            everything within a few days. No autoreply, no support ticket
            queue.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-primary-50 border border-primary-100 rounded-xl p-8 mb-12 text-center">
          <Mail className="h-8 w-8 text-primary-600 mx-auto mb-4" />
          <p className="text-sm text-ink-500 uppercase tracking-widest font-semibold mb-2">
            Email
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-display text-2xl md:text-3xl font-bold text-primary-700 hover:text-primary-800 transition-colors break-all"
          >
            {CONTACT_EMAIL}
          </a>
          <p className="text-sm text-ink-500 mt-4">
            We typically reply within 2–3 business days.
          </p>
        </div>

        <div className="space-y-6 mb-12">
          <h2 className="font-display text-2xl font-bold text-ink-900 mb-2">
            What you might write to us about
          </h2>
          {REASONS.map((reason) => (
            <div
              key={reason.title}
              className="bg-white border border-ink-100 rounded-xl p-6"
            >
              <h3 className="font-display text-lg font-bold text-ink-900 mb-2 flex items-center gap-2">
                <reason.icon className="h-5 w-5 text-primary-500" />
                {reason.title}
              </h3>
              <p className="text-ink-600 leading-relaxed text-sm">
                {reason.body}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-ink-50 border border-ink-100 rounded-xl p-6 mb-12">
          <h2 className="font-display text-xl font-bold text-ink-900 mb-3 flex items-center gap-2">
            <ScrollText className="h-5 w-5 text-primary-500" />
            How to write us a useful email
          </h2>
          <p className="text-ink-600 leading-relaxed text-sm mb-3">
            One concrete request per email is best. If you can include:
          </p>
          <ul className="space-y-1.5 text-ink-600 text-sm leading-relaxed list-disc pl-6">
            <li>The full URL of the page you&apos;re writing about.</li>
            <li>What you&apos;d like changed, added, or licensed.</li>
            <li>
              For corrections: a citation (museum catalogue, journal article,
              authoritative reference) that supports the correct version.
            </li>
            <li>
              For licensing: where and how you want to use the material, and
              whether the use is commercial.
            </li>
          </ul>
          <p className="text-ink-600 text-sm mt-3">
            Bullet-point emails get fast responses. Vague emails sometimes
            get slow responses. We&apos;re only human.
          </p>
        </div>

        <div className="text-center text-sm text-ink-500">
          <p>
            Before writing about a factual claim, you may want to read our{" "}
            <Link
              href="/methodology"
              className="text-primary-600 hover:text-primary-700 underline"
            >
              Methodology
            </Link>
            . For privacy / data questions, see our{" "}
            <Link
              href="/privacy"
              className="text-primary-600 hover:text-primary-700 underline"
            >
              Privacy Policy
            </Link>
            . For reuse rights, see our{" "}
            <Link
              href="/terms"
              className="text-primary-600 hover:text-primary-700 underline"
            >
              Terms of Use
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
