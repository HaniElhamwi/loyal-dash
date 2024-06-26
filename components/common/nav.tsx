import React from "react";
import { useTranslation } from "react-i18next";
import NavItem from "./nav-item";
import { navItems } from "@/utils/paths";
import { Button } from "@mui/material";
import RedeemIcon from "@mui/icons-material/Redeem";
import useSignout from "@/hooks/useSignout";
import LogoutIcon from "@mui/icons-material/Logout";

function Nav() {
  const { t } = useTranslation();
  const { signout } = useSignout();
  return (
    <div className=" text-primary w-[230px] bg-primary min-h-screen py-12 px-2 flex justify-between flex-col">
      <div>
        <div className="text-center flex_center">
          <img src="/images/logo.png" alt="" className="w-[200px] h-[100px]" />
        </div>
        <div className="mt-4">
          <h5 className="text-md text-white mb-5 text-center font-bold">
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
