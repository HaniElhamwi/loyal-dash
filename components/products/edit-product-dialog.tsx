import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Slide,
  TextField,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React, { Dispatch, SetStateAction } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import DialogUploadImage from "./dialog-upload-image";
import DialogPickImage from "./dialog-upload-image";
import useEditProduct from "@/hooks/products/useEditProduct";
import SnackBar from "@/utils/snack-bar";

const DisplayingErrorMessagesSchema = Yup.object().shape({
  title: Yup.string().required("title is required").min(3).max(40),
  desc: Yup.string().required("title is required").min(3).max(40),
  category: Yup.string().required("title is required"),
});

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function EditProductDialog({
  open,
  setOpen,
  prod,
  products,
  item,
  id,
  setProducts,
  prodIndex,
  itemIndex,
  setRowItem,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  prod: {
    title: string;
    desc: string;
    image: string;
    category: string;
  };
  id: string;
  item: any;
  products: any;
  setProducts: any;
  itemIndex: number;
  setRowItem: any;
  prodIndex: number;
}) {
  const { t } = useTranslation();

  const { editProduct, loading, message, setMessage } = useEditProduct();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const categories = [];
  return (
    <div>
      {" "}
      <SnackBar message={message} setErrorMessage={setMessage} />
      <div>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          maxWidth="sm"
          fullWidth
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description">
          <DialogTitle>{"Edit Product"}</DialogTitle>
          <Formik
            initialValues={{
              title: prod.title,
              desc: prod.desc,
              image: prod.image,
              category: item.title,
            }}
            onSubmit={async (values, { resetForm }) => {
              try {
                const { imageData } = await editProduct({
                  title: values.title,
                  desc: values.desc,
                  image: values.image,
                  category: values.category,
                  oldImage: prod.image,
                  id,
                });
                // resetForm();
                setRowItem({
                  title: values.title,
                  desc: values.desc,
                  image: imageData,
                  category: values.category,
                });
                setOpen(false);
              } catch {}
            }}
            validationSchema={DisplayingErrorMessagesSchema}>
            {({
              values,
              handleChange,
              errors,
              handleSubmit,
              touched,
              setFieldValue,
            }) => (
              <DialogContent className="flex gap-3 flex-col">
                <TextField
                  fullWidth
                  placeholder="Title"
                  InputLabelProps={{
                    style: { color: "black" },
                  }}
                  error={Boolean(errors.title) && touched.title}
                  inputProps={{ style: { color: "black" } }}
                  onChange={handleChange}
                  name="title"
                  disabled={loading}
                  value={values.title}
                  helperText={touched.title && errors.title}
                />
                <TextField
                  fullWidth
                  placeholder="Description"
                  InputLabelProps={{
                    style: { color: "black" },
                  }}
                  disabled={loading}
                  error={Boolean(errors.desc) && touched.desc}
                  inputProps={{ style: { color: "black" } }}
                  onChange={handleChange}
                  name="desc"
                  value={values.desc}
                  helperText={touched.desc && errors.desc}
                />
                <DialogPickImage
                  setFieldValue={setFieldValue}
                  image={values.image}
                />
                <DialogActions>
                  <Button onClick={handleClose} disabled={loading}>
                    {t("CANCEL")}
                  </Button>
                  <Button onClick={() => handleSubmit()} disabled={loading}>
                    {!loading ? t("UPDATE") : <CircularProgress />}
                  </Button>
                </DialogActions>
              </DialogContent>
            )}
          </Formik>
        </Dialog>
      </div>
    </div>
  );
}

export default EditProductDialog;
