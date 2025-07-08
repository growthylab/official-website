"use client";

import type { ReactNode } from "react";
import { useIsHomePage } from "@/hooks/useIsHomePage";

interface ClientLayoutProps {
  children: ReactNode;
}

export const ClientLayout = ({ children }: ClientLayoutProps) => {
  const isHomePage = useIsHomePage();

  return (
    <div className={`min-h-screen mt-[100px] ${isHomePage ? "bg-bgGray" : ""}`}>
      {children}
    </div>
  );
};
