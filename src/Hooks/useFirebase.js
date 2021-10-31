import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useState, useEffect } from "react";
// import { useHistory } from "react-router";
// import { useHistory } from "react-router";
import initializeAuthentication from "../Pages/Login/Firebase/FireBaseInit";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // const history = useHistory();
  const auth = getAuth();

  const signInUsingGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();

    const singIn = signInWithPopup(auth, googleProvider)
      .catch((error) => {
        setError(error);
      })
      .finally(() => setIsLoading(false));
    return singIn;
  };

  // observe user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleLogin = (e) => {
    setIsLogin(e.target.checked);
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser({});
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return {
    handleSignOut,
    toggleLogin,
    signInUsingGoogle,
    user,
    error,
    isLogin,
    isLoading,
  };
};

export default useFirebase;
