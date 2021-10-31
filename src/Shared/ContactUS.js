import React from "react";
import "./ContactUs.css";
const ContactUS = (props) => {
  return (
    <>
      <div className="container py-2 my-5">
        <h3 className="text-success mt-2">CONTACT US</h3>
        <div className="row d-flex">
          <div className="col-12 col-lg-6 col-md-6 mt-2">
            
              <address>
                <strong>Head Office</strong> <br /> <br />
                House # 3, Road # 15, Sector # 4, <br />
                Uttara, Dhaka-1230,Bangladesh. <br />
                <br />
                Phone: +880-2-58953389, +880-2-58954489 <br />
                Fax:+880-2-58950624
              </address>
            
          </div>
          <div className="col-12 col-lg-6 col-md-6 mt-2">
            
              <address>
                <strong>E-mails: </strong> <br />
                General query : tourplan@tour-planners.com,
                tourplan@tourplanners.com.bd Hotel <br />
                reservation : reservation@tourplanners.com.bd Visa <br />
                Information : visa@tourplanners.com.bd Car/BUS <br />
                Rental : transport@tourplanners.com.bd Air <br />
                Ticket : ticketing@tourplanners.com.bd <br />
                Web URL: www.tour-planners.com
              </address>
            
          </div>
        </div>
      </div>
      {/* {{ children } && (
        <div className="position">
          <div className="position-tow">{children}</div>
        </div>
      )} */}
      {props?.footer && (
        <div className="position">
          <div className="position-tow">{props.footer}</div>
        </div>
      )}
    </>
  );
};

export default ContactUS;
