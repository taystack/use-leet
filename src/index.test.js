import UseLeet, {
  useLeet,
  UseLeetCustomGeneratorError,
  UseLeetCustomMapError,
} from "./";
import { renderHook } from "@testing-library/react-hooks";

// mock timer using jest
jest.useFakeTimers();

describe("useLeet", () => {
  afterEach(() => {
    UseLeet.resetMap();
  });

  it("should not do anything", () => {
    const { result } = renderHook(() => useLeet());

    expect(result.current[2]).toBe("");
  });

  it("should cough-out leet stuff", () => {
    const { result } = renderHook(() => useLeet("text to leet speak"));

    expect(result.current[2]).toBe("73x7 70 1337 5p34k");
  });

  it("should handle 'own' with 'pwn'", () => {
    const { result } = renderHook(() => useLeet("you got owned"));

    expect(result.current[2]).toBe("j00 g07 pwnd");
  });

  it("should handle 'and', and 'banned' with '&'", () => {
    const { result } = renderHook(() => useLeet("and banned"));

    expect(result.current[2]).toBe("& b&");
  });

  it("should handle '!' with the expressive 'zorz'", () => {
    const { result } = renderHook(() => useLeet("own!"));

    expect(result.current[2]).toBe("pwnzorz");
  });

  it("should handle 'dude' and 'dudes' with 'dood' and 'doodz'", () => {
    const { result } = renderHook(() => useLeet("dude, you are all my dudes"));

    expect(result.current[2]).toBe("d00d, j00 411 m4h d00dz");
  });

  it("should handle 'you' with 'joo' and 'fool' with 'foo'", () => {
    const { result } = renderHook(() => useLeet("you a fool"));

    expect(result.current[2]).toBe("j00 4 f00");
  });

  it("should handle greetings", () => {
    const { result } = renderHook(() => useLeet("yo hi what's up what is up sup"));

    expect(result.current[2]).toBe("j0 j0 j0 j0 j0");
  });

  it("should allow a custom config augmentation", () => {
    const customLeetMap = { c: "C", e: "E" };

    const { result } = renderHook(() => useLeet("custom leet map", customLeetMap));

    expect(result.current[2]).toBe("Cu570m 1EE7 m4p");
  });

  it("should allow setting a global custom map", () => {
    let hook = renderHook(() => useLeet("custom leet map"));
    expect(hook.result.current[2]).toBe("cu570m 1337 m4p");

    const customLeetMap = { c: "C", e: "E" };
    UseLeet.setMap(customLeetMap);
    hook = renderHook(() => useLeet("custom leet map"));
    expect(hook.result.current[2]).toBe("Cu570m 1EE7 m4p");
  });

  it("should only allow CHAR/CHAR pairs in the customMap", () => {
    try { UseLeet.setMap("foo"); } catch(e) {
    expect(e.message).toMatch("foo"); }

    try { UseLeet.setMap(["foo"]); } catch(e) {
    expect(e.message).toMatch("foo"); }
  });

  it("should allow a custom generator method - on the fly", () => {
    let hook = renderHook(() => useLeet("custom leet generator"));
    expect(hook.result.current[2]).toEqual("cu570m 1337 g3n3r470r");

    const generator = x => x.toUpperCase();
    UseLeet.setGenerator(generator);
    hook = renderHook(() => useLeet("custom leet generator"));
    expect(hook.result.current[2]).toBe("CUSTOM LEET GENERATOR")
  });

  it("should only allow functions as custom generators", () => {
    const generator = "foobar";
    try {
      UseLeet.setGenerator("foobar")
      expect("SHOULD NOT GET HERE").toEqual(true);
    } catch(e) {
      expect(e.message).toMatch("customGenerator");
    }
  });
});
