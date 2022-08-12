import axios from "axios";
import { Message } from "element-ui";

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
axios.defaults.baseURL = "//blog-server.hunger-valley.com";

window.request = request;
//导出函数的参数为：路径，请求类型，请求参数
export default function request(url, type = "GET", data = {}) {
  return new Promise((resolve, reject) => {
    let option = {
      url,
      method: type
    };
    if (type.toLowerCase() === "get") {
      option.params = data;
    } else {
      option.data = data;
    }
    if (localStorage.token) {
      //如果 localStorage.token存在 就存入响应头的 Authorization，这样在发送请求时服务器会做个验证，token是否匹配
      axios.defaults.headers.common["Authorization"] = localStorage.token;
    }

    axios(option)
      .then(res => {
        console.log(res.data);
        if (res.data.status === "ok") {
          if (res.data.token) {
            //注册时发给服务器，服务器响应并返回token ，在此处存入localStorage
            localStorage.token = res.data.token;
          }
          resolve(res.data);
        } else {
          Message.error(res.data.msg);
          reject(res.data);
        }
      })
      .catch(err => {
        Message.error("网络异常"); //请求出错时toast展示报错提示
        reject({ msg: "网络异常" });
      });
  });
}
