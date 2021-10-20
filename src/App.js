import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Contexts/AuthProvider";
import BloodTest from "./Pages/BloodTest/BloodTest";
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
            <Route exact path="/login">
              <Header></Header>
              <Login></Login>
            </Route>
            <PrivateRoute path="/home/:serviceid">
              <Header></Header>
              <ServiceDetails></ServiceDetails>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute exact path="/bloodtest">
              <Header></Header>
              <BloodTest></BloodTest>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute exact path="/services">
              <Header></Header>
              <Services datato={7}>All</Services>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute exact path="/booked">
              <Header></Header>
              <BookingSuccess></BookingSuccess>
              <Footer></Footer>
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
