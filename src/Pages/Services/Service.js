import React from "react";
import { useHistory } from "react-router";
import "./Service.css";
const Service = (props) => {
  const { title, description, img, price, _id } = props.details;

  const history = useHistory();
  const singleService = () => {
    history.push(`/home/${_id}`);
  };
  return (
    <div className="col">
      <div className="card h-100">
        <img
          src={img}
          className="card-img-top height"
          alt="img of doctor and paitaint"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text"> {description?.slice(0, 220)}...</p>
          <p className="card-text">
            Price: <span className="text-success fw-bold">{price}</span>
          </p>
        </div>
        <div className="card-footer bg-transparent border-0 pb-3">
          <button onClick={singleService} className="btn btn-success ">
            Book It Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
