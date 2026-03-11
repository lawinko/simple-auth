import { Translations } from "./en"

const fr: Translations = {
  common: {
    ok: "OK !",
    cancel: "Annuler",
    back: "Retour",
  },
  welcomeScreen: {
    postscript:
      "psst  — Ce n'est probablement pas à quoi ressemble votre application. (À moins que votre designer ne vous ait donné ces écrans, dans ce cas, mettez la en prod !)",
    readyForLaunch: "Votre application, presque prête pour le lancement !",
    exciting: "(ohh, c'est excitant !)",
  },
  errorScreen: {
    title: "Quelque chose s'est mal passé !",
    friendlySubtitle:
      "C'est l'écran que vos utilisateurs verront en production lorsqu'une erreur sera lancée. Vous voudrez personnaliser ce message (situé dans `app/i18n/fr.ts`) et probablement aussi la mise en page (`app/screens/ErrorScreen`). Si vous voulez le supprimer complètement, vérifiez `app/app.tsx` pour le composant <ErrorBoundary>.",
    reset: "RÉINITIALISER L'APPLICATION",
  },
  emptyStateComponent: {
    generic: {
      heading: "Si vide... si triste",
      content:
        "Aucune donnée trouvée pour le moment. Essayez de cliquer sur le bouton pour rafraîchir ou recharger l'application.",
      button: "Essayons à nouveau",
    },
  },
  auth: {
    common: {
      showPassword: "Afficher le mot de passe",
      hidePassword: "Masquer le mot de passe",
    },
    login: {
      title: "Bon retour",
      subtitle: "Connectez-vous avec votre compte pour continuer.",
      emailLabel: "E-mail",
      emailPlaceholder: "vous@exemple.com",
      passwordLabel: "Mot de passe",
      passwordPlaceholder: "Saisissez votre mot de passe",
      submit: "Se connecter",
      goToSignup: "Aller à l'inscription",
    },
    signup: {
      title: "Créer un compte",
      subtitle: "Inscrivez-vous pour accéder à l'écran d'accueil.",
      nameLabel: "Nom",
      namePlaceholder: "Jean Dupont",
      emailLabel: "E-mail",
      emailPlaceholder: "vous@exemple.com",
      passwordLabel: "Mot de passe",
      passwordPlaceholder: "Choisissez un mot de passe sécurisé",
      submit: "S'inscrire",
      goToLogin: "Aller à la connexion",
    },
    home: {
      title: "Accueil",
      subtitle: "Vous êtes connecté.",
      nameLabel: "Nom",
      emailLabel: "E-mail",
      logout: "Se déconnecter",
    },
    validation: {
      invalidEmailFormat: "Format d'e-mail invalide.",
      emailRequired: "L'e-mail est requis.",
      passwordRequired: "Le mot de passe est requis.",
      invalidPasswordFormat: "Format de mot de passe invalide. Utilisez au moins 6 caractères.",
      nameRequired: "Le nom est requis.",
      passwordMinLength: "Le mot de passe doit contenir au moins 6 caractères.",
    },
    errors: {
      incorrectCredentials: "Identifiants incorrects.",
      accountAlreadyExists: "Un compte avec cet e-mail existe déjà.",
    },
  },
}

export default fr
