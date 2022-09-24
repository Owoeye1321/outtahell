import { Route, Switch, useLocation } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ScrollToTop from "./components/Helper/ScrollToTop";
import HomeOne from "./components/HomeOne";
import News from "./components/News";
import Login from "./components/login";
import Signup from "./components/signUp";
import ForgetPassword from "./components/forgetpassword";
import SingleNews from "./components/News/SingleNews";
import Service from "./components/Service";
import DashBoard from "./components/DashBoard";
import Profile from "./components/Profile";
import PersonalDiary from "./components/personalUpload";
import { AnimatePresence } from 'framer-motion/dist/framer-motion'
import GetStarted from "./components/GetStarted";
  
  function AnimateRouter(){
    const location = useLocation()
    return(
        <>
         <ScrollToTop>
            <AnimatePresence>
            <Switch location={location} key = {location.pathname}>
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
              <Route exact path="/dashboard" component={DashBoard} />
              <Route exact path="/view_available_hostels" component={GetStarted} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/personalDiary" component={PersonalDiary} />
              <Route component={Error} />
            </Switch>
            </AnimatePresence>
          </ScrollToTop>

        </>
    )
}

export default AnimateRouter