"use client";

import CategoryList from "@/components/categories/category-list";
import { Box, Button, Container } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { useTranslation } from "react-i18next";
import Link from "next/link";

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
          <div className="text-3xl font-bold">{t("CATEGORIES")}</div>
          <div>
            {t("DASHBOARD")} <span className="dot">.</span> {t("CATEGORIES")}{" "}
            <span className="dot">.</span> {t("LIST")}
          </div>
        </div>
        <Link href="/category/create">
          <Button size="large" startIcon={<AddIcon />}>
            {t("ADD")}
          </Button>
        </Link>
      </Box>
      <CategoryList />
    </Container>
  );
}

export default Page;
