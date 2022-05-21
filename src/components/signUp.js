import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
function Login() {

    const [color, setColor ] =useState('green')
    const [data, setData ] = useState({
        username:'',
        password:'',
        email:''
    })


    const [error, setError] = useState('Password must be at least 8 parameters')


    const handle = (e)=>{
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
    }
    
    // const submit = async(e)=>{
      
    //     e.preventDefault()
    //     const result = await axios.post('/signUp',
    //     { 
    //         username:data.username,
    //         password:data.password,
    //         email:data.email
    //     })
    // if(result.data === "exist"){
    //     setColor('blue')
    //     setError('User already exist')  
    //     console.log(result)
    //    }  
        
    //    else if(result.data == "success"){
    //        alert("Signed Up Successfully,login to continue")
    //    // window.location.assign("http://localhost:3000/login")
    //    }
    //    else if (result.data !== "success") {
    //     setColor('red')
    //     setError('Invalid details')
        
    // }
    // }       

    return (
        <div>
            <div className='row'>
                <div className='col-sm-12 col-md-3 col-lg-4'>

                </div>
                <div className='col-sm-12 col-md-6 col-lg-4' style = {{padding:'50px 50px 50px 50px'}}>
                <h4 className="mb-3">Sign Up</h4>
	                        <form >
								<div className="form-group mb-4">
	                                <input type="text"  id="username" placeholder='Full name' className="form-control"/>
	                            </div>
	                            <div className="form-group mb-4">
	                                <input onChange = {(e)=>handle(e)}  type="email" placeholder='Email address'  id="email" className="form-control"/>
	                            </div>
	                            <div className="form-group mb-4">
	                                <input onChange = {(e)=>handle(e)} type="password"  placeholder='password' id="password1" className="form-control"/>
	                            </div>
	                            <div className="form-group mb-4" >
	                                <input onChange = {(e)=>handle(e)} type="password" placeholder='Comfirm Password'  id="password2" className="form-control"/>
	                            </div>
	                            <div id="pass-info" className="clearfix"></div>
                                <input type= 'submit' className = 'form-control success mb-3'  value='Sign Up'/>
	                        </form>
	                        <p className="text-center mt-3 mb-0">Already have an account? <a href="/login">Sign In</a></p>
                        <center>© 2021 FUTA PROJECT - All Rights Reserved.</center>
                </div>

        
                <div className='col-sm-12 col-md-6 col-lg-4'>

                </div>
                

            </div>
        </div>
    );
}

export default Login;