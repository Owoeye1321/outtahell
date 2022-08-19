import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userProfile from "../../assets/images/user.png";
import logo from "../../assets/images/see.svg";
import axios from "axios";


function Admin() {

  const [userDetails, setUserDetails] = useState([]);
  const [addHostelDetails, setAddHostelDetails] = useState({
    hostel_name:'',
    address:'',
    socialAmenities:''
  });
  const [hostelPicture, setHostelPicture] = useState('')

    //// performing some dangerous operation round around the spagetti environment
    const [pickFirst , setPickFirst] = useState('block')
    const [pickSecond , setPickSecond] = useState('none')
    const [pickThird, setPickThird] = useState('block')
    const [pickFourth, setPickFourth] = useState('none')

  const LogOut = async()=>{
    alert('logging out')
    const logUserOut = await axios.get('/logOut')
    if(logUserOut.data === "success"){
      window.location.assign('http://localhost:3000/login')
    }
  }
  const handleSubmit = async (e)=>{
    e.preventDefault()
    console.log(hostelPicture)
    const addForm = new FormData()
    addForm.append('data', JSON.stringify(addHostelDetails))
    addForm.append('file',hostelPicture)
    console.log(addForm)
    const checkingFormUpdates = await axios.post('/addHostelDetails',addForm)
    if(checkingFormUpdates.data === 'success'){ 
      console.log('Hostel information saved successfully')
      alert('Hostel information saved successfully')
    }
  } 

    const handleChange = (e)=>{
      const addNewData = { ...addHostelDetails }
      addNewData[e.target.id]= e.target.value
      setAddHostelDetails(addNewData)
      console.log(addHostelDetails)
    }
    const addHostelPicture = (e)=>{
      let name = e.target.files[0]
      setHostelPicture(name)
      console.log(hostelPicture)

    }

  useEffect(()=>{
    // alert('hello there i am trying to control the width of the screen')
    // alert(window.width)
    const response = async ()=>{
        let check = await axios.get('/check');
        if(check.data ==='failed') window.location.assign('http://localhost:3000/login')
        console.log(check.data)
    }
    response()

     const fetchAll = async () =>{
      await axios.get('/read').then((res)=>{
        setUserDetails(res.data)
        console.log(res.data)
      }).catch((err)=>{
        console.log('An error has occured' , err)
      })

     }
     fetchAll()
        const interval = setInterval (()=>{
          response()
            fetchAll()
        },10000)
        return()=>{
                clearInterval(interval)
        }
    
},[])
console.log(userDetails)

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
       { userDetails.length ? userDetails.map((key)=>{
        
              const blob = new Blob([Int8Array.from(key.image.data.data)], {type: key.image.contentType });
                 const image = window.URL.createObjectURL(blob);
                  // const base64String = btoa(
                  //   String.fromCharCode(...new Uint8Array((key.image.data.data)))
                  // )
                   return(
                    
                    <div key={key._id}>
                  <center>
                    <div
                    style={{
                      height: "120px",
                      width: "140px",
                      borderRadius: "50%",
                    }}
                    className="py-3"
                  >
                   
                    <img
                    src={image}
                    alt = "profile Image"
                    style={{ height: "120px", width: "120px", borderRadius:"40px" }}
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
                  <Link to="/personalDiary" style={{ color: "white" }}>
                    here
                  </Link>{" "}
                  to view gallery
                </i>
                <br></br>
                <strong  onClick={()=>{LogOut()}}>LogOut</strong>
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
                alt = "ProfileImage"
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
               <Link to="/personalDiary" style={{ color: "white" }}>
                 here
               </Link>{" "}
               to view gallery
             </i>
           </div>
           </>
                
              
              }
           
            
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
                  <form 
                  onSubmit={(e)=>{handleSubmit(e)}}
                  >
                    <div className="form-group">
                      <input 
                      required
                        onChange={(e)=>{ handleChange(e)}}
                        className="form-control"
                        type="text"
                        placeholder="Hostel Name"

                        id="hostel_name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                      required
                       onChange={(e)=>{ handleChange(e)}}
                        className="form-control"
                        type="text"
                        placeholder=" Address"
                        id="address"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                       onChange={(e)=>{ handleChange(e)}}
                        className="form-control"
                        required
                        placeholder="Social Amenities"
                        style={{
                          height: "150px",
                          borderRadius: "10px",
                        }}
                        id="socialAmenities"
                      />
                    </div>

                    <div className="form-group">
                      <p>Upload Image</p>
                    </div>
                    <div className="form-group">
                      <input
                      required
                      onChange={(e)=>{
                        addHostelPicture(e)
                      }}
                        type="file"
                        id="file"
                        className="form-control"
                        name = "file"
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
