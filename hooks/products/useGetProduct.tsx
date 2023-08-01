import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useUploadImage from "../useUploadImage";

interface IAddProductsProps {
  category: string;
}

const useGetProduct = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({
    message: "",
    status: "",
  });
  const [product, setProduct] = useState({});

  const { uploadFile } = useUploadImage();

  const router = useRouter();
  const getProduct = async ({ category }: IAddProductsProps) => {
    try {
      setLoading(true);
      //   const docRef = doc(db, "categories", category);
      //   const docSnap: any = await getDoc(docRef);
      //   let imageData = "";
      //   if (image) {
      //     const imageUrl = await uploadFile({ file: image });
      //     imageData = imageUrl.image;
      //   }
      //   const productRef = doc(db, "categories", category);
      //   await updateDoc(productRef, {
      //     products: [
      //       ...docSnap?.data().products,
      //       {
      //         title,
      //         desc,
      //         id: uuidv4(),
      //         image: imageData,
      //       },
      //     ],
      //   });
      const docRef = doc(db, "categories", category.replace(/%20/g, " "));
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProduct(docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
      setLoading(false);
      setMessage({
        message: "Product edited successfully",
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
    getProduct,
    loading,
    setMessage,
    message,
    product,
  };
};

export default useGetProduct;
