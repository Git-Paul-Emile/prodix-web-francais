import { createFileRoute, Link } from "@tanstack/react-router";
import { Partners } from "@/components/site";
import { pageHead } from "@/lib/prodix";
import librevilleBg from "@/assets/libreville.jpg";
import teamPhoto from "@/assets/team-success.jpg";
import {
  ShieldCheck,
  ArrowRight,
  MapPin,
  Lock,
  Layers,
  Clock,
  Building2,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "PRODIX Group Gabon | De l’idée à l’entreprise",
      "À Libreville, PRODIX Group accompagne votre entreprise : consulting juridique et fiscal, centrale d’achat, reprographie, digital et mobilité.",
    ),
  component: Index,
});

function Index() {
  return (
    <main>
      {/* 1. HERO SECTION (Western Union Layout + PRODIX Teal & Orange Palette + Libreville Background) */}
      <section className="wu-hero-section">
        <div className="wu-hero-bg-wrap" aria-hidden="true">
          <img
            src={librevilleBg}
            alt=""
            className="wu-hero-bg-img"
            fetchPriority="high"
          />
          <div className="wu-hero-bg-overlay" />
        </div>
        <div className="site-width relative z-10">
          <div className="wu-hero-content">
            <h1 className="wu-hero-title">
              De l’idée à<br />
              <span>l’entreprise.</span>
            </h1>
            <p className="wu-hero-description">
              Créer, structurer, équiper, digitaliser. PRODIX Group est votre interlocuteur
              unique à Libreville pour transformer vos ambitions en entreprise formelle,
              conforme et durable.
            </p>

            <div className="wu-hero-cta-group">
              <Link to="/contact" className="prodix-btn-orange">
                <span>Parlons de votre projet</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <Link to="/nos-services" className="prodix-btn-outline-white">
                <span>Découvrir nos 5 expertises</span>
              </Link>
            </div>

            <div className="wu-hero-trust">
              <ShieldCheck className="w-4 h-4 text-[#EB961B] shrink-0" />
              <span>
                Formalisation légale. Sécurité OHADA. Accompagnement de bout en bout.{" "}
                <Link to="/le-groupe">Découvrir notre vision</Link>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST & FEATURE BANNER (Deep Petrol Navy strip directly under hero) */}
      <section className="wu-trust-strip">
        <div className="site-width">
          <div className="wu-trust-grid">
            <div className="wu-trust-item">
              <div className="wu-trust-icon-box">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4>Présence locale à Libreville</h4>
                <p>Accompagnement de proximité et interlocuteur dédié au Gabon.</p>
              </div>
            </div>

            <div className="wu-trust-item">
              <div className="wu-trust-icon-box">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h4>Conformité & Protection OHADA</h4>
                <p>Rigueur légale, déclarations fiscales (DGI) et sociales (CNSS, CNAMGS).</p>
              </div>
            </div>

            <div className="wu-trust-item">
              <div className="wu-trust-icon-box">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h4>Partenaire de référence au Gabon</h4>
                <p>Prestataire de confiance pour OCT, AGL, ASECNA et les entrepreneurs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ACTION CARDS ("Que pouvez-vous faire avec PRODIX Group ?") */}
      <section className="wu-action-section">
        <div className="site-width">
          <h2 className="wu-action-title">Que pouvez-vous faire avec PRODIX Group ?</h2>
          <p className="wu-action-subtitle">
            Trois piliers stratégiques et cinq expertises complémentaires réunis sous un même toit.
          </p>

          <div className="wu-action-cards-grid">
            {/* Card 1: FORMALISER (Consulting) */}
            <div className="wu-action-card">
              <h3>Créer et structurer votre entreprise</h3>
              <p>
                Du choix du statut juridique (SAS, SARL, GIE) au pilotage quotidien : immatriculation
                ANPI, tenue comptable complète, déclarations fiscales et sociales, et constitution de{" "}
                <Link to="/nos-services" hash="consulting" className="text-[#1F788B] underline font-semibold">
                  dossiers de financement bancaire
                </Link>
                .
              </p>
              <Link to="/nos-services" hash="consulting" className="wu-action-card-link">
                <span>Consulter notre offre Consulting</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 2: ÉQUIPER (Centrale d'achat & Reprographie) */}
            <div className="wu-action-card">
              <h3>Équiper vos bureaux & chantiers</h3>
              <p>
                Un interlocuteur unique pour vos approvisionnements : encres d'imprimantes originales et
                génériques, informatique, mobilier de bureau, EPI et travaux de{" "}
                <Link to="/nos-services" hash="reprographie" className="text-[#1F788B] underline font-semibold">
                  reprographie & impression tous formats
                </Link>
                .
              </p>
              <Link to="/nos-services" hash="centrale-achat" className="wu-action-card-link">
                <span>Explorer la Centrale d’achat & Reprographie</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 3: CONNECTER (Digital & Escapade) */}
            <div className="wu-action-card">
              <h3>Digitaliser & développer votre mobilité</h3>
              <p>
                Donnez de la visibilité à votre marque : identité visuelle, sites web, applications
                mobiles, et accompagnement pas à pas aux{" "}
                <Link to="/nos-services" hash="escapade" className="text-[#1F788B] underline font-semibold">
                  demandes de visas d'affaires et voyages
                </Link>{" "}
                (Schengen, USA, Canada, Chine, Dubaï).
              </p>
              <Link to="/nos-services" hash="digital" className="wu-action-card-link">
                <span>Découvrir les solutions Digital & Mobilité</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. REASONS SECTION ("Raisons de choisir PRODIX Group¹") */}
      <section className="wu-reasons-section">
        <div className="site-width">
          <div className="wu-reasons-grid">
            {/* Left Column: Authentic Team Photo */}
            <div>
              <img
                src={teamPhoto}
                alt="Équipe d'entrepreneurs gabonais collaborant avec PRODIX Group dans des bureaux modernes à Libreville"
                className="wu-reasons-img"
                width={800}
                height={600}
                loading="lazy"
              />
            </div>

            {/* Right Column: Benefits list & Orange Pill CTA */}
            <div className="wu-reasons-content">
              <h2>
                Raisons de choisir PRODIX Group<sup>1</sup>
              </h2>

              <div className="wu-reasons-list">
                {/* Benefit 1 */}
                <div className="wu-reason-item">
                  <Clock className="wu-reason-icon" />
                  <div className="wu-reason-text">
                    <h4>De l’idée à la concrétisation en quelques jours</h4>
                    <p>
                      Écoute, diagnostic et exécution rapide : votre création d'entreprise ou commande
                      d'équipements est prise en charge dans un{" "}
                      <Link to="/contact">délai maîtrisé</Link> avec un interlocuteur dédié.
                    </p>
                  </div>
                </div>

                {/* Benefit 2 */}
                <div className="wu-reason-item">
                  <ShieldCheck className="wu-reason-icon" />
                  <div className="wu-reason-text">
                    <h4>Tranquillité d’esprit & rigueur légale</h4>
                    <p>
                      Processus conformes aux normes OHADA, comptes justes et déclarations fiscales à jour.{" "}
                      <Link to="/le-groupe">Suivez votre projet</Link> pour accéder sereinement aux crédits
                      bancaires et marchés institutionnels.
                    </p>
                  </div>
                </div>

                {/* Benefit 3 */}
                <div className="wu-reason-item">
                  <Layers className="wu-reason-icon" />
                  <div className="wu-reason-text">
                    <h4>Tout sous un même toit sans intermédiaire</h4>
                    <p>
                      5 lignes de services coordonnées (Consulting, Centrale d’achat, Reprographie, Digital,
                      Escapade) plébiscitées par des partenaires de premier plan (OCT, AGL, ASECNA).
                    </p>
                  </div>
                </div>
              </div>

              {/* Large PRODIX Orange Pill CTA */}
              <div className="pt-2">
                <Link to="/contact" className="prodix-btn-orange w-full sm:w-auto text-center justify-center">
                  Prendre rendez-vous avec un conseiller
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PARTNERS STRIP */}
      <Partners />

      {/* 6. LEGAL DISCLAIMER FOOTNOTE STRIP */}
      <section className="wu-footnote-strip">
        <div className="site-width">
          <p>
            <sup>1</sup> Les délais de traitement administratif et d'obtention des documents officiels
            dépendent des organismes publics compétents au Gabon (ANPI, DGI, CNSS, CNAMGS, Tribunal de Commerce).
            PRODIX Group garantit un accompagnement rigoureux de bout en bout et des prestations conformes aux
            normes en vigueur en République Gabonaise.
          </p>
        </div>
      </section>
    </main>
  );
}
