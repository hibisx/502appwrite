import { protectedByCurrent } from "@/brain/auth/actions";
import { Header } from "@/components/headers";
import { redirect } from "next/navigation";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  // protected
  const user = await protectedByCurrent();
  if (!user) redirect("/login");

  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
