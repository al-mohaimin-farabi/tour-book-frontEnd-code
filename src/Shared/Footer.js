import React from "react";

const Footer = () => {
  return (
    <div className="py-2 mt-2  bg-success">
      <div className="container">
        <div className="w-100 d-flex justify-content-center  bg-success">
          <ul className="list-group list-group-horizontal d-flex flex-wrap">
            <li className="list-group-item bg-success border-0 border-end rounded-0">
              Partner Labs
            </li>
            <li className="list-group-item bg-success border-0 border-end rounded-0">
              Health Packages
            </li>
            <li className="list-group-item bg-success border-0 border-end rounded-0">
              Thyrocare Packages
            </li>
            <li className="list-group-item bg-success border-0 border-end rounded-0">
              Thyrocare Test
            </li>
            <li className="list-group-item bg-success border-0 border-end rounded-0">
              Covid-19 Self Test Kit
            </li>
          </ul>
        </div>
        <div className="mt-2">
          <p className="text-center">
            Diagnostic Centre Chattogram Plot No.: H1, Ananna Residential Area,
            CDA, Oxygen - Kuwaish Road, Postal Code: 4337, Chattogram,
            Bangladesh Landline: (02) 41380350-61
            E-mail:infoctg@DiagnosticCentre.com
          </p>
        </div>
        <div className="text-center mt-2">
          <p>
            © Copyright 2021 | All rights reserved. Diagnostic Centre
            Chattogram.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
