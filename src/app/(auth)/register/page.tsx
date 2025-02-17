import { redirect } from "next/navigation";
import { protectedByCurrent } from "@/brain/auth/actions";
import RegisterForm from "@/brain/auth/components/register-form";
const Register = async () => {
  const user = await protectedByCurrent();
  if (user) redirect("/");

  return <RegisterForm />;
};

export default Register;
