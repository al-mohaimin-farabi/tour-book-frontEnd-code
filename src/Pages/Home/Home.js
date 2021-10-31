import React from "react";
import ContactUS from "../../Shared/ContactUS";
import Footer from "../../Shared/Footer";

import Header from "../../Shared/Header";
import Services from "../Services/Services";
import Carosel from "./Carosel";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="container p-2">
        <h1 className="col-12 mt-2">
          Why Us <span className="text-success">?</span>
        </h1>
        <p className="col-12">
          The name Tour Planners Ltd, is well known in both national and
          international markets for the quality of its services having
          knowledgeable team of English / Japanese / Chinese & other language
          Speaking Guide. For almost two decades we have been providing our
          customers with all tourism related services to their complete
          satisfactions and at competitive prices. Founded in Dhaka in the year
          1992, today we operate in the network from the most important tourist
          centers in the country, which guarantees the best possible service. As
          a full Destination Management Company, Tour Planners Ltd. offers all
          services for a professional and perfect handling of all kinds of
          groups and projects in Bangladesh. We actively participate in the
          daily life of the communities where we operate. For instance, the
          company contributes funds to rural tribes visited by our ethnic tours.
          We aim to present the people, history, cultural heritage and beauty of
          Bangladesh to the world through unique customized services of
          international standards. We will continue to strengthen our position
          in the tourism market as one of Bangladesh's leading providers of such
          services as well as to promote the superiority of our products, prices
          and our team of local and international travel experts.
        </p>
      </div>

      {/* slider/ banner */}

      <Carosel></Carosel>

      {/* services section */}

      <Services datato={6}> Our Most Popular</Services>

      {/* contact us */}
      <ContactUS></ContactUS>
      <Footer></Footer>
    </div>
  );
};

export default Home;
