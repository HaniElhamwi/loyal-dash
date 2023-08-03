import {
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  Stack,
} from "@mui/material";
import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import UploadIcon from "@mui/icons-material/Upload";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";

function PickImage({ setFieldValue }: { setFieldValue: any }) {
  const [selectedImage, setSelectedImage] = useState<string>("");
  const fileInputRef: any = useRef(null);

  // Function to handle image selection
  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
    setFieldValue("image", file);
  };
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

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
              }}
              onClick={handleButtonClick}>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                ref={fileInputRef}
                style={{ display: "none" }}
              />
              <div className="p-4 rounded-full max-w-max bg-[#999]">
                <UploadIcon />
              </div>
              <h3 className="text-[#666] text-lg font-bold">
                {t("CLICK_TO_UPLOAD")}
              </h3>
            </Box>
            <Box>
              {selectedImage && (
                <Stack
                  className="mt-5"
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="space-around">
                  <Image
                    src={selectedImage}
                    alt=""
                    width={100}
                    height={100}
                    className="w-[100px] h-[100px]"
                  />
                  <DeleteIcon
                    color="error"
                    sx={{ cursor: "pointer" }}
                    onClick={() => {
                      setSelectedImage("");
                      setFieldValue("image", "");
                    }}
                  />
                </Stack>
              )}
            </Box>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}

export default PickImage;
