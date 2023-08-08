import {
  Button,
  IconButton,
  TableCell,
  TableRow,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import EditProductDialog from "./edit-product-dialog";
import useDeleteProduct from "@/hooks/products/useDeleteProduct";
import ConfirmationDialog from "../dialogs/confirmation-dialog";

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

function ProductRow({
  row,
  item,
  i,
  editTableNumber,
  products,
  setProducts,
  index,
  handleDeleteProduct,
  selectedLan,
}: {
  row: any;
  item: any;
  i: number;
  editTableNumber: number;
  products: any;
  setProducts: any;
  index: number;
  handleDeleteProduct: any;
  selectedLan: any;
}) {
  const { t } = useTranslation();
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [rowItem, setRowItem] = useState(row);

  const { deleteProduct, loading } = useDeleteProduct();

  const deleteProductHandler = async () => {
    const newProducts = item.products.filter((pro: { id: number }) => {
      return pro.id !== row.id;
    });
    try {
      await deleteProduct({ category: item.title, products: newProducts });
      handleDeleteProduct(row.id);
    } catch {}
  };

  return (
    <>
      <TableRowStyles>
        <TableCell>
          {openEditDialog && (
            <EditProductDialog
              setOpen={setOpenEditDialog}
              open={openEditDialog}
              prod={rowItem}
              products={products}
              item={item}
              id={row.id}
              setProducts={setProducts}
              prodIndex={index}
              itemIndex={i}
              setRowItem={setRowItem}
            />
          )}
        </TableCell>
        <TableCell>
          <img
            className="w-[100px] rounded h-[100px] object-contain"
            alt=""
            src={rowItem.image}
          />
        </TableCell>
        <TableCell>
          <Typography color="black" variant="subtitle2">
            {rowItem.title[selectedLan]}
          </Typography>
        </TableCell>
        <TableCell>
          {" "}
          <Typography color="black" variant="subtitle2">
            {rowItem.desc[selectedLan]}
          </Typography>
        </TableCell>
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
            {item.title.en}
          </Typography>
        </TableCell>
        <TableCell className="">
          <div className="flex flex-row">
            <IconButton onClick={() => setOpenEditDialog(true)}>
              <ModeEditIcon />
            </IconButton>
            <ConfirmationDialog
              handleDelete={deleteProductHandler}
              message="are you sure that you want to delete this product">
              <IconButton>
                <DeleteIcon color="error" />
              </IconButton>
            </ConfirmationDialog>
          </div>
        </TableCell>
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
  );
}

export default ProductRow;
