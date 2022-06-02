import { React, useState } from "react";
import userProfile from "../../assets/images/user.png";
import logo from "../../assets/images/see.svg";

function UserProfile() {
  const [Profile, setProfile] = useState([]);
  return (
    <>
      <section
        className="appie-hero-area"
        style={{
          marginTop: "-100px",
          marginBottom: "-80px",
          backgroundColor: "white",
        }}
      >
        <div className="row">
          <div style={{ width: "100%" }}>
            <div className="min-vh-100 d-flex flex-column opacity-mask">
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
                <div
                  style={{
                    backgroundColor: "white",
                    height: "120px",
                    width: "100%",
                    borderRadius: "50%",
                  }}
                  className="py-3"
                >
                  <center> 
                    <label style={{ width: '100%' }}>
                    <img
                    src={userProfile}
                    style={{ height: "80px", width: "80px" }}
                  />
                        <input
                        style={{display:'none'}}
                          required
                          id="profilePicture"
                          type="file"
                          name="file"
                        />
                      </label>
                  </center>
                </div>
                  <div class="form-group">
                    <input
                      className="form-control"
                      type="email"
                      placeholder=" Change your email"
                      id="email"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      className="form-control"
                      type="phone"
                      placeholder="Change your Phone No"
                      id="phone"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Change your Address"
                      id="address"
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
      </section>
    </>
  );
}

export default UserProfile;
