
import axios from "../Interceptor/Interceptor";

const registerAPI = async (user) => {
    try {
      const response = await axios.post("register/", user);
      console.log(response);
      return response;
    } catch (error) {
      return error;
    }
  };
  const LoginApi = async (user) => {
    debugger
    try {
      const response = await axios.post("token/", user);
      return response;
    } catch (error) {
      return error;
    }
  };
  export {registerAPI,LoginApi};