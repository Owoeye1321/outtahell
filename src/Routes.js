import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Loader from "./components/Helper/Loader";
import ScrollToTop from "./components/Helper/ScrollToTop";
import HomeOne from "./components/HomeOne";
import News from "./components/News";
import Login from "./components/login";
import Signup from "./components/signUp";
import ForgetPassword from "./components/forgetpassword";
import SingleNews from "./components/News/SingleNews";
import Service from "./components/Service";

function Routes() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });
  return (
    <>
      {loading && (
        <div className={`appie-loader ${loading ? "active" : ""}`}>
          <Loader />
        </div>
      )}
      <div className={`appie-visible ${loading === false ? "active" : ""}`}>
        <Router>
          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={HomeOne} />
              <Route exact path="/news" component={News} />
              <Route exact path="/news/single-news" component={SingleNews} />
              <Route exact path="/service" component={Service} />
              <Route exact path="/about-us" component={AboutUs} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/forgetpassword" component={ForgetPassword} />
              <Route exact path="/error" component={Error} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route component={Error} />
            </Switch>
          </ScrollToTop>
        </Router>
      </div>
    </>
  );
}

export default Routes;
