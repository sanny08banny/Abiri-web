import { render } from "solid-js/web";
import { Route, Router, Navigate } from "@solidjs/router";

import "./index.css";
import App from "./App";
import Home from "./Components/Home";
import PrivacyPolicyContent from "./Components/PrivacyPolicyComponent";
import DeleteAccount from "./Components/DeleteAccount";
import AboutAbiri from "./Components/AboutAbiri";
import AboutTerms from "./Components/AboutTerms";
import TaxiComponent from "./Components/TaxiComponent";

import Login from "./Components/Login";
import CreateUser from "./Components/CreateUser";
import { loadUserFromStorage, userStore } from "./store/userStore";
import CarRentalForm from "./Rental/CarRentalForm";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

// Load user from localStorage when the app starts
loadUserFromStorage();

render(() => (
  <Router>
    {/* Home route */}
    <Route
      path="/"
      component={Home}
    />


    {/* Login and CreateUser routes */}
    <Route path="/login" component={Login} />
    <Route path="/create_user" component={CreateUser} />

    {/* Other routes */}
    <Route path="/taxi" component={TaxiComponent} />
    <Route path="/delete_user" component={DeleteAccount} />
    <Route path="/about_abiri" component={AboutAbiri} />
    <Route path="/privacy_policy" component={PrivacyPolicyContent} />
    <Route path="/terms" component={AboutTerms} />
    <Route path="/car_upload" component={CarRentalForm} />
  </Router>
), root);

