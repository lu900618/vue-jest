export const getDataThroughCallback = fn => {
  setTimeout(() => {
    fn({ name: "zs" });
  }, 1000);
};

export const getDataThroughPromise = fn => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "zs" });
    }, 1000);
  });
};
