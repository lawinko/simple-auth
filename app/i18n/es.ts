import { Translations } from "./en"

const es: Translations = {
  common: {
    ok: "OK",
    cancel: "Cancelar",
    back: "Volver",
  },
  welcomeScreen: {
    postscript:
      "psst — Esto probablemente no es cómo se va a ver tu app. (A menos que tu diseñador te haya enviado estas pantallas, y en ese caso, ¡lánzalas en producción!)",
    readyForLaunch: "Tu app, casi lista para su lanzamiento",
    exciting: "(¡ohh, esto es emocionante!)",
  },
  errorScreen: {
    title: "¡Algo salió mal!",
    friendlySubtitle:
      "Esta es la pantalla que verán tus usuarios en producción cuando haya un error. Vas a querer personalizar este mensaje (que está ubicado en `app/i18n/es.ts`) y probablemente también su diseño (`app/screens/ErrorScreen`). Si quieres eliminarlo completamente, revisa `app/app.tsx` y el componente <ErrorBoundary>.",
    reset: "REINICIA LA APP",
  },
  emptyStateComponent: {
    generic: {
      heading: "Muy vacío... muy triste",
      content:
        "No se han encontrado datos por el momento. Intenta darle clic en el botón para refrescar o recargar la app.",
      button: "Intentemos de nuevo",
    },
  },
  auth: {
    common: {
      showPassword: "Mostrar contraseña",
      hidePassword: "Ocultar contraseña",
    },
    login: {
      title: "Bienvenido de nuevo",
      subtitle: "Inicia sesión con tu cuenta para continuar.",
      emailLabel: "Correo electrónico",
      emailPlaceholder: "tu@ejemplo.com",
      passwordLabel: "Contraseña",
      passwordPlaceholder: "Ingresa tu contraseña",
      submit: "Iniciar sesión",
      goToSignup: "Ir a registro",
    },
    signup: {
      title: "Crear cuenta",
      subtitle: "Regístrate con tus datos para acceder a la pantalla principal.",
      nameLabel: "Nombre",
      namePlaceholder: "Juan Pérez",
      emailLabel: "Correo electrónico",
      emailPlaceholder: "tu@ejemplo.com",
      passwordLabel: "Contraseña",
      passwordPlaceholder: "Elige una contraseña segura",
      submit: "Registrarse",
      goToLogin: "Ir a inicio de sesión",
    },
    home: {
      title: "Inicio",
      subtitle: "Has iniciado sesión.",
      nameLabel: "Nombre",
      emailLabel: "Correo electrónico",
      logout: "Cerrar sesión",
    },
    validation: {
      invalidEmailFormat: "Formato de correo electrónico no válido.",
      emailRequired: "El correo electrónico es obligatorio.",
      passwordRequired: "La contraseña es obligatoria.",
      invalidPasswordFormat: "Formato de contraseña no válido. Usa al menos 6 caracteres.",
      nameRequired: "El nombre es obligatorio.",
      passwordMinLength: "La contraseña debe tener al menos 6 caracteres.",
    },
    errors: {
      incorrectCredentials: "Credenciales incorrectas.",
      accountAlreadyExists: "Ya existe una cuenta con este correo electrónico.",
    },
  },
}

export default es
