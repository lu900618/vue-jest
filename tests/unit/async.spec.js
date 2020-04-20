import { getDataThroughCallback, getDataThroughPromise } from "@/utils/async";

describe("异步请求测试", () => {
  // 异步请求测试需要传入 done 标识结束
  it("callback", done => {
    expect.assertions(1);
    getDataThroughCallback(data => {
      expect(data).toEqual({ name: "zs" });
      done(); // 标识结束调用完成
    });
  });

  // Promise 的可以直接返回或者使用await语法
  it("Promise", () => {
    expect.assertions(1); // assertions在异步中使用 指定了断言的次数之后，如果没有出现这么多个断言的时候，就会报错。
    return getDataThroughPromise().then(data => {
      expect(data).toEqual({ name: "zs" });
    });
  });

  it("async", async () => {
    expect.assertions(1);
    let data = await getDataThroughPromise();
    expect(data).toEqual({ name: "zs" });
  });
});
