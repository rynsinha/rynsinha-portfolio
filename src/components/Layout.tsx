
import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <NavBar />
      <main className={cn("flex-grow pt-16", className)}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
