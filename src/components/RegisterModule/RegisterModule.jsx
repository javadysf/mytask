import { useNavigate } from "react-router-dom";
import { registerAPI } from "../../core/Services/Api/Auth";
import AuthForm from "../common/AuthForm/AuthForm";
import BodyItems from "./BodyItems";

const RegisterModule = () => {
  const navigate = useNavigate();
  const registerFunction= async(values)=>{
    const res = await registerAPI(values);
    console.log(res);
    if (res.status == "201") {
      alert("successfully registered")
      navigate("/")
    }

  }
  return (
    <AuthForm
    moduleBody={<BodyItems/>}
      authFunc={registerFunction}
      title={"Hello! Register to get started"}
      actionname={"sign up"}
      description={"Already have an account?"}
      linktitle={"Sing in now"}
      deslink={"/login"}
    />
  );
};

export default RegisterModule;
