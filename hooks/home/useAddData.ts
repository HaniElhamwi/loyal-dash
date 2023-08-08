import { db } from "@/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useUploadImage from "../useUploadImage";
import { toast } from "react-toastify";

interface ILanguages {
  en: string;
  ar: string;
  tr: string;
}
interface IAddProductsProps {
  title: ILanguages;
  category: string;
  desc: ILanguages;
  image: any;
}

const useAddData = () => {
  const [loading, setLoading] = useState(false);

  const { uploadFile } = useUploadImage();

  const addData = async ({
    title,
    desc,
    image,
    category,
  }: IAddProductsProps) => {
    try {
      setLoading(true);
      const docRef = doc(db, "home", category);
      const docSnap: any = await getDoc(docRef);
      let imageData = "";

      if (image) {
        const imageUrl = await uploadFile({ file: image });
        imageData = imageUrl.image;
      }
      const productRef = doc(db, "home", category);
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
      toast("product added successfully");
    } catch (err: any) {
      toast("there is a problem pleas contact us");
      setLoading(false);
    }
  };

  return {
    addData,
    loading,
  };
};

export default useAddData;
