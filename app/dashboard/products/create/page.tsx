"use client";

import BasicDetails from "@/components/products/create/basic-details";
import PickCategory from "@/components/products/create/pick-category";
import PickImage from "@/components/products/create/pick-image";
import { Box, Button, Card, CardActions, Container, Link } from "@mui/material";
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
          <div className="text-3xl font-bold">{t("ADD_PRODUCT")}</div>
          <div>
            {t("DASHBOARD")} <span className="dot">.</span> {t("PRODUCTS")}{" "}
            <span className="dot">.</span> {t("ADD_PRODUCT")}
          </div>
        </div>
      </Box>
      <BasicDetails />
      <PickImage />
      <PickCategory />

      <CardActions className="mt-4 flex gap-3" dir="rtl">
        <Button size="large">{t("ADD_PRODUCTS")}</Button>
        <Button
          size="large"
          variant="outlined"
          sx={{
            background: "transparent !important",
            color: "#6366F1",
            border: "1px solid #6366F1",
            "&:hover": {
              color: "white",
            },
          }}>
          {t("DISCARD")}
        </Button>
      </CardActions>
    </Container>
  );
}

export default Page;
