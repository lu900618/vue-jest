import { add, minus } from "@/utils/MyMath";
// import { shallowMount } from "@vue/test-utils";

describe("测试工具类", () => {
  it("加法测试", () => {
    expect(add(3, 5)).toBe(8);
  });
  it("减法测试", () => {
    expect(minus(10, 5)).toBe(5);
  });
  it("测试基本数据类型", () => {
    expect(1 + 1).toBe(2);
    expect(true).toBe(true);
    expect(true).toBeTruthy();
    expect(false).toBe(false);
    expect(false).toBeFalsy();
  });
  it("测试引用数据类型", () => {
    expect({ name: "zs" }).toEqual({ name: "zs" });
  });
  it("测试不等", () => {
    expect(1 + 1).not.toBe(4);
    expect(3).toBeLessThan(8);
    expect(8).toBeGreaterThan(6);
  });
  it("测试是否包含", () => {
    expect([1, 2, 3]).toContain(1);
    expect("Hello World").toContain("Hello");
    expect("HelloWorld").toMatch(/^[a-z]+$/gi);
    // expect(3).toBeLessThan(8);
    // expect(8).toBeGreaterThan(6);
  });
});
