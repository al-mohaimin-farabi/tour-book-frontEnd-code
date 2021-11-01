import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import "./MyOrders.css";
const MyOrders = (props) => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(
      `https://grim-citadel-46797.herokuapp.com/orders?search=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setOrders(data));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = (id, title) => {
    const confirmation = window.confirm(`Are Sure You Wanna Delete ${title}`);
    if (confirmation) {
      const url = `https://grim-citadel-46797.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const remaining = orders.filter((service) => service._id !== id);
            setOrders(remaining);
          }
        });
    } else {
      alert(`Deleting ${title} aborted`);
    }
  };

  return (
    <>
      <div className="container mb-5">
        <div className="d-flex my-3 align-items-center flex-wrap">
          <div>
            <h3 className=" text-success">Orders of Mr. {user?.displayName}</h3>
            <p> EMail: {user?.email}</p>
          </div>
          <div>
            <img className="rounded ms-2" src={user?.photoURL} alt="" />
          </div>
        </div>
        {console.log(orders)}
        {orders?.length > 0 ? (
          <ul className="list-group align-middle">
            {orders?.map((order) => (
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
                      onClick={() =>
                        handleDelete(order?._id, order?.orderTitle)
                      }
                    >
                      X
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <h4>Nothing Orderd Yet</h4>
        )}
      </div>
      {props?.footer && (
        <div className="position-m-footer">
          <div className="position-m-footer-tow">{props.footer}</div>
        </div>
      )}
    </>
  );
};

export default MyOrders;
