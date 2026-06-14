"use client";

import { useState } from "react";
import { getWhatsAppUrl } from "@/lib/constants";

type FormData = { nom: string; sujet: string; message: string };
type Errors = Partial<Record<keyof FormData, string>>;

const INITIAL: FormData = { nom: "", sujet: "", message: "" };

function validate(d: FormData): Errors {
  const e: Errors = {};
  if (!d.nom.trim()) e.nom = "Votre nom est requis.";
  if (!d.sujet.trim()) e.sujet = "Veuillez indiquer un sujet.";
  if (!d.message.trim()) e.message = "Votre message est requis.";
  return e;
}

function buildMessage(d: FormData): string {
  return [
    `Bonjour TopColis, je m'appelle ${d.nom}.`,
    "",
    `Sujet : ${d.sujet}`,
    "",
    d.message.trim(),
  ].join("\n");
}

/* ─── Sous-composants ────────────────────────────────────────────────────── */

const baseInput =
  "w-full rounded-xl border bg-white px-4 py-3 text-noir text-sm placeholder:text-gris-texte/50 " +
  "focus:outline-none focus:ring-2 focus:ring-rouge/20 focus:border-rouge transition-all";

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-noir">
        {label}
        {required && <span className="text-rouge ml-0.5" aria-hidden="true">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-xs text-rouge" role="alert">{error}</p>
      )}
    </div>
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

export default function ContactForm() {
  const [data, setData] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const set =
    (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const next = { ...data, [field]: e.target.value };
      setData(next);
      if (submitted) setErrors(validate(next));
    };

  const handleSubmit = () => {
    setSubmitted(true);
    const errs = validate(data);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    window.open(getWhatsAppUrl(buildMessage(data)), "_blank", "noopener,noreferrer");
  };

  const hasErrors = submitted && Object.keys(errors).length > 0;
  const errorBorder = "border-rouge/60";
  const normalBorder = "border-border";

  return (
    <div className="bg-white rounded-3xl border border-border p-6 sm:p-8 space-y-5">
      <div>
        <h2 className="font-heading text-xl font-bold text-noir mb-1">
          Envoyer un message
        </h2>
        <p className="text-gris-texte text-sm">
          Votre message s'ouvrira dans WhatsApp, pré-rempli.
        </p>
      </div>

      {hasErrors && (
        <div
          className="flex items-start gap-3 bg-rouge/5 border border-rouge/20 rounded-2xl px-4 py-3"
          role="alert"
          aria-live="polite"
        >
          <span className="text-rouge font-bold text-sm shrink-0">!</span>
          <p className="text-rouge text-sm">Veuillez remplir tous les champs obligatoires.</p>
        </div>
      )}

      <Field label="Votre nom" required error={errors.nom}>
        <input
          className={`${baseInput} ${errors.nom ? errorBorder : normalBorder}`}
          placeholder="Ex : Kokou Afolabi"
          value={data.nom}
          onChange={set("nom")}
          autoComplete="name"
        />
      </Field>

      <Field label="Sujet" required error={errors.sujet}>
        <input
          className={`${baseInput} ${errors.sujet ? errorBorder : normalBorder}`}
          placeholder="Ex : Question sur la livraison, Réclamation…"
          value={data.sujet}
          onChange={set("sujet")}
        />
      </Field>

      <Field label="Votre message" required error={errors.message}>
        <textarea
          className={`${baseInput} ${errors.message ? errorBorder : normalBorder} resize-none`}
          placeholder="Décrivez votre demande en quelques lignes…"
          value={data.message}
          onChange={set("message")}
          rows={4}
        />
      </Field>

      <div className="pt-1 space-y-3">
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full flex items-center justify-center gap-3 bg-whatsapp text-white font-bold px-7 py-4 rounded-full text-base hover:opacity-90 active:scale-95 transition-all shadow-sm"
        >
          <IconWhatsApp />
          Envoyer via WhatsApp
        </button>
        <p className="text-center text-xs text-gris-texte">
          Vos informations ne sont pas stockées — elles seront envoyées uniquement via WhatsApp.
        </p>
      </div>
    </div>
  );
}
