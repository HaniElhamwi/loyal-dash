import {
  Box,
  Card,
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
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import useGetAllCategories from "@/hooks/categories/useGetCategories";
import DeleteIcon from "@mui/icons-material/Delete";
import { async } from "@firebase/util";
import useDeleteProduct from "@/hooks/products/useDeleteProduct";
import ConfirmationDialog from "../dialogs/confirmation-dialog";

const TableCellStyles = styled(TableCell)(({ theme }) => ({
  fontWeight: "medium",
  backgroundColor: "#bbbcbd",
  color: "#333",
}));

const TableRowStyles = styled(TableRow)(({ theme }) => ({
  position: "relative",
  "&::after": {
    // background: "red",
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

function CategoryList() {
  const [editTableNumber, setEditTableNumber] = useState(-1);
  const { categories, getCategories, loading, message, deleteCategory } =
    useGetAllCategories();
  const { deleteProduct, loading: deleteProductLoading } = useDeleteProduct();

  const handleDeleteProduct = (cat: string) => {
    deleteProduct({
      category: cat,
    });
    deleteCategory(cat);
  };

  useEffect(() => {
    getCategories();
  }, []);
  console.log(categories);
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
                  <TableCellStyles align="center">title</TableCellStyles>
                  <TableCellStyles align="left">
                    <h1 className="text-black font-bold">action</h1>
                  </TableCellStyles>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* */}
                {categories.map((row, i) => (
                  <>
                    <TableRowStyles key={row}>
                      <TableCell colSpan={1} align="center">
                        <Typography color="black">{row}</Typography>
                      </TableCell>
                      <TableCell colSpan={1}>
                        <div className="flex gap-2">
                          <div className="flex flex-row">
                            <ConfirmationDialog
                              handleDelete={() => handleDeleteProduct(row)}
                              message="warning if you delete a category all its related products will be deleted">
                              <IconButton>
                                <DeleteIcon color="error" />
                              </IconButton>
                            </ConfirmationDialog>
                          </div>
                        </div>
                      </TableCell>
                    </TableRowStyles>
                    {/* {editTableNumber === i && (
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
                    )} */}
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
