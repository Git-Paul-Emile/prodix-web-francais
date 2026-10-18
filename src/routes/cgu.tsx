import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/prodix";
import { Button } from "@/components/ui/button";
import { FileText, Shield, MapPin, Mail, Phone, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/cgu")({
  head: () =>
    pageHead(
      "Conditions Générales d’Utilisation | PRODIX Group Gabon",
      "Conditions Générales d’Utilisation (CGU) du site officiel de PRODIX Group à Libreville, Gabon : règles d’accès, propriété intellectuelle et responsabilités.",
    ),
  component: CGU,
});

function CGU() {
  return (
    <main>
      <section className="page-title site-width">
        <h1>Conditions Générales d’Utilisation</h1>
        <p>
          Règles d’utilisation du site web officiel de PRODIX Group et conditions applicables aux
          échanges et demandes de prestations.
        </p>
      </section>

      <section className="legal-content site-width">
        <div className="legal-grid">
          <div className="legal-body">
            <article className="legal-section">
              <div className="legal-heading-group">
                <span className="pillar-number">01</span>
                <h2>Objet et champ d’application</h2>
              </div>
              <p>
                Les présentes Conditions Générales d’Utilisation (ci-après « CGU ») encadrent
                l’accès et l’utilisation du site internet édité par <strong>PRODIX Group</strong>.
              </p>
              <p>
                Tout internaute accédant ou navigant sur le site reconnaît avoir pris connaissance
                des présentes conditions et les accepte sans réserve.
              </p>
            </article>

            <article className="legal-section">
              <div className="legal-heading-group">
                <span className="pillar-number">02</span>
                <h2>Informations légales et éditeur du site</h2>
              </div>
              <p>Le site est édité et exploité par PRODIX Group :</p>
              <div className="legal-contact-card">
                <p>
                  <strong>PRODIX Group</strong>
                </p>
                <p className="text-muted-foreground text-xs mt-1">
                  Société de services aux entreprises et aux particuliers
                </p>
                <p className="flex items-center gap-2 mt-2">
                  <MapPin className="size-4 text-primary" /> Siège social : Libreville, République
                  Gabonaise
                </p>
                <p className="flex items-center gap-2 mt-1">
                  <Mail className="size-4 text-primary" /> E-mail : infos@prodixgroup.com
                </p>
                <p className="flex items-center gap-2 mt-1">
                  <Phone className="size-4 text-primary" /> Téléphone : +241 77 05 58 48
                </p>
              </div>
            </article>

            <article className="legal-section">
              <div className="legal-heading-group">
                <span className="pillar-number">03</span>
                <h2>Description des activités et services présentés</h2>
              </div>
              <p>
                Le site PRODIX Group a pour vocation de présenter les activités et expertises du
                groupe au Gabon et en Afrique centrale, réparties autour de cinq grands pôles :
              </p>
              <ul>
                <li>
                  <strong>Consulting et formalisation :</strong> accompagnement juridique, création
                  d'entreprises, tenue comptable, fiscalité et conformité OHADA.
                </li>
                <li>
                  <strong>Centrale d’achat :</strong> fournitures de bureau, matériel informatique,
                  équipements industriels et consommables.
                </li>
                <li>
                  <strong>Reprographie et imprimerie :</strong> conception, impression grand format,
                  goodies, signalétique et papeterie professionnelle.
                </li>
                <li>
                  <strong>Digital :</strong> identité de marque, création de sites vitrines, réseaux
                  sociaux et applications mobiles.
                </li>
                <li>
                  <strong>Escapade et mobilité :</strong> conciergerie de voyage, assistance visas,
                  démarches consulaires et logistique de déplacement.
                </li>
              </ul>
              <p>
                Les informations, tarifs indicatifs ou visuels présents sur le site sont fournis à
                titre d’information générale et n’ont pas de valeur contractuelle unilatérale sans
                devis formel validé.
              </p>
            </article>

            <article className="legal-section">
              <div className="legal-heading-group">
                <span className="pillar-number">04</span>
                <h2>Demandes de devis et relations commerciales</h2>
              </div>
              <p>
                Toute commande ou engagement de prestation de services fait l’objet d’un devis
                détaillé établi préalablement par les équipes de PRODIX Group. Les conditions
                particulières propres à chaque prestation prévalent sur les présentes conditions
                d'utilisation générale du site.
              </p>
            </article>

            <article className="legal-section">
              <div className="legal-heading-group">
                <span className="pillar-number">05</span>
                <h2>Propriété intellectuelle</h2>
              </div>
              <p>
                L’ensemble des éléments constitutifs du présent site (textes, logos, photographies
                authentiques, charte graphique, mise en page, icônes et code informatique) constitue
                des œuvres protégées par la législation gabonaise et internationale relative aux
                droits d’auteur et à la propriété intellectuelle.
              </p>
              <p>
                La marque PRODIX Group ainsi que les logos associés sont des marques protégées.
                Toute reproduction, représentation, diffusion ou adaptation totale ou partielle de
                ces éléments sans accord préalable et écrit de PRODIX Group est formellement
                interdite et constitue une contrefaçon sanctionnée par la loi.
              </p>
            </article>

            <article className="legal-section">
              <div className="legal-heading-group">
                <span className="pillar-number">06</span>
                <h2>Engagements et responsabilité de l’utilisateur</h2>
              </div>
              <p>
                L’utilisateur s’engage à utiliser le site de manière loyale et conforme aux lois et
                règlements en vigueur. Il s’interdit formellement :
              </p>
              <ul>
                <li>
                  D’entraver ou de tenter d'entraver le fonctionnement normal du site ou de ses
                  serveurs ;
                </li>
                <li>
                  De collecter de manière automatisée des données ou adresses publiées sur le site ;
                </li>
                <li>
                  D’introduire des virus, codes malveillants ou tout autre composant susceptible de
                  compromettre l’intégrité du service ;
                </li>
                <li>
                  De soumettre des informations trompeuses, usurpées ou diffamatoires via les
                  formulaires de contact.
                </li>
              </ul>
            </article>

            <article className="legal-section">
              <div className="legal-heading-group">
                <span className="pillar-number">07</span>
                <h2>Disponibilité du site et limitation de responsabilité</h2>
              </div>
              <p>
                PRODIX Group s’efforce de maintenir le site accessible 24h/24 et 7j/7. Toutefois,
                l’accès au site peut être interrompu pour des raisons de maintenance, d’incident
                technique ou d’événement de force majeure, sans que la responsabilité de PRODIX
                Group ne puisse être engagée.
              </p>
            </article>

            <article className="legal-section">
              <div className="legal-heading-group">
                <span className="pillar-number">08</span>
                <h2>Liens hypertextes</h2>
              </div>
              <p>
                Le site peut contenir des liens vers des sites tiers (partenaires officiels,
                organismes institutionnels). PRODIX Group n’exerce aucun contrôle sur le contenu de
                ces sites et décline toute responsabilité quant à leurs pratiques ou contenus.
              </p>
            </article>

            <article className="legal-section">
              <div className="legal-heading-group">
                <span className="pillar-number">09</span>
                <h2>Droit applicable et juridiction compétente</h2>
              </div>
              <p>
                Les présentes CGU sont soumises et régies par le droit de la République Gabonaise.
              </p>
              <p>
                En cas de différend ou de litige relatif à l’interprétation, la validité ou
                l’exécution des présentes, les parties privilégieront une solution amiable. À défaut
                d’accord amiable, le litige sera soumis aux juridictions matériellement et
                territorialement compétentes de Libreville, Gabon.
              </p>
              <p className="text-xs text-muted-foreground mt-4">
                Dernière révision des CGU : Octobre 2026.
              </p>
            </article>
          </div>

          <aside className="legal-sidebar">
            <div className="legal-summary-card">
              <div className="flex items-center gap-2 mb-3 text-primary">
                <Shield className="size-5" />
                <h3 className="font-semibold text-sm">Transparence juridique</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Ce site officiel reflète les engagements d’intégrité, de rigueur légale et de
                proximité professionnelle de PRODIX Group au Gabon.
              </p>
              <div className="border-t border-border mt-4 pt-4">
                <h4 className="text-xs font-semibold mb-2">Un projet d’entreprise ?</h4>
                <Button asChild size="sm" className="w-full">
                  <Link to="/contact">Prendre rendez-vous</Link>
                </Button>
              </div>
            </div>

            <div className="legal-nav-card mt-4">
              <h4 className="text-xs font-semibold mb-2">Protection des données</h4>
              <Link to="/politique-de-confidentialite" className="legal-nav-link">
                <FileText className="size-4" />
                <span>Politique de confidentialité</span>
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
