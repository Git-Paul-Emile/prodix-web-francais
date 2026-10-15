import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/prodix";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Lock, Mail, Phone, MapPin, Eye, FileCheck } from "lucide-react";

export const Route = createFileRoute("/politique-de-confidentialite")({
  head: () =>
    pageHead(
      "Politique de confidentialité | PRODIX Group Gabon",
      "Protection de vos données personnelles, respect de la vie privée et conformité réglementaire chez PRODIX Group à Libreville, Gabon.",
    ),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <main>
      <section className="page-title site-width">
        <span className="eyebrow">CONFIDENTIALITÉ ET PROTECTION DES DONNÉES</span>
        <h1>Politique de confidentialité</h1>
        <p>
          PRODIX Group s’engage à protéger la vie privée des utilisateurs de son site et de ses
          clients.
        </p>
      </section>

      <section className="legal-content site-width">
        <div className="legal-grid">
          <div className="legal-body">
            <article className="legal-section">
              <div className="legal-heading-group">
                <span className="pillar-number">01</span>
                <h2>Responsable du traitement</h2>
              </div>
              <p>
                Les données à caractère personnel collectées sur ce site sont traitées par la
                société <strong>PRODIX Group</strong>, société établie à Libreville, République
                Gabonaise.
              </p>
              <div className="legal-contact-card">
                <p>
                  <strong>PRODIX Group</strong>
                </p>
                <p className="flex items-center gap-2 mt-2">
                  <MapPin className="size-4 text-primary" /> Libreville, Gabon
                </p>
                <p className="flex items-center gap-2 mt-1">
                  <Mail className="size-4 text-primary" /> infos@prodixgroup.com
                </p>
                <p className="flex items-center gap-2 mt-1">
                  <Phone className="size-4 text-primary" /> +241 77 05 58 48
                </p>
              </div>
            </article>

            <article className="legal-section">
              <div className="legal-heading-group">
                <span className="pillar-number">02</span>
                <h2>Données personnelles collectées</h2>
              </div>
              <p>
                Nous limitons la collecte aux informations strictement nécessaires à la prise de
                contact et à l’exécution de nos prestations :
              </p>
              <ul>
                <li>
                  <strong>Données d’identification et de contact :</strong> nom, prénom, adresse
                  e-mail, numéro de téléphone, nom de votre entreprise ou organisation.
                </li>
                <li>
                  <strong>Informations de projet :</strong> nature de vos besoins (consulting
                  juridique ou fiscal, centrale d'achat, reprographie, digital, mobilité), devis
                  demandés et messages transmis.
                </li>
                <li>
                  <strong>Données techniques de navigation :</strong> adresse IP anonymisée, type de
                  navigateur et pages consultées, uniquement à des fins de mesure d'audience et de
                  sécurité du site.
                </li>
              </ul>
            </article>

            <article className="legal-section">
              <div className="legal-heading-group">
                <span className="pillar-number">03</span>
                <h2>Finalités et bases légales du traitement</h2>
              </div>
              <p>Vos données sont traitées pour des objectifs précis et légitimes :</p>
              <ul>
                <li>
                  <strong>Gestion des demandes de contact et devis :</strong> traitement de vos
                  messages, étude de vos projets d'entreprise et retours personnalisés (base :
                  relation précontractuelle).
                </li>
                <li>
                  <strong>Exécution de nos prestations :</strong> accompagnement à la formalisation,
                  commandes de fournitures ou d'équipements, conception graphique ou services
                  digitaux (base : exécution du contrat).
                </li>
                <li>
                  <strong>Respect des obligations légales :</strong> obligations comptables,
                  fiscales et administratives en vigueur au Gabon.
                </li>
              </ul>
              <p>
                En aucun cas PRODIX Group ne commercialise, ne loue ni ne cède vos données à des
                tiers à des fins publicitaires.
              </p>
            </article>

            <article className="legal-section">
              <div className="legal-heading-group">
                <span className="pillar-number">04</span>
                <h2>Durée de conservation des données</h2>
              </div>
              <p>
                Nous conservons vos données uniquement le temps nécessaire à la réalisation des
                finalités pour lesquelles elles ont été recueillies :
              </p>
              <ul>
                <li>
                  <strong>Données de prospection et de contact :</strong> 3 ans à compter du dernier
                  échange sans engagement de votre part.
                </li>
                <li>
                  <strong>Données clients et documents contractuels :</strong> durée de la relation
                  commerciale augmentée des délais légaux de conservation et de prescription
                  applicables au Gabon.
                </li>
              </ul>
            </article>

            <article className="legal-section">
              <div className="legal-heading-group">
                <span className="pillar-number">05</span>
                <h2>Sécurité des données</h2>
              </div>
              <p>
                PRODIX Group met en œuvre des mesures techniques et organisationnelles appropriées
                pour assurer la confidentialité, l’intégrité et la disponibilité de vos données.
                L’accès aux informations est réservé aux collaborateurs habilités soumis à une
                obligation stricte de confidentialité.
              </p>
            </article>

            <article className="legal-section">
              <div className="legal-heading-group">
                <span className="pillar-number">06</span>
                <h2>Vos droits et recours</h2>
              </div>
              <p>
                Conformément à la réglementation sur la protection des données personnelles, vous
                disposez des droits suivants concernant vos informations :
              </p>
              <ul>
                <li>Droit d’accès et d'obtention d'une copie de vos données ;</li>
                <li>Droit de rectification de toute donnée inexacte ou incomplète ;</li>
                <li>
                  Droit à l’effacement des données lorsque leur conservation n'est plus justifiée ;
                </li>
                <li>Droit d’opposition ou de limitation du traitement de vos données.</li>
              </ul>
              <p>
                Pour exercer ces droits, vous pouvez contacter notre équipe par e-mail à{" "}
                <a
                  href="mailto:infos@prodixgroup.com"
                  className="text-primary font-medium hover:underline"
                >
                  infos@prodixgroup.com
                </a>{" "}
                ou par courrier à Libreville, Gabon, en joignant un justificatif d'identité valide.
              </p>
            </article>

            <article className="legal-section">
              <div className="legal-heading-group">
                <span className="pillar-number">07</span>
                <h2>Cookies et traceurs</h2>
              </div>
              <p>
                Ce site utilise uniquement des traceurs strictement nécessaires à son bon
                fonctionnement technique et à la navigation sécurisée. Aucun profilage publicitaire
                n’est réalisé sur notre plateforme.
              </p>
            </article>

            <article className="legal-section">
              <div className="legal-heading-group">
                <span className="pillar-number">08</span>
                <h2>Mise à jour de la présente politique</h2>
              </div>
              <p>
                PRODIX Group peut modifier cette politique pour refléter l’évolution de ses services
                ou des exigences réglementaires. La date de dernière mise à jour est mentionnée
                ci-dessous.
              </p>
              <p className="text-xs text-muted-foreground mt-4">
                Dernière mise à jour : Octobre 2026.
              </p>
            </article>
          </div>

          <aside className="legal-sidebar">
            <div className="legal-summary-card">
              <div className="flex items-center gap-2 mb-3 text-primary">
                <ShieldCheck className="size-5" />
                <h3 className="font-semibold text-sm">Engagement de confiance</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Vos informations restent strictement confidentielles au sein de PRODIX Group. Aucune
                revente de données, aucune publicité intrusive.
              </p>
              <div className="border-t border-border mt-4 pt-4">
                <h4 className="text-xs font-semibold mb-2">Une question sur vos données ?</h4>
                <Button asChild size="sm" className="w-full">
                  <Link to="/contact">Contacter notre équipe</Link>
                </Button>
              </div>
            </div>

            <div className="legal-nav-card mt-4">
              <h4 className="text-xs font-semibold mb-2">Documents juridiques</h4>
              <Link to="/cgu" className="legal-nav-link">
                <FileCheck className="size-4" />
                <span>Conditions Générales d’Utilisation</span>
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
