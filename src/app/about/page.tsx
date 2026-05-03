import { Metadata } from "next";
import { Landmark, Globe, BookOpen, Heart } from "lucide-react";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About AncientEchoes",
  description:
    "AncientEchoes is dedicated to making China's extraordinary cultural heritage accessible to the world through engaging storytelling and modern technology.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About AncientEchoes",
    description:
      "AncientEchoes is dedicated to making China's extraordinary cultural heritage accessible to the world through engaging storytelling and modern technology.",
    url: absoluteUrl("/about"),
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-ink-50 to-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Landmark className="h-12 w-12 text-primary-500 mx-auto mb-6" />
          <h1 className="font-display text-4xl md:text-5xl font-bold text-ink-900 mb-6">
            About AncientEchoes
          </h1>
          <p className="text-lg text-ink-500 leading-relaxed">
            We believe that every artifact has a story worth telling, and every
            story deserves to be heard — in every language, by every person, no
            matter where they are.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink-900 mb-4">
              Our Mission
            </h2>
            <p className="text-ink-600 leading-relaxed">
              China&apos;s cultural heritage spans 5,000 years and encompasses
              some of the most extraordinary artifacts ever created by human
              hands. Yet much of this heritage remains inaccessible to the
              global audience — locked behind language barriers, scattered across
              hundreds of museums, and buried in academic publications.
            </p>
            <p className="text-ink-600 leading-relaxed mt-4">
              AncientEchoes exists to change that. We bring these treasures to
              life through engaging storytelling, rich historical context, and
              modern technology — making 5,000 years of civilization just one
              click away.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: Globe,
                title: "Global Access",
                desc: "Available in multiple languages, breaking down barriers to cultural understanding.",
              },
              {
                icon: BookOpen,
                title: "Deep Stories",
                desc: "Every artifact page tells the complete story — history, significance, and fun facts.",
              },
              {
                icon: Heart,
                title: "Free & Open",
                desc: "Cultural knowledge should be free. Our content is always accessible to everyone.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-ink-100 rounded-xl p-6 text-center"
              >
                <item.icon className="h-8 w-8 text-primary-500 mx-auto mb-3" />
                <h3 className="font-display text-lg font-bold text-ink-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-ink-900 mb-4">
              Content & Accuracy
            </h2>
            <p className="text-ink-600 leading-relaxed">
              Our content is researched from authoritative museum sources,
              academic publications, and verified historical records. We strive
              for accuracy in every detail — from dates and dimensions to
              cultural context and significance. If you spot an error, please
              contact us so we can correct it promptly.
            </p>
          </div>

          <div className="bg-primary-50 border border-primary-100 rounded-xl p-8 text-center">
            <h2 className="font-display text-2xl font-bold text-ink-900 mb-3">
              Contact Us
            </h2>
            <p className="text-ink-600 mb-4">
              Have feedback, corrections, or collaboration ideas? We&apos;d love
              to hear from you.
            </p>
            <p className="text-primary-700 font-medium">
              contact@ancientechoes.com
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
