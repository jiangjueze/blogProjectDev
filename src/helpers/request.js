import axios from "axios";
import { Message } from "element-ui";

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
axios.defaults.baseURL = "//blog-server.hunger-valley.com";

// window.request = request

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

    // 是一种鉴权方式，和cookie类似，也是一种储存方式
    // 当localStorage里有值的时候，给请求头设置个Authorization参数，发请求的时候带上，系统就知道登录了
    if (localStorage.token) {
      axios.defaults.headers.common["Authorization"] = localStorage.token;
    }

    axios(option)
      .then(res => {
        console.log(res.data);
        if (res.data.status === "ok") {
          // 从请求里拿到token值，之后设置到localStorage里，然后再设置带请求头中
          if (res.data.token) {
            localStorage.token = res.data.token;
          }
          resolve(res.data);
        } else {
          Message.error(res.data.msg);
          reject(res.data);
        }
      })
      .catch(err => {
        Message.error("网络异常");
        reject({ msg: "网络异常" });
      });
  });
}
