import React, { useEffect, useState } from "react";
import axios from 'axios'
import Styles from '../style.module.css'
import  'bootstrap/dist/css/bootstrap.min.css';

function Gallery(){
  const [ diary , setDiary ] = useState([])
 useEffect(()=>{
  const response = async ()=>{
    let check = await axios.post('https://futa-hostels-10467.herokuapp.com/check',{username:sessionStorage.getItem('username')});
    if(check.data ==='failed') window.location.assign('https://futa-hostel-rentals-c3bf0b.netlify.app/login')
    //console.log(check.data)
}
response()

const fetchAll = async () =>{
  await axios.post('https://futa-hostels-10467.herokuapp.com/personalGallery',{username:sessionStorage.getItem('username')}).then((res)=>{
    setDiary(res.data)
   // console.log(res.data)
  }).catch((err)=>{
    console.log('An error has occured' , err)
})

 }
 fetchAll()
    // const interval = setInterval (()=>{
    //   response()
    //     fetchAll()
    // },10000)
    // return()=>{
    //         clearInterval(interval)
    // }

 },[diary])
  
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
            { diary.length ? diary.map((key)=>{
              const blob = new Blob([Int8Array.from(key.image.data.data)], {type: key.image.contentType });
              const image = window.URL.createObjectURL(blob);

              return(
                <>
            <div className="col-sm-6 col-md-4 col-lg-3  p-4" key={key._id}>
            <div id = {Styles.joining} className = "p-2"
            style={{boxShadow: "1px 1px 5px 3px lightgrey",}}
            >
              <center>
            <img
                    src={image}
                    alt = "profile Image"
                    style={{ height: "180px", width: "290px"}}
            />
            </center>
                  <p id = {Styles.firstDesc}> Hostel Name: {key.hostelName}</p>
                  <p id = {Styles.details}> Address: {key.address}</p>
                  <p id = {Styles.details}> Social Amenities: {key.socialAmenities}</p>
            </div>
            </div>
                </>
              )

            })
            : 
            <div className="row">
            <div className="col-sm-12 col-md-3 col-lg-3  p-4">
            <div id = {Styles.joining}> 
              hello world
            </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3  p-4">
            <div id = {Styles.joining}> 
              hello world
            </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3  p-4">
            <div id = {Styles.joining}> 
              hello world
            </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3  p-4">
            <div id = {Styles.joining}> 
              hello world
            </div>
            </div>
          </div>
          }
         </div>
        </section>
        </>
    )
  

}
 export default Gallery