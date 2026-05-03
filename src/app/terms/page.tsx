import { Metadata } from "next";
import Link from "next/link";
import {
  ScrollText,
  Image as ImageIcon,
  AlertTriangle,
  Mail,
  Scale,
} from "lucide-react";
import { absoluteUrl, SITE_NAME } from "@/lib/site";

const LAST_UPDATED = "May 3, 2026";

export const metadata: Metadata = {
  title: `Terms of Use — ${SITE_NAME}`,
  description:
    "Plain-English terms for using China Heritage. Educational fair use, image licenses, accuracy disclaimer, and limitations of liability.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: `Terms of Use | ${SITE_NAME}`,
    description: "Educational fair use and licensing terms for China Heritage.",
    url: absoluteUrl("/terms"),
    type: "article",
  },
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-ink-50 to-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-widest text-primary-600 font-semibold mb-3">
            Legal
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-ink-900 mb-6 leading-tight">
            Terms of Use
          </h1>
          <p className="text-lg text-ink-600 leading-relaxed">
            The ground rules for using this site. Plain English. No 30-page
            click-through.
          </p>
          <p className="text-sm text-ink-500 mt-4">
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-ink max-w-none">
        <section className="mb-10 bg-primary-50 border border-primary-100 rounded-xl p-6">
          <h2 className="font-display text-xl font-bold text-ink-900 mb-3 flex items-center gap-2">
            <ScrollText className="h-5 w-5 text-primary-600" />
            The short version
          </h2>
          <ul className="space-y-2 text-ink-700 text-sm leading-relaxed">
            <li>
              <strong>Read freely.</strong> No paywalls, no logins.
            </li>
            <li>
              <strong>Cite us</strong> if you quote substantial text — link
              back is enough.
            </li>
            <li>
              <strong>Reuse images carefully</strong> — most are public domain
              or CC0, but check the credit on each detail page.
            </li>
            <li>
              <strong>We&apos;re not a museum</strong> — for definitive
              authentication or appraisals, see the actual museum.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold text-ink-900 mb-5">
            1. Who we are
          </h2>
          <p className="text-ink-600 leading-relaxed">
            China Heritage (the &ldquo;Site&rdquo;) is an independent
            educational website published at{" "}
            <strong>chinaheritageguide.com</strong>. By using the Site you
            agree to these Terms. If you don&apos;t agree, please don&apos;t
            use the Site.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold text-ink-900 mb-5">
            2. Permitted use
          </h2>
          <p className="text-ink-600 leading-relaxed mb-4">
            You are welcome to:
          </p>
          <ul className="space-y-2 text-ink-600 leading-relaxed list-disc pl-6">
            <li>
              Read, share, and link to any page on the Site, including in
              social media posts, articles, blogs, school assignments, and
              non-commercial newsletters.
            </li>
            <li>
              Quote our written articles for commentary, education, criticism,
              or news reporting under fair use / fair dealing principles, with
              attribution and a link back.
            </li>
            <li>
              Use the Site as a research starting point, then verify with the
              primary museum sources we link to in each article.
            </li>
          </ul>
          <p className="text-ink-600 leading-relaxed mt-4 mb-4">
            You agree <strong>not</strong> to:
          </p>
          <ul className="space-y-2 text-ink-600 leading-relaxed list-disc pl-6">
            <li>
              Scrape the Site for bulk republication or to train commercial
              language models without contacting us first.
            </li>
            <li>
              Use the Site or its content to generate misleading,
              impersonating, or fraudulent material (e.g., fake provenance,
              fake authentication).
            </li>
            <li>
              Attempt to disrupt the Site, probe vulnerabilities, or
              circumvent any technical measures.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold text-ink-900 mb-5 flex items-center gap-2">
            <ImageIcon className="h-6 w-6 text-primary-500" />
            3. Image and content licenses
          </h2>
          <p className="text-ink-600 leading-relaxed mb-4">
            Our written articles (the editorial summaries, significance
            sections, and journey narratives) are{" "}
            <strong>copyright China Heritage</strong> and licensed for
            non-commercial reuse with attribution and a link back to the
            original article. Contact us for commercial licensing.
          </p>
          <p className="text-ink-600 leading-relaxed mb-4">
            Object photographs come from the originating museums or from
            Wikimedia Commons. Each detail page lists the source and license:
          </p>
          <ul className="space-y-2 text-ink-600 leading-relaxed list-disc pl-6">
            <li>
              <strong>The Met Open Access</strong> — released under{" "}
              <em>Creative Commons Zero (CC0)</em>. Free to reuse for any
              purpose.
            </li>
            <li>
              <strong>Cleveland Museum of Art Open Access</strong> — released
              under <em>CC0</em>. Free to reuse.
            </li>
            <li>
              <strong>British Museum / Wikimedia Commons</strong> — most
              images are <em>public domain</em>; some are{" "}
              <em>CC BY-SA 4.0</em> (free to reuse with attribution and
              share-alike).
            </li>
            <li>
              Image credit and license are listed on each detail page. If you
              reuse, please honour those terms.
            </li>
          </ul>
          <p className="text-ink-600 leading-relaxed mt-4">
            We make a good-faith effort to attribute images correctly. If you
            are a rights holder and believe an image on the Site is misused,
            email us via{" "}
            <Link
              href="/contact"
              className="text-primary-600 hover:text-primary-700 underline"
            >
              the contact page
            </Link>{" "}
            and we will review immediately.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold text-ink-900 mb-5 flex items-center gap-2">
            <AlertTriangle className="h-6 w-6 text-primary-500" />
            4. Accuracy &amp; &ldquo;as-is&rdquo; disclaimer
          </h2>
          <p className="text-ink-600 leading-relaxed mb-4">
            We work hard to be accurate. We cite museum primary sources,
            Wikidata, peer-reviewed publications, and exhibition catalogues —
            see our{" "}
            <Link
              href="/methodology"
              className="text-primary-600 hover:text-primary-700 underline"
            >
              Methodology
            </Link>{" "}
            page for the full editorial standard. Even so:
          </p>
          <ul className="space-y-2 text-ink-600 leading-relaxed list-disc pl-6">
            <li>
              The Site is provided <strong>&ldquo;as is&rdquo;</strong>{" "}
              without warranties of any kind, express or implied.
            </li>
            <li>
              Scholarly opinion changes. Datings, attributions, and
              provenance accounts are subject to revision as new evidence
              emerges.
            </li>
            <li>
              Do not rely on the Site for legal authentication, monetary
              appraisal, or formal academic citation. For those purposes,
              consult the holding museum directly.
            </li>
          </ul>
          <p className="text-ink-600 leading-relaxed mt-4">
            If you spot an error, please tell us — see{" "}
            <Link
              href="/contact"
              className="text-primary-600 hover:text-primary-700 underline"
            >
              Contact
            </Link>
            . We correct fast and credit substantive corrections.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold text-ink-900 mb-5">
            5. Third-party links and content
          </h2>
          <p className="text-ink-600 leading-relaxed">
            The Site links extensively to museum websites, Wikipedia,
            Wikidata, and other third-party resources. We do not control
            those sites and are not responsible for their content,
            availability, or privacy practices. Third-party trademarks
            (museum names, game titles, film titles) belong to their
            respective owners and are used here for descriptive,
            educational purposes.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold text-ink-900 mb-5 flex items-center gap-2">
            <Scale className="h-6 w-6 text-primary-500" />
            6. Limitation of liability
          </h2>
          <p className="text-ink-600 leading-relaxed">
            To the maximum extent permitted by law, China Heritage and its
            operators are not liable for any indirect, incidental,
            consequential, or special damages arising out of your use of the
            Site, including reliance on any information published here.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold text-ink-900 mb-5">
            7. Changes to these terms
          </h2>
          <p className="text-ink-600 leading-relaxed">
            We may update these Terms from time to time. Material changes
            will be reflected in the &ldquo;last updated&rdquo; date at the
            top of this page. Continued use of the Site after a change
            constitutes acceptance of the revised Terms.
          </p>
        </section>

        <section className="mb-10 bg-ink-50 border border-ink-100 rounded-xl p-6">
          <h2 className="font-display text-xl font-bold text-ink-900 mb-3 flex items-center gap-2">
            <Mail className="h-5 w-5 text-primary-500" />
            8. Contact
          </h2>
          <p className="text-ink-600 leading-relaxed mb-2 text-sm">
            Questions about these Terms, image licensing, takedown requests,
            or commercial use:
          </p>
          <p className="text-primary-700 font-medium text-sm">
            contact@chinaheritageguide.com
          </p>
          <p className="text-ink-500 text-sm mt-3">
            See also our{" "}
            <Link
              href="/privacy"
              className="text-primary-600 hover:text-primary-700 underline"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/methodology"
              className="text-primary-600 hover:text-primary-700 underline"
            >
              Methodology
            </Link>
            .
          </p>
        </section>
      </article>
    </>
  );
}
