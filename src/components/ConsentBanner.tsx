"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "ch_cookie_consent_v1";

type ConsentState = "accepted" | "rejected" | "unset";

function readConsent(): ConsentState {
  if (typeof window === "undefined") return "unset";
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    if (v === "accepted" || v === "rejected") return v;
  } catch {
    // localStorage may be disabled (private mode, strict cookie settings).
  }
  return "unset";
}

function writeConsent(value: Exclude<ConsentState, "unset">) {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    /* no-op */
  }
  // Notify any listeners (e.g., AdSense / Analytics loaders) that consent
  // changed without forcing a full page reload.
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("ch:consent-change", { detail: value }),
    );
  }
}

export default function ConsentBanner() {
  const [state, setState] = useState<ConsentState>("unset");
  const [mounted, setMounted] = useState(false);

  // Defer reading localStorage to the client so SSR + hydration agree.
  useEffect(() => {
    setMounted(true);
    setState(readConsent());
  }, []);

  if (!mounted || state !== "unset") return null;

  const handleAccept = () => {
    writeConsent("accepted");
    setState("accepted");
  };

  const handleReject = () => {
    writeConsent("rejected");
    setState("rejected");
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 px-3 pb-3 sm:px-4 sm:pb-4"
    >
      <div className="mx-auto max-w-3xl bg-ink-900 text-white rounded-2xl shadow-2xl border border-ink-800 p-4 sm:p-5">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="hidden sm:flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-500/10">
            <Cookie className="h-5 w-5 text-primary-400" />
          </div>

          <div className="flex-1 min-w-0">
            <p className="font-semibold text-sm sm:text-base mb-1 flex items-center gap-2">
              <Cookie className="h-4 w-4 text-primary-400 sm:hidden" />
              We use cookies
            </p>
            <p className="text-xs sm:text-sm text-ink-300 leading-relaxed">
              We use cookies for analytics and to show ads through Google
              AdSense. Accepting helps support free, ad-supported access.
              You can change your mind anytime — see our{" "}
              <Link
                href="/privacy"
                className="text-primary-300 hover:text-primary-200 underline"
              >
                Privacy Policy
              </Link>
              .
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={handleAccept}
                className="inline-flex items-center justify-center rounded-lg bg-primary-500 hover:bg-primary-400 transition-colors px-4 py-2 text-sm font-semibold text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-300"
              >
                Accept all
              </button>
              <button
                type="button"
                onClick={handleReject}
                className="inline-flex items-center justify-center rounded-lg bg-transparent border border-ink-700 hover:border-ink-500 hover:text-white transition-colors px-4 py-2 text-sm font-medium text-ink-300 focus:outline-none focus:ring-2 focus:ring-ink-500"
              >
                Reject non-essential
              </button>
              <Link
                href="/privacy"
                className="inline-flex items-center justify-center rounded-lg px-2 py-2 text-sm font-medium text-ink-400 hover:text-white transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>

          <button
            type="button"
            onClick={handleReject}
            aria-label="Dismiss cookie banner (rejects non-essential cookies)"
            className="flex-shrink-0 -m-1 p-1 rounded-md text-ink-500 hover:text-white hover:bg-ink-800 transition-colors focus:outline-none focus:ring-2 focus:ring-ink-500"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
