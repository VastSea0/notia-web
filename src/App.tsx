import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Architecture from "./components/Architecture";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import ChangelogPage from "./components/ChangelogPage";
import Privacy from "./components/Privacy";
import DownloadModal from "./components/DownloadModal";

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const saved = localStorage.getItem("notia-theme");
    return saved === "light" ? "light" : "dark";
  });

  const [lang, setLang] = useState<"tr" | "en">(() => {
    const saved = localStorage.getItem("notia-lang");
    return saved === "en" || saved === "tr" ? saved : "tr";
  });

  const [currentView, setCurrentView] = useState<"home" | "changelog" | "privacy">(() => {
    if (typeof window !== "undefined") {
      const p = window.location.pathname;
      const h = window.location.hash;
      if (p === "/changelog" || p === "/versions" || h === "#changelog" || h === "#versions") {
        return "changelog";
      }
      if (p === "/privacy" || h === "#privacy") {
        return "privacy";
      }
    }
    return "home";
  });

  const [isDownloadOpen, setIsDownloadOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleLocationChange = () => {
      const p = window.location.pathname;
      const h = window.location.hash;
      if (p === "/changelog" || p === "/versions" || h === "#changelog" || h === "#versions") {
        setCurrentView("changelog");
      } else if (p === "/privacy" || h === "#privacy") {
        setCurrentView("privacy");
      } else {
        setCurrentView("home");
      }
    };

    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("hashchange", handleLocationChange);
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("hashchange", handleLocationChange);
    };
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("notia-theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("notia-lang", lang);
  }, [lang]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const navigateTo = (view: "home" | "changelog" | "privacy", targetId?: string) => {
    setCurrentView(view);
    if (view === "changelog") {
      window.history.pushState(null, "", "#changelog");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (view === "privacy") {
      window.history.pushState(null, "", "#privacy");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.history.pushState(null, "", "/");
      if (targetId) {
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 50);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  const scrollToId = (id: string) => {
    if (currentView !== "home") {
      navigateTo("home", id);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-m3-surface text-[var(--md-sys-color-on-surface)] selection:bg-[var(--md-sys-color-primary-container)] selection:text-[var(--md-sys-color-on-primary-container)]">
      {/* 1. Grounded M3 Header (Never clips content on scroll) */}
      <Header
        lang={lang}
        setLang={setLang}
        theme={theme}
        toggleTheme={toggleTheme}
        currentView={currentView}
        navigateTo={navigateTo}
        scrollToId={scrollToId}
        onOpenDownload={() => setIsDownloadOpen(true)}
      />

      {/* Main View Router */}
      {currentView === "changelog" ? (
        <ChangelogPage
          lang={lang}
          onBack={() => navigateTo("home")}
          onOpenDownload={() => setIsDownloadOpen(true)}
        />
      ) : currentView === "privacy" ? (
        <Privacy
          lang={lang}
          onBackToHome={() => navigateTo("home")}
        />
      ) : (
        <main>
          {/* 2. Hero Section with Handheld Smartphone Frame */}
          <Hero
            lang={lang}
            onOpenDownload={() => setIsDownloadOpen(true)}
            onNavigateChangelog={() => navigateTo("changelog")}
            onScrollToFeatures={() => scrollToId("features")}
          />

          {/* 3. 6 Core Pillars & Storytelling Features */}
          <Features lang={lang} />

          {/* 4. Engineering Architecture & Security */}
          <Architecture lang={lang} />

          {/* 5. Real Notia Pricing & Comparison Table */}
          <Pricing
            lang={lang}
            onOpenDownload={() => setIsDownloadOpen(true)}
          />

          {/* 6. Frequently Asked Questions */}
          <Faq lang={lang} />
        </main>
      )}

      {/* 7. Grounded M3 Footer & Pre-Footer CTA */}
      <Footer
        lang={lang}
        onOpenDownload={() => setIsDownloadOpen(true)}
        navigateTo={navigateTo}
        scrollToId={scrollToId}
      />

      {/* 8. Download Modal Dialog */}
      <DownloadModal
        isOpen={isDownloadOpen}
        onClose={() => setIsDownloadOpen(false)}
        lang={lang}
      />
    </div>
  );
}
