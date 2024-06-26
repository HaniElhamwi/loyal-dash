"use client";

import ListTable from "@/components/gifts/list-table";
import { Box, Container } from "@mui/material";
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
