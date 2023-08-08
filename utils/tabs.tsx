import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function TabsWrappedLabel({
  selectedLan,
  setSelectedLan,
}: {
  selectedLan: string;
  setSelectedLan: React.Dispatch<React.SetStateAction<string>>;
}) {
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedLan(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={selectedLan}
        onChange={handleChange}
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          "& .MuiTabs-flexContainer": {
            width: "100%",
            display: "flex",
            justifyContent: "center",
          },
        }}>
        <Tab value="en" label="English Language" wrapped />
        <Tab value="ar" label="Arabic Language" />
        <Tab value="tr" label="Turkish Language" />
      </Tabs>
    </Box>
  );
}
