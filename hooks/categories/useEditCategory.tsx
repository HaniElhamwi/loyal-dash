import { db } from "@/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useUploadImage from "../useUploadImage";
import { toast } from "react-toastify";

interface IAddProductsProps {
  category: string;
  image: any;
  oldImage: any;
}

const useEditCategory = () => {
  const [loading, setLoading] = useState(false);

  const { uploadFile } = useUploadImage();

  const router = useRouter();
  const editProduct = async (props: IAddProductsProps) => {
    let imageData = "";
    const { image, category, oldImage } = props;
    try {
      setLoading(true);
      const docRef = doc(db, "categories", category);
      const docSnap: any = await getDoc(docRef);

      if (image && image !== oldImage) {
        const imageUrl = await uploadFile({ file: image });
        imageData = imageUrl.image;
      } else {
        imageData = oldImage;
      }
      const productRef = doc(db, "categories", category);

      await updateDoc(productRef, {
        image: imageData,
      });
      setLoading(false);

      toast("product edited successfully");
    } catch (err: any) {
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
  };
};

export default useEditCategory;
