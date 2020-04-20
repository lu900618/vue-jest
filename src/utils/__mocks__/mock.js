export const fetchUser = () => {
  return Promise.resolve({ user: "zs" });
};
export const fetchList = () => {
  return Promise.resolve([{ user: "zs" }, { user: "ls" }]);
};
