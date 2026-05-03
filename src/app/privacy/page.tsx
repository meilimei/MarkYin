import { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  Cookie,
  BarChart3,
  Globe,
  Mail,
  AlertTriangle,
} from "lucide-react";
import { absoluteUrl, SITE_NAME } from "@/lib/site";

const LAST_UPDATED = "May 3, 2026";

export const metadata: Metadata = {
  title: `Privacy Policy — ${SITE_NAME}`,
  description:
    "How China Heritage collects, uses, and protects information about visitors. Cookies, Google AdSense, third-party advertising, analytics, and your rights.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: `Privacy Policy | ${SITE_NAME}`,
    description:
      "How we handle visitor data, cookies, advertising, and analytics.",
    url: absoluteUrl("/privacy"),
    type: "article",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-ink-50 to-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-widest text-primary-600 font-semibold mb-3">
            Legal
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-ink-900 mb-6 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-lg text-ink-600 leading-relaxed">
            Plain-English summary of what we collect, what we don&apos;t, and
            why. No dark patterns, no surprise data sales.
          </p>
          <p className="text-sm text-ink-500 mt-4">
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-ink max-w-none">
        <section className="mb-10 bg-primary-50 border border-primary-100 rounded-xl p-6">
          <h2 className="font-display text-xl font-bold text-ink-900 mb-3 flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary-600" />
            The short version
          </h2>
          <ul className="space-y-2 text-ink-700 text-sm leading-relaxed">
            <li>
              <strong>We do not sell your personal data.</strong> Ever.
            </li>
            <li>
              <strong>We use Google Analytics</strong> to understand which
              articles people read. The data is aggregated and anonymous.
            </li>
            <li>
              <strong>We use Google AdSense</strong> to show ads that pay for
              the site. Google may use cookies to personalise those ads.
            </li>
            <li>
              <strong>You can opt out</strong> of personalised advertising at{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-700 hover:text-primary-800 underline"
              >
                Google Ads Settings
              </a>{" "}
              or{" "}
              <a
                href="https://www.aboutads.info/choices/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-700 hover:text-primary-800 underline"
              >
                aboutads.info
              </a>
              .
            </li>
            <li>
              <strong>We have no login system, no newsletter signup, no
              user accounts.</strong>{" "}
              We literally have no database of you.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold text-ink-900 mb-5">
            1. What we collect
          </h2>
          <p className="text-ink-600 leading-relaxed mb-4">
            China Heritage is a static educational website. The only
            information we routinely receive about visitors is what every
            standard web server gets:
          </p>
          <ul className="space-y-2 text-ink-600 leading-relaxed list-disc pl-6">
            <li>
              IP address (used by our hosting provider for spam/abuse
              prevention and rough country-level geolocation)
            </li>
            <li>Browser type, screen size, language preference</li>
            <li>Pages visited and the page that referred you to us</li>
            <li>Approximate timestamp of your visit</li>
          </ul>
          <p className="text-ink-600 leading-relaxed mt-4">
            We do <strong>not</strong> ask for your name, email, phone number,
            address, or any other personally identifying information. We have
            no comment system, no user profiles, and no logins.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold text-ink-900 mb-5 flex items-center gap-2">
            <Cookie className="h-6 w-6 text-primary-500" />
            2. Cookies and similar technologies
          </h2>
          <p className="text-ink-600 leading-relaxed mb-4">
            We and our advertising / analytics partners use cookies, web
            beacons, and similar technologies. A cookie is a small text file
            stored by your browser. We use cookies for these purposes:
          </p>
          <ul className="space-y-3 text-ink-600 leading-relaxed">
            <li>
              <strong className="text-ink-800">
                Strictly necessary cookies
              </strong>{" "}
              — required for the site to function (e.g., remembering that you
              dismissed our cookie consent banner).
            </li>
            <li>
              <strong className="text-ink-800">Analytics cookies</strong> —
              Google Analytics 4 sets cookies to count unique visitors and
              measure popular content. Data is aggregated; we cannot identify
              individual users from it.
            </li>
            <li>
              <strong className="text-ink-800">Advertising cookies</strong> —
              Google AdSense and its partners may set cookies to deliver and
              measure ads, including the DoubleClick DART cookie. See section
              3 below.
            </li>
          </ul>
          <p className="text-ink-600 leading-relaxed mt-4">
            You can disable cookies entirely in your browser settings. Most of
            the site will still work, but advertising may be less relevant and
            we will not be able to measure usage.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold text-ink-900 mb-5 flex items-center gap-2">
            <BarChart3 className="h-6 w-6 text-primary-500" />
            3. Google AdSense and third-party advertising
          </h2>
          <p className="text-ink-600 leading-relaxed mb-4">
            We display advertisements through{" "}
            <strong>Google AdSense</strong>. Advertising revenue is what keeps
            China Heritage free to read.
          </p>
          <ul className="space-y-3 text-ink-600 leading-relaxed">
            <li>
              Google, as a third-party vendor, uses cookies (including the{" "}
              <strong>DoubleClick DART cookie</strong>) to serve ads on this
              site based on your visits to this and other websites on the
              internet.
            </li>
            <li>
              Google&apos;s use of advertising cookies enables it and its
              partners to serve ads to our users based on their visit to our
              sites and/or other sites on the internet.
            </li>
            <li>
              Users may opt out of personalised advertising by visiting{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Google Ads Settings
              </a>
              . Alternatively, users can opt out of a third-party
              vendor&apos;s use of cookies for personalised advertising by
              visiting{" "}
              <a
                href="https://www.aboutads.info/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                aboutads.info
              </a>{" "}
              (US) or{" "}
              <a
                href="https://www.youronlinechoices.eu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                youronlinechoices.eu
              </a>{" "}
              (EU).
            </li>
            <li>
              Third-party vendors and ad networks (besides Google) may also
              place ads on the site in the future. These vendors will be
              required to follow comparable privacy practices and to allow
              users to opt out.
            </li>
          </ul>
          <p className="text-ink-600 leading-relaxed mt-4">
            We do not control which specific ads are shown. If you encounter
            an ad that violates our standards (deceptive, malicious, or
            inappropriate), please report it via the &ldquo;Report Ad&rdquo;
            link inside the ad unit, or email us — see Section 8.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold text-ink-900 mb-5">
            4. Analytics
          </h2>
          <p className="text-ink-600 leading-relaxed mb-4">
            We use <strong>Google Analytics 4</strong> with default settings.
            We do not enable Google&apos;s &ldquo;User-ID&rdquo; feature, do
            not link analytics to advertising IDs, and do not export raw
            user-level data anywhere. We use this data only to understand
            which articles are useful and where the site is broken.
          </p>
          <p className="text-ink-600 leading-relaxed">
            You can opt out of all Google Analytics tracking by installing
            the{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 underline"
            >
              official Google Analytics opt-out browser add-on
            </a>
            .
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold text-ink-900 mb-5 flex items-center gap-2">
            <Globe className="h-6 w-6 text-primary-500" />
            5. International users — GDPR and CCPA
          </h2>
          <p className="text-ink-600 leading-relaxed mb-4">
            <strong>European Economic Area (GDPR).</strong> Our legal basis
            for processing your data is legitimate interest (running a free,
            ad-supported website). You have the right to access, correct, or
            delete data we hold about you — although in practice, since we
            don&apos;t store personal data ourselves, the relevant requests
            usually need to go to Google directly. Contact us if you need
            help.
          </p>
          <p className="text-ink-600 leading-relaxed mb-4">
            <strong>California (CCPA).</strong> California residents have the
            right to know what personal information we have collected, to
            delete it, and to opt out of any &ldquo;sale&rdquo; of personal
            information. We do not sell personal information. Cookie-based
            data shared with advertising partners may qualify as
            &ldquo;sharing&rdquo; under California law; you can disable
            cookies in your browser or use the opt-out links in Section 3.
          </p>
          <p className="text-ink-600 leading-relaxed">
            <strong>Other jurisdictions.</strong> If your local privacy law
            grants stronger rights, those rights apply. Contact us with
            specific requests.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold text-ink-900 mb-5">
            6. Children&apos;s privacy
          </h2>
          <p className="text-ink-600 leading-relaxed">
            China Heritage is suitable for general audiences but is not
            specifically directed at children under 13. We do not knowingly
            collect personal information from children under 13. If you
            believe we have inadvertently collected such information, please
            contact us and we will delete it.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold text-ink-900 mb-5 flex items-center gap-2">
            <AlertTriangle className="h-6 w-6 text-primary-500" />
            7. Changes to this policy
          </h2>
          <p className="text-ink-600 leading-relaxed">
            We may update this Privacy Policy from time to time. Material
            changes will be reflected in the &ldquo;last updated&rdquo; date
            at the top of this page. We encourage you to review the policy
            periodically.
          </p>
        </section>

        <section className="mb-10 bg-ink-50 border border-ink-100 rounded-xl p-6">
          <h2 className="font-display text-xl font-bold text-ink-900 mb-3 flex items-center gap-2">
            <Mail className="h-5 w-5 text-primary-500" />
            8. Contact
          </h2>
          <p className="text-ink-600 leading-relaxed mb-2 text-sm">
            Questions about this policy or about data we may hold about you:
          </p>
          <p className="text-primary-700 font-medium text-sm">
            contact@chinaheritageguide.com
          </p>
          <p className="text-ink-500 text-sm mt-3">
            See also our{" "}
            <Link
              href="/methodology"
              className="text-primary-600 hover:text-primary-700 underline"
            >
              Methodology
            </Link>{" "}
            (how we research) and{" "}
            <Link
              href="/terms"
              className="text-primary-600 hover:text-primary-700 underline"
            >
              Terms of Use
            </Link>
            .
          </p>
        </section>
      </article>
    </>
  );
}
