import {
  Box,
  Card,
  IconButton,
  Skeleton,
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
import useDeleteCategory from "@/hooks/categories/useDeleteCategory";

const TableCellStyles = styled(TableCell)(({ theme }) => ({
  fontWeight: "medium",
  backgroundColor: "#bbbcbd",
  color: "#333",
}));

const TableRowStyles = styled(TableRow)(({ theme }) => ({
  position: "relative",
  "&::after": {
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
  const { categories, getCategories, loading, message, deleteCategory } =
    useGetAllCategories();
  const {
    deleteCategory: deleteCategoryHandler,
    loading: deleteProductLoading,
  } = useDeleteCategory();

  const handleDeleteProduct = (cat: string) => {
    deleteCategoryHandler({
      category: cat,
    });
    deleteCategory(cat);
  };

  useEffect(() => {
    getCategories();
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
                  <TableCellStyles align="center">title</TableCellStyles>
                  <TableCellStyles align="left">
                    <h1 className="text-black font-bold">action</h1>
                  </TableCellStyles>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* */}
                {categories.map((row, i) => (
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
