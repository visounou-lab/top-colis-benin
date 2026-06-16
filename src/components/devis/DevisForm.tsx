"use client";

import { useState } from "react";
import { getWhatsAppUrl } from "@/lib/constants";

/* ─── Types ──────────────────────────────────────────────────────────────── */

type FormData = {
  villeDepart: string;
  destination: string;
  typeColis: string;
  poids: string;
  description: string;
  nom: string;
  telephone: string;
};

type Errors = Partial<Record<keyof FormData, string>>;

const INITIAL: FormData = {
  villeDepart: "",
  destination: "",
  typeColis: "",
  poids: "",
  description: "",
  nom: "",
  telephone: "",
};

/* ─── Validation ─────────────────────────────────────────────────────────── */

function validate(d: FormData): Errors {
  const e: Errors = {};
  if (!d.villeDepart.trim())
    e.villeDepart = "La ville de départ est requise.";
  if (!d.destination.trim())
    e.destination = "La destination est requise.";
  if (!d.typeColis)
    e.typeColis = "Veuillez sélectionner un type de colis.";
  if (!d.poids)
    e.poids = "Veuillez sélectionner un poids approximatif.";
  if (!d.nom.trim())
    e.nom = "Votre nom est requis.";
  if (!d.telephone.trim())
    e.telephone = "Votre numéro est requis.";
  else if (d.telephone.replace(/\D/g, "").length < 8)
    e.telephone = "Numéro de téléphone invalide.";
  return e;
}

/* ─── Génération du message WhatsApp ─────────────────────────────────────── */

function buildMessage(d: FormData): string {
  const lines = [
    "Bonjour Top Colis Bénin, Je souhaite un devis pour un envoi de colis.",
    "",
    "*Détails du colis*",
    `• Ville de départ : ${d.villeDepart}`,
    `• Destination : ${d.destination}`,
    `• Type de colis : ${d.typeColis}`,
    `• Poids approximatif : ${d.poids}`,
  ];
  if (d.description.trim())
    lines.push(`• Description : ${d.description.trim()}`);
  lines.push(
    "",
    "*Mes coordonnées*",
    `• Nom : ${d.nom}`,
    `• Téléphone : ${d.telephone}`,
    "",
    "Merci de me contacter pour finaliser le devis"
  );
  return lines.join("\n");
}

/* ─── Sous-composants UI ─────────────────────────────────────────────────── */

const baseInput =
  "w-full rounded-xl border bg-white px-4 py-3 text-noir text-sm placeholder:text-gris-texte/50 " +
  "focus:outline-none focus:ring-2 focus:ring-rouge/20 focus:border-rouge transition-all";

const errorBorder = "border-rouge/60";
const normalBorder = "border-border";

type FieldProps = {
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: React.ReactNode;
};

function Field({ label, required, hint, error, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-noir">
        {label}
        {required && (
          <span className="text-rouge ml-0.5" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
      {hint && !error && (
        <p className="text-xs text-gris-texte">{hint}</p>
      )}
      {error && (
        <p className="text-xs text-rouge" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
};

function Input({ error, className = "", ...props }: InputProps) {
  return (
    <input
      className={`${baseInput} ${error ? errorBorder : normalBorder} ${className}`}
      {...props}
    />
  );
}

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  error?: boolean;
  children: React.ReactNode;
};

function Select({ error, className = "", children, ...props }: SelectProps) {
  return (
    <select
      className={`${baseInput} ${error ? errorBorder : normalBorder} cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </select>
  );
}

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: boolean;
};

function Textarea({ error, className = "", ...props }: TextareaProps) {
  return (
    <textarea
      className={`${baseInput} ${error ? errorBorder : normalBorder} resize-none ${className}`}
      {...props}
    />
  );
}

function IconWhatsApp() {
  return (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ─── Composant principal ────────────────────────────────────────────────── */

export default function DevisForm() {
  const [data, setData] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const set =
    (field: keyof FormData) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
      const next = { ...data, [field]: e.target.value };
      setData(next);
      /* Re-valide à chaud après la première tentative */
      if (submitted) setErrors(validate(next));
    };

  const handleSubmit = () => {
    setSubmitted(true);
    const errs = validate(data);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const message = buildMessage(data);
    const url = getWhatsAppUrl(message);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const hasErrors = submitted && Object.keys(errors).length > 0;

  return (
    <div className="bg-white rounded-3xl border border-border p-6 sm:p-8 space-y-6">

      {/* Alerte erreurs globale */}
      {hasErrors && (
        <div
          className="flex items-start gap-3 bg-rouge/5 border border-rouge/20 rounded-2xl px-4 py-3"
          role="alert"
          aria-live="polite"
        >
          <span className="text-rouge font-bold text-sm shrink-0">!</span>
          <p className="text-rouge text-sm">
            Veuillez corriger les champs manquants ou invalides avant de continuer.
          </p>
        </div>
      )}

      {/* Ligne 1 — Départ + Destination */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Ville de départ" required error={errors.villeDepart}>
          <Input
            placeholder="Ex : Abomey-Calavi, Cotonou…"
            value={data.villeDepart}
            onChange={set("villeDepart")}
            error={!!errors.villeDepart}
            autoComplete="off"
          />
        </Field>
        <Field label="Ville ou pays de destination" required error={errors.destination}>
          <Input
            placeholder="Ex : Paris, Kinshasa, Lagos…"
            value={data.destination}
            onChange={set("destination")}
            error={!!errors.destination}
            autoComplete="off"
          />
        </Field>
      </div>

      {/* Ligne 2 — Type + Poids */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Type de colis" required error={errors.typeColis}>
          <Select
            value={data.typeColis}
            onChange={set("typeColis")}
            error={!!errors.typeColis}
          >
            <option value="">Sélectionner…</option>
            <option>Documents et courrier</option>
            <option>Électronique et matériel</option>
            <option>Alimentation</option>
            <option>Vêtements et textile</option>
            <option>Médicaments / santé</option>
            <option>Colis général / divers</option>
            <option>Autre</option>
          </Select>
        </Field>
        <Field label="Poids approximatif" required error={errors.poids}>
          <Select
            value={data.poids}
            onChange={set("poids")}
            error={!!errors.poids}
          >
            <option value="">Sélectionner…</option>
            <option>Moins de 1 kg</option>
            <option>1 – 5 kg</option>
            <option>5 – 10 kg</option>
            <option>10 – 20 kg</option>
            <option>Plus de 20 kg</option>
            <option>Je ne sais pas</option>
          </Select>
        </Field>
      </div>

      {/* Ligne 3 — Description */}
      <Field
        label="Description du colis"
        hint="Optionnel — contenu, fragilité, urgence, instructions particulières…"
        error={errors.description}
      >
        <Textarea
          placeholder="Ex : Vêtements emballés sous vide, fragile, à livrer avant le 20…"
          value={data.description}
          onChange={set("description")}
          rows={3}
        />
      </Field>

      {/* Séparateur */}
      <div className="border-t border-border" />

      {/* Ligne 4 — Nom + Téléphone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Votre nom" required error={errors.nom}>
          <Input
            placeholder="Ex : Kokou Afolabi"
            value={data.nom}
            onChange={set("nom")}
            error={!!errors.nom}
            autoComplete="name"
          />
        </Field>
        <Field label="Numéro de téléphone" required error={errors.telephone}>
          <Input
            type="tel"
            placeholder="Ex : +229 97 00 00 00"
            value={data.telephone}
            onChange={set("telephone")}
            error={!!errors.telephone}
            autoComplete="tel"
          />
        </Field>
      </div>

      {/* Bouton d'envoi */}
      <div className="pt-2 space-y-3">
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full flex items-center justify-center gap-3 bg-whatsapp text-white font-bold px-7 py-4 rounded-full text-base hover:opacity-90 active:scale-95 transition-all shadow-sm"
        >
          <IconWhatsApp />
          Recevoir mon devis sur WhatsApp
        </button>
        <p className="text-center text-xs text-gris-texte">
          Vos informations ne sont pas stockées — elles seront envoyées uniquement via WhatsApp.
        </p>
      </div>
    </div>
  );
}
