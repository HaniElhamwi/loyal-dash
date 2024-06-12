"use client";

import UpperNav from "@/components/common/upper-nav";
import ListTable from "@/components/gifts/list-table";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Container } from "@mui/material";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

function Page() {
  const { t } = useTranslation();
  return (
    <Container className="mt-6 max-h-[calc(100vh-100px)] overflow-y-auto">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1,
          justifyContent: "space-between",
        }}>
        <div>
          <div className="text-3xl font-bold">{t("GIFTS")}</div>
          <div>
            {t("DASHBOARD")} <span className="dot">.</span> {t("GIFTS")}{" "}
            <span className="dot">.</span> {t("LIST")}
          </div>
        </div>
      </Box>
      <ListTable />
    </Container>
  );
}

export default Page;
