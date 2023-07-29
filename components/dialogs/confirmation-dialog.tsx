import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  Slide,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ConfirmationDialog({
  handleDelete,
  children,
  message,
}: {
  handleDelete: any;
  children: any;
  message: string;
}) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const { t } = useTranslation();

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div onClick={() => setOpen(true)}>{children}</div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        maxWidth="sm"
        fullWidth
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description">
        <DialogContent>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold text-center">{t(message)}</h1>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{t("CANCEL")}</Button>
          <Button
            variant="contained"
            color="error"
            sx={{
              background: "red !important",
              "&:hover": { background: "#A30000 !important" },
            }}
            onClick={async () => {
              setLoading(true);
              handleDelete();
              setOpen(false);
              setLoading(false);
            }}>
            {loading ? <CircularProgress /> : t("DELETE")}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ConfirmationDialog;
