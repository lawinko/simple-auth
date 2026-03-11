import { Translations } from "./en"

const ja: Translations = {
  common: {
    ok: "OK",
    cancel: "キャンセル",
    back: "戻る",
  },
  welcomeScreen: {
    postscript:
      "注目！ — このアプリはお好みの見た目では無いかもしれません(デザイナーがこのスクリーンを送ってこない限りは。もしそうなら公開しちゃいましょう！)",
    readyForLaunch: "このアプリはもう少しで公開できます！",
    exciting: "(楽しみですね！)",
  },
  errorScreen: {
    title: "問題が発生しました",
    friendlySubtitle:
      "本番では、エラーが投げられた時にこのページが表示されます。もし使うならこのメッセージに変更を加えてください(`app/i18n/jp.ts`)レイアウトはこちらで変更できます(`app/screens/ErrorScreen`)。もしこのスクリーンを取り除きたい場合は、`app/app.tsx`にある<ErrorBoundary>コンポーネントをチェックしてください",
    reset: "リセット",
  },
  emptyStateComponent: {
    generic: {
      heading: "静かだ...悲しい。",
      content:
        "データが見つかりません。ボタンを押してアプリをリロード、またはリフレッシュしてください。",
      button: "もう一度やってみよう",
    },
  },
  auth: {
    common: {
      showPassword: "パスワードを表示",
      hidePassword: "パスワードを非表示",
    },
    login: {
      title: "おかえりなさい",
      subtitle: "続行するにはアカウントでログインしてください。",
      emailLabel: "メールアドレス",
      emailPlaceholder: "you@example.com",
      passwordLabel: "パスワード",
      passwordPlaceholder: "パスワードを入力してください",
      submit: "ログイン",
      goToSignup: "サインアップへ",
    },
    signup: {
      title: "アカウント作成",
      subtitle: "ホーム画面にアクセスするには登録してください。",
      nameLabel: "名前",
      namePlaceholder: "John Doe",
      emailLabel: "メールアドレス",
      emailPlaceholder: "you@example.com",
      passwordLabel: "パスワード",
      passwordPlaceholder: "安全なパスワードを設定してください",
      submit: "サインアップ",
      goToLogin: "ログインへ",
    },
    home: {
      title: "ホーム",
      subtitle: "ログイン中です。",
      nameLabel: "名前",
      emailLabel: "メールアドレス",
      logout: "ログアウト",
    },
    validation: {
      invalidEmailFormat: "メールアドレスの形式が正しくありません。",
      emailRequired: "メールアドレスは必須です。",
      passwordRequired: "パスワードは必須です。",
      invalidPasswordFormat: "パスワード形式が正しくありません。6文字以上で入力してください。",
      nameRequired: "名前は必須です。",
      passwordMinLength: "パスワードは6文字以上で入力してください。",
    },
    errors: {
      incorrectCredentials: "認証情報が正しくありません。",
      accountAlreadyExists: "このメールアドレスのアカウントは既に存在します。",
    },
  },
}

export default ja
