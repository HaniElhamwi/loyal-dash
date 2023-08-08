import useGetAllCategories from "@/hooks/categories/useGetCategories";
import { TextFieldsTwoTone } from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface IFormikProps {
  handleChange: any;
  errors: any;
  touched: any;
  values: any;
  loading: boolean;
}

function PickCategory(props: IFormikProps) {
  const { t } = useTranslation();
  const {
    errors,
    handleChange,
    touched,
    values,
    loading: uploadLoading,
  } = props;
  const { categories, getCategories, loading, message, setMessage } =
    useGetAllCategories();

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Card sx={{ background: "white", marginTop: 5, padding: 2 }}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <div className=" font-bold mt-3 text-[#333]">{t("CATEGORY")}</div>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="subtitle2" color="#333" className="mb-2">
              {t("CATEGORY")}
            </Typography>
            <TextField
              fullWidth
              placeholder="Title"
              InputLabelProps={{
                style: { color: "black" },
              }}
              SelectProps={{
                style: { color: "black" },
              }}
              disabled={uploadLoading}
              name="category"
              value={values.category}
              error={Boolean(errors.category) && touched.category}
              onChange={handleChange}
              helperText={touched.category && errors.category}
              inputProps={{ style: { color: "black" } }}
              select>
              {categories.map((item) => {
                return (
                  <MenuItem
                    color="black"
                    key={item.id}
                    value={item.title.en}
                    sx={{ color: "white" }}>
                    {item.title.en}
                  </MenuItem>
                );
              })}
            </TextField>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}

export default PickCategory;
