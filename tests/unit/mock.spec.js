// jest.mock("@/utils/mock"); // 使用了 __mock__ 下的文件
import { fetchUser, fetchList } from "@/utils/mock";
let { foreach, mockTimer, mockTimerInterval } = jest.requireActual(
  "@/utils/mock"
); // require真实的，就是从真实的模块，而不是从mock 的模块中引入

jest.useFakeTimers(); // 使用假定时器

describe("测试mock", () => {
  it("测试foreach", () => {
    // mock函数 可以记录状态 记录调用时的参数
    let fn = jest.fn();
    foreach([1, 2, 3, 4, 5], fn);
    // console.log(fn.mock, 1);
    expect(fn.mock.calls.length).toBe(5);
    expect(fn).toBeCalledTimes(5);
    expect(fn.mock.calls[0][0]).toBe(1);
    expect(fn.mock.calls[1][0]).toBe(2);
    expect(fn.mock.calls[2][0]).toBe(3);
  });
  it("测试fetchList", () => {
    return fetchList().then(list => {
      expect(list.length).toBe(2);
    });
  });
  // 把请求的过程mock掉
  it("测试fetchUser", () => {
    return fetchUser().then(user => {
      expect(user).toHaveProperty("user", "zs");
    });
  });

  it("测试timer时间到达后调用方法", () => {
    // expect.assertions(1);
    const fn = jest.fn();
    mockTimer(fn);
    // jest.runAllTimers(); // 假定时器 + 表示把所有时间都跑完
    jest.runOnlyPendingTimers(); // 只执行一次
    expect(fn).toBeCalledTimes(1);
  });

  it("测试timer时间到达后调用方法", () => {
    // expect.assertions(1);
    const fn = jest.fn();
    mockTimerInterval(fn);
    jest.advanceTimersByTime(1000); // 传入时间 测试执行次数
    expect(fn).toBeCalledTimes(0);
    jest.advanceTimersByTime(4000); // 传入时间 测试
    expect(fn).toBeCalledTimes(2);
  });
});
