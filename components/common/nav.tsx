import React from "react";
import { useTranslation } from "react-i18next";
import NavItem from "./nav-item";
import { navItems } from "@/utils/paths";
import { Button } from "@mui/material";
import useSignout from "@/hooks/useSignout";
import LogoutIcon from "@mui/icons-material/Logout";

function Nav() {
  const { t } = useTranslation();
  const { signout } = useSignout();
  return (
    <div className=" text-primary w-[300px] bg-primary min-h-screen py-12 px-5 flex justify-between flex-col">
      <div>
        <div className="text-center flex_center">
          <img src="/images/logo.png" alt="" className="w-[100px] h-[100px]" />
        </div>
        <div className="mt-4">
          <h5 className="text-md text-gray-400 font-medium ">
            {t("CONCEPTS")}
          </h5>
        </div>
        {/* items */}
        <div className="flex flex-col gap-2 ">
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
      <Button onClick={() => signout()} startIcon={<LogoutIcon />}>
        {t("SIGNOUT")}
      </Button>
    </div>
  );
}

export default Nav;
