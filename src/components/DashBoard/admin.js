import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userProfile from "../../assets/images/user.png";
import logo from "../../assets/images/see.svg";
import axios from "axios";
import "./Dashboard.css";

function Admin() {
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    const response = async () => {
      let check = await axios.get("/check");
      if (check.data === "failed")
        window.location.assign("http://localhost:3000/login");
      console.log(check.data);
    };
    response();

    const fetchAll = async () => {
      const result = await axios.get("/read");
      if (result.data.length) {
        setUserDetails(result.data);
      } else {
        console.log("Invalid data");
      }
    };
    fetchAll();
    const interval = setInterval(() => {
      fetchAll();
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  console.log(userDetails);

  return (
    <>
      <section
        className="appie-hero-area"
        style={{ marginTop: "-100px", marginBottom: "-80px" }}
      >
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-3 p-4">
<<<<<<< Updated upstream
            <div className="pt-5 min-vh-100 test">
              {userDetails ? (
                userDetails.map((key) => {
                  return (
=======
            <div
              className="pt-5 min-vh-100"
              style={{
                width: "100%",
                borderRadius: "10px",
                padding: "10px 10px 10px 10px ",
                background: "#1f75fe",
              }}
            >
           
             
                 { userDetails.length ? userDetails.map((key)=>{
                   return(
                    
>>>>>>> Stashed changes
                    <div key={key._id}>
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
                            src={key.imageName}
                            style={{ height: "90px", width: "90px" }}
                          />
                        </div>
                      </center>
                      <div className=" mt-5" style={{ color: "white" }}>
                        <p className="mb-5" style={{ color: "white" }}>
                          Name: {key.username}
                        </p>
                        <p className="mb-5" style={{ color: "white" }}>
                          Email: {key.email}
                        </p>
                        <p className="mb-5" style={{ color: "white" }}>
                          Phone: {key.phone}
                        </p>
                        <p className="mb-5" style={{ color: "white" }}>
                          Address: {key.address}
                        </p>
                        <i>
                          {" "}
                          click{" "}
                          <Link to="/profile" style={{ color: "white" }}>
                            <input
                              type="submit"
                              value="here"
                              className="form-control bg-primary"
                              style={{
                                color: "white",
                                backgroundColor: "white",
                              }}
                            />
                          </Link>{" "}
                          to edit profile
                        </i>
                        <i className="my-4">
                          {" "}
                          Check{" "}
                          <Link to="/profile" style={{ color: "white" }}>
                            here
                          </Link>{" "}
                          to view gallery
                        </i>
                      </div>
                    </div>
                  );
                })
              ) : (
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
<<<<<<< Updated upstream
                      src={userProfile}
                      style={{ height: "90px", width: "90px" }}
                    />
                  </div>
                </center>
              )}
=======
                    src={key.imageName}
                    alt = "Profile Image"
                    style={{ height: "90px", width: "90px" }}
                  />
                  
                </div>
                </center>
                <div className=" mt-5" style={{ color: "white" }}>
                <p className="mb-5" style={{ color: "white" }}>
                  Name: {key.username}
                </p>
                <p className="mb-5" style={{ color: "white" }}>
                  Email: {key.email}
                </p>
                <p className="mb-5" style={{ color: "white" }}>
                  Phone: {key.phone}
                </p>
                <p className="mb-5" style={{ color: "white" }}>
                  Address: {key.address}
                </p>
                <i>
                  {" "}
                  click{" "}
                  <Link to="/profile" style={{ color: "white" }}>
                    <input
                      type="submit"
                      value="here"
                      className="form-control bg-primary"
                      style={{ color: "white", backgroundColor: "white" }}
                    />
                  </Link>{" "}
                  to edit profile
                </i>
                <i className="my-4">
                  {" "}
                  Check{" "}
                  <Link to="/profile" style={{ color: "white" }}>
                    here
                  </Link>{" "}
                  to view gallery
                </i>
              </div>
                </div>
               
                   )
                }) : 
                <>
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
                alt = "Profile Image"
                style={{ height: "90px", width: "90px" }}
              />
              
            </div>
            </center>
            
            
             <div className=" mt-5" style={{ color: "white" }}>
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
               <Link to="/profile" style={{ color: "white" }}>
                 <input
                   type="submit"
                   value="here"
                   className="form-control bg-primary"
                   style={{ color: "white", backgroundColor: "white" }}
                 />
               </Link>{" "}
               to edit profile
             </i>
             <i className="my-4">
               {" "}
               Check{" "}
               <Link to="/profile" style={{ color: "white" }}>
                 here
               </Link>{" "}
               to view gallery
             </i>
           </div>
           </>
                
              
              }
           
            
>>>>>>> Stashed changes
            </div>
          </div>
          <div className="col-sm-12 col-md-8 col-lg-9 p-4">
            <div style={{ width: "100%" }}>
              <div
                className="min-vh-100 d-flex flex-column opacity-mask"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
              >
                <div>
                  <h2>Welcome</h2>
                </div>
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
                  <form>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Hostel Name"
                        id="hostel_name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder=" Address"
                        id="address"
                      />
                    </div>
                    <div className="form-group">
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

                    <div className="form-group">
                      <p>Upload Image</p>
                    </div>
                    <div className="form-group">
                      <input
                        type="file"
                        id="hostel_images"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
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
