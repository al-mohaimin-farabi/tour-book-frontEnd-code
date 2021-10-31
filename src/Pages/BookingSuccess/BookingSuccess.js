import React from "react";
import useAuth from "../../Hooks/useAuth";
import "./BookingSuccess.css";
const BookingSuccess = (props) => {
  const { user } = useAuth();
  return (
    <>
      <div className="main">
        <div className="s-card mt-5">
          <div className="card-s">
            <i className="checkmark">✓</i>
          </div>
          <h1 className="my-h1">Success</h1>
          <p className="my-p">
            {user?.displayName} We received your booking request;
            <br /> we'll be in touch shortly!
          </p>
        </div>
      </div>

      {props?.footer && (
        <div>
          <div>{props.footer}</div>
        </div>
      )}
    </>
  );
};

export default BookingSuccess;
