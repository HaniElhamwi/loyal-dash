import { db } from "@/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useState } from "react";

const useGetAllProducts = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState({
    message: "",
    status: "",
  });
  const productsData: any = [];
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const q = query(collection(db, "categories"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        productsData.push(doc.data());
      });
      console.log(productsData);
      setProducts(productsData);
      setLoading(false);
    } catch (err: any) {
      setMessage({
        message: err.message,
        status: "error",
      });
      setLoading(false);
    }
  };

  return {
    getAllProducts,
    loading,
    setMessage,
    message,
    products,
  };
};

export default useGetAllProducts;
