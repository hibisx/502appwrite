import { UserButton } from "@/brain/auth/components/user-button";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <div className="border-b shadow-sm">
      <div className="h-14 px-6 max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">Hibisx App</h1>
        </div>
        <div></div>
      </div>
    </div>
  );
};
export const HomeHeader = () => {
  return (
    <div className="border-b shadow-sm">
      <div className="h-14 px-6 max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">Hibisx App</h1>
        </div>
        <div>
          <Link href="/login">
            <Button>Login</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
