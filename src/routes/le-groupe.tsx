import { createFileRoute } from "@tanstack/react-router";
import { ContactBand, Partners } from "@/components/site";
import { pageHead } from "@/lib/prodix";
import hero from "@/assets/libreville.jpg";

export const Route = createFileRoute("/le-groupe")({
  head: () =>
    pageHead(
      "Le groupe | Vision et mission de PRODIX Group",
      "Un groupe de services ancré à Libreville, engagé pour des entreprises formelles, solides et durables au Gabon.",
    ),
  component: Group,
});
function Group() {
  return (
    <main>
      <section className="page-title site-width">
        <h1>
          Ancrés au Gabon.
          <br />
          Ambitieux pour l’Afrique.
        </h1>
        <p>Les standards d’un groupe. La proximité d’une équipe locale.</p>
      </section>
      <div className="group-image">
        <img
          src={hero}
          alt="Illustration du littoral et du quartier d’affaires de Libreville"
          width={1920}
          height={1024}
        />
      </div>
      <section className="intro-section site-width">
        <div>
          <h2>
            De l’idée à<br />
            l’entreprise formelle.
          </h2>
        </div>
        <div>
          <p className="large-copy">
            Accompagner les entrepreneurs et les organisations à chaque étape.
          </p>
          <p>
            Créer, structurer, équiper, digitaliser et développer votre activité sous un même toit.
            PRODIX Group réunit cinq lignes de services complémentaires pour vous accompagner
            jusqu’au bout.
          </p>
          <p>
            Notre vision : devenir le groupe panafricain de référence qui transforme les idées en
            entreprises formelles, solides et durables, en commençant par le Gabon.
          </p>
        </div>
      </section>
      <section className="values-section">
        <div className="site-width">
          <h2>
            Des valeurs qui se traduisent
            <br />
            dans nos engagements.
          </h2>
          <div className="values-grid">
            {[
              ["Proximité", "Un entrepreneur accompagné jusqu’au bout, pas un dossier traité."],
              ["Rigueur", "Des processus légaux, des comptes justes, des engagements tenus."],
              [
                "Impact",
                "Une contribution qui se mesure en entreprises créées et en emplois formalisés.",
              ],
              ["Ambition", "Les standards d’un groupe et l’agilité d’une équipe locale."],
            ].map(([name, text], i) => (
              <article key={name}>
                <span className="pillar-number">0{i + 1}</span>
                <h3>{name}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="mission-section site-width">
        <h2>
          Formaliser aujourd’hui.
          <br />
          Construire demain.
        </h2>
        <p>
          Chaque entreprise formalisée, ce sont des emplois déclarés, des impôts qui financent le
          pays, des travailleurs couverts par la CNSS et la CNAMGS, et un entrepreneur qui accède au
          crédit.
        </p>
      </section>
      <Partners />
      <ContactBand />
    </main>
  );
}
