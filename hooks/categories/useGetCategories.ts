import { db } from "@/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useState } from "react";

const useGetAllCategories = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({
    message: "",
    status: "",
  });
  const categories: any = [];

  const getCategories = async () => {
    try {
      setLoading(true);
      const q = query(collection(db, "categories"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        categories.push(doc.id);
      });
      setLoading(false);
      console.log(categories);
    } catch (err: any) {
      setMessage({
        message: err.message,
        status: "error",
      });
      setLoading(false);
    }
  };

  return {
    getCategories,
    loading,
    setMessage,
    message,
    categories,
  };
};

export default useGetAllCategories;
