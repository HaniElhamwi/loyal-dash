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

  const deleteProduct = async ({ category, products }: IDeleteProductProps) => {
    try {
      setLoading(true);
      const productRef = doc(db, "home", category);
      await updateDoc(productRef, {
        products,
      });
      setLoading(false);
      toast("Product deleted successfully");
    } catch {
      setLoading(false);
      toast("some thing went wrong");
    }
  };
  return {
    deleteProduct,
    loading,
  };
}

export default useDeleteProduct;
