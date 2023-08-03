import {
  Card,
  CardActions,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

interface IFormikProps {
  handleChange: any;
  errors: any;
  touched: any;
  values: any;
  loading: boolean;
}

function BasicDetails(props: IFormikProps) {
  const { t } = useTranslation();
  const { errors, handleChange, touched, values, loading } = props;

  return (
    <Card sx={{ background: "white", marginTop: 5, padding: 2 }}>
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
              InputLabelProps={{
                style: { color: "black" },
              }}
              disabled={loading}
              error={Boolean(errors.title) && touched.title}
              inputProps={{ style: { color: "black" } }}
              onChange={handleChange}
              name="title"
              value={values.title}
              helperText={touched.title && errors.title}
            />
            <div className="mt-4">
              <Typography variant="subtitle2" color="#333" className="mb-2">
                {t("DESCRIPTION")}
              </Typography>
              <TextField
                fullWidth
                placeholder="Description"
                InputLabelProps={{
                  style: { color: "black" },
                }}
                disabled={loading}
                value={values.desc}
                error={Boolean(errors.desc) && touched.desc}
                inputProps={{ style: { color: "black" } }}
                rows={4}
                multiline
                onChange={handleChange}
                name="desc"
                helperText={touched.desc && errors.desc}
              />
            </div>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}

export default BasicDetails;
