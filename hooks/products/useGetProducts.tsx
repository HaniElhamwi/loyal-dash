import { db } from "@/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import { useState } from "react";

const useGetAllGifts = () => {
  const [loading, setLoading] = useState(false);
  const [gifts, setGifts] = useState([]);
  const [message, setMessage] = useState({
    message: "",
    status: "",
  });
  const getAllGifts = async (status: boolean) => {
    const giftsData: any = [];

    try {
      setLoading(true);
      const q = query(
        collection(db, "gift"),
        where("isDelivered", "==", status)
      );
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        giftsData.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      setGifts(giftsData);
      setLoading(false);
    } catch (err: any) {
      setMessage({
        message: err.message,
        status: "error",
      });
      setLoading(false);
    }
  };

  const toggleDelivered = async (
    status: boolean,
    id: string,
    selectingStatus: boolean
  ) => {
    const docRef = doc(db, "gift", id);
    await updateDoc(docRef, {
      isDelivered: status,
    });
    getAllGifts(selectingStatus);
  };

  return {
    getAllGifts,
    loading,
    setMessage,
    message,
    gifts,
    setGifts,
    toggleDelivered,
  };
};

export default useGetAllGifts;
