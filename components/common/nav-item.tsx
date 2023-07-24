import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { navItems } from "@/utils/paths";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface items {
  title: string;
  url: string;
  id: number;
}

interface NavItemProps {
  title: string;
  subitem?: items[];
  icon?: any;
  url?: string;
  index: number;
}

function NavItem({ title, subitem, index, url, icon }: NavItemProps) {
  const { t } = useTranslation();
  const currentPath = usePathname();
  const router = useRouter();
  const [openItems, setOpenItems] = useState(false);

  function removeSlash(str: string, index:  number) {
    return str.split("/")[index];
  }

  return (
    <div>
      <div
        className="flex justify-between items-center cursor-pointer hover:bg-[#ffffff0a] py-1 px-3 rounded select-none"
        onClick={() => {
          setOpenItems(!openItems);
          if (!subitem?.length && url) {
            router.push(url);
          }
        }}>
        <div className="flex gap-3 items-center ">
          <div
            style={{
              color:
                "/" + removeSlash(currentPath, 1) !== url
                  ? "#bdbdbd"
                  : "#6366F1",
            }}>
            {icon}
          </div>
          <h6
            className={` ${
              "/" + removeSlash(currentPath, 1) !== url
                ? "text-gray-400"
                : "text-[#6366F1]"
            } text-[13px]  font-medium`}>
            {t(title)}
          </h6>
        </div>
        <div>
          {subitem?.length &&
            (openItems ? (
              <KeyboardArrowRightIcon className="text-gray-400" />
            ) : (
              <KeyboardArrowDownIcon className="text-gray-400" />
            ))}
        </div>
      </div>
      {subitem?.length &&
        !openItems &&
        subitem.map((item) => {
          return (
            <Link
              href={item.url}
              key={item.id}
              className="flex justify-between items-center cursor-pointer hover:bg-[#ffffff0a] py-1 px-3 rounded select-none">
              <div className="flex gap-9 items-center">
                <div></div>
                <h6
                  className={`${
                    currentPath !== item.url
                      ? "text-gray-400"
                      : "text-[#6366F1]"
                  } text-[13px]  font-medium`}>
                  {t(item.title)}
                </h6>
              </div>
            </Link>
          );
        })}
    </div>
  );
}

export default NavItem;
