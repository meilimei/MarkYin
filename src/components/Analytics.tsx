"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

// Keep these in sync with ConsentBanner.tsx.
const STORAGE_KEY = "ch_cookie_consent_v1";
const CONSENT_EVENT = "ch:consent-change";

const MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

/**
 * Google Analytics 4 loader.
 *
 * Only injects gtag.js after the visitor has accepted cookies via the
 * <ConsentBanner>. We:
 *
 *   1. Read localStorage on mount to recover consent across reloads.
 *   2. Listen for the `ch:consent-change` custom event to react in real
 *      time when the visitor clicks Accept / Reject.
 *
 * If `NEXT_PUBLIC_GA_MEASUREMENT_ID` is not set the component renders
 * nothing — keeps prod builds clean for self-hosted forks.
 */
export default function Analytics() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    if (!MEASUREMENT_ID) return;

    const readInitial = () => {
      try {
        return window.localStorage.getItem(STORAGE_KEY) === "accepted";
      } catch {
        return false;
      }
    };

    setConsented(readInitial());

    const handler = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      setConsented(detail === "accepted");
    };

    window.addEventListener(CONSENT_EVENT, handler);
    return () => window.removeEventListener(CONSENT_EVENT, handler);
  }, []);

  if (!MEASUREMENT_ID || !consented) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${MEASUREMENT_ID}', {
            anonymize_ip: true,
            send_page_view: true,
          });
        `}
      </Script>
    </>
  );
}
