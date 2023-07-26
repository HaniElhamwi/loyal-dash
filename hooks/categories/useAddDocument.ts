import { db } from "@/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { useRouter } from "next/navigation";

const useAddCategory = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({
    message: "",
    status: "",
  });

  const router = useRouter();
  const addCategory = async ({ title }: { title: string }) => {
    try {
      setLoading(true);
      await setDoc(doc(db, "categories", title), {
        title,
        products: [],
      });
      router.push("/dashboard/category");
      setLoading(false);
      setMessage({
        message: "Category added successfully",
        status: "success",
      });
    } catch (err: any) {
      setMessage({
        message: err.message,
        status: "error",
      });
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
