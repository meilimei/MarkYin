"use client";

import Script from "next/script";
import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "ch_cookie_consent_v1";
const CONSENT_EVENT = "ch:consent-change";

const ADSENSE_PUB_ID = process.env.NEXT_PUBLIC_ADSENSE_PUB_ID;

const AD_SLOT_IDS: Record<string, string | undefined> = {
  "home-top": process.env.NEXT_PUBLIC_ADSENSE_SLOT_HOME_TOP,
  "home-mid": process.env.NEXT_PUBLIC_ADSENSE_SLOT_HOME_MID,
  "home-bottom": process.env.NEXT_PUBLIC_ADSENSE_SLOT_HOME_BOTTOM,
  "artifacts-top": process.env.NEXT_PUBLIC_ADSENSE_SLOT_ARTIFACTS_TOP,
  "artifacts-grid": process.env.NEXT_PUBLIC_ADSENSE_SLOT_ARTIFACTS_GRID,
  "artifact-detail-top": process.env.NEXT_PUBLIC_ADSENSE_SLOT_ARTIFACT_DETAIL_TOP,
  "artifact-detail-bottom":
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_ARTIFACT_DETAIL_BOTTOM,
  "artifact-sidebar": process.env.NEXT_PUBLIC_ADSENSE_SLOT_ARTIFACT_SIDEBAR,
  "topics-middle": process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOPICS_MIDDLE,
  "topic-middle": process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOPIC_MIDDLE,
  "topic-sidebar": process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOPIC_SIDEBAR,
  "museums-top": process.env.NEXT_PUBLIC_ADSENSE_SLOT_MUSEUMS_TOP,
  "museum-detail": process.env.NEXT_PUBLIC_ADSENSE_SLOT_MUSEUM_DETAIL,
  "dynasties-top": process.env.NEXT_PUBLIC_ADSENSE_SLOT_DYNASTIES_TOP,
  "abroad-top": process.env.NEXT_PUBLIC_ADSENSE_SLOT_ABROAD_TOP,
  "abroad-detail-mid": process.env.NEXT_PUBLIC_ADSENSE_SLOT_ABROAD_DETAIL_MID,
  "inspirations-middle": process.env.NEXT_PUBLIC_ADSENSE_SLOT_INSPIRATIONS_MIDDLE,
  "inspiration-middle": process.env.NEXT_PUBLIC_ADSENSE_SLOT_INSPIRATION_MIDDLE,
  "inspiration-sidebar": process.env.NEXT_PUBLIC_ADSENSE_SLOT_INSPIRATION_SIDEBAR,
  "collection-guide-top": process.env.NEXT_PUBLIC_ADSENSE_SLOT_COLLECTION_GUIDE_TOP,
  "collection-guide-sidebar":
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_COLLECTION_GUIDE_SIDEBAR,
  "compare-top": process.env.NEXT_PUBLIC_ADSENSE_SLOT_COMPARE_TOP,
  "compare-mid": process.env.NEXT_PUBLIC_ADSENSE_SLOT_COMPARE_MID,
  "compare-sidebar": process.env.NEXT_PUBLIC_ADSENSE_SLOT_COMPARE_SIDEBAR,
};

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

interface AdBannerProps {
  slot?: string;
  format?: "horizontal" | "vertical" | "rectangle";
  className?: string;
}

function resolveSlotId(slot: string): string | undefined {
  if (/^\d+$/.test(slot)) return slot;
  if (slot.startsWith("artifacts-grid-")) return AD_SLOT_IDS["artifacts-grid"];
  return AD_SLOT_IDS[slot];
}

function readConsent() {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "accepted";
  } catch {
    return false;
  }
}

export default function AdBanner({
  slot = "placeholder",
  format = "horizontal",
  className = "",
}: AdBannerProps) {
  const [consented, setConsented] = useState(false);
  const sizeClasses = {
    horizontal: "h-[90px] w-full",
    vertical: "h-[600px] w-[160px]",
    rectangle: "h-[250px] w-[300px]",
  };

  const adSlotId = useMemo(() => resolveSlotId(slot), [slot]);
  const isConfigured = Boolean(ADSENSE_PUB_ID && adSlotId);
  const shouldRenderAd = isConfigured && consented;

  useEffect(() => {
    setConsented(readConsent());

    const handler = (event: Event) => {
      const detail = (event as CustomEvent<string>).detail;
      setConsented(detail === "accepted");
    };

    window.addEventListener(CONSENT_EVENT, handler);
    return () => window.removeEventListener(CONSENT_EVENT, handler);
  }, []);

  useEffect(() => {
    if (!shouldRenderAd) return;

    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch {
      // Ad blockers and repeated client-side renders can make AdSense throw.
      // The ad container remains reserved so layout does not jump.
    }
  }, [shouldRenderAd, adSlotId]);

  if (!isConfigured && process.env.NODE_ENV === "production") {
    return null;
  }

  return (
    <>
      {shouldRenderAd ? (
        <Script
          id="adsense-loader"
          async
          strategy="afterInteractive"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_PUB_ID}`}
          crossOrigin="anonymous"
        />
      ) : null}

      <div
        className={`ad-container rounded-lg ${sizeClasses[format]} ${className}`}
        data-ad-slot={slot}
        data-ad-format={format}
        aria-label="Advertisement"
      >
        {shouldRenderAd ? (
          <ins
            key={`${slot}-${adSlotId}`}
            className="adsbygoogle block w-full h-full"
            style={{ display: "block" }}
            data-ad-client={ADSENSE_PUB_ID}
            data-ad-slot={adSlotId}
            data-ad-format={format === "horizontal" ? "auto" : "rectangle"}
            data-full-width-responsive={format === "horizontal" ? "true" : "false"}
          />
        ) : (
          <span>{isConfigured ? "Advertisement" : `Ad slot: ${slot}`}</span>
        )}
      </div>
    </>
  );
}
