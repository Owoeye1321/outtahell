import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion/dist/framer-motion'
import {useState} from 'react'
import axios from 'axios'

function Forgetpassword() {
    const [error, setError] = useState('')
    const [state, setState]= useState('red')
    const [email, setEmail] = useState('')
    const handle = (e)=>{
        setEmail(e.target.value)
      //  console.log(email)
    }

    const submitThisShit = async (e)=>{
        e.preventDefault()
        const result = await axios.post('https://diary-app-48602.herokuapp.com/forgetpassword',{
            email:email
        })
        if(result.data === 'success'){
            setState('green')
            setError("Password has been sent to email")
            console.log(result)
        }else if(result.data === 'error'){
            setError('No email provided')
        }else if(result.data === 'failed'){
            setError('No password attached to this email')
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
            </div><div style={{ fontSize: '10px' ,marginBottom: '5'}}>
                                    <center>
                                    <i style={{marginBottom:"5px",color:state}}>{error}</i>
                                    </center>
                                </div>
                                <p>You will receive an email containing your password.</p>
	                                <div className="text-center"><input type="submit" value="Reset Password" className="form-control "/></div>
	                            </div>
	                        </form>
	            
                        <center>© 2021 KWASU PROJECT - All Rights Reserved.</center>
                        </div>

        
                <div className='col-sm-12 col-md-4 col-lg-4'>

                </div>
                

            </div>
        </motion.div>
    );
}

export default Forgetpassword;