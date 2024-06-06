
import { toast } from "react-toastify";
import { getItem,setItem } from "../common/storage.services";
import axios from "../Interceptor/Interceptor";

const registerAPI = async (user) => {
    try {
      const response = await axios.post("/register/", user);
      return response;
    } catch (error) {
      toast(error.message);
      return error;
    }
  };
  const LoginApi = async (user) => {
    try {
      const response = await axios.post("/token/", user);
      return response;
    } catch (error) {
      toast(error.response.data.detail);
      return error;
    }
  };

const refreshToken = async () => {
  const refresh = {"refresh": getItem("token").refresh};
  const token = getItem("token");
     try {
      const response = await axios.post("/token/refresh/",refresh);
      setItem("token",{...token,"access": response.data.access})
      return;
     } catch (error) {
      console.log(error.message);
     }
}

  export {registerAPI,LoginApi,refreshToken};
