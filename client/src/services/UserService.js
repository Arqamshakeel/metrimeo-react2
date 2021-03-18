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
      if (this.getloggedinuser().role) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  };

  updateUserRole = (data) => this.post("users/updateUserRole", data);
  UserReg = (data) => this.post("users/register", data);
  UserUpdate = (id, data) => this.post("users//update/" + id, data);
  getImg = (id) => this.get("users/getimage/" + id);
  getAllUsers = () => this.get("users/getall/");
  updatePassword2 = (id, data) => this.post("users/updatepassword/" + id, data);
  // uploadCareersData = (id, data) =>
  //   this.post("users/uploadcareersdata/" + id, data);
  uploadCareersData = (data) => this.post("users/uploadcareersdata/", data);
  getCareersData = (id) => this.get("users/getcareersdata/" + id);
  getCareersData2 = () => this.get("users/getcareersdata/all");
  getContactUs = () => this.get("users/getcontactus/");
  contactUs = (data) => this.post("users/contactus/", data);
  // contactUs = (id, data) => this.post("users/contactus/" + id, data);
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
  forgetPassword = (emaill) => this.post("users/forgetPassword/" + emaill);
  getNewPassword = (id, key) =>
    this.get("users/getNewPassword/" + id + "/" + key);
  updatePassword = (id, key, data) =>
    this.post("users/updatepassword/" + id + "/" + key, data);
}

let userService = new UserService();
export default userService;
