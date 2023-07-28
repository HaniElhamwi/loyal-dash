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
}: {
  row: any;
  item: any;
  i: number;
  editTableNumber: number;
  products: any;
}) {
  const { t } = useTranslation();
  const [openEditDialog, setOpenEditDialog] = useState(false);

  return (
    <>
      {openEditDialog && (
        <EditProductDialog
          setOpen={setOpenEditDialog}
          open={openEditDialog}
          prod={row}
          products={products}
          item={item}
          id={row.id}
        />
      )}
      <TableRowStyles key={row.id}>
        <TableCell>
          <img
            className="w-[100px] rounded h-[100px] object-cover"
            alt=""
            src={row.image}
          />
        </TableCell>
        <TableCell>
          <Typography color="black" variant="subtitle2">
            {row.title}
          </Typography>
        </TableCell>
        <TableCell>
          {" "}
          <Typography color="black" variant="subtitle2">
            {row.desc}
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
            {item.title}
          </Typography>
        </TableCell>
        <TableCell>
          <IconButton onClick={() => setOpenEditDialog(true)}>
            <ModeEditIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon color="error" />
          </IconButton>
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
