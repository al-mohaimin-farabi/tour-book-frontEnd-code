import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

const ManageAllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    const url = `https://grim-citadel-46797.herokuapp.com/orders`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAllOrders(data);
      });
  }, []);
  console.log(allOrders);
  const handleDelete = (id, title) => {
    const confirmation = window.confirm(`Are Sure You Wanna Delete ${title}`);
    if (confirmation) {
      const url = `https://grim-citadel-46797.herokuapp.com/services/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const remaining = allOrders.filter((service) => service._id !== id);
            setAllOrders(remaining);
          }
        });
    } else {
      alert(`Deleting ${title} aborted`);
    }
  };
  const history = useHistory();
  const goTOAddService = () => {
    history.push("/addservice");
  };

  return (
    <div className="container mt-5 d-flex justify-content-center flex-column">
      <ul className="list-group align-middle">
        {allOrders?.map((order) => (
          <li
            key={Math.random() * 1000}
            className="list-group-item align-middle"
          >
            <div className="d-flex justify-content-center align-item-center">
              <div className="col-6   ">
                <p className="mt-2">{order?.orderTitle}</p>
                <p className="mt-2">For {order?.Name}</p>
                <p className="mt-2">Email: {order?.Email}</p>
                <p className="mt-2">Phone: {order?.phonenumber}</p>
                <p className="mt-2">PickUp From: {order?.PickUpPoint}</p>
              </div>
              <div className="col-6 text-end d-flex align-items-center justify-content-end">
                <button
                  className="btn btn-danger me-3"
                  onClick={() => handleDelete(order?._id, order?.orderTitle)}
                >
                  X
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="text-center">
        <button
          className="btn btn-success w-100 fw-bolder  my-3"
          onClick={goTOAddService}
        >
          Add Service
        </button>
      </div>
    </div>
    // <h2>hi</h2>
  );
};

export default ManageAllOrders;

// key
// :
// 7
// title
// :
// "Nature and Culture Tour"
// img
// :
// "https://i.ibb.co/vvCcFns/7.jpg"
// description
// :
// "This Tour is a great combination of Nature, Culture and Heritage of Ba..."
// price
// :
// 7500
// Include
// :
// " Breakfast, lunch, dinner"
