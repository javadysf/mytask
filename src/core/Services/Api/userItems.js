import { getItem } from "../common/storage.services";
import axios from "../Interceptor/Interceptor";
const getUserItems = async() => {
  const Token = getItem("token").access;
  console.log(Token);
    try {
      const result = await axios.get("/",{headers: {'Content-Type': 'application/json','Authorization': "Bearer " + Token }});
      return result;
    } catch (error) {
        console.log(error);
      return [];
    }
  }
  export {getUserItems};

  