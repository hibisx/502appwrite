import { protectedByCurrent } from "@/brain/auth/actions";
import LoginForm from "@/brain/auth/components/login-form";
import { redirect } from "next/navigation";
const Login = async () => {
  const user = await protectedByCurrent();
  if (user) redirect("/dashboard");

  return <LoginForm />;
};

export default Login;
