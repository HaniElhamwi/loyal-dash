import ConfirmationDialog from "@/components/dialogs/confirmation-dialog";
import {
  IconButton,
  TableCell,
  TableRow,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

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

interface IRowProps {
  image: string;
  title: string;
  id: string;
  desc: string;
  deleteHandler: (id: string) => void;
}

function ProductRow(props: IRowProps) {
  const { desc, id, image, title, deleteHandler } = props;

  return (
    <TableRowStyles key={id}>
      <TableCell></TableCell>
      <TableCell>
        <img
          className="w-[100px] rounded h-[100px] object-contain"
          alt=""
          src={image}
        />
      </TableCell>
      <TableCell>
        <Typography color="black" variant="subtitle2">
          {title}
        </Typography>
      </TableCell>
      <TableCell>
        {" "}
        <Typography color="black" variant="subtitle2">
          {desc}
        </Typography>
      </TableCell>
      <TableCell className="">
        <div className="flex flex-row">
          <IconButton>
            <ModeEditIcon />
          </IconButton>
          <ConfirmationDialog
            handleDelete={() => deleteHandler(id)}
            message="are you sure that you want to delete this product">
            <IconButton>
              <DeleteIcon color="error" />
            </IconButton>
          </ConfirmationDialog>
        </div>
      </TableCell>
    </TableRowStyles>
  );
}

export default ProductRow;
