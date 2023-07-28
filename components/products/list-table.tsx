import {
  Card,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useTranslation } from "react-i18next";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Field } from "formik";
import useGetAllProducts from "@/hooks/products/useGetProducts";
import ProductRow from "./product-row";

const TableCellStyles = styled(TableCell)(({ theme }) => ({
  fontWeight: "medium",
  backgroundColor: "#bbbcbd",
  color: "#333",
}));

function ListTable() {
  const [editTableNumber, setEditTableNumber] = useState(-1);
  const { getAllProducts, loading, message, products, setMessage } =
    useGetAllProducts();
  const { t } = useTranslation();

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div>
      <Card className="mt-12" sx={{ background: "white", minWidth: 800 }}>
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
              {/* <TableCellStyles align="left"></TableCellStyles> */}
              <TableCellStyles align="left" className="">
                <h1 className="text-black font-bold">image</h1>
              </TableCellStyles>
              <TableCellStyles align="left">
                <h1 className="text-black font-bold">title</h1>
              </TableCellStyles>
              <TableCellStyles align="left">
                {" "}
                <h1 className="text-black font-bold">desc</h1>
              </TableCellStyles>
              <TableCellStyles align="left">
                <h1 className="text-black font-bold">category</h1>
              </TableCellStyles>
              <TableCellStyles align="left">
                <h1 className="text-black font-bold">action</h1>
              </TableCellStyles>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* <EditProductDialog /> */}
            {!loading ? (
              <>
                {products.map((item: any) => {
                  return item.products.map((row: any, i: number) => (
                    <>
                      <ProductRow
                        editTableNumber={editTableNumber}
                        i={i}
                        item={item}
                        row={row}
                        products={products}
                      />
                    </>
                  ));
                })}
              </>
            ) : (
              <div>
                <TableCell colSpan={5}>
                  <Skeleton />
                  <Skeleton animation="wave" width="100%" />
                  <Skeleton animation={false} width="100%" />
                  <Skeleton animation="wave" width="100%" />
                  <Skeleton animation={false} width="100%" />
                  <Skeleton animation="wave" width="100%" />
                  <Skeleton animation={false} width="100%" />
                </TableCell>
                <TableCell colSpan={5}>
                  {" "}
                  <Skeleton />
                  <Skeleton animation="wave" width="100%" />
                  <Skeleton animation={false} width="100%" />
                  <Skeleton animation="wave" width="100%" />
                  <Skeleton animation={false} width="100%" />
                  <Skeleton animation="wave" width="100%" />
                  <Skeleton animation={false} width="100%" />
                </TableCell>
                <TableCell colSpan={5}>
                  {" "}
                  <Skeleton />
                  <Skeleton animation="wave" width="100%" />
                  <Skeleton animation={false} width="100%" />
                  <Skeleton animation="wave" width="100%" />
                  <Skeleton animation={false} width="100%" />
                  <Skeleton animation="wave" width="100%" />
                  <Skeleton animation={false} width="100%" />
                </TableCell>
              </div>
            )}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

export default ListTable;
