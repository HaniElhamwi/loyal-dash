"use client";

import Nav from "@/components/common/nav";
import UpperNav from "@/components/common/upper-nav";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <div className="flex flex-row">
      <div className="">
        <Nav />
      </div>
      <div className="">{children}</div>
    </div>
  );
}
