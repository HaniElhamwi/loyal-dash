"use client";

import BasicDetails from "@/components/categories/create/basic-details";
import PickImage from "@/components/products/create/pick-image";
import useAddCategory from "@/hooks/categories/useAddDocument";
import {
  Box,
  Button,
  CardActions,
  CircularProgress,
  Container,
} from "@mui/material";
import React from "react";
import { Formik } from "formik";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import Link from "next/link";

const DisplayingErrorMessagesSchema = Yup.object().shape({
  title: Yup.object({
    ar: Yup.string().required("arabic title is required").min(3).max(40),
    en: Yup.string().required("english title is required").min(3).max(40),
    tr: Yup.string().required("turkish title is required").min(3).max(40),
  }),
});

function Page() {
  const { t } = useTranslation();
  const { addCategory, loading } = useAddCategory();
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
        <Formik
          initialValues={{
            title: {
              ar: "",
              en: "",
              tr: "",
            },
            image: "",
          }}
          onSubmit={async (values, { resetForm }) => {
            try {
              addCategory({ title: values.title, image: values.image });
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
                values={values}
                handleChange={handleChange}
                errors={errors}
                loading={loading}
                touched={touched}
              />
              <PickImage setFieldValue={setFieldValue} loading={loading} />
              <CardActions dir="rtl">
                <div className="mt-5 flex gap-3">
                  <Button onClick={() => handleSubmit()} disabled={loading}>
                    {!loading ? t("ADD_CATEGORY") : <CircularProgress />}
                  </Button>
                  <Link href="/dashboard/category" className="cursor-pointer">
                    <Button
                      sx={{
                        background: "transparent !important",
                        color: "#6366F1",
                        border: "1px solid #6366F1",
                        "&:hover": {
                          color: "white",
                        },
                      }}>
                      {t("CANCEL")}
                    </Button>
                  </Link>
                </div>
              </CardActions>
            </div>
          )}
        </Formik>
      </Container>
    </div>
  );
}

export default Page;
