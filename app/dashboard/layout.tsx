"use client";

import Nav from "@/components/common/nav";
import UpperNav from "@/components/common/upper-nav";

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <div className="flex flex-row">
      <div className="h-screen overflow-x-auto">
        <Nav />
      </div>
      <div>{children}</div>
    </div>
  );
}
