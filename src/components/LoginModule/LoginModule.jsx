import { useNavigate } from "react-router-dom";
import { LoginApi } from "../../core/Services/Api/Auth";
import AuthForm from "../common/AuthForm/AuthForm";
import { setItem } from "../../core/Services/common/storage.services";
import BodyItems from "./BodyItems";



const LoginModule = () => {
  const navigate = useNavigate();
  const loginFunction= async(values)=>{
    const res = await LoginApi(values);
    console.log(res);
    if (res.status == "200") {
      setItem('token',res.data)
      alert("successfully Logged in");
      navigate("/images")
    }

  }
  return (
    <AuthForm
    moduleBody={<BodyItems/>}
    authFunc={loginFunction}
      title={"Welcome back! Glad to see you, Again!"}
      actionname={"sign in"}
      description={"Don’t have an account?"}
      linktitle={"Register Now"}
      deslink={"/register"}
    />
  );
};

export default LoginModule;
