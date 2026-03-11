import { Translations } from "./en"

const ko: Translations = {
  common: {
    ok: "확인!",
    cancel: "취소",
    back: "뒤로",
  },
  welcomeScreen: {
    postscript:
      "잠깐! — 지금 보시는 것은 아마도 당신의 앱의 모양새가 아닐겁니다. (디자이너분이 이렇게 건내주셨다면 모를까요. 만약에 그렇다면, 이대로 가져갑시다!) ",
    readyForLaunch: "출시 준비가 거의 끝난 나만의 앱!",
    exciting: "(오, 이거 신나는데요!)",
  },
  errorScreen: {
    title: "뭔가 잘못되었습니다!",
    friendlySubtitle:
      "이 화면은 오류가 발생할 때 프로덕션에서 사용자에게 표시됩니다. 이 메시지를 커스터마이징 할 수 있고(해당 파일은 `app/i18n/ko.ts` 에 있습니다) 레이아웃도 마찬가지로 수정할 수 있습니다(`app/screens/error`). 만약 이 오류화면을 완전히 없에버리고 싶다면 `app/app.tsx` 파일에서 <ErrorBoundary> 컴포넌트를 확인하기 바랍니다.",
    reset: "초기화",
  },
  emptyStateComponent: {
    generic: {
      heading: "너무 텅 비어서.. 너무 슬퍼요..",
      content: "데이터가 없습니다. 버튼을 눌러서 리프레쉬 하시거나 앱을 리로드하세요.",
      button: "다시 시도해봅시다",
    },
  },
  auth: {
    common: {
      showPassword: "비밀번호 표시",
      hidePassword: "비밀번호 숨기기",
    },
    login: {
      title: "다시 오신 것을 환영합니다",
      subtitle: "계정으로 로그인하여 계속하세요.",
      emailLabel: "이메일",
      emailPlaceholder: "you@example.com",
      passwordLabel: "비밀번호",
      passwordPlaceholder: "비밀번호를 입력하세요",
      submit: "로그인",
      goToSignup: "회원가입으로 이동",
    },
    signup: {
      title: "계정 만들기",
      subtitle: "홈 화면에 접근하려면 정보를 입력해 회원가입하세요.",
      nameLabel: "이름",
      namePlaceholder: "John Doe",
      emailLabel: "이메일",
      emailPlaceholder: "you@example.com",
      passwordLabel: "비밀번호",
      passwordPlaceholder: "안전한 비밀번호를 선택하세요",
      submit: "회원가입",
      goToLogin: "로그인으로 이동",
    },
    home: {
      title: "홈",
      subtitle: "로그인되었습니다.",
      nameLabel: "이름",
      emailLabel: "이메일",
      logout: "로그아웃",
    },
    validation: {
      invalidEmailFormat: "올바르지 않은 이메일 형식입니다.",
      emailRequired: "이메일은 필수입니다.",
      passwordRequired: "비밀번호는 필수입니다.",
      invalidPasswordFormat: "올바르지 않은 비밀번호 형식입니다. 6자 이상 입력하세요.",
      nameRequired: "이름은 필수입니다.",
      passwordMinLength: "비밀번호는 최소 6자 이상이어야 합니다.",
    },
    errors: {
      incorrectCredentials: "잘못된 자격 증명입니다.",
      accountAlreadyExists: "이 이메일로 이미 계정이 존재합니다.",
    },
  },
}

export default ko
