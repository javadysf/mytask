import AuthForm from "../common/AuthForm/AuthForm";

const LoginModule = () => {
  return (
    <AuthForm
      title={"Welcome back! Glad to see you, Again!"}
      actionname={"sign in"}
      description={"Don’t have an account?"}
      linktitle={"Register Now"}
      deslink={"/register"}
    />
  );
};

export default LoginModule;
