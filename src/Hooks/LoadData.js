import { useEffect, useState } from "react";

const LoadData = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://grim-citadel-46797.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return [services, setServices];
};

export default LoadData;
