import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Loader from "./components/Helper/Loader";
import AnimateRouter from "./animateRouter"

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
          <AnimateRouter/>
        </Router>
      </div>
    </>
  );
}

export default Routes;
