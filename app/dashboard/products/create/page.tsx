"use client";

import BasicDetails from "@/components/products/create/basic-details";
import PickCategory from "@/components/products/create/pick-category";
import PickImage from "@/components/products/create/pick-image";
import {
  Box,
  Button,
  Card,
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

const DisplayingErrorMessagesSchema = Yup.object().shape({
  title: Yup.object({
    ar: Yup.string().required("arabic title is required").min(3).max(40),
    en: Yup.string().required("english title is required").min(3).max(40),
    tr: Yup.string().required("turkish title is required").min(3).max(40),
  }),
  desc: Yup.object({
    ar: Yup.string().required("arabic desc is required").min(3).max(40),
    en: Yup.string().required("english desc is required").min(3).max(40),
    tr: Yup.string().required("turkish desc is required").min(3).max(40),
  }),
  category: Yup.string().required("title is required"),
});

function Page() {
  const { t } = useTranslation();
  const { addProducts, loading, message, setMessage } = useAddProduct();
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
            {t("DASHBOARD")} <span className="dot">.</span>{" "}
            <Link
              href="/dashboard/products"
              className="underline-none no-underline">
              <span className="hover:underline cursor-pointer font-medium text-[#333]">
                {t("PRODUCTS")}
              </span>
            </Link>{" "}
            <span className="dot">.</span> {t("ADD_PRODUCT")}
          </div>
        </div>
      </Box>
      <Formik
        initialValues={{
          title: {
            ar: "",
            en: "",
            tr: "",
          },
          desc: {
            ar: "",
            en: "",
            tr: "",
          },
          image: "",
          category: "",
        }}
        onSubmit={async (values, { resetForm }) => {
          try {
            await addProducts({
              category: values.category,
              desc: values.desc,
              image: values.image,
              title: values.title,
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
            <SnackBar message={message} setErrorMessage={setMessage} />
            <BasicDetails
              handleChange={handleChange}
              errors={errors}
              touched={touched}
              values={values}
              loading={loading}
            />
            <PickImage setFieldValue={setFieldValue} />
            <PickCategory
              handleChange={handleChange}
              errors={errors}
              touched={touched}
              values={values}
              loading={loading}
            />
            <CardActions className="mt-4 flex gap-3" dir="rtl">
              <Button
                size="large"
                onClick={() => {
                  handleSubmit();
                  console.log("its clicking");
                  console.log(errors);
                }}>
                {!loading ? t("ADD_PRODUCTS") : <CircularProgress />}
              </Button>
              <Link href="/dashboard/products">
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
