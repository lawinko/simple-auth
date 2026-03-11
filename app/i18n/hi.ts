import { Translations } from "./en"

const hi: Translations = {
  common: {
    ok: "ठीक है!",
    cancel: "रद्द करें",
    back: "वापस",
  },
  welcomeScreen: {
    postscript:
      "psst - शायद आपका ऐप ऐसा नहीं दिखता है। (जब तक कि आपके डिजाइनर ने आपको ये स्क्रीन नहीं दी हों, और उस स्थिति में, इसे लॉन्च करें!)",
    readyForLaunch: "आपका ऐप, लगभग लॉन्च के लिए तैयार है!",
    exciting: "(ओह, यह रोमांचक है!)",
  },
  errorScreen: {
    title: "कुछ गलत हो गया!",
    friendlySubtitle:
      "यह वह स्क्रीन है जो आपके उपयोगकर्ता संचालन में देखेंगे जब कोई त्रुटि होगी। आप इस संदेश को बदलना चाहेंगे (जो `app/i18n/hi.ts` में स्थित है) और शायद लेआउट भी (`app/screens/ErrorScreen`)। यदि आप इसे पूरी तरह से हटाना चाहते हैं, तो `app/app.tsx` में <ErrorBoundary> कंपोनेंट की जांच करें।",
    reset: "ऐप रीसेट करें",
  },
  emptyStateComponent: {
    generic: {
      heading: "इतना खाली... इतना उदास",
      content: "अभी तक कोई डेटा नहीं मिला। रीफ्रेश करने या ऐप को पुनः लोड करने के लिए बटन दबाएं।",
      button: "चलो फिर से कोशिश करते हैं",
    },
  },
  auth: {
    common: {
      showPassword: "पासवर्ड दिखाएं",
      hidePassword: "पासवर्ड छुपाएं",
    },
    login: {
      title: "वापसी पर स्वागत है",
      subtitle: "जारी रखने के लिए अपने खाते से लॉगिन करें।",
      emailLabel: "ईमेल",
      emailPlaceholder: "you@example.com",
      passwordLabel: "पासवर्ड",
      passwordPlaceholder: "अपना पासवर्ड दर्ज करें",
      submit: "लॉगिन",
      goToSignup: "साइनअप पर जाएं",
    },
    signup: {
      title: "खाता बनाएं",
      subtitle: "होम स्क्रीन तक पहुंचने के लिए अपनी जानकारी से साइनअप करें।",
      nameLabel: "नाम",
      namePlaceholder: "John Doe",
      emailLabel: "ईमेल",
      emailPlaceholder: "you@example.com",
      passwordLabel: "पासवर्ड",
      passwordPlaceholder: "एक सुरक्षित पासवर्ड चुनें",
      submit: "साइनअप",
      goToLogin: "लॉगिन पर जाएं",
    },
    home: {
      title: "होम",
      subtitle: "आप लॉगिन हैं।",
      nameLabel: "नाम",
      emailLabel: "ईमेल",
      logout: "लॉगआउट",
    },
    validation: {
      invalidEmailFormat: "अमान्य ईमेल प्रारूप।",
      emailRequired: "ईमेल आवश्यक है।",
      passwordRequired: "पासवर्ड आवश्यक है।",
      invalidPasswordFormat: "अमान्य पासवर्ड प्रारूप। कम से कम 6 अक्षर उपयोग करें।",
      nameRequired: "नाम आवश्यक है।",
      passwordMinLength: "पासवर्ड कम से कम 6 अक्षर का होना चाहिए।",
    },
    errors: {
      incorrectCredentials: "गलत क्रेडेंशियल्स।",
      accountAlreadyExists: "इस ईमेल के साथ खाता पहले से मौजूद है।",
    },
  },
}

export default hi
