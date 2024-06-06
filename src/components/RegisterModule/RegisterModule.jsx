import { useNavigate } from "react-router-dom";
import { registerAPI } from "../../core/Services/Api/Auth";
import AuthForm from "../common/AuthForm/AuthForm";
import BodyItems from "./BodyItems";
import { toast } from "react-toastify";

const RegisterModule = () => {
  const navigate = useNavigate();
  const registerFunction= async(values)=>{
    if(values.username == "" ||  values.password == "")
      {
        toast.error("Please enter a username and password");
      }
      else {
        const res = await registerAPI(values);
        console.log(res);
        if (res.status == "201") {
          toast.success("successfully registered")
          navigate("/")
      }
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
