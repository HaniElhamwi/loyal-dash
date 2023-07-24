"use client";

import UpperNav from "@/components/common/upper-nav";

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <div>
      <UpperNav />
      {children}
    </div>
  );
}
