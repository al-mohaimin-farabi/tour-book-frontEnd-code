import React from "react";
import { useHistory } from "react-router";
import "./Service.css";
const Service = (props) => {
  const { title, description, img } = props.details;

  const history = useHistory();
  const singleService = () => {
    history.push(`/home/${title}`);
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
          <p className="card-text"> {description}</p>
        </div>
        <div className="card-footer bg-transparent border-0 pb-3">
          <button onClick={singleService} className="btn btn-success ">
            See Full Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
