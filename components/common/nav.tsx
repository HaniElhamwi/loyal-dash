import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import NavItem from "./nav-item";
import { navItems } from "@/utils/paths";

function Nav() {
  const { t } = useTranslation();
  return (
    <div className=" text-primary w-[300px] bg-primary min-h-screen py-12 px-5">
      <div className="text-center flex_center">
        <Image src="/images/logo.png" alt="" width={100} height={100} />
      </div>
      <div className="mt-4">
        <h5 className="text-md text-gray-400 font-medium ">{t("CONCEPTS")}</h5>
      </div>
      ?{/* items */}
      <div className="flex flex-col gap-2">
        {navItems?.map((item, index) => {
          return (
            <NavItem
              title={item.title}
              subitem={item.items}
              key={item.id}
              index={index}
              url={item.url}
              icon={item.icon}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Nav;
