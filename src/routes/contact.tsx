import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import brochure from "@/assets/brochure.asset.json";
import { pageHead, services } from "@/lib/prodix";
import { Mail, Phone, MapPin, CheckCircle2, Send, Clock, FileText } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead(
      "Contact | Parlons de votre projet avec PRODIX Group Gabon",
      "Contactez PRODIX Group à Libreville : infos@prodixgroup.com ou 077.05.58.48. Consulting, centrale d’achat, reprographie, digital et mobilité.",
    ),
  component: Contact,
});

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

function Contact() {
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    email: "",
    phone: "",
    service: "consulting",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Veuillez renseigner votre nom complet.";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Le nom doit comporter au moins 2 caractères.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Veuillez renseigner votre adresse e-mail.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Veuillez saisir une adresse e-mail valide.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Veuillez renseigner un numéro de téléphone joignable.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Veuillez préciser la nature de votre projet ou besoin.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Le message doit contenir au moins 10 caractères.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    // Simuler le traitement de la demande de contact
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  return (
    <main>
      <section className="page-title site-width">
        <span className="eyebrow">CONTACT</span>
        <h1>
          Parlons de
          <br />
          votre projet.
        </h1>
        <p>
          Une idée à concrétiser, une entreprise à développer ?
          <br />
          Notre équipe à Libreville est à votre écoute pour un accompagnement sur mesure.
        </p>
      </section>

      {/* Direct contact cards */}
      <section className="site-width">
        <div className="contact-cards-grid">
          <div className="contact-card-item">
            <Phone className="size-5 text-primary" />
            <h3>Téléphone direct</h3>
            <p>Disponible du lundi au vendredi</p>
            <a href="tel:+24177055848" className="font-semibold text-foreground">
              077.05.58.48 / +241 77 05 58 48
            </a>
          </div>

          <div className="contact-card-item">
            <Mail className="size-5 text-primary" />
            <h3>Courrier électronique</h3>
            <p>Réponse rapide sous 24h ouvrées</p>
            <a href="mailto:infos@prodixgroup.com" className="font-semibold text-foreground">
              infos@prodixgroup.com
            </a>
          </div>

          <div className="contact-card-item">
            <MapPin className="size-5 text-primary" />
            <h3>Siège & Présence locale</h3>
            <p>Libreville, République Gabonaise</p>
            <span className="font-semibold text-foreground">
              Centre-ville & Quartiers d'affaires
            </span>
          </div>
        </div>
      </section>

      {/* Interactive Form & Info section */}
      <section className="contact-section site-width">
        <div>
          <span className="eyebrow">UN PREMIER ÉCHANGE SANS ENGAGEMENT</span>
          <h2>
            Transmettez-nous
            <br />
            votre besoin.
          </h2>
          <p>
            Remplissez ce formulaire pour nous présenter les contours de votre activité. Nous
            analysons votre demande et vous répondons avec une solution adaptée.
          </p>

          <div className="contact-details mt-8">
            <div>
              <span className="eyebrow flex items-center gap-1">
                <Clock className="size-3" /> HORAIRES D'OUVERTURE
              </span>
              <p className="text-base text-foreground font-medium">
                Lundi - Vendredi : 08h00 - 17h30
              </p>
            </div>
            <div>
              <span className="eyebrow flex items-center gap-1">
                <FileText className="size-3" /> DEMANDE DE DEVIS
              </span>
              <p className="text-base text-foreground font-medium">
                Devis clair et transparent sous 48h
              </p>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          {submitted ? (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center size-12 rounded-md bg-primary/10 text-primary mb-4">
                <CheckCircle2 className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Message bien reçu !</h3>
              <p className="text-sm text-muted-foreground mt-2 max-w-sm mx-auto leading-relaxed">
                Merci {formData.fullName}. Notre équipe commerciale et consulting prendra contact
                avec vous dans les plus brefs délais.
              </p>
              <Button
                variant="outline"
                className="mt-6"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    service: "consulting",
                    message: "",
                  });
                }}
              >
                Envoyer un autre message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="contact-form-group">
                <label htmlFor="fullName">Nom complet ou raison sociale *</label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Ex : Paul MBA / Société ABC"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  aria-invalid={!!errors.fullName}
                  aria-describedby={errors.fullName ? "fullName-error" : undefined}
                />
                {errors.fullName && (
                  <span id="fullName-error" className="contact-field-error">
                    {errors.fullName}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="contact-form-group">
                  <label htmlFor="email">Adresse e-mail *</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="contact@exemple.ga"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <span id="email-error" className="contact-field-error">
                      {errors.email}
                    </span>
                  )}
                </div>

                <div className="contact-form-group">
                  <label htmlFor="phone">Numéro de téléphone *</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+241 77 00 00 00"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                  />
                  {errors.phone && (
                    <span id="phone-error" className="contact-field-error">
                      {errors.phone}
                    </span>
                  )}
                </div>
              </div>

              <div className="contact-form-group">
                <label htmlFor="service">Service concerné</label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  {services.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.pillar})
                    </option>
                  ))}
                  <option value="autre">Autre demande / Projet global</option>
                </select>
              </div>

              <div className="contact-form-group">
                <label htmlFor="message">Votre message ou description du projet *</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Décrivez votre projet, vos délais ou vos questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <span id="message-error" className="contact-field-error">
                    {errors.message}
                  </span>
                )}
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
                <Button
                  type="submit"
                  className="orange-button w-full sm:w-auto"
                  disabled={isSubmitting}
                >
                  <Send className="size-4 mr-2" />
                  {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
                </Button>
                <Button asChild variant="ghost" className="text-xs text-muted-foreground">
                  <a href="mailto:infos@prodixgroup.com?subject=Contact%20PRODIX%20Group">
                    Ou nous écrire par e-mail direct
                  </a>
                </Button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Brochure Section */}
      <section className="brochure-section">
        <div className="site-width">
          <div>
            <span className="eyebrow">POUR MIEUX NOUS CONNAÎTRE</span>
            <h2>Le groupe, en quelques pages.</h2>
            <p>Notre mission, nos expertises et nos engagements.</p>
          </div>
          <Button asChild variant="outline">
            <a href={brochure.url} target="_blank" rel="noreferrer">
              Consulter la plaquette PDF
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}
