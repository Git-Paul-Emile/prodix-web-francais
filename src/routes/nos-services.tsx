import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { pageHead, services } from "@/lib/prodix";
import showcaseImg from "@/assets/prodix-showcase.jpg";
import oct from "@/assets/image-6-1.asset.json";
import agl from "@/assets/image-6-2.asset.json";
import asecna from "@/assets/image-6-3.asset.json";
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronUp,
  FileText,
  Layers,
  MapPin,
  MessageSquare,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/nos-services")({
  head: () =>
    pageHead(
      "Nos services | Les cinq expertises de PRODIX Group Gabon",
      "Consulting juridique et comptable, centrale d’achat, reprographie, digital et mobilité d’affaires : une structure intégrée à Libreville, Gabon.",
    ),
  component: ServicesPage,
});

interface FaqItem {
  question: string;
  answer: string;
}

const faqList: FaqItem[] = [
  {
    question: "Combien de temps faut-il pour formaliser une entreprise au Gabon avec PRODIX ?",
    answer:
      "Grâce à notre maîtrise des démarches administratives locales (ANPI, greffe, impôts, CNSS, CNAMGS), la création et formalisation complète d’une société s’effectue généralement entre 5 et 10 jours ouvrés dès réception de l’ensemble des pièces requises.",
  },
  {
    question: "Comment passer commande auprès de la centrale d’achat ?",
    answer:
      "Il vous suffit de nous transmettre la liste de vos besoins (fournitures, matériel informatique, mobilier ou consommables industriels). Notre équipe vous adresse un devis détaillé sous 24h à 48h, puis assure la livraison contrôlée directement dans vos locaux à Libreville ou à l’intérieur du pays.",
  },
  {
    question: "Proposez-vous un accompagnement comptable et fiscal sous forme d’abonnement ?",
    answer:
      "Oui, nous proposons des forfaits d’assistance comptable mensuels ou trimestriels adaptés à la taille de votre structure : tenue des livres comptables, déclarations fiscales et sociales régulières, et préparation des états financiers annuels certifiés.",
  },
  {
    question: "Quelles sont les destinations couvertes par le pôle Escapade pour les visas ?",
    answer:
      "Nous assistons les professionnels et particuliers pour l’ensemble des formalités consulaires et visas d’affaires vers l’Espace Schengen, les États-Unis, le Canada, la Chine, la Turquie et les Émirats Arabes Unis (Dubaï), incluant les réservations d’hébergement et de vols.",
  },
  {
    question: "Peut-on combiner plusieurs pôles dans une offre groupée personnalisée ?",
    answer:
      "Absolument. C’est la force même de PRODIX Group : un entrepreneur peut à la fois créer sa société (Consulting), commander son matériel de bureau (Centrale d’achat), imprimer ses cartes de visite (Reprographie) et lancer son site web (Digital) avec un interlocuteur unique.",
  },
];

function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main>
      {/* 1. HERO SECTION (conforme structure de référence) */}
      <section className="service-page-hero site-width">
        <div className="service-hero-grid">
          <div>
            <h1>
              Bâtir, équiper et
              <br />
              propulser votre entreprise.
            </h1>
          </div>
          <div>
            <p className="service-hero-desc">
              Cinq expertises complémentaires sous un même toit pour accompagner les entrepreneurs,
              les PME et les grands groupes à chaque étape de leur développement au Gabon.
            </p>
            <div className="service-hero-actions">
              <Button asChild className="orange-button">
                <Link to="/contact">Échanger avec un conseiller</Link>
              </Button>
              <Button asChild variant="outline">
                <a href="#services-overview">Explorer nos expertises</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Large Media Showcase */}
        <div className="service-hero-banner">
          <img
            src={showcaseImg}
            alt="Présentation des services et de l'équipe PRODIX Group à Libreville"
            width={1280}
            height={800}
            fetchPriority="high"
          />
          <div className="service-hero-banner-overlay" />
          <div className="service-hero-badge-strip">
            <span className="service-badge-pill">
              <Layers className="size-3.5 text-accent" /> 5 Pôles d'intervention coordonnés
            </span>
            <span className="service-badge-pill">
              <MapPin className="size-3.5 text-accent" /> Ancrés à Libreville, Gabon
            </span>
            <span className="service-badge-pill">
              <Sparkles className="size-3.5 text-accent" /> De l’idée à l’entreprise formelle
            </span>
          </div>
        </div>
      </section>

      {/* 2. FEATURED CLIENTS (Logos partenaires de référence) */}
      <section className="featured-clients-section" aria-label="Références institutionnelles">
        <div className="site-width featured-clients-inner">
          <p className="featured-clients-label">Ils s'appuient sur l'expertise PRODIX au Gabon</p>
          <div className="featured-clients-logos">
            <div className="featured-client-item" title="Owendo Container Terminal">
              <img
                src={oct.url}
                alt="Owendo Container Terminal Gabon"
                width={190}
                height={26}
                loading="lazy"
              />
            </div>
            <div className="featured-client-item" title="Africa Global Logistics">
              <img
                src={agl.url}
                alt="Africa Global Logistics"
                width={95}
                height={48}
                loading="lazy"
              />
            </div>
            <div className="featured-client-item" title="ASECNA">
              <img src={asecna.url} alt="ASECNA Gabon" width={48} height={48} loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICE OVERVIEW (Grille d'expertises détaillées) */}
      <section id="services-overview" className="service-overview-section site-width">
        <div className="service-overview-header">
          <h2>
            Tout ce dont votre organisation a besoin,
            <br />
            réuni sous un même toit.
          </h2>
          <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
            Une architecture pensée pour répondre aux besoins opérationnels concrets : créer des
            bases légales solides, équiper vos équipes en fournitures et connecter votre activité au
            monde.
          </p>
        </div>

        <div className="service-card-grid">
          {services.map((service) => (
            <article key={service.id} id={service.id} className="service-card-item">
              <div className="service-card-header">
                <span className="service-card-num">{service.number}</span>
                <span className="service-card-pillar">{service.pillar}</span>
              </div>
              <h3>{service.name}</h3>
              <p className="service-card-desc">{service.description}</p>

              <ul className="service-card-items-list">
                {service.items.map((item) => (
                  <li key={item}>
                    <Check className="size-3.5 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="service-card-footer">
                <span className="service-tagline-text">{service.tagline}</span>
                <Button
                  asChild
                  size="sm"
                  variant="ghost"
                  className="text-xs text-primary font-semibold"
                >
                  <Link to="/contact">
                    Devis <ArrowRight className="size-3 ml-1" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. SELECTED WORK (Section sombre de contraste élevé avec cas concrets) */}
      <section className="dark-showcase-section" aria-label="Cas clients et réalisations">
        <div className="site-width">
          <div className="dark-showcase-header">
            <div>
              <h2>
                Des résultats concrets
                <br />
                pour nos partenaires.
              </h2>
            </div>
            <p>
              Nos équipes interviennent chaque jour auprès de multinationales portuaires, de
              structures étatiques et d’entrepreneurs gabonais en phase d’expansion.
            </p>
          </div>

          <div className="selected-work-grid">
            <div className="work-card">
              <div className="work-card-top">
                <span className="work-card-tag">Centrale d'achat & Équipement</span>
                <span className="work-card-client">Opérateur Portuaire • Libreville</span>
              </div>
              <h3>Approvisionnement régulier en consommables et pièces critiques</h3>
              <p>
                Fourniture continue d'encres spécifiques, matériel informatique et consommables
                bureautiques pour garantir la continuité de service des équipes opérationnelles.
              </p>
              <div className="work-card-metric">
                <strong>Impact :</strong> Approvisionnement sécurisé et zéro rupture de stock
                constatée sur l'exercice.
              </div>
            </div>

            <div className="work-card">
              <div className="work-card-top">
                <span className="work-card-tag">Reprographie & Signalétique</span>
                <span className="work-card-client">Logistique & Fret • Gabon</span>
              </div>
              <h3>Déploiement de signalétique de site et supports de communication</h3>
              <p>
                Impression haute définition de roll-up, panneaux de sécurité, banderoles et
                papeterie professionnelle personnalisée dans le respect strict de la charte de
                marque.
              </p>
              <div className="work-card-metric">
                <strong>Impact :</strong> Livraison sur site sous 72h et conformité totale aux
                normes HSE de l'entreprise.
              </div>
            </div>

            <div className="work-card">
              <div className="work-card-top">
                <span className="work-card-tag">Consulting & Formalisation</span>
                <span className="work-card-client">PME BTP & Négoce • Libreville</span>
              </div>
              <h3>Transition complète de l'informel vers une SARL conforme OHADA</h3>
              <p>
                Rédaction des statuts, démarches d’immatriculation ANPI, régularisation fiscale,
                déclarations CNSS et mise en place d'un plan comptable adapté au logiciel de
                gestion.
              </p>
              <div className="work-card-metric">
                <strong>Impact :</strong> Obtention d'un agrément public et validation du premier
                dossier de financement bancaire.
              </div>
            </div>

            <div className="work-card">
              <div className="work-card-top">
                <span className="work-card-tag">Mobilité & Escapade</span>
                <span className="work-card-client">Délégation Économique • Internationale</span>
              </div>
              <h3>Assistance visas d'affaires et logistique de déplacement</h3>
              <p>
                Prise en charge intégrale des dossiers consulaires, obtention des visas Schengen et
                Asie, réservations d'hébergements et mise à disposition de véhicules avec chauffeur.
              </p>
              <div className="work-card-metric">
                <strong>Impact :</strong> 100% des visas accordés dans les délais requis pour la
                mission commerciale.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WORK PROCESS (Méthodologie en 4 étapes) */}
      <section className="work-process-section site-width">
        <h2>
          De la première conversation
          <br />
          au déploiement opérationnel.
        </h2>

        <div className="process-grid">
          <div className="process-card">
            <span className="process-step-num">01</span>
            <h3>Cadrage & Écoute</h3>
            <p>
              Nous analysons votre situation actuelle, vos objectifs d’entreprise et vos impératifs
              de calendrier ou de budget.
            </p>
          </div>

          <div className="process-card">
            <span className="process-step-num">02</span>
            <h3>Diagnostic & Devis</h3>
            <p>
              Établissement d'une feuille de route claire avec une proposition chiffrée détaillée et
              transparente sous 48 heures.
            </p>
          </div>

          <div className="process-card">
            <span className="process-step-num">03</span>
            <h3>Exécution rigoureuse</h3>
            <p>
              Prise en charge directe des formalités administratives, sourcing et livraison des
              équipements, ou production graphique.
            </p>
          </div>

          <div className="process-card">
            <span className="process-step-num">04</span>
            <h3>Suivi & Pérennisation</h3>
            <p>
              Accompagnement continu, assistance comptable mensuelle et réapprovisionnements
              réguliers pour sécuriser votre activité.
            </p>
          </div>
        </div>
      </section>

      {/* 6. MORE PROOF (Chiffres clés & Métriques) */}
      <section className="proof-strip" aria-label="Chiffres clés du groupe">
        <div className="site-width proof-grid">
          <div className="proof-item">
            <strong>05</strong>
            <span>Pôles d’expertises intégrés sous un même toit</span>
          </div>
          <div className="proof-item">
            <strong>+150</strong>
            <span>Entreprises et porteurs de projets accompagnés</span>
          </div>
          <div className="proof-item">
            <strong>100%</strong>
            <span>Conformité réglementaire OHADA et administration gabonaise</span>
          </div>
          <div className="proof-item">
            <strong>48h</strong>
            <span>Délai moyen d’établissement d’une proposition chiffrée</span>
          </div>
        </div>
      </section>

      {/* 7. TEAM INTRODUCTION (Hubs & Pôles de compétences) */}
      <section className="team-intro-section site-width">
        <h2>
          Des pôles spécialisés,
          <br />
          une coordination unique.
        </h2>

        <div className="team-intro-grid">
          <div className="team-hub-card">
            <FileText className="size-6 text-primary" />
            <h3>Pôle Conseil Juridique & Fiscal</h3>
            <p>
              Spécialistes en droit des sociétés OHADA, fiscalité gabonaise et montage de statuts
              pour sécuriser juridiquement votre projet.
            </p>
          </div>

          <div className="team-hub-card">
            <Layers className="size-6 text-primary" />
            <h3>Pôle Centrale d’Achat</h3>
            <p>
              Acheteurs et logisticiens assurant le sourcing direct de matériel informatique,
              mobilier de bureau et consommables industriels.
            </p>
          </div>

          <div className="team-hub-card">
            <Sparkles className="size-6 text-primary" />
            <h3>Pôle Studio & Reprographie</h3>
            <p>
              Techniciens d’impression grand format et designers graphiques pour donner forme à vos
              supports commerciaux et enseignes.
            </p>
          </div>

          <div className="team-hub-card">
            <Users className="size-6 text-primary" />
            <h3>Pôle Digital & Escapade</h3>
            <p>
              Développeurs web et coordinateurs de voyages dédiés à votre visibilité numérique et à
              la mobilité internationale de vos équipes.
            </p>
          </div>
        </div>
      </section>

      {/* 8. RELEVANT TESTIMONIALS (Témoignages concrets) */}
      <section className="testimonials-section" aria-label="Témoignages clients">
        <div className="site-width">
          <h2>Ce que disent nos partenaires.</h2>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <blockquote>
                « La réactivité de la centrale d’achat PRODIX et la conformité des fournitures
                livrées nous font gagner un temps précieux chaque mois. Un interlocuteur de
                confiance pour nos approvisionnements à Libreville. »
              </blockquote>
              <div className="testimonial-author">
                <div className="size-8 rounded-md bg-primary/10 flex items-center justify-center font-bold text-primary text-xs">
                  ML
                </div>
                <div>
                  <strong>M. Lambert</strong>
                  <span>Responsable Moyens Généraux • Secteur maritime</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <blockquote>
                « PRODIX nous a accompagnés de la rédaction des statuts jusqu'à nos premiers bilans
                comptables. Passer de l'informel à une société enregistrée s'est fait sans stress et
                dans le strict respect des règles. »
              </blockquote>
              <div className="testimonial-author">
                <div className="size-8 rounded-md bg-accent/20 flex items-center justify-center font-bold text-accent-foreground text-xs">
                  SN
                </div>
                <div>
                  <strong>Mme Sandra N.</strong>
                  <span>Fondatrice d'entreprise • Distribution & Services</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <blockquote>
                « Supports imprimés impeccables, roll-up de qualité et respect rigoureux des délais
                pour notre assemblée générale à Libreville. Une vraie exigence professionnelle. »
              </blockquote>
              <div className="testimonial-author">
                <div className="size-8 rounded-md bg-primary/10 flex items-center justify-center font-bold text-primary text-xs">
                  AO
                </div>
                <div>
                  <strong>M. Arnaud O.</strong>
                  <span>Chargé de communication • Transport & Transit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ (Questions, Answered) */}
      <section className="faq-section site-width">
        <div className="faq-layout">
          <div>
            <h2 className="text-3xl font-bold mt-2">
              Tout ce que vous devez savoir avant de démarrer.
            </h2>
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
              Une question spécifique sur nos prestations ou votre situation particulière ? Notre
              équipe est à votre écoute pour vous conseiller.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Button asChild className="orange-button self-start">
                <Link to="/contact">Poser une question</Link>
              </Button>
              <a
                href="tel:+24177055848"
                className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline"
              >
                <Phone className="size-3.5" /> Assistance téléphonique directe : 077.05.58.48
              </a>
            </div>
          </div>

          <div className="faq-accordion-list">
            {faqList.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={item.question} className="faq-item">
                  <button
                    type="button"
                    className="faq-question"
                    aria-expanded={isOpen}
                    onClick={() => toggleFaq(idx)}
                  >
                    <span>{item.question}</span>
                    {isOpen ? (
                      <ChevronUp className="size-4 shrink-0 text-accent ml-4" />
                    ) : (
                      <ChevronDown className="size-4 shrink-0 text-muted-foreground ml-4" />
                    )}
                  </button>
                  {isOpen && <p className="faq-answer">{item.answer}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA (Bannière finale à fort impact) */}
      <section className="final-cta-section site-width">
        <div className="final-cta-card">
          <div className="final-cta-content">
            <h2>Prêt à donner une nouvelle dimension à votre entreprise ?</h2>
            <p>
              Prenez contact dès aujourd'hui avec nos conseillers à Libreville pour un premier
              échange sans engagement. Nous bâtissons la réponse sur mesure à vos besoins.
            </p>
          </div>

          <div className="final-cta-actions">
            <Button asChild className="orange-button text-sm px-6 h-12">
              <Link to="/contact">Parlons de votre projet</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="text-xs text-white border-white/20 hover:bg-white/10"
            >
              <a href="tel:+24177055848">
                <Phone className="size-3.5 mr-2" /> Appeler le 077.05.58.48
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
