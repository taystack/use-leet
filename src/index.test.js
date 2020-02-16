import useLeet from "./";
import { renderHook } from "@testing-library/react-hooks";

// mock timer using jest
jest.useFakeTimers();

describe("useLeet", () => {
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
});
