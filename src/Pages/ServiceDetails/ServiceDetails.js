import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import "./ServiceDetails.css";
const ServiceDetails = () => {
  //   const [services] = LoadData();
  //   const service = services.find((eachservice) => eachservice.key === serviceid);
  //   console.log(services);

  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://al-mohaimin-farabi.github.io/healthwebapi/data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const { serviceid } = useParams();
  const service = services.find(
    (eachservice) => eachservice.title === serviceid
  );

  //   console.log(service);

  return (
    <div className="container d-flex justify-content-center">
      <div className="col-8 my-card">
        <div className="card border-success p-3 text-start">
          <img
            className="img-fluid my-img card-img-top"
            src={service?.img}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{service?.title}</h5>
            <p className="card-p">{service?.description}</p>
            <p className="card-p">Price: {service?.price}</p>
            <p className="card-p">Total Test: {service?.totalTest}</p>
            <p className="card-p">Facility: {service?.Include}</p>
            <NavLink to="/home" className="btn btn-danger mt-3 me-2">
              Back To Home
            </NavLink>
            <NavLink to="/booked" className="btn btn-success mt-3">
              Book It Now
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
