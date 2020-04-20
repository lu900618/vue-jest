import { removeNode, appendNode, insertBefore } from "@/utils/dom";

describe("测试dom", () => {
  it("删除元素", () => {
    document.body.innerHTML = "<div><button></button></div>";
    let dom = document.querySelector("button");
    expect(dom).not.toBe(null);
    removeNode(dom);
    dom = document.querySelector("button");
    expect(dom).toEqual(null);
  });
});
