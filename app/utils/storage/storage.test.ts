import { load, loadString, save, saveString, clear, remove, storage } from "."

const VALUE_OBJECT = { x: 1 }
const VALUE_STRING = JSON.stringify(VALUE_OBJECT)

describe("AsyncStorage", () => {
  beforeEach(async () => {
    await storage.clear()
    await storage.setItem("string", "string")
    await storage.setItem("object", JSON.stringify(VALUE_OBJECT))
  })

  it("should be defined", () => {
    expect(storage).toBeDefined()
  })

  it("should have default keys", async () => {
    const keys = (await storage.getAllKeys()).sort()
    expect(keys).toEqual(["object", "string"])
  })

  it("should load data", async () => {
    expect(await load<object>("object")).toEqual(VALUE_OBJECT)
    expect(await loadString("object")).toEqual(VALUE_STRING)

    expect(await load<string>("string")).toEqual("string")
    expect(await loadString("string")).toEqual("string")
  })

  it("should save strings", async () => {
    await saveString("string", "new string")
    expect(await loadString("string")).toEqual("new string")
  })

  it("should save objects", async () => {
    await save("object", { y: 2 })
    expect(await load<object>("object")).toEqual({ y: 2 })
    await save("object", { z: 3, also: true })
    expect(await load<object>("object")).toEqual({ z: 3, also: true })
  })

  it("should save strings and objects", async () => {
    await saveString("object", "new string")
    expect(await loadString("object")).toEqual("new string")
  })

  it("should remove data", async () => {
    await remove("object")
    expect(await load<object>("object")).toBeNull()
    expect(await storage.getAllKeys()).toEqual(["string"])

    await remove("string")
    expect(await load<string>("string")).toBeNull()
    expect(await storage.getAllKeys()).toEqual([])
  })

  it("should clear all data", async () => {
    const keys = (await storage.getAllKeys()).sort()
    expect(keys).toEqual(["object", "string"])

    await clear()
    expect(await storage.getAllKeys()).toEqual([])
  })
})
