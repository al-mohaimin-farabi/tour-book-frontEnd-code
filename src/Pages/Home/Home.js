import React from "react";
import Footer from "../../Shared/Footer";
import Header from "../../Shared/Header";
import Services from "../Services/Services";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="container p-2">
        <h1 className="col-12">
          Why Us <span className="text-success">?</span>
        </h1>
        <p className="col-12">
          Diagnostic Center is the first-ever 270-bed multi-disciplinary
          super-specialty, tertiary care Diagnostic Centre in our country. It
          features 24/7 Emergency checkup Department, state of the art Lab and
          27 specialties and subspecialties filling capacity gaps in the region.
          The center spans 192,00 sq ft and Equipped with the latest technology
          and more than 500 best in class medical professionals, the Diagnostic
          Centre will provide quality, accessible healthcare to improve patient
          outcomes for communities in, and around.
        </p>
      </div>

      <div
        id="carouselExampleSlidesOnly"
        className="carousel   slide text-center mt-2"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active ">
            <img
              src="./images/pic1.jpg
            "
              className="w-100 postion"
              alt="..."
            />
          </div>
          <div className="position-two shadow-lg p-3 rounded">
            <h2 className="text-success shadow-text py-2">
              Niramoy Basic Health Checkup
            </h2>
            <p className="text-white fs-6 shadow-text ">
              Niramoy Basic Health Checkup Package checks 84 vital parameters
              which include Fasting, Thyroid, Heart, Liver, Kidney, Urine
              analysis, CBC, Iron, and Healthy Bone profile.
            </p>
            <p className="fs-4">
              <span className="fw-bold">Price: </span>
              <span className="text-danger shadow-text">
                <del>2300TK</del>
              </span>
              <span className="text-success shadow-text ms-2">700Tk</span>
            </p>
          </div>
        </div>
      </div>

      {/* services section */}

      <Services datato={6}> Our Most Popular</Services>

      {/* faq */}
      <div className="container py-2">
        <h3 className="text-success mt-2">FAQ</h3>
        <p>
          <strong>
            How can I have the teleconsultation with the doctor of your
            hospital?
          </strong>
          <br />
          <strong>Answer:</strong> You can access the link directly by typing
          ehcecare.evercarebd.com:8010/in the browser, or you can navigate by
          clicking the online consultation appointment link mentioned in our
          official website ehcecare.evercarebd.com
        </p>
        <p>
          <strong>
            How will I get to know that my appointment request is accepted?
          </strong>
          <br />
          <strong>Answer:</strong> As per your appointment request, an email and
          an SMS notification will be sent to you within 24 hours. If not,
          please call our coordinator at 10663.
        </p>
        <p>
          <strong>What is the consultation fee for teleconsultation?</strong>
          <br />
          <strong>Answer:</strong> We have been offering the service at a flat
          rate of BDT 1000 – 1200 at this moment. Please check with our
          coordinator for details at 10663.
        </p>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
