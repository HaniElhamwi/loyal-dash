"use client";

import BasicDetails from "@/components/categories/create/basic-details";
import PickImage from "@/components/products/create/pick-image";
import useAddCategory from "@/hooks/categories/useAddDocument";
import { Box, Container } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

function Page() {
  const { t } = useTranslation();
  const { addCategory } = useAddCategory();
  return (
    <div>
      <Container sx={{ marginTop: 12 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 1,
            paddingTop: 7,
            justifyContent: "space-between",
          }}>
          <div>
            <div className="text-3xl font-bold">{t("ADD_CATEGORY")}</div>
            <div>
              {t("DASHBOARD")} <span className="dot">.</span> {t("CATEGORIES")}{" "}
              <span className="dot">.</span> {t("ADD_CATEGORY")}
            </div>
          </div>
        </Box>
        <BasicDetails />
        {/* <PickImage /> */}
      </Container>
    </div>
  );
}

export default Page;
