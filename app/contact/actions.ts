"use server";

import { z } from "zod";

// Schéma de validation du formulaire
const ContactSchema = z.object({
  nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  telephone: z.string().optional(),
  activite: z.string().min(2, "Veuillez indiquer votre activité"),
  offre: z.enum(["essentiel", "pro", "sur-mesure", "ne-sais-pas"]),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
  budget: z.enum(["moins-1000", "1000-2000", "plus-2000", "ne-sais-pas"]).optional(),
  honeypot: z.string().optional(), // Protection anti-spam
});

export type ContactFormState = {
  success?: boolean;
  message?: string;
  errors?: {
    nom?: string[];
    email?: string[];
    telephone?: string[];
    activite?: string[];
    offre?: string[];
    message?: string[];
    budget?: string[];
  };
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  try {
    // Protection anti-spam (honeypot)
    const honeypot = formData.get("website");
    if (honeypot) {
      // Si le champ honeypot est rempli, c'est probablement un bot
      return {
        success: false,
        message: "Une erreur s'est produite. Veuillez réessayer.",
      };
    }

    // Validation des données
    const data = {
      nom: formData.get("nom"),
      email: formData.get("email"),
      telephone: formData.get("telephone") || undefined,
      activite: formData.get("activite"),
      offre: formData.get("offre"),
      message: formData.get("message"),
      budget: formData.get("budget") || undefined,
    };

    const validatedData = ContactSchema.parse(data);

    // Vérifier si Resend est configuré
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.warn(
        "RESEND_API_KEY n'est pas configuré. Le formulaire est fonctionnel mais les emails ne seront pas envoyés."
      );

      // Log les données pour le développement
      console.log("Formulaire soumis (mode dev):", {
        ...validatedData,
        timestamp: new Date().toISOString(),
      });

      return {
        success: true,
        message:
          "Votre message a été reçu ! (Mode développement - configurez RESEND_API_KEY pour envoyer des vrais emails)",
      };
    }

    // Envoyer l'email via Resend
    const { Resend } = await import("resend");
    const resend = new Resend(resendApiKey);

    const emailContent = `
      <h2>Nouvelle demande de contact</h2>
      <p><strong>Nom :</strong> ${validatedData.nom}</p>
      <p><strong>Email :</strong> ${validatedData.email}</p>
      ${validatedData.telephone ? `<p><strong>Téléphone :</strong> ${validatedData.telephone}</p>` : ""}
      <p><strong>Activité :</strong> ${validatedData.activite}</p>
      <p><strong>Offre souhaitée :</strong> ${validatedData.offre}</p>
      ${validatedData.budget ? `<p><strong>Budget :</strong> ${validatedData.budget}</p>` : ""}
      <p><strong>Message :</strong></p>
      <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
    `;

    await resend.emails.send({
      from: "Contact Site <onboarding@resend.dev>", // À remplacer par votre domaine vérifié
      to: "brice.laurent.dev@gmail.com",
      replyTo: validatedData.email,
      subject: `Nouveau contact : ${validatedData.nom} - ${validatedData.offre}`,
      html: emailContent,
    });

    return {
      success: true,
      message:
        "Merci pour votre message ! Je vous réponds sous 24-48h.",
    };
  } catch (error) {
    console.error("Erreur lors de la soumission du formulaire:", error);

    // Erreurs de validation Zod
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Certains champs sont invalides. Veuillez vérifier le formulaire.",
        errors: error.flatten().fieldErrors as ContactFormState["errors"],
      };
    }

    // Autres erreurs
    return {
      success: false,
      message:
        "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer ou me contacter directement par email.",
    };
  }
}
