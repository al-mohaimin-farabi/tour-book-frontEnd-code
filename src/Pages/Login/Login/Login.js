import React from "react";
import { useHistory, useLocation } from "react-router";
import "./Login.css";
import useAuth from "../../../Hooks/useAuth";

const Login = () => {
  const {
    toggleLogin,
    handlePassChange,
    handleEmailChange,
    handleNameChange,
    signInUsingGoogle,
    handleRegistration,
    error,
    isLogin,
  } = useAuth();
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
        <span className="text-success">{isLogin ? "login" : "Register"}</span>
      </h3>
      <div className="row d-flex justify-content-center align-items-center p-3">
        <div className="col-md-6 col-lg-6 col-12 align-self-end">
          <form onSubmit={handleRegistration}>
            <div className="row mb-3 align-items-center">
              {!isLogin && (
                <>
                  <label
                    htmlFor="inputAddress2"
                    className="form-label col-sm-2"
                  >
                    Name
                  </label>
                  <div className="col-sm-10 mb-3">
                    <input
                      onBlur={handleNameChange}
                      type="text"
                      className="form-control"
                      id="inputAddress2"
                      placeholder="Your Name"
                    />
                  </div>
                </>
              )}

              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  placeholder="Email"
                  autoComplete="true"
                  onBlur={handleEmailChange}
                  type="email"
                  className="form-control my-3"
                  id="inputEmail3"
                  required
                />
              </div>
            </div>
            <div className="row mb-3 align-items-center">
              <label
                htmlFor="inputPassword3"
                className="col-sm-2 col-form-label"
              >
                Password
              </label>
              <div className="col-sm-10">
                <input
                  placeholder="PassWord"
                  autoComplete="true"
                  onBlur={handlePassChange}
                  type="password"
                  className="form-control"
                  id="inputPassword3"
                  required
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-sm-10 offset-sm-2">
                <div className="form-check">
                  <input
                    onChange={toggleLogin}
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck1"
                  />
                  <label className="form-check-label" htmlFor="gridCheck1">
                    Already Registered
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary mt-3 me-2 tooltips"
                >
                  Submit
                  <span class="tooltiptext">Click Twice</span>
                </button>

                <button
                  className="btn btn-success  mt-3"
                  onClick={handleGoogleLogin}
                >
                  {isLogin ? "login With Google" : "Register With Google"}
                </button>
              </div>
            </div>
            <div className="row mb-3 text-danger">{error}</div>
          </form>
        </div>
        <div className="col-md-6 col-lg-6 col-12">
          <img className="img-fluid" src="./images/loginImg.png" alt="login" />
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
