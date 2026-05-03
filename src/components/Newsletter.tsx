"use client";

import { useState } from "react";
import { Mail, ArrowRight, Check, Loader2 } from "lucide-react";

interface NewsletterProps {
  variant?: "dark" | "light";
  buttondownUsername?: string;
}

type SubmitState = "idle" | "loading" | "success" | "error";

/**
 * Static-friendly newsletter signup. POSTs to Buttondown's embed endpoint
 * (https://docs.buttondown.email/api-embedding-emails) when a username is
 * configured. If no username is provided, the form shows a "coming soon"
 * placeholder so the homepage CTA never looks broken in development.
 *
 * Why Buttondown?
 *   - Generous free tier (100 subscribers)
 *   - No JS SDK required, plain <form> POST works
 *   - GDPR-friendly defaults
 *
 * Switch providers later by swapping the action URL — the markup is provider
 * agnostic.
 */
export default function Newsletter({
  variant = "dark",
  buttondownUsername = process.env.NEXT_PUBLIC_BUTTONDOWN_USERNAME,
}: NewsletterProps) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<SubmitState>("idle");
  const [error, setError] = useState<string | null>(null);

  const isConfigured = Boolean(buttondownUsername);

  const isDark = variant === "dark";
  const wrapperClass = isDark ? "bg-transparent" : "bg-white";
  const inputClass = isDark
    ? "bg-white/10 border-white/20 text-white placeholder-ink-400 focus:border-primary-300 focus:ring-primary-300/50"
    : "bg-white border-ink-200 text-ink-900 placeholder-ink-400 focus:border-primary-500 focus:ring-primary-500/40";
  const buttonClass = isDark
    ? "bg-primary-500 hover:bg-primary-400 text-white"
    : "bg-primary-600 hover:bg-primary-500 text-white";
  const helpClass = isDark ? "text-ink-300" : "text-ink-500";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isConfigured) return;

    setState("loading");
    setError(null);

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("embed", "1");

      const url = `https://buttondown.email/api/emails/embed-subscribe/${encodeURIComponent(
        buttondownUsername!,
      )}`;

      // Buttondown's embed endpoint accepts no-cors form posts. We treat
      // any successful network completion as a successful subscription —
      // duplicate signups and validation errors surface in their dashboard.
      await fetch(url, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      setState("success");
      setEmail("");
    } catch (err) {
      setState("error");
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  if (!isConfigured) {
    return (
      <div className={`${wrapperClass} text-sm ${helpClass}`}>
        <p className="inline-flex items-center gap-2">
          <Mail className="h-4 w-4" />
          Newsletter launching soon — write to{" "}
          <a
            href="mailto:contact@chinaheritageguide.com"
            className="underline hover:text-primary-300"
          >
            contact@chinaheritageguide.com
          </a>{" "}
          to be on the first list.
        </p>
      </div>
    );
  }

  if (state === "success") {
    return (
      <div
        className={`${wrapperClass} flex items-center gap-3 ${
          isDark ? "text-primary-300" : "text-primary-700"
        }`}
      >
        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-500/20 flex items-center justify-center">
          <Check className="h-5 w-5" />
        </div>
        <div>
          <p className="font-semibold">Almost there.</p>
          <p className={`text-sm ${helpClass}`}>
            Check your inbox to confirm your subscription.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`${wrapperClass} flex flex-col sm:flex-row gap-3 items-stretch sm:items-center max-w-xl mx-auto`}
      aria-label="Newsletter subscription"
    >
      <div className="relative flex-1">
        <Mail
          className={`absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 ${
            isDark ? "text-ink-400" : "text-ink-400"
          }`}
        />
        <input
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          aria-label="Email address"
          disabled={state === "loading"}
          className={`w-full pl-11 pr-4 py-3 rounded-full border text-sm focus:outline-none focus:ring-2 disabled:opacity-50 transition-colors ${inputClass}`}
        />
      </div>
      <button
        type="submit"
        disabled={state === "loading" || email.length === 0}
        className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${buttonClass}`}
      >
        {state === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Subscribing
          </>
        ) : (
          <>
            Subscribe
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>
      {error ? (
        <p
          role="alert"
          className={`text-sm ${
            isDark ? "text-red-300" : "text-red-600"
          } mt-1 sm:mt-0 sm:absolute sm:left-0 sm:-bottom-7 w-full text-center`}
        >
          {error}
        </p>
      ) : null}
    </form>
  );
}
