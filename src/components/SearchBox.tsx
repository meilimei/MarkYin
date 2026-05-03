"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, X, Sparkles, Landmark, Layers, Film, Globe } from "lucide-react";
import {
  getKindLabel,
  search,
  type SearchEntry,
  type SearchEntryKind,
} from "@/lib/searchIndex";

const KIND_ICON: Record<SearchEntryKind, typeof Sparkles> = {
  artifact: Sparkles,
  museum: Landmark,
  topic: Layers,
  inspiration: Film,
  abroad: Globe,
};

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const results = useMemo<SearchEntry[]>(() => {
    return query.trim().length === 0 ? [] : search(query, 10);
  }, [query]);

  // Close on click-outside
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // Global "/" shortcut to focus
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "/" && document.activeElement?.tagName !== "INPUT") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Reset highlight when results change
  useEffect(() => {
    setHighlight(0);
  }, [results.length]);

  function handleSelect(entry: SearchEntry) {
    setOpen(false);
    setQuery("");
    router.push(entry.url);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!open) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlight((h) => Math.min(h + 1, Math.max(results.length - 1, 0)));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlight((h) => Math.max(h - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const chosen = results[highlight];
      if (chosen) handleSelect(chosen);
    } else if (e.key === "Escape") {
      setOpen(false);
      inputRef.current?.blur();
    }
  }

  const showDropdown = open && query.trim().length > 0;

  return (
    <div ref={containerRef} className="relative w-full max-w-xs">
      <div className="relative">
        <Search className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-400" />
        <input
          ref={inputRef}
          type="search"
          value={query}
          placeholder="Search…"
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          className="w-full pl-8 pr-7 py-1.5 text-sm bg-ink-50 border border-ink-100 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-200 focus:bg-white text-ink-800 placeholder:text-ink-400"
          aria-label="Search artifacts, museums, themes"
          aria-autocomplete="list"
          aria-expanded={showDropdown}
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              inputRef.current?.focus();
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-0.5 text-ink-400 hover:text-ink-700"
            aria-label="Clear search"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      {showDropdown && (
        <div className="absolute right-0 mt-2 w-[360px] max-w-[calc(100vw-2rem)] bg-white rounded-lg shadow-lg border border-ink-100 py-1 z-50 max-h-[72vh] overflow-y-auto">
          {results.length === 0 ? (
            <p className="px-4 py-6 text-sm text-ink-400 text-center">
              No matches for &quot;{query}&quot;
            </p>
          ) : (
            <ul role="listbox">
              {results.map((r, i) => {
                const Icon = KIND_ICON[r.kind];
                return (
                  <li key={r.id} role="option" aria-selected={i === highlight}>
                    <Link
                      href={r.url}
                      onMouseEnter={() => setHighlight(i)}
                      onClick={() => handleSelect(r)}
                      className={`flex items-start gap-3 px-3 py-2.5 text-sm transition-colors ${
                        i === highlight
                          ? "bg-primary-50"
                          : "hover:bg-primary-50/50"
                      }`}
                    >
                      <Icon className="h-4 w-4 mt-0.5 text-primary-600 shrink-0" />
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-ink-900 truncate">
                          {r.title}
                        </p>
                        <p className="text-xs text-ink-500 truncate">
                          {getKindLabel(r.kind)} · {r.subtitle}
                        </p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
          <div className="px-3 py-2 text-[10px] text-ink-400 border-t border-ink-100 flex items-center justify-between">
            <span>
              <kbd className="px-1.5 py-0.5 rounded border border-ink-200 bg-ink-50 font-mono text-[10px]">
                /
              </kbd>{" "}
              to focus
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 rounded border border-ink-200 bg-ink-50 font-mono text-[10px]">
                ↑↓
              </kbd>{" "}
              navigate
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 rounded border border-ink-200 bg-ink-50 font-mono text-[10px]">
                ↵
              </kbd>{" "}
              open
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
