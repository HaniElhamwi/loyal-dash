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
import React, { useState } from "react";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import useAddCategory from "@/hooks/categories/useAddDocument";
import SnackBar from "@/utils/snack-bar";
import { ToastContainer } from "react-toastify";
import TabsHandler from "@/utils/tabs";

interface IFormikProps {
  handleChange: any;
  errors: any;
  touched: any;
  values: any;
  loading: boolean;
}

function BasicDetails(props: IFormikProps) {
  const [selectedLan, setSelectedLan] = useState("en");
  const { t } = useTranslation();
  const {
    errors,
    handleChange,
    touched,
    values,
    loading: addingLoading,
  } = props;

  const { addCategory, message, loading, setMessage } = useAddCategory();

  return (
    <div>
      {message.message && (
        <SnackBar setErrorMessage={setMessage} message={message} />
      )}
      <Card sx={{ background: "white", marginTop: 5 }}>
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
        <TabsHandler
          selectedLan={selectedLan}
          setSelectedLan={setSelectedLan}
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
                disabled={addingLoading}
                placeholder="Title"
                inputProps={{ style: { color: "black" } }}
                InputLabelProps={{
                  style: { color: "black" },
                }}
                value={values.title[selectedLan]}
                name={`title.${selectedLan}`}
                onChange={handleChange}
                // selected lamaige may be null
                error={
                  touched.title && touched.title[selectedLan]
                    ? Boolean(errors.title && errors.title[selectedLan])
                    : false
                }
                helperText={
                  touched.title && touched.title
                    ? errors.title && "enter all languages titles"
                    : ""
                }
                required
              />
              <div className="mt-4"></div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default BasicDetails;
