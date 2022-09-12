import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion/dist/framer-motion'
import {useState} from 'react'
import axios from 'axios'

function Forgetpassword() {
    const [email, setEmail] = useState({
        email:''
    })
    const handle = (e)=>{
        const data = { ...email }
        data[e.target.id] = e.target.value
        setEmail(data)
        console.log(email)
    }

    const submitThisShit = async (e)=>{
        e.preventDefault()
        const result = await axios.post('/forgetpassword',{
            email:email.email
        })
        if(result){
            console.log('working on the result')
            console.log(result)
        }
    }
    return (
        <motion.div
        initial = {{opacity: 0 }}
        animate = {{opacity: 1 }}
        exit = {{ opacity: 0 }}
        >
            <div className='row'>
                <div className='col-sm-12 col-md-4 col-lg-4'>

                </div>
                <div className='col-sm-12 col-md-4 col-lg-4 my-5'>
	                        <form className="input_style_1" method="post" onSubmit={(e)=>{submitThisShit(e)}}>
	                            <div id="forgot_pw my-5">
	                                <h4 className="my-5">Forgot Password</h4>
                                    <div className="form-group mb-4">
              <input
                onChange={(e) => handle(e)}
                type="email"
                placeholder="Email address"
                id="email"
                className="form-control"
              />
            </div>
	                                <p>You will receive an email containing a link allowing you to reset your password to a new preferred one.</p>
	                                <div className="text-center"><input type="submit" value="Reset Password" className="form-control "/></div>
	                            </div>
	                        </form>
	            
                        <center>© 2021 FUTA PROJECT - All Rights Reserved.</center>
                        </div>

        
                <div className='col-sm-12 col-md-4 col-lg-4'>

                </div>
                

            </div>
        </motion.div>
    );
}

export default Forgetpassword;