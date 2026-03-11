// we always make sure 'react-native' gets included first
// eslint-disable-next-line no-restricted-imports
import * as ReactNative from "react-native"

import mockFile from "./mockFile"

// libraries to mock
jest.doMock("react-native", () => {
  const Image = ReactNative.Image as any
  Image.resolveAssetSource = jest.fn((_source) => mockFile) // eslint-disable-line @typescript-eslint/no-unused-vars
  Image.getSize = jest.fn(
    (
      uri: string, // eslint-disable-line @typescript-eslint/no-unused-vars
      success: (width: number, height: number) => void,
      failure?: (_error: any) => void, // eslint-disable-line @typescript-eslint/no-unused-vars
    ) => success(100, 100),
  )

  // Extend ReactNative
  return Object.setPrototypeOf(
    {
      Image,
    },
    ReactNative,
  )
})

jest.mock("i18next", () => ({
  currentLocale: "en",
  t: (key: string) => key,
  translate: (key: string) => key,
}))

jest.mock("expo-localization", () => ({
  ...jest.requireActual("expo-localization"),
  getLocales: () => [{ languageTag: "en-US", textDirection: "ltr" }],
}))

jest.mock("@react-native-async-storage/async-storage", () => {
  const memoryStore = new Map<string, string>()

  const asyncStorageMock = {
    setItem: jest.fn(async (key: string, value: string) => {
      memoryStore.set(key, value)
    }),
    getItem: jest.fn(async (key: string) => {
      return memoryStore.has(key) ? (memoryStore.get(key) as string) : null
    }),
    removeItem: jest.fn(async (key: string) => {
      memoryStore.delete(key)
    }),
    clear: jest.fn(async () => {
      memoryStore.clear()
    }),
    getAllKeys: jest.fn(async () => Array.from(memoryStore.keys())),
    multiGet: jest.fn(async (keys: string[]) =>
      keys.map((key) => [key, memoryStore.has(key) ? (memoryStore.get(key) as string) : null]),
    ),
    multiSet: jest.fn(async (entries: [string, string][]) => {
      entries.forEach(([key, value]) => memoryStore.set(key, value))
    }),
    multiRemove: jest.fn(async (keys: string[]) => {
      keys.forEach((key) => memoryStore.delete(key))
    }),
  }

  return {
    __esModule: true,
    default: asyncStorageMock,
  }
})

jest.mock("../app/i18n/index.ts", () => ({
  i18n: {
    isInitialized: true,
    language: "en",
    t: (key: string) => key,
    numberToCurrency: jest.fn(),
  },
}))

jest.mock("react-native-keyboard-controller", () => {
  const React = require("react")
  const { ScrollView } = require("react-native")

  return {
    KeyboardProvider: ({ children }: { children: any }) => children,
    KeyboardAwareScrollView: ({ children, ...props }: any) =>
      React.createElement(ScrollView, props, children),
  }
})

declare const tron // eslint-disable-line @typescript-eslint/no-unused-vars

declare global {
  let __TEST__: boolean
}
