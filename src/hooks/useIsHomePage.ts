"use client";

import { usePathname } from "next/navigation";

/**
 * 检测当前页面是否为首页的自定义hook
 * @returns {boolean} 如果当前页面是首页则返回true，否则返回false
 */
export const useIsHomePage = (): boolean => {
  const pathname = usePathname();
  return pathname === "/";
};
