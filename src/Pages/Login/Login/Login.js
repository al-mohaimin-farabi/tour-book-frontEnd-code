import React from "react";
import { useHistory, useLocation } from "react-router";
import "./Login.css";
import useAuth from "../../../Hooks/useAuth";

const Login = () => {
  const { toggleLogin, signInUsingGoogle, error, isLogin } = useAuth();
  const location = useLocation();
  console.log(location);
  const redirect_uri = location.state?.from || "/home";
  const history = useHistory();

  const handleGoogleLogin = () => {
    signInUsingGoogle().then((res) => {
      history.push(redirect_uri);
    });
  };
  return (
    <div className="container text-secondary shadow shadow-lg mt-5 rounded-3 border border-success">
      <h3 className="pt-5 mb-0 pb-0 text-secondary text-center">
        Please
        <span className="text-success"> {isLogin ? "login" : "Register"}</span>
      </h3>
      <div className="row d-flex justify-content-center align-items-center p-3">
        <div className="col-md-12 col-lg-12 col-12 text-center">
          <img
            className="img-fluid w-50"
            src="./images/loginImg.png"
            alt="login"
          />
        </div>
        <div className="col-md-12 col-lg-12 col-12 text-center  ">
          <form>
            <input
              onChange={toggleLogin}
              className="form-check-input"
              type="checkbox"
              id="gridCheck1"
            />
            <label className="form-check-label" htmlFor="gridCheck1">
              &nbsp;&nbsp;Already Registered
            </label>
            <div className="row mb-3 text-danger">{error}</div>
          </form>
          <div>
            <button
              className="btn btn-success  mt-0"
              onClick={handleGoogleLogin}
            >
              {isLogin ? "login With Google" : "Register With Google"}
            </button>
          </div>
        </div>
      </div>

      {/* {!user.displayName ? (
        <button onClick={signInUsingGoogle}>Sign in With Google</button>
      ) : (
        <button onClick={logOut}>SignOut</button>
      )}
      {user.displayName && (
        <>
          <h1>Name: {user.displayName}</h1>
          <img src={user.photoURL} alt="" />
        </>
      )} */}
    </div>
  );
};

export default Login;
