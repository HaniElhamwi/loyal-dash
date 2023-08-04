import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useUploadImage from "../useUploadImage";

interface IAddProductsProps {
  homeSection: string;
}

const useGetProduct = () => {
  const [loading, setLoading] = useState(false);

  const [products, setProducts] = useState<any>([]);

  const { uploadFile } = useUploadImage();

  const router = useRouter();
  const getProduct = async ({ homeSection }: IAddProductsProps) => {
    try {
      setLoading(true);
      const docRef = doc(db, "home", homeSection);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProducts(docSnap.data().products);
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
      setLoading(false);
    } catch (err: any) {
      setLoading(false);
    }
  };

  return {
    getProduct,
    loading,
    products,
    setProducts,
  };
};

export default useGetProduct;
