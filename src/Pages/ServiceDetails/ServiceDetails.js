import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { NavLink } from "react-router-dom";
import "./ServiceDetails.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";

const ServiceDetails = () => {
  const { serviceid } = useParams();
  const history = useHistory();
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  // console.log(serviceid);
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch(`https://grim-citadel-46797.herokuapp.com/services/${serviceid}`)
      .then((res) => res.json())
      .then((data) => setService(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (data) => {
    const confirmation = await window.confirm(
      `Are Sure You Wanna Book ${service?.title}`
    );
    let order = data;
    order.serviceid = serviceid;
    order.orderTitle = service.title;

    if (confirmation) {
      axios.post("http://localhost:5000/orders", order).then((res) => {
        if (res.data.insertedId) {
          alert("Adding Successful");
        }
        history.push("/booked");
        reset();
      });
    } else {
      alert(
        `You Have Cancelled Booking ${service?.title}. Redirecting to home page`
      );
      history.push("/home");
    }
  };

  // console.log(service);

  return (
    <>
      <div className="container  ">
        <div className="col-12 mt-4">
          <h3>Pending...</h3>
        </div>
      </div>
      <div className="container d-flex justify-content-center">
        <div className="row d-flex justify-content-center">
          <div className="col-md-7 col-lg-7 col-12">
            <div className=" my-card">
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
                  <p className="card-p">Includs: {service?.Include}</p>
                  <NavLink to="/home" className="btn btn-danger mt-3 me-2">
                    Back To Home
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-lg-5 col-12">
            <div className="add-service w-100">
              <h2 className="text-dark mt-3 text-center mb-3">
                Please Fill Up This From
              </h2>
              <form className="order-from" onSubmit={handleSubmit(onSubmit)}>
                <input
                  placeholder="Name"
                  defaultValue={user?.displayName}
                  required
                  {...register("Name", { required: true, maxLength: 50 })}
                />
                <input
                  required
                  placeholder="Email"
                  defaultValue={user?.email}
                  {...register("Email")}
                />
                <input
                  required
                  placeholder="PickUp Point"
                  type="text"
                  {...register("PickUpPoint")}
                />
                <input
                  required
                  placeholder="Phone Number"
                  type="number"
                  {...register("phonenumber")}
                />

                {/* <button
                  onClick={() => handleBook(service?.title)}
                  className="btn btn-success mt-3"
                >
                  Book It Now
                </button> */}
                <input
                  className="btn btn-success mt-5"
                  type="submit"
                  value="Book It Now"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
