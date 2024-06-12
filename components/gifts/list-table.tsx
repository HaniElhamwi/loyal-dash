import {
  Button,
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
import useGetAllGifts from "@/hooks/products/useGetProducts";
import Row from "./row";

const TableCellStyles = styled(TableCell)(({ theme }) => ({
  fontWeight: "medium",
  backgroundColor: "#eee",
  color: "#333",
}));

function ListTable() {
  const [selectDelivered, setSelectDelivered] = useState(false);

  const {
    getAllGifts,
    gifts,
    loading,
    message,
    setGifts,
    setMessage,
    toggleDelivered,
  } = useGetAllGifts();

  useEffect(() => {
    getAllGifts(selectDelivered);
  }, []);

  const toggleSelectedStatus = () => {
    setSelectDelivered(!selectDelivered);
    getAllGifts(!selectDelivered);
  };

  return (
    <div>
      <Card className="mt-4" sx={{ background: "white", minWidth: 800 }}>
        <div className="py-5 px-3 flex flex-row gap-3">
          <SearchIcon sx={{ fontSize: 30, color: "#333" }} />
          <input
            placeholder="Search for products"
            className="text-black outline-none	 w-full"
          />
        </div>
        <div>
          {/* <FilteringMenu
            categories={products}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            setSelectedLan={setSelectedLan}
          /> */}
        </div>
        <div className="bg-[#eee] py-4 flex justify-center items-center gap-2">
          {/* delivered button */}
          <button
            onClick={() => toggleSelectedStatus()}
            className={`${
              !selectDelivered ? "bg-black" : "bg-[#eee] text-black font-medium"
            } px-3 py-2 rounded-lg`}>
            un Delivered
          </button>

          <button
            onClick={() => toggleSelectedStatus()}
            className={`${
              selectDelivered ? "bg-black" : "bg-[#eee] text-black font-medium"
            } px-3 py-2 rounded-lg`}>
            Delivered
          </button>
        </div>
        <Table sx={{ minWidth: 800 }}>
          <TableHead>
            <TableRow>
              <TableCellStyles></TableCellStyles>
              <TableCellStyles align="left" className="">
                <h1 className="text-black font-medium">PHONE NUMBER</h1>
              </TableCellStyles>
              <TableCellStyles align="left">
                <h1 className="text-black font-medium">STATUS</h1>
              </TableCellStyles>

              <TableCellStyles align="left">
                <h1 className="text-black font-medium">action</h1>
              </TableCellStyles>
            </TableRow>
          </TableHead>
          <TableBody>
            {!loading ? (
              gifts.map((item: any, prodIndex) => (
                <Row
                  key={prodIndex}
                  phoneNumber={item?.phoneNumber}
                  delivered={item?.isDelivered}
                  toggleDelivered={toggleDelivered}
                  id={item?.id}
                  selectDelivered={selectDelivered}
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
