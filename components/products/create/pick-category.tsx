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
import React from "react";
import { useTranslation } from "react-i18next";

function PickCategory() {
  const { t } = useTranslation();
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
              select>
              <MenuItem>category 1</MenuItem>
              <MenuItem>category 2</MenuItem>
              <MenuItem>category 3</MenuItem>
            </TextField>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}

export default PickCategory;
