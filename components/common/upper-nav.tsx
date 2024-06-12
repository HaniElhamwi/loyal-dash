import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

function UpperNav() {
  return (
    <div className="px-6 py-2 min-w-[calc(100vw-300px)]">
      <div className="flex justify-between flex-row w-full items-center">
        <SearchIcon style={{ color: "#bdbdbd" }} sx={{ fontSize: 20 }} />
        <div className="flex flex-row gap-6">
          <IconButton className="not_number">
            <NotificationsNoneIcon sx={{ fontSize: 24 }} />
          </IconButton>
          <IconButton>
            <PeopleOutlineIcon sx={{ fontSize: 24 }} />
          </IconButton>
          <IconButton>
            <AccountCircleIcon sx={{ fontSize: 24 }} />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default UpperNav;
