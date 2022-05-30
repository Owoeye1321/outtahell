import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import axios from 'axios'

function Forms() {
    const [data, setData ] = useState({
        fname:'',
        lname:'',
        email:'',
        phone:'',
        subject:'',
        message:''
    })

    const handle = (e)=>{
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(data)
    }
    
    const submit = async(e)=>{      
        e.preventDefault()
        const result = await axios.post('/dashboard',{data})
   if(result.data == "success"){
           alert("Email has been sent successfully to C-rentals official")
       // window.location.assign("http://localhost:3000/login")
       }
       else{
           alert('An error has occured')
           alert('An error has occured')
        
    }
    }  
    return (
        <>
            <section className="contact-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="contact--info-area">
                                <h3>Get in touch</h3>
                                <p>Looking for help? Fill the form and start a new adventure.</p>
                                <div className="single-info">
                                    <h5>Headquaters</h5>
                                    <p>
                                        <i className="fal fa-home"></i>
                                      Federal university of technology
                                        <br /> Minna
                                    </p>
                                </div>
                                <div className="single-info">
                                    <h5>Phone</h5>
                                    <p>
                                        <i className="fal fa-phone"></i>
                                        (+642) 245 356 432
                                        <br />
                                        (+420) 336 476 328
                                    </p>
                                </div>
                                <div className="ab-social">
                                    <h5>Follow Us</h5>
                                    <a className="fac" href="#">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a className="twi" href="#">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a className="you" href="#">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                    <a className="lin" href="#">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="contact-form">
                                <h4>Let’s Connect</h4>
                                <p>Send us a message to connect with you.</p>
                                <form className="row" onSubmit = {(e)=>submit(e)} >
                                    <div className="col-md-6">
                                        <input required type="text" onChange = {(e)=>handle(e)}   id="fname" placeholder="First Name" />
                                    </div>
                                    <div className="col-md-6">
                                        <input required type="text" onChange = {(e)=>handle(e)}  id="lname" placeholder="Last Name" />
                                    </div>
                                    <div className="col-md-6">
                                        <input required 
                                            onChange = {(e)=>handle(e)}  
                                            type="email"
                                            id="email"
                                            placeholder="Email Address"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input required
                                            onChange = {(e)=>handle(e)}  
                                            type="number"
                                            id="phone"
                                            placeholder="Phone Number"
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <input required onChange = {(e)=>handle(e)}   type="text" id="subject" placeholder="Subject" />
                                    </div>
                                    <div className="col-md-12">
                                        <textarea
                                            required        
                                            onChange = {(e)=>handle(e)}  
                                            id="message"
                                            placeholder="How can we help?"
                                        ></textarea>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="condition-check">
                                            
                                        </div>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <input type="submit" value="SendMessage" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bisylms-map">
                <iframe
                    title="map"
                    src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;coord=39.966528,-75.158284&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland+(My%20Business%20Name)&amp;ie=UTF8&amp;t=p&amp;z=16&amp;iwloc=B&amp;output=embed"
                ></iframe>
            </div>
        </>
    );
}

export default Forms;
