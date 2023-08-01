import { useState } from "react";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";

import { db } from "@/firebase";
import { toast } from "react-toastify";

interface IDeleteProductProps {
  category: string;
  products: any;
}

function useDeleteProduct() {
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState({
    message: "",
    status: "",
  });
  const deleteProduct = async ({ category, products }: IDeleteProductProps) => {
    try {
      setLoading(true);
      // await deleteDoc(doc(db, "categories", category));
      const productRef = doc(db, "categories", category);

      console.log(products);
      await updateDoc(productRef, {
        products: products,
      });
      setLoading(false);
      toast("Category deleted successfully");
    } catch {
      setLoading(false);
      toast("some thing went wrong");
    }
  };
  return {
    deleteProduct,
    loading,
    setMessage,
    message,
  };
}

export default useDeleteProduct;
