import axios from "axios";
export const foreach = (arr, fn) => {
  arr.forEach(fn);
};
export const fetchUser = () => {
  return axios.get("/user");
};
export const fetchList = () => {
  return axios.get("/list");
};
export const mockTimer = cb => {
  setTimeout(() => {
    cb();
  }, 2000);
};
export const mockTimerInterval = cb => {
  setInterval(() => {
    cb();
  }, 2000);
};
