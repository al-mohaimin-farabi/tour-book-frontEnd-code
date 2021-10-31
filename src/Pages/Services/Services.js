import LoadData from "../../Hooks/LoadData";
import Service from "./Service";

const Services = (props) => {
  const [services] = LoadData();
  let datatoload;
  if (props?.datato) {
    datatoload = props.datato;
  } else {
    datatoload = services?.length;
  }
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-12">
          <h1 className="mb-4">
            {props.children}
            <span className="text-success"> Services</span>
          </h1>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-3">
        {services.slice(0, datatoload).map((service) => (
          <Service details={service} key={Math.random() * 1000}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
