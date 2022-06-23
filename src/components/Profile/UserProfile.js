import { React, useEffect, useState } from "react";
import userProfile from "../../assets/images/user.png";
import logo from "../../assets/images/see.svg";
import axios from 'axios'

function UserProfile() {
  const [profileImage, setProfileImage] = useState('');
  const [ data, setData ] = useState({
    email:'',
    phone:'',
    address:''
  })
  const [error, setError] = useState("");

  const handle = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(data);
  }

  const fileChangeHandler = (e) => {
    let name = e.target.files[0]
      setProfileImage(name)
  }

  const onSubmitHandle = async (e)=>{
    e.preventDefault();
    const profileData = new FormData()
     profileData.append('data', JSON.stringify(data))
      profileData.append('file', profileImage)
         console.log('Working on it mehn')
       console.log(profileData)
     const result = await axios.post('/adminProfile',profileData)
      if (result.data === 'log'){
            window.location.assign('http://localhost:3000/login')
              console.log(result.data)
           }else if (result.data === 'error'){
        setError('Invalid details')
             }else if(result.data === 'success'){
           alert('Updated Profile successfully')
           window.location.assign('http://localhost:3000/dashboard')
      }else{
        setError('')
      }
  }
    useEffect(()=>{
      
        const response = async ()=>{
            let check = await axios.get('/check');
            if(check.data ==='failed') window.location.assign('http://localhost:3000/login')
            console.log(check.data)
        }
        response()
    })

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
                <form  onSubmit = {(e) => onSubmitHandle(e)} encType="multipart/form-data">
                <div 
                  style={{
                    backgroundColor: "white",
                    height: "120px",
                    width: "100%",
                    borderRadius: "50%",
                  }}
                  className="py-3 my-3"
                >
                  <center> 
                    <label style={{ width: '100%' }}>
                    <img
                    src= { userProfile }
                    style={{ height: "80px", width: "80px" }}
                  />
                        <input
                         onChange={(e) => fileChangeHandler(e)}
                        style={{display:'none'}}
                          required
                          id="profilePicture"
                          type="file"
                        />
                      </label>
                      {profileImage ?  <p>Processing...</p> : <p>Upload Image</p>}
                  </center>
                 
                </div>
                  <div className="form-group">
                    <input
                    required
                     onChange={(e) => handle(e)}
                      className="form-control"
                      type="email"
                      placeholder=" Change your email"
                      id="email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                    required
                     onChange={(e) => handle(e)}
                      className="form-control"
                      type="phone"
                      placeholder="Change your Phone No"
                      id="phone"
                    />
                  </div>
                  <div className="form-group">
                    <input
                    required
                     onChange={(e) => handle(e)}
                      className="form-control"
                      type="text"
                      placeholder="Change your Address"
                      id="address"
                    />
                  </div>
                  <div style={{ fontSize: "10px", marginBottom: "0px" }}>
              <center>
                <i style={{ marginBottom: "-1px", color: "red" }}>{error}</i>
              </center>
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
      </section>
    </>
  );
}

export default UserProfile;
