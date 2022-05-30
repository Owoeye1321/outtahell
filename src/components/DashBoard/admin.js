import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import userProfile from "../../assets/images/user.png";
import logo from "../../assets/images/see.svg";

function Admin() {
  const [userDetails, setUserDetails] = useState([]);
  return (
    <>
      <section
        className="appie-hero-area"
        style={{ marginTop: "-100px", marginBottom: "-80px" }}
      >
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-3 p-4">
            <div
              className="pt-5 min-vh-100"
              style={{
                width: "100%",
                borderRadius: "10px",
                padding: "10px 10px 10px 10px ",
                background: "#1f75fe",
              }}
            >
              <center>
                <div
                  style={{
                    backgroundColor: "white",
                    height: "120px",
                    width: "140px",
                    borderRadius: "50%",
                  }}
                  className="py-3"
                >
                  <img
                    src={userProfile}
                    style={{ height: "80px", width: "80px" }}
                  />
                </div>
              </center>
              <div className="p-3 mt-5" style={{ color: "white" }}>
                <p className="mb-5" style={{ color: "white" }}>
                  Name:
                </p>
                <p className="mb-5" style={{ color: "white" }}>
                  Email:
                </p>
                <p className="mb-5" style={{ color: "white" }}>
                  Phone:
                </p>
                <p className="mb-5" style={{ color: "white" }}>
                  Address:
                </p>
                <i>
                  {" "}
                  click{" "}
                  <a href="/#" style={{ color: "white" }}>
                    here
                  </a>{" "}
                  to edit profile
                </i>
                <i className="my-4">
                  {" "}
                  Check{" "}
                  <a href="/#" style={{ color: "white" }}>
                    here
                  </a>{" "}
                  to view gallery
                </i>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-8 col-lg-9 p-4">
            <div style={{ width: "100%" }}>
              <div
                className="min-vh-100 d-flex flex-column opacity-mask"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
              >
                <div
                  className="m-5 bg-white px-5 py-3"
                  style={{
                    width: "400px",
                    alignSelf: "center",
                    boxShadow: "5px 5px 45px 5px lightgrey",
                    alignItems: "right",
                  }}
                >
                  <center>
                    <figure>
                      <img
                        src={logo}
                        alt=""
                        style={{ width: "40px", height: "40px" }}
                      />
                      <strong style={{ color: "blue", fontSize: "20px" }}>
                        {" "}
                        <strong style={{ color: "black", height: "50px" }}>
                          -
                        </strong>{" "}
                        Rentals
                      </strong>
                    </figure>
                  </center>
                  <form enctype="multipart/form-data">
                    <div class="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Hostel Name"
                        id="hostel_name"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder=" Address"
                        id="address"
                      />
                    </div>
                    <div class="form-group">
                      <textarea
                        className="form-control"
                        required
                        placeholder="Description"
                        style={{
                          height: "150px",
                          borderRadius: "10px",
                        }}
                        id="description"
                      />
                    </div>

                    <div class="form-group">
                      <p>Upload Image</p>
                    </div>
                    <div class="form-group">
                      <input
                        type="file"
                        id="hostel_images"
                        className="form-control"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="submit"
                        value="submit"
                        className="form-control bg-primary"
                        style={{ color: "white" }}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Admin;
