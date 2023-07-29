import { db } from "@/firebase";
import { collection, query, getDocs } from "firebase/firestore";
import { useState } from "react";

const useGetAllCategories = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [message, setMessage] = useState({
    message: "",
    status: "",
  });
  const categoriesPicker: any = [];

  const getCategories = async () => {
    try {
      setLoading(true);
      const q = query(collection(db, "categories"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        categoriesPicker.push(doc.id);
      });
      setCategories(categoriesPicker);
      setLoading(false);
    } catch (err: any) {
      setMessage({
        message: err.message,
        status: "error",
      });
      setLoading(false);
    }
  };

  const deleteCategory = (name: string) => {
    setCategories(categories.filter((cat) => cat !== name));
  };

  return {
    getCategories,
    loading,
    setMessage,
    message,
    categories,
    deleteCategory,
  };
};

export default useGetAllCategories;
