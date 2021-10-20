import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useState, useEffect } from "react";
// import { useHistory } from "react-router";
import initializeAuthentication from "../Pages/Login/Firebase/FireBaseInit";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
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

  const createNewUser = (email, pass) => {
    createUserWithEmailAndPassword(auth, email, pass)
      .then((res) => {
        // Signed in

        // ...clg
        setUserName();
        setError("");
      })
      .catch((error) => {
        setError(error.message);
        // ..
      });
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    if (pass.length < 6) {
      setError("Pass length must be 6 or higher");
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(pass)) {
      setError("Pass must have to uppercase character");
      return;
    }
    isLogin ? processLogin(email, pass) : createNewUser(email, pass);
  };
  const processLogin = (email, pass) => {
    signInWithEmailAndPassword(auth, email, pass)
      .then((res) => {
        setError("");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorCode, errorMessage);
      });
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

  const handleNameChange = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  const handlePassChange = (e) => {
    setPass(e.target.value);
  };

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

  const setUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then((res) => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };

  return {
    user,
    isLoading,
    toggleLogin,
    handlePassChange,
    handleEmailChange,
    handleNameChange,
    signInUsingGoogle,
    handleSignOut,
    signInWithEmailAndPassword,
    handleRegistration,
    name,
    setName,
    email,
    setEmail,
    pass,
    setPass,
    setUser,
    error,
    setError,
    isLogin,
    setIsLogin,
  };
};

export default useFirebase;
