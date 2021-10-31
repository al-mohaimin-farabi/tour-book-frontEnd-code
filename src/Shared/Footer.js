import React from "react";

const Footer = () => {
  return (
    <div className="py-2 mt-2  bg-success ">
      <div className="container">
        <div className="w-100 d-flex justify-content-center  bg-success">
          <ul className="list-group list-group-horizontal d-flex flex-wrap">
            <li className="list-group-item bg-success border-0 border-end rounded-0">
              Special Interest Tour
            </li>
            <li className="list-group-item bg-success border-0 border-end rounded-0">
              Tailor made Tours
            </li>
            <li className="list-group-item bg-success border-0 border-end rounded-0">
              River Cruise
            </li>
            <li className="list-group-item bg-success border-0 border-end rounded-0">
              Coordinating Study Tours
            </li>
            <li className="list-group-item bg-success border-0 border-end rounded-0">
              Cultural and Festival Tour
            </li>
          </ul>
        </div>

        <div className="text-center mt-2">
          <p>© 2015 World Tour Planners. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
