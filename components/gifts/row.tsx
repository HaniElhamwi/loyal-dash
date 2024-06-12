import {
  Button,
  IconButton,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

function Row({
  phoneNumber,
  delivered,
  toggleDelivered,
  selectDelivered,
  id,
}: {
  phoneNumber: string;
  delivered: boolean;
  id: string;
  selectDelivered: boolean;

  toggleDelivered: (
    status: boolean,
    id: string,
    selectingStatus: boolean
  ) => void;
}) {
  return (
    <TableRow>
      <TableCell></TableCell>
      <TableCell>
        <Typography color="black" variant="subtitle2">
          {phoneNumber}
        </Typography>
      </TableCell>

      <TableCell>
        <Typography color="black" variant="subtitle2">
          {delivered.toString()}
        </Typography>
      </TableCell>
      <TableCell className="">
        <div className="flex flex-row">
          <Button
            style={{
              backgroundColor: "#5adbb5",
            }}
            onClick={() => toggleDelivered(!delivered, id, selectDelivered)}>
            {delivered ? "Mark as Undelivered" : "Mark as Delivered"}
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
}

export default Row;
