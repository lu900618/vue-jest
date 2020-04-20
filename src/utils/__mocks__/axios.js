// 可以不用mock.js 直接mock axios三方库
export default {
  get(url) {
    return new Promise((resolve, reject) => {
      if (url === "/user") {
        resolve({ user: "zs" });
      } else if (url === "/list") {
        resolve([{ user: "zs" }, { user: "ls" }]);
      }
    });
  }
};
