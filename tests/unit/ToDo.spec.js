import { shallowMount } from "@vue/test-utils";
import ToDo from "@/components/ToDo";

describe("测试待办列表", () => {
  it("测试input输入v-model更改", () => {
    const wrapper = shallowMount(ToDo);
    wrapper.find("input").setValue("test");
    expect(wrapper.vm.value).toBe("test");
  });
  it("测试点击添加", async () => {
    const wrapper = shallowMount(ToDo);
    wrapper.find("input").setValue("test");
    wrapper.find("button").trigger("click");
    expect(wrapper.vm.list).toContain("test");
    await wrapper.vm.$nextTick();
    expect(wrapper.find("li").text()).toBe("test");
  });
  it("测试输入空不能添加", () => {
    const wrapper = shallowMount(ToDo);
    wrapper.find("input").setValue("");
    wrapper.find("button").trigger("click");
    expect(wrapper.vm.list.length).toBe(0);
  });
});
