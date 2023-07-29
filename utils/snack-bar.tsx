import { Snackbar } from "@mui/base";
import { Alert, AlertColor } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { ToastContainer, toast } from "react-toastify";

function SnackBar({
  setErrorMessage,
  message,
}: {
  setErrorMessage: Dispatch<
    SetStateAction<{
      message: string;
      status: string;
    }>
  >;
  message: {
    message: string;
    status: string;
  };
}) {
  return (
    // <Snackbar
    //   autoHideDuration={2000}
    //   open
    //   onClose={() =>
    //     setErrorMessage({
    //       message: "",
    //       status: "",
    //     })
    //   }>
    //   <Alert severity={message.status as AlertColor} sx={{ width: "100%" }}>
    //     {message.message}
    //   </Alert>
    // </Snackbar>

    <div>
   
    </div>
  );
}

export default SnackBar;
