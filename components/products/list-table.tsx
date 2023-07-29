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
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useTranslation } from "react-i18next";

import useGetAllProducts from "@/hooks/products/useGetProducts";
import ProductRow from "./product-row";
import CategoryItems from "./category-items";

const TableCellStyles = styled(TableCell)(({ theme }) => ({
  fontWeight: "medium",
  backgroundColor: "#bbbcbd",
  color: "#333",
}));

function ListTable() {
  const [editTableNumber, setEditTableNumber] = useState(-1);
  const {
    getAllProducts,
    loading,
    message,
    products,
    setMessage,
    setProducts,
  } = useGetAllProducts();

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
                {products.map((item: any, prodIndex) => {
                  return (
                    <CategoryItems
                      editTableNumber={editTableNumber}
                      item={item}
                      prodIndex={prodIndex}
                      products={products}
                      setProducts={setProducts}
                      key={item.title}
                    />
                  );
                  // ));
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
