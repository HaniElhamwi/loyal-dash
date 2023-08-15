import {
  Card,
  Skeleton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useGetAllProducts from "@/hooks/products/useGetProducts";
import CategoryItems from "./category-items";
import FilteringMenu from "./filtering-menu";
import LanSwitcher from "./lan-switcher";

const TableCellStyles = styled(TableCell)(({ theme }) => ({
  fontWeight: "medium",
  backgroundColor: "#eee",
  color: "#333",
}));

function ListTable() {
  const [editTableNumber, setEditTableNumber] = useState(-1);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLan, setSelectedLan] = useState("en");

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

  const filteredProducts = useMemo(() => {
    if (selectedCategories.length) {
      return products.filter((product: any) =>
        selectedCategories.includes(product.title.en)
      );
    } else return products;
  }, [selectedCategories.length, products.length]);

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
        <div>
          <FilteringMenu
            categories={products}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            setSelectedLan={setSelectedLan}
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
                <h1 className="text-black font-bold">description</h1>
              </TableCellStyles>
              <TableCellStyles align="left">
                <h1 className="text-black font-bold">price</h1>
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
            {!loading ? (
              filteredProducts.map((item: any, prodIndex) => (
                <CategoryItems
                  editTableNumber={editTableNumber}
                  item={item}
                  prodIndex={prodIndex}
                  products={products}
                  setProducts={setProducts}
                  key={item.title.ar}
                  selectedLan={selectedLan}
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

export default ListTable;
