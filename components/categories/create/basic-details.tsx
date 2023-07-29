import { TextFieldsTwoTone } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import useAddCategory from "@/hooks/categories/useAddDocument";
import SnackBar from "@/utils/snack-bar";
import { ToastContainer } from "react-toastify";

function BasicDetails() {
  const { t } = useTranslation();

  const DisplayingErrorMessagesSchema = Yup.object().shape({
    title: Yup.string().required("title is required").min(3).max(40),
  });

  const { addCategory, message, loading, setMessage } = useAddCategory();

  return (
    <Formik
      initialValues={{
        title: "",
      }}
      onSubmit={(values) => {
        addCategory({ title: values.title });
      }}
      validationSchema={DisplayingErrorMessagesSchema}>
      {({ values, handleChange, errors, handleSubmit, touched }) => (
        <div>
          {message.message && (
            <SnackBar setErrorMessage={setMessage} message={message} />
          )}
          <Card sx={{ background: "white", marginTop: 5, padding: 2 }}>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                  <div className=" font-bold mt-3 text-[#333]">
                    {t("BASIC_DETAILS")}
                  </div>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Typography variant="subtitle2" color="#333" className="mb-2">
                    {t("TITLE")}
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="Title"
                    inputProps={{ style: { color: "black" } }}
                    InputLabelProps={{
                      style: { color: "black" },
                    }}
                    name="title"
                    onChange={handleChange}
                    error={Boolean(errors.title)}
                    helperText={touched.title && errors.title}
                  />
                  <div className="mt-4">
                    {/* <Typography variant="subtitle2" color="#333" className="mb-2">
                {t("DESCRIPTION")}
              </Typography> */}
                    {/* <TextField
                fullWidth
                placeholder="Title"
                InputLabelProps={{
                  style: { color: "black" },
                }}
                minRows={3}
                rows={4}
                multiline
              /> */}
                  </div>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Button onClick={() => handleSubmit()}>
                {t("ADD_CATEGORY")}
              </Button>
            </CardActions>
          </Card>
        </div>
      )}
    </Formik>
  );
}

export default BasicDetails;
