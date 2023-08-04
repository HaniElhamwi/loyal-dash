"use client";

import BasicDetails from "@/components/products/create/basic-details";
import PickCategory from "@/components/products/create/pick-category";
import PickImage from "@/components/products/create/pick-image";
import {
  Box,
  Button,
  CardActions,
  CircularProgress,
  Container,
  Link,
} from "@mui/material";
import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { useTranslation } from "react-i18next";
import useAddProduct from "@/hooks/products/useAddProduct";
import { useRouter } from "next/navigation";
import SnackBar from "@/utils/snack-bar";
import useAddData from "@/hooks/home/useAddData";

const DisplayingErrorMessagesSchema = Yup.object().shape({
  title: Yup.string().required("title is required").min(3).max(40),
  desc: Yup.string().required("title is required").min(3).max(40),
});

function Page() {
  const { t } = useTranslation();

  const { addData, loading } = useAddData();
  const router = useRouter();
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
          <div className="text-3xl font-bold">{t("LOWER_BANNER")}</div>
          <div>
            {t("DASHBOARD")} <span className="dot">.</span>{" "}
            <Link
              href="/dashboard/home/lower-banner"
              className="underline-none no-underline">
              <span className="hover:underline cursor-pointer font-medium text-[#333]">
                {t("LOWER_BANNER")}
              </span>
            </Link>{" "}
            <span className="dot">.</span> {t("LOWER_BANNER")}
          </div>
        </div>
      </Box>
      <Formik
        initialValues={{
          title: "",
          desc: "",
          image: "",
        }}
        onSubmit={async (values, { resetForm }) => {
          try {
            addData({
              title: values.title,
              desc: values.desc,
              image: values.image,
              category: "lower",
            });
            resetForm();
          } catch {}
        }}
        validationSchema={DisplayingErrorMessagesSchema}>
        {({
          values,
          handleChange,
          errors,
          handleSubmit,
          touched,
          setFieldValue,
        }) => (
          <div>
            <BasicDetails
              handleChange={handleChange}
              errors={errors}
              touched={touched}
              values={values}
              loading={loading}
            />
            <PickImage setFieldValue={setFieldValue} />

            <CardActions className="mt-4 flex gap-3" dir="rtl">
              <Button size="large" onClick={() => handleSubmit()}>
                {!loading ? t("ADD_PRODUCTS") : <CircularProgress />}
              </Button>
              <Link href="/dashboard/home/lower-banner">
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
              </Link>
            </CardActions>
          </div>
        )}
      </Formik>
    </Container>
  );
}

export default Page;
