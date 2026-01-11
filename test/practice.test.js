import { describe, it, expect } from "vitest";
import { plus } from "../practice.js";

describe("plus関数のテスト", () => {
  it("300 + 1200 は 1500 になる", () => {
    expect(plus(300, 1200)).toBe(1500);
  });

  it("1 + 2 は 3 になる", () => {
    expect(plus(1, 2)).toBe(3);
  });
});
