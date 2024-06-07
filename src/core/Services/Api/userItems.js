import { getItem, setItem } from "../common/storage.services";
import axios from "../Interceptor/Interceptor";
import { refreshToken } from "./Auth";
const getUserItems = async() => {
  const Token = getItem("token").access;
      try {
      const result = await axios.get("/",{headers: {'Content-Type': 'application/json','Authorization': "Bearer " + Token }});
      return result;
    } catch (error) {
      if(error.response.status === 401)
        {
          // if the token was expired then try to refresh it!
         await refreshToken();
         return;
        }

      return [];
    }
  }
  export {getUserItems};

  