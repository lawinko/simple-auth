import { Translations } from "./en"

const ar: Translations = {
  common: {
    ok: "نعم",
    cancel: "حذف",
    back: "خلف",
  },
  welcomeScreen: {
    postscript:
      "ربما لا يكون هذا هو الشكل الذي يبدو عليه تطبيقك مالم يمنحك المصمم هذه الشاشات وشحنها في هذه الحالة",
    readyForLaunch: "تطبيقك تقريبا جاهز للتشغيل",
    exciting: "اوه هذا مثير",
  },
  errorScreen: {
    title: "هناك خطأ ما",
    friendlySubtitle:
      "هذه هي الشاشة التي سيشاهدها المستخدمون في عملية الانتاج عند حدوث خطأ. سترغب في تخصيص هذه الرسالة ( الموجودة في 'ts.en/i18n/app') وربما التخطيط ايضاً ('app/screens/ErrorScreen'). إذا كنت تريد إزالة هذا بالكامل، تحقق من 'app/app.tsp' من اجل عنصر <ErrorBoundary>.",
    reset: "اعادة تعيين التطبيق",
  },
  emptyStateComponent: {
    generic: {
      heading: "فارغة جداً....حزين",
      content: "لا توجد بيانات حتى الآن. حاول النقر فوق الزر لتحديث التطبيق او اعادة تحميله.",
      button: "لنحاول هذا مرّة أخرى",
    },
  },
  auth: {
    common: {
      showPassword: "إظهار كلمة المرور",
      hidePassword: "إخفاء كلمة المرور",
    },
    login: {
      title: "مرحباً بعودتك",
      subtitle: "سجّل الدخول بحسابك للمتابعة.",
      emailLabel: "البريد الإلكتروني",
      emailPlaceholder: "you@example.com",
      passwordLabel: "كلمة المرور",
      passwordPlaceholder: "أدخل كلمة المرور",
      submit: "تسجيل الدخول",
      goToSignup: "الانتقال إلى التسجيل",
    },
    signup: {
      title: "إنشاء حساب",
      subtitle: "سجّل ببياناتك للوصول إلى الشاشة الرئيسية.",
      nameLabel: "الاسم",
      namePlaceholder: "John Doe",
      emailLabel: "البريد الإلكتروني",
      emailPlaceholder: "you@example.com",
      passwordLabel: "كلمة المرور",
      passwordPlaceholder: "اختر كلمة مرور آمنة",
      submit: "تسجيل",
      goToLogin: "الانتقال إلى تسجيل الدخول",
    },
    home: {
      title: "الرئيسية",
      subtitle: "تم تسجيل دخولك.",
      nameLabel: "الاسم",
      emailLabel: "البريد الإلكتروني",
      logout: "تسجيل الخروج",
    },
    validation: {
      invalidEmailFormat: "تنسيق البريد الإلكتروني غير صالح.",
      emailRequired: "البريد الإلكتروني مطلوب.",
      passwordRequired: "كلمة المرور مطلوبة.",
      invalidPasswordFormat: "تنسيق كلمة المرور غير صالح. استخدم 6 أحرف على الأقل.",
      nameRequired: "الاسم مطلوب.",
      passwordMinLength: "يجب أن تكون كلمة المرور 6 أحرف على الأقل.",
    },
    errors: {
      incorrectCredentials: "بيانات الاعتماد غير صحيحة.",
      accountAlreadyExists: "يوجد حساب بهذا البريد الإلكتروني بالفعل.",
    },
  },
}

export default ar
