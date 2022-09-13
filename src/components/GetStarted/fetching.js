import { useEffect, useState } from 'react'
import axios from 'axios'
import Styles from '../style.module.css'
import  'bootstrap/dist/css/bootstrap.min.css';

function PastingAllInformationFromHostels (){
    const [ details , setDetails ] = useState([])

    useEffect(()=>{

     const fetchAll = async () =>{
        await axios.get('/getAllHostelInfo').then((res)=>{
            setDetails(res.data)
         // console.log(res.data)
        }).catch((err)=>{
          console.log('An error has occured' , err)
        })
  
       }
       fetchAll()
          // const interval = setInterval (()=>{
          //     fetchAll()
          // },30000)
          // return()=>{
          //         clearInterval(interval)
          // }
    },[details])
    return(
        <>
      <section
        className="appie-hero-area"
        style={{ marginTop: "-100px", marginBottom: "-80px" }}
      >
                 <div className="row">
            { details.length ? details.map((key)=>{

              const blob = new Blob([Int8Array.from(key.image.data.data)], {type: key.image.contentType });
              const image = window.URL.createObjectURL(blob);

              return(
                <>
            
            <div className="col-sm-6 col-md-4 col-lg-3  p-4">
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
         
         <center>
            <h1 style = {{marginTop:'200px',marginBottom:'200px'}}>
                NO AVAILABLE HOSTELS
            </h1>
         </center>
          }
         </div>
      </section>
        </>
    )
}
export default PastingAllInformationFromHostels