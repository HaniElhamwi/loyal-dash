"use client";

import UpperList from "@/components/home/upper-list";
import ListTable from "@/components/products/list-table";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Container } from "@mui/material";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

function Page() {
  const { t } = useTranslation();
  return (
    <Container className="mt-12">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1,
          paddingTop: 7,
          justifyContent: "space-between",
        }}>
        <div>
          <div className="text-3xl font-bold">{t("UPPER_BANNER")}</div>
          <div>
            {t("DASHBOARD")} <span className="dot">.</span> {t("UPPER_BANNER")}{" "}
            <span className="dot">.</span> {t("LIST")}
          </div>
        </div>
        <Link href="/dashboard/home/upper-banner/create">
          <Button size="large" startIcon={<AddIcon />}>
            {t("ADD")}
          </Button>
        </Link>
      </Box>
      <UpperList homeSection="upper" />
    </Container>
  );
}

export default Page;
