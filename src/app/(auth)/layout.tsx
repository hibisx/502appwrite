"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background px-6 md:px-10 pt-3 pb-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <Link
              href="/"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-md">
                <Image src="/logo.svg" alt="logo" width={32} height={32} />
              </div>
              <span className="sr-only">Hibisx</span>
            </Link>
            <h1 className="text-xl font-bold">Welcome to Hibisx</h1>
          </div>
          {children}
          <Terms />
        </div>
      </div>
    </div>
  );
};

const Terms = () => {
  const pathname = usePathname();
  const isLogin = pathname === "/login";
  return (
    <div className="flex flex-col gap-10">
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary  ">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
      <div className="text-center text-sm">
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <Link
          href={isLogin ? "/register" : "/login"}
          className="underline underline-offset-4"
        >
          {isLogin ? "Register" : "Login"}
        </Link>
      </div>
    </div>
  );
};

export default AuthLayout;
