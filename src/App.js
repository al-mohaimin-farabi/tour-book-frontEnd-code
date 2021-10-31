import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Contexts/AuthProvider";

// import AuthProvider from "./Contexts/AuthProvider";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login/Login";
import ServiceDetails from "./Pages/ServiceDetails/ServiceDetails";
import Footer from "./Shared/Footer";
import Header from "./Shared/Header";
import NotFound from "./Pages/NotFound/NotFound";
import BookingSuccess from "./Pages/BookingSuccess/BookingSuccess";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Services from "./Pages/Services/Services";
import ContactUS from "./Shared/ContactUS";
import MyOrders from "./Pages/MyOrders/MyOrders";
import Confarmation from "./Pages/ManageAllOrders/ManageAllOrders";
import ManageAllOrders from "./Pages/ManageAllOrders/ManageAllOrders";
import AddService from "./Pages/AddService/AddService";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/contactus">
              <Header></Header>
              <ContactUS footer={<Footer></Footer>}></ContactUS>
            </Route>
            <Route exact path="/login">
              <Header></Header>
              <Login></Login>
            </Route>
            <PrivateRoute path="/home/:serviceid">
              <Header></Header>
              <ServiceDetails></ServiceDetails>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute exect path="/myorders">
              <Header></Header>
              <MyOrders footer={<Footer></Footer>}></MyOrders>
            </PrivateRoute>
            <PrivateRoute exect path="/confarmation">
              <Header></Header>
              <Confarmation></Confarmation>
              <Footer></Footer>
            </PrivateRoute>

            <PrivateRoute exact path="/services">
              <Header></Header>
              <Services>All</Services>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute exact path="/booked">
              <Header></Header>
              <BookingSuccess footer={<Footer></Footer>}></BookingSuccess>
            </PrivateRoute>
            <PrivateRoute exact path="/manageallorders">
              <Header></Header>
              <ManageAllOrders footer={<Footer></Footer>}></ManageAllOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/addservice">
              <Header></Header>
              <AddService footer={<Footer></Footer>}></AddService>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
