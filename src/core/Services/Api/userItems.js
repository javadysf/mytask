import axios from "../Interceptor/Interceptor";
const getUserItems = async() => {

    try {
      const result = await axios.get("/",{headers: {'Content-Type': 'application/json'}});
      return result;
    } catch (error) {
        console.log(error);
      return [];
    }
  }
  export {getUserItems};

  