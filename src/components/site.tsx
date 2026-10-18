import { Link, useLocation } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import logoAsset from "@/assets/prodix-image-1-1.png";
import octAsset from "@/assets/prodix-image-6-1.png";
import aglAsset from "@/assets/prodix-image-6-2.png";
import asecnaAsset from "@/assets/prodix-image-6-3.png";
import brochure from "@/assets/brochure.asset.json";
import { Globe, Phone, Menu, X, ChevronDown, MapPin } from "lucide-react";

export function GabonFlag({ className = "w-4 h-3" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 16"
      className={`${className} rounded-xs shadow-xs shrink-0 overflow-hidden inline-block align-middle`}
      aria-label="Drapeau du Gabon"
    >
      <rect width="24" height="5.33" fill="#009E60" />
      <rect y="5.33" width="24" height="5.34" fill="#FCD116" />
      <rect y="10.67" width="24" height="5.33" fill="#0072CE" />
    </svg>
  );
}

export function Brand({ theme = "light" }: { theme?: "light" | "dark" }) {
  return (
    <span className={`brand ${theme === "dark" ? "brand-dark" : ""}`}>
      <img src={logoAsset} width={1665} height={427} alt="PRODIX GROUP" />
      <span>GROUP</span>
    </span>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "";
  const isHeroBg = isHomePage && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Topline Petrol Navy Strip */}
      <div className="topline">
        <div className="site-width flex items-center justify-between py-1.5 text-xs">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 text-white font-semibold">
              <GabonFlag className="w-4 h-2.5" />
              PRODIX Group Gabon
            </span>
            <span className="hidden sm:inline text-neutral-500">|</span>
            <span className="hidden sm:inline text-neutral-300">De l’idée à l’entreprise formelle</span>
          </div>
          <div className="flex items-center gap-4 text-neutral-300">
            <span className="hidden md:inline-flex items-center gap-1.5 text-neutral-300">
              <MapPin className="w-3 h-3 text-[#EB961B]" />
              Libreville, Gabon
            </span>
            <span className="hidden md:inline text-neutral-600">|</span>
            <a
              href="tel:+24177055848"
              className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-[#EB961B] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#EB961B]" />
              077.05.58.48
            </a>
          </div>
        </div>
      </div>

      {/* Main Header: teal at top on home page, white on scroll and on inner pages */}
      <header className={`site-header ${isHeroBg ? "is-hero-bg" : "is-scrolled"}`}>
        <div className="site-width header-inner">
          <Link to="/" aria-label="PRODIX Group, accueil" className="shrink-0">
            <Brand theme={isHeroBg ? "dark" : "light"} />
          </Link>

          <nav
            aria-label="Navigation principale"
            className={open ? "main-nav is-open" : "main-nav"}
          >
            <Link
              to="/"
              activeOptions={{ exact: true }}
              activeProps={{ className: "active" }}
              onClick={() => setOpen(false)}
            >
              Accueil
            </Link>
            <Link
              to="/le-groupe"
              activeProps={{ className: "active" }}
              onClick={() => setOpen(false)}
            >
              Le groupe
            </Link>
            <Link
              to="/nos-services"
              activeProps={{ className: "active" }}
              onClick={() => setOpen(false)}
            >
              Nos services
            </Link>
            <Link
              to="/contact"
              activeProps={{ className: "active" }}
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </nav>

          <div className="header-actions flex items-center gap-2.5">
            {/* Country / Language selector badge */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangOpen(!langOpen)}
                className="prodix-badge-country"
                aria-label="Sélectionner le pays ou la langue"
              >
                <Globe className={`w-3.5 h-3.5 ${isHeroBg ? "text-white" : "text-[#1F788B]"}`} />
                <span>FR</span>
                <ChevronDown className={`w-3 h-3 ${isHeroBg ? "text-white/70" : "text-neutral-500"}`} />
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-1 w-48 bg-white rounded-xl shadow-xl border border-neutral-200 py-1.5 z-50 text-xs text-neutral-800">
                  <div className="px-3 py-1 font-bold text-neutral-400 uppercase tracking-wider text-[10px]">
                    Pays & Région
                  </div>
                  <div className="px-3 py-2 flex items-center gap-2.5 font-semibold bg-neutral-50">
                    <GabonFlag className="w-4 h-3" />
                    <span>Gabon (Français)</span>
                  </div>
                </div>
              )}
            </div>

            {/* Primary Orange Pill Button */}
            <Link to="/contact" className="prodix-btn-orange">
              Parlons de votre projet
            </Link>

            {/* Teal Outline Pill Button */}
            <a href="tel:+24177055848" className={`hidden sm:inline-flex ${isHeroBg ? "prodix-btn-outline-white" : "prodix-btn-outline"}`}>
              077.05.58.48
            </a>

            {/* Mobile menu trigger */}
            <button
              type="button"
              className="mobile-menu-btn sm:hidden p-2 rounded-full border border-neutral-200 hover:bg-neutral-100 transition-colors"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              onClick={() => setOpen(!open)}
            >
              {open ? <X className={`w-5 h-5 ${isHeroBg ? "text-white" : "text-neutral-700"}`} /> : <Menu className={`w-5 h-5 ${isHeroBg ? "text-white" : "text-neutral-700"}`} />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export function Partners() {
  return (
    <section className="wu-partners-section" aria-label="Nos références institutionnelles et partenaires">
      <div className="site-width">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 py-8 border-b border-neutral-200">
          <p className="text-xs uppercase font-extrabold tracking-widest text-[#5A6E75] shrink-0">
            ILS NOUS FONT <strong className="text-[#1A282C] block text-sm">CONFIANCE AU GABON</strong>
          </p>
          <div className="grid grid-cols-3 gap-6 sm:gap-12 items-center flex-grow max-w-2xl justify-items-center">
            <div className="partner-logo oct" title="Owendo Container Terminal Gabon">
              <img
                src={octAsset}
                alt="Owendo Container Terminal Gabon"
                width={327}
                height={38}
                loading="lazy"
                className="max-h-9 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-85 hover:opacity-100"
              />
            </div>
            <div className="partner-logo agl" title="Africa Global Logistics">
              <img
                src={aglAsset}
                alt="AGL, Africa Global Logistics"
                width={596}
                height={335}
                loading="lazy"
                className="max-h-11 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-85 hover:opacity-100"
              />
            </div>
            <div className="partner-logo asecna" title="ASECNA">
              <img
                src={asecnaAsset}
                alt="ASECNA"
                width={406}
                height={430}
                loading="lazy"
                className="max-h-11 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-85 hover:opacity-100"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactBand() {
  return (
    <section className="contact-band bg-gradient-to-r from-[#145564] to-[#1F788B] py-14 text-white">
      <div className="site-width flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 leading-tight">
            Votre projet commence
            <br />
            par une conversation.
          </h2>
          <p className="text-[#D3E9ED] text-sm mt-3 max-w-lg">
            Un premier échange sans engagement avec nos experts à Libreville pour formaliser,
            équiper ou digitaliser votre activité.
          </p>
        </div>
        <Link to="/contact" className="prodix-btn-orange shrink-0">
          <span>Parlons de votre projet</span>
        </Link>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="wu-footer">
      <div className="site-width">
        {/* Country Selector in PRODIX Style */}
        <div className="wu-footer-top">
          <div className="inline-flex items-center gap-2.5 bg-[#123E49] border border-[#1A4F5C] text-white rounded-full px-4 py-2 text-xs font-semibold">
            <GabonFlag className="w-4 h-3" />
            <span>Gabon</span>
            <ChevronDown className="w-3.5 h-3.5 text-neutral-400 ml-1" />
          </div>
        </div>

        {/* Quick Links in Warm Orange with Underline */}
        <div className="wu-footer-links-grid">
          <Link to="/le-groupe" className="wu-footer-link">
            Qui sommes-nous ?
          </Link>
          <Link to="/nos-services" className="wu-footer-link">
            Nos 5 expertises
          </Link>
          <Link to="/contact" className="wu-footer-link">
            Contactez-nous
          </Link>
          <Link to="/nos-services" hash="consulting" className="wu-footer-link">
            Consulting juridique & fiscal
          </Link>
          <Link to="/nos-services" hash="centrale-achat" className="wu-footer-link">
            Centrale d’achat & Équipements
          </Link>
          <Link to="/nos-services" hash="reprographie" className="wu-footer-link">
            Reprographie & Impression
          </Link>
          <Link to="/nos-services" hash="digital" className="wu-footer-link">
            Digital & Web
          </Link>
          <Link to="/nos-services" hash="escapade" className="wu-footer-link">
            Mobilité d'affaires & Escapade
          </Link>
          <Link to="/politique-de-confidentialite" className="wu-footer-link">
            Déclaration de confidentialité
          </Link>
          <Link to="/cgu" className="wu-footer-link">
            Conditions Générales d’Utilisation
          </Link>
          <a
            href={brochure.url}
            target="_blank"
            rel="noreferrer"
            className="wu-footer-link"
          >
            Télécharger la plaquette PDF
          </a>
        </div>

        {/* Bottom Bar: Logo and Copyright */}
        <div className="wu-footer-bottom">
          <div className="flex items-center gap-4">
            <Brand theme="dark" />
            <div className="hidden sm:block text-xs text-[#9BB1B7] pl-4 border-l border-[#194854]">
              De l’idée à l’entreprise au Gabon.
              <br />
              Libreville • 077.05.58.48 • infos@prodixgroup.com
            </div>
          </div>
          <div className="wu-footer-copy">
            © {new Date().getFullYear()} PRODIX Group. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
}
