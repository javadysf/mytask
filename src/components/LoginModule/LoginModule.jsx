import { useNavigate } from "react-router-dom";
import { LoginApi } from "../../core/Services/Api/Auth";
import AuthForm from "../common/AuthForm/AuthForm";
import { setItem } from "../../core/Services/common/storage.services";
import BodyItems from "./BodyItems";
import { toast } from "react-toastify";

const LoginModule = ({setIsLoggedIn}) => {
  
  const navigate = useNavigate();
  const loginFunction = async (values) => {
    if (values.username == "" || values.password == "") {
      toast.warning("Please enter a username and password");
    } else {
      const res = await LoginApi(values);
      if (res.status == "200") {
        setItem("token", res.data);
        setIsLoggedIn(true)
        toast.success("wellcome..!");
        navigate("/images");
      }
    }
  };
  return (
    <AuthForm
      moduleBody={<BodyItems />}
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
