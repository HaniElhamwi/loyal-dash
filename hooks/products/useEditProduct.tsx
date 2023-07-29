import { db } from "@/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useUploadImage from "../useUploadImage";
import { toast } from "react-toastify";

interface IAddProductsProps {
  title: string;
  category: string;
  desc: string;
  image: any;
  oldImage: any;
  id: string;
}

const useEditProduct = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({
    message: "",
    status: "",
  });

  const { uploadFile } = useUploadImage();

  const router = useRouter();
  const editProduct = async (props: IAddProductsProps) => {
    let imageData = "";
    const { title, desc, image, category, oldImage, id } = props;
    try {
      setLoading(true);
      const docRef = doc(db, "categories", category);
      const docSnap: any = await getDoc(docRef);

      if (image && image !== oldImage) {
        console.log("uploading image");
        const imageUrl = await uploadFile({ file: image });
        imageData = imageUrl.image;
      } else {
        imageData = oldImage;
      }
      const productRef = doc(db, "categories", category);
      const newProducts = docSnap?.data();
      const index = newProducts.products.findIndex(
        (item: any) => item.id === id
      );
      newProducts.products[index] = {
        title,
        desc,
        id,
        image: imageData,
      };
      await updateDoc(productRef, {
        products: newProducts.products,
        title: newProducts.title,
      });
      setLoading(false);
      setMessage({
        message: "Product added successfully",
        status: "success",
      });
      toast("product edited successfully");
    } catch (err: any) {
      setMessage({
        message: err.message,
        status: "error",
      });
      setMessage({
        message: "Something went wrong",
        status: "error",
      });
      setLoading(false);
      toast("Something went wrong please contact us");
    }
    return {
      imageData,
    };
  };

  return {
    editProduct,
    loading,
    setMessage,
    message,
  };
};

export default useEditProduct;
