"use client";

import { useActionState, useEffect } from "react";
import { submitContactForm, type ContactFormState } from "@/app/contact/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const initialState: ContactFormState = {};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  // Réinitialiser le formulaire après succès
  useEffect(() => {
    if (state.success) {
      const form = document.querySelector("form") as HTMLFormElement;
      form?.reset();
    }
  }, [state.success]);

  return (
    <form action={formAction} className="space-y-6">
      {/* Message de succès */}
      {state.success && (
        <div className="flex items-start gap-3 rounded-lg border border-primary/50 bg-primary/10 p-4">
          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
          <p className="text-sm text-foreground">{state.message}</p>
        </div>
      )}

      {/* Message d'erreur global */}
      {state.success === false && (
        <div className="flex items-start gap-3 rounded-lg border border-destructive/50 bg-destructive/10 p-4">
          <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-destructive" />
          <p className="text-sm text-foreground">{state.message}</p>
        </div>
      )}

      {/* Champ honeypot (caché) */}
      <input
        type="text"
        name="website"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Nom */}
      <div className="space-y-2">
        <Label htmlFor="nom">
          Nom <span className="text-destructive">*</span>
        </Label>
        <Input
          id="nom"
          name="nom"
          type="text"
          required
          placeholder="Votre nom"
          disabled={isPending}
          aria-invalid={state.errors?.nom ? "true" : "false"}
        />
        {state.errors?.nom && (
          <p className="text-sm text-destructive">{state.errors.nom[0]}</p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email">
          Email <span className="text-destructive">*</span>
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="votre@email.com"
          disabled={isPending}
          aria-invalid={state.errors?.email ? "true" : "false"}
        />
        {state.errors?.email && (
          <p className="text-sm text-destructive">{state.errors.email[0]}</p>
        )}
      </div>

      {/* Téléphone */}
      <div className="space-y-2">
        <Label htmlFor="telephone">Téléphone (optionnel)</Label>
        <Input
          id="telephone"
          name="telephone"
          type="tel"
          placeholder="06 12 34 56 78"
          disabled={isPending}
        />
      </div>

      {/* Activité */}
      <div className="space-y-2">
        <Label htmlFor="activite">
          Votre activité <span className="text-destructive">*</span>
        </Label>
        <Input
          id="activite"
          name="activite"
          type="text"
          required
          placeholder="Ex: Plombier, Restaurant, etc."
          disabled={isPending}
          aria-invalid={state.errors?.activite ? "true" : "false"}
        />
        {state.errors?.activite && (
          <p className="text-sm text-destructive">{state.errors.activite[0]}</p>
        )}
      </div>

      {/* Offre */}
      <div className="space-y-2">
        <Label htmlFor="offre">
          Offre souhaitée <span className="text-destructive">*</span>
        </Label>
        <Select name="offre" required disabled={isPending}>
          <SelectTrigger id="offre">
            <SelectValue placeholder="Sélectionnez une offre" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="essentiel">Pack Essentiel (790€)</SelectItem>
            <SelectItem value="pro">Pack Pro (1490€)</SelectItem>
            <SelectItem value="sur-mesure">Pack Sur-mesure</SelectItem>
            <SelectItem value="ne-sais-pas">Je ne sais pas encore</SelectItem>
          </SelectContent>
        </Select>
        {state.errors?.offre && (
          <p className="text-sm text-destructive">{state.errors.offre[0]}</p>
        )}
      </div>

      {/* Budget */}
      <div className="space-y-2">
        <Label htmlFor="budget">Budget estimé (optionnel)</Label>
        <Select name="budget" disabled={isPending}>
          <SelectTrigger id="budget">
            <SelectValue placeholder="Sélectionnez un budget" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="moins-1000">Moins de 1000€</SelectItem>
            <SelectItem value="1000-2000">1000€ - 2000€</SelectItem>
            <SelectItem value="plus-2000">Plus de 2000€</SelectItem>
            <SelectItem value="ne-sais-pas">Je ne sais pas</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message">
          Votre message <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Décrivez-nous votre projet..."
          disabled={isPending}
          aria-invalid={state.errors?.message ? "true" : "false"}
        />
        {state.errors?.message && (
          <p className="text-sm text-destructive">{state.errors.message[0]}</p>
        )}
      </div>

      {/* Bouton de soumission */}
      <Button type="submit" size="lg" className="w-full" disabled={isPending}>
        {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {isPending ? "Envoi en cours..." : "Envoyer le message"}
      </Button>

      <p className="text-xs text-muted-foreground">
        Les champs marqués d'un <span className="text-destructive">*</span> sont obligatoires.
      </p>
    </form>
  );
}
