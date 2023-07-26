import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

function useSignout() {
  const router = useRouter();
  const auth = getAuth();
  const signout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        router.push("/signin");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return {
    signout,
  };
}

export default useSignout;
