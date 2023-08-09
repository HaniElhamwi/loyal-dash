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
import ProductRow from "./product-row";
import useGetProduct from "@/hooks/home/useGetProducts";
import useDeleteProduct from "@/hooks/home/useDeleteData";

const TableCellStyles = styled(TableCell)(({ theme }) => ({
  fontWeight: "medium",
  backgroundColor: "#eee",
  color: "#333",
}));

function UpperList({ homeSection }: { homeSection: "upper" | "lower" }) {
  const [editTableNumber, setEditTableNumber] = useState(-1);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const { getProduct, loading, products, setProducts } = useGetProduct();
  const { deleteProduct, loading: deleteLoading } = useDeleteProduct();

  useEffect(() => {
    getProduct({ homeSection });
  }, []);

  const deleteRow = (id: string) => {
    try {
      const newProducts = products.filter((item: any) => item.id !== id);
      deleteProduct({ category: homeSection, products: newProducts });
      setProducts(newProducts);
    } catch {}
  };
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
        <Table sx={{ minWidth: 800 }}>
          <TableHead>
            <TableRow>
              <TableCellStyles></TableCellStyles>
              <TableCellStyles align="left" className="">
                <h1 className="text-black font-bold">image</h1>
              </TableCellStyles>
              <TableCellStyles align="left">
                <h1 className="text-black font-bold">title</h1>
              </TableCellStyles>
              <TableCellStyles align="left">
                <h1 className="text-black font-bold">desc</h1>
              </TableCellStyles>
              <TableCellStyles align="left">
                <h1 className="text-black font-bold">action</h1>
              </TableCellStyles>
            </TableRow>
          </TableHead>
          <TableBody>
            {!loading ? (
              products.map((prod: any) => (
                <ProductRow
                  desc={prod.desc["en"]}
                  id={prod.id}
                  image={prod.image}
                  title={prod.title["en"]}
                  key={prod.id}
                  deleteHandler={deleteRow}
                />
              ))
            ) : (
              <>
                <TableRow>
                  <TableCell colSpan={5}>
                    <Skeleton />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={5}>
                    <Skeleton animation="wave" width="100%" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={5}>
                    <Skeleton animation={false} width="100%" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={5}>
                    <Skeleton animation="wave" width="100%" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={5}>
                    <Skeleton animation={false} width="100%" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={5}>
                    <Skeleton animation="wave" width="100%" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={5}>
                    <Skeleton animation={false} width="100%" />
                  </TableCell>
                </TableRow>
              </>
            )}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

export default UpperList;
