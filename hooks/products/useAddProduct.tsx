import { db } from "@/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import useUploadImage from "../useUploadImage";

interface IAddProductsProps {
  title: string;
  category: string;
  desc: string;
  image: any;
}

const useAddProduct = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({
    message: "",
    status: "",
  });

  const { uploadFile } = useUploadImage();

  const router = useRouter();
  const addProducts = async ({
    title,
    desc,
    image,
    category,
  }: IAddProductsProps) => {
    try {
      setLoading(true);
      const docRef = doc(db, "categories", category);
      const docSnap: any = await getDoc(docRef);
      let imageData = "";

      if (image) {
        const imageUrl = await uploadFile({ file: image });
        imageData = imageUrl.image;
      }
      const productRef = doc(db, "categories", category);
      await updateDoc(productRef, {
        products: [
          ...docSnap?.data().products,
          {
            title,
            desc,
            id: uuidv4(),
            image: imageData,
          },
        ],
      });
      setLoading(false);
      setMessage({
        message: "Product added successfully",
        status: "success",
      });
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
    }
  };

  return {
    addProducts,
    loading,
    setMessage,
    message,
  };
};

export default useAddProduct;
