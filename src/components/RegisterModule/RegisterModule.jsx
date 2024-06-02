import AuthForm from "../common/AuthForm/AuthForm";

const RegisterModule = () => {
  return (
    <AuthForm
      title={"Hello! Register to get started"}
      actionname={"sign up"}
      description={"Already have an account?"}
      linktitle={"Sing in now"}
      deslink={"/login"}
    />
  );
};

export default RegisterModule;
