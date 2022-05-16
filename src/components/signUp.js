import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
    return (
        <div>
            <div className='row'>
                <div className='col-sm-12 col-md-4 col-lg-4'>

                </div>
                <div className='col-sm-12 col-md-4 col-lg-4' style = {{padding:'50px 50px 50px 50px'}}>
                <h4 class="mb-3">Sign Up</h4>
	                        <form className="input_style_1" method="post">
								<div className="form-group mb-4">
	                                <input type="text" name="full_name" id="full_name" placeholder='Full name' className="form-control"/>
	                            </div>
	                            <div className="form-group mb-4">
	                                <input type="email" name="email_address" placeholder='Email address'  id="email_address" className="form-control"/>
	                            </div>
	                            <div className="form-group mb-4">
	                                <input type="password" name="password1" placeholder='password' id="password1" className="form-control"/>
	                            </div>
	                            <div className="form-group mb-4" >
	                                <input type="password" placeholder='Comfirm Password' name="password2" id="password2" className="form-control"/>
	                            </div>
	                            <div id="pass-info" className="clearfix"></div>
                                <input type= 'submit' className = 'form-control success mb-3'  value='Sign Up'/>
	                        </form>
	                        <p className="text-center mt-3 mb-0">Already have an account? <a href="/login">Sign In</a></p>
                        <center>© 2021 FUTA PROJECT - All Rights Reserved.</center>
                </div>

        
                <div className='col-sm-12 col-md-4 col-lg-4'>

                </div>
                

            </div>
        </div>
    );
}

export default Login;