import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  Skeleton,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useTranslation } from "react-i18next";
import { Field } from "formik";
import useGetAllCategories from "@/hooks/categories/useGetCategories";
import { async } from "@firebase/util";

const TableCellStyles = styled(TableCell)(({ theme }) => ({
  fontWeight: "medium",
  backgroundColor: "#bbbcbd",
  color: "#333",
}));

const TableRowStyles = styled(TableRow)(({ theme }) => ({
  position: "relative",
  "&::after": {
    background: "red",
    position: "absolute",
    content: "''",
    width: "100%",
    height: "100%",
  },
  "&:hover": {
    background: "#1119270a",
    width: "100%",
    height: "100%",
  },
}));

const USERS = [
  {
    id: 1,
    title: "Muhammed",
    JobInfo: "Programer",
    JoiningDate: "2023/06",
    status: "Active",
    company: "senior design",
    email: "senior@gmail.com",
  },
];

function CategoryList() {
  const [editTableNumber, setEditTableNumber] = useState(-1);
  const [categoriesData, setCategoriesData] = useState<string[]>([]);
  const { t } = useTranslation();
  const { categories, getCategories, loading, message } = useGetAllCategories();

  useEffect(() => {
    const getCat = async () => {
      await getCategories();
      setCategoriesData(categories);
    };
    getCat();
  }, []);
  return (
    <div>
      <Card className="mt-12" sx={{ background: "white", minWidth: 800 }}>
        {" "}
        {!loading ? (
          <div>
            <div className="py-5 px-3 flex flex-row gap-3">
              <SearchIcon sx={{ fontSize: 30, color: "#333" }} />
              <input
                placeholder="Search for products"
                className="text-black outline-none	 w-full"
              />
            </div>
            <Table
              sx={{
                minWidth: 800,
              }}>
              <TableHead>
                <TableRow>
                  <TableCellStyles align="left"></TableCellStyles>
                  {/* <TableCellStyles align="left">User Info</TableCellStyles>
              <TableCellStyles align="left">Job Info</TableCellStyles>
              <TableCellStyles align="left">Joining Date</TableCellStyles> */}
                  <TableCellStyles align="left" colSpan={100}>
                    title
                  </TableCellStyles>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* */}
                {categoriesData.map((row, i) => (
                  <>
                    <TableRowStyles key={row}>
                      <TableCell style={{ width: "10%" }}>
                        <IconButton
                          onClick={() =>
                            setEditTableNumber(editTableNumber === i ? -1 : i)
                          }>
                          {editTableNumber !== i ? (
                            <KeyboardArrowRightIcon sx={{ fontSize: 30 }} />
                          ) : (
                            <ExpandMoreIcon sx={{ fontSize: 30 }} />
                          )}
                        </IconButton>
                      </TableCell>
                      <TableCell colSpan={4}>
                        <Grid container>
                          {/* <Grid item lg={2}>
                        <Avatar alt={row.title} src="." />
                      </Grid> */}
                          <Grid item lg={10}>
                            <Typography color="black">{row}</Typography>
                            {/* <Typography color="textSecondary" variant="body2">
                          {row.email}
                        </Typography> */}
                            {/* <Typography color="textSecondary" variant="body2">
                          {row.JoiningDate}
                        </Typography> */}
                          </Grid>
                        </Grid>
                      </TableCell>
                      {/* <TableCell>
                      <Typography color="primary" variant="subtitle2">
                        {row.JobInfo}
                      </Typography>
                      <Typography color="textSecondary" variant="body2">
                        {row.company}
                      </Typography>
                    </TableCell>
                    <TableCell>{row.JoiningDate}</TableCell>
                    <TableCell>
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          fontSize: "0.75rem",
                          color: "white",
                          backgroundColor: "grey",
                          borderRadius: 8,
                          padding: "3px 10px",
                          display: "inline-block",
                        }}>
                        {row.status}
                      </Typography>
                    </TableCell> */}
                    </TableRowStyles>
                    {editTableNumber === i && (
                      <TableRow className="py-6 h-[200px]">
                        <TableCell colSpan={5}>
                          <div>this is good</div>
                          <div
                            style={{ width: "100% important" }}
                            className="py-6 px-3 flex gap-2 ">
                            <div className="w-full flex gap-2 flex-col">
                              <TextField fullWidth placeholder="date" />
                              <TextField fullWidth placeholder="name" />
                            </div>
                            <div className="w-full flex gap-2 flex-col">
                              <TextField fullWidth placeholder="Name" />
                              <TextField fullWidth placeholder="Name" />
                            </div>
                          </div>
                          <Button sx={{ ml: 2 }} size="large">
                            {t("UPDATE")}
                          </Button>
                        </TableCell>
                      </TableRow>
                    )}
                  </>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : (
          <Box sx={{ minWidth: 1000, width: "100%" }}>
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
          </Box>
        )}
      </Card>
    </div>
  );
}

export default CategoryList;
