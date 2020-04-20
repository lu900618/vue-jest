import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.find("h1").text()).toBe(msg);
  });
  it("测试显示", () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.find("p").text()).toBe("10");
  });
  it("测试本页面点击功能", async () => {
    const wrapper = shallowMount(HelloWorld);
    wrapper.find("button").trigger("click");
    // await wrapper.vm.$nextTick();
    // expect(wrapper.find("p").text()).to.eq("11");
    expect(wrapper.vm.$data.count).toBe(11);
  });
});
