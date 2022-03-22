import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "./components/NotFound/NotFound";
import Details from "./components/Details/Details";
import AuthProvider from "./Context/AuthProvider";
import Login from './components/Shared/Login/Login/Login';
import PrivateRoute from './components/Shared/Login/PrivateRoute/PrivateRoute';
import Register from './components/Shared/Register/Register';
import MainLogin from './components/Shared/Login/Login/MainLogin/MainLogin';
import Footer from "./components/Shared/Footer/Footer";
import Services from './components/Services/Services';
import Experts from "./components/Experts/Experts";
import Header from "./components/Shared/Header/Header";
import About from "./components/About/About";
import Appointment from "./Pages/Appoitnment/Appointment/Appointment";
import Dashboard from './Pages/Dashboard/Dashboard';
import AllBookings from "./Pages/Dashboard/AllBookings/AllBookings";



function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
        
          <Route path="/experts">
            <Experts></Experts>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
         
          <PrivateRoute path="/details/:detailsId">
            <Details></Details>
          </PrivateRoute>
          <Route path="/login">
            <MainLogin></MainLogin>
          </Route>
          <Router path="/register">
            <Register></Register>
          </Router>
          <PrivateRoute path="/appointment">
            <Appointment></Appointment>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/allBookings">
            <AllBookings></AllBookings>
          </PrivateRoute>
          <Route path="/*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
