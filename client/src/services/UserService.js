import GenericService from "./GenericService";
import jwtDecode from "jwt-decode";
class UserService extends GenericService {
  constructor() {
    super();
  }

  UserLogin = (data) =>
    new Promise((resolve, reject) => {
      this.post("users/login", data)
        .then((res) => {
          resolve(res.token);
          localStorage.setItem("tokenMetriMeo", res.token);
        })
        .catch((err) => {
          //console.log("in try of user login");
          reject(err.response.data);
        });
    });

  isLoggedin = () => {
    if (localStorage.getItem("tokenMetriMeo")) {
      return true;
    } else {
      return false;
    }
  };
  logout = () => {
    if (localStorage.getItem("tokenMetriMeo")) {
      localStorage.removeItem("tokenMetriMeo");
      return true;
    } else {
      return false;
    }
  };
  getloggedinuser = () => {
    try {
      const jwt = localStorage.getItem("tokenMetriMeo");
      // console.log("getLoggedinData");
      // console.log(jwtDecode(jwt));
      return jwtDecode(jwt);
    } catch (ex) {
      return null;
    }
  };
  isAdmin = () => {
    if (this.isLoggedin()) {
      if (this.getloggedinuser().role == "admin") {
        return true;
      } else {
        return false;
      }
    }
    return false;
  };

  UserReg = (data) => this.post("users/register", data);
  // UserReg = (data) =>
  //   new Promise((resolve, reject) => {
  //     this.postReg("users/register", data)
  //       .then((res) => {
  //         resolve();
  //       })
  //       .catch((err) => {
  //         //console.log("in try of user login");
  //         reject(err);
  //       });
  //   });
}

let userService = new UserService();
export default userService;
