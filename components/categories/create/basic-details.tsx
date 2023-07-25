import { TextFieldsTwoTone } from "@mui/icons-material";
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

function BasicDetails() {
  const { t } = useTranslation();
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
            />
            <div className="mt-4">
              <Typography variant="subtitle2" color="#333" className="mb-2">
                {t("DESCRIPTION")}
              </Typography>
              <TextField
                fullWidth
                placeholder="Title"
                InputLabelProps={{
                  style: { color: "black" },
                }}
                minRows={3}
                rows={4}
                multiline
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
