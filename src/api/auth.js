import request from "@/helpers/request";

const URL = {
  REGISTER: "/auth/register",
  LOGIN: "/auth/login",
  LOGOUT: "/auth/logout",
  GET_INFO: "/auth"
};

export default {
  register({ username, password }) {
    return request(URL.REGISTER, "POST", { username, password });
  },

  login({ username, password }) {
    return request(URL.LOGIN, "POST", { username, password });
  },

  logout() {
    localStorage.removeItem("token"); //注销时删除 jwt token，下次请求没token服务端就认为未登陆
    return request(URL.LOGOUT);
  },

  // 判断用户是否登录
  getInfo() {
    return request(URL.GET_INFO);
  }
};
