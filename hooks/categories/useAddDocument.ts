import { db } from "@/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import useUploadImage from "../useUploadImage";

const useAddCategory = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({
    message: "",
    status: "",
  });
  const { uploadFile } = useUploadImage();

  const router = useRouter();
  const addCategory = async ({
    title,
    image,
  }: {
    title: {
      ar: string;
      en: string;
      tr: string;
    };
    image: any;
  }) => {
    try {
      setLoading(true);
      let imageData = "";

      if (image) {
        const imageUrl = await uploadFile({ file: image });
        imageData = imageUrl.image;
      }
      await setDoc(doc(db, "categories", title.en), {
        title,
        products: [],
        image: imageData,
      });
      router.push("/dashboard/category");
      setLoading(false);
      setMessage({
        message: "Category added successfully",
        status: "success",
      });
      toast("category added successfully");
    } catch (err: any) {
      setMessage({
        message: err.message,
        status: "error",
      });
      toast("Some thing went wrong please contact us");
      setLoading(false);
    }
  };

  return {
    addCategory,
    loading,
    setMessage,
    message,
  };
};

export default useAddCategory;
