"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import en from "./en";
import es from "./es";

type Lang = "en" | "es";
type Translations = Record<string, any>;

const translations: Record<Lang, Translations> = { en, es };

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (path: string, fallback?: string) => string;
  toggleLang: () => void;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("bsw-lang") as Lang | null;
    if (saved === "en" || saved === "es") setLangState(saved);
  }, []);

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem("bsw-lang", newLang);
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === "en" ? "es" : "en");
  }, [lang, setLang]);

  const t = useCallback(
    (path: string, fallback?: string): string => {
      const keys = path.split(".");
      let value: any = translations[lang];
      for (const key of keys) {
        if (value?.[key] !== undefined) {
          value = value[key];
        } else {
          // Fallback to English
          let fallbackValue: any = translations["en"];
          for (const k of keys) {
            if (fallbackValue?.[k] !== undefined) {
              fallbackValue = fallbackValue[k];
            } else {
              return fallback ?? path;
            }
          }
          return typeof fallbackValue === "string" ? fallbackValue : fallback ?? path;
        }
      }
      return typeof value === "string" ? value : fallback ?? path;
    },
    [lang]
  );

  return (
    <I18nContext.Provider value={{ lang, setLang, t, toggleLang }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useTranslation must be used within I18nProvider");
  return ctx;
}

export function useT() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useT must be used within I18nProvider");
  return ctx.t;
}
