import { HomeHeader } from "@/components/headers";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <HomeHeader />
      {children}
    </div>
  );
};

export default Layout;
