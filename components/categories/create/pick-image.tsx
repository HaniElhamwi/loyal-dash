import { TextFieldsTwoTone } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import UploadIcon from "@mui/icons-material/Upload";

function PickImage() {
  const { t } = useTranslation();
  return (
    <Card
      sx={{ background: "white", marginTop: 5, padding: 2 }}
      className="select-none">
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <div color="#333" className="font-bold mt-3 text-[#333]">
              {t("IMAGES")}
            </div>
            <div color="#333" className="mb-2 text-md font-medium text-[#999]">
              {t("IMAGES_DESC")}
            </div>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Box
              sx={{
                border: "2px dotted #999",
                borderRadius: 1,
                paddingX: 7,
                paddingY: 4,
                display: "flex",
                gap: 3,
                alignItems: "center",
                cursor: "pointer",
              }}>
              <div className="p-4 rounded-full max-w-max bg-[#999]">
                <UploadIcon />
              </div>
              <h3 className="text-[#666] text-lg font-bold">
                {t("CLICK_TO_UPLOAD")}
              </h3>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}

export default PickImage;
