import React from "react";
import HomeOneHeader from "../HomeOne/HomeOneHeader";
import useToggle from "../../Hooks/useToggle";
import Drawer from "../Mobile/Drawer";
import FooterHomeOne from "../HomeOne/FooterHomeOne";

function NorthGate() {
  const [drawer, drawerAction] = useToggle(false);
  return (
    <div style={{ backgroundColor: "white" }}>
      <Drawer drawer={drawer} action={drawerAction.toggle} />
      <HomeOneHeader action={drawerAction.toggle} />
      <div className="appie-about-top-title-area">
        <div className="container" style={{ marginBottom: "200px" }}>
          <div
            className="row d-flex justify-content-between"
            style={{
              margin: "auto",
              //   backgroundColor: "red",
            }}
          >
            <div style={{ marginBottom: "50px" }}>
              <img
                src="https://campusreporter.ng/wp-content/uploads/2021/08/FUTA.jpeg"
                alt=""
                style={{
                  justifyContent: "center",
                }}
              />
              <div style={{ marginLeft: "20%" }}>
                <h2> Apartments around NorthGate</h2>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                width: "48%",
                paddingTop: "20px",
                paddingBottom: "20px",
                borderRadius: "20px",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                cursor: "pointer",
              }}
            >
              <img
                src="https://images.propertypro.ng/large/7-units-of-two-bedroom-apartment-to-let-viIPPlpYrrsYA4wBoj8e.jpg"
                class="img-fluid"
                alt="..."
                style={{ borderRadius: "20px" }}
              />
              <h4 style={{ marginTop: "20px" }}>Alice Mosunmola hostel</h4>
              <h5>
                <strong>Price:</strong>
                {""}120,000
              </h5>
            </div>
            <div
              style={{
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                width: "48%",
                paddingTop: "20px",
                paddingBottom: "20px",
                borderRadius: "20px",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                cursor: "pointer",
              }}
            >
              <img
                src="https://images.propertypro.ng/large/7-units-of-two-bedroom-apartment-to-let-viIPPlpYrrsYA4wBoj8e.jpg"
                class="img-fluid"
                alt="..."
                style={{ borderRadius: "20px" }}
              />
              <h4 style={{ marginTop: "20px" }}>Alice Mosunmola hostel</h4>
              <h5>
                <strong>Price:</strong>
                {""}120,000
              </h5>
            </div>
          </div>
          <div
            className="row d-flex justify-content-between"
            style={{
              margin: "auto",
              //   backgroundColor: "red",
            }}
          >
            <div style={{ marginBottom: "50px", marginLeft: "20%" }}>
              <h2></h2>
            </div>
            <div
              style={{
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                width: "48%",
                paddingTop: "20px",
                paddingBottom: "20px",
                borderRadius: "20px",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                cursor: "pointer",
              }}
            >
              <img
                src="https://images.propertypro.ng/large/7-units-of-two-bedroom-apartment-to-let-viIPPlpYrrsYA4wBoj8e.jpg"
                class="img-fluid"
                alt="..."
                style={{ borderRadius: "20px" }}
              />
              <h4 style={{ marginTop: "20px" }}>Alice Mosunmola hostel</h4>
              <h5>
                <strong>Price:</strong>
                {""}120,000
              </h5>
            </div>
            <div
              style={{
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                width: "48%",
                paddingTop: "20px",
                paddingBottom: "20px",
                borderRadius: "20px",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                cursor: "pointer",
              }}
            >
              <img
                src="https://images.propertypro.ng/large/7-units-of-two-bedroom-apartment-to-let-viIPPlpYrrsYA4wBoj8e.jpg"
                class="img-fluid"
                alt="..."
                style={{ borderRadius: "20px" }}
              />
              <h4 style={{ marginTop: "20px" }}>Alice Mosunmola hostel</h4>
              <h5>
                <strong>Price:</strong>
                {""}120,000
              </h5>
            </div>
          </div>
        </div>
      </div>
      <FooterHomeOne />
    </div>
  );
}

export default NorthGate;
