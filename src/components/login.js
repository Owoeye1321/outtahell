import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
    return (
        <div>
            <div className='row'>
                <div className='col-sm-12 col-md-4 col-lg-4'>

                </div>
                <div className='col-sm-12 col-md-4 col-lg-4' style = {{padding:'150px 50px 50px 50px'}}>
	                
	                        <h4 class="mb-3">Login</h4>
	                        <form class="input_style_1" method="post">
	                            <div class="form-group">
	                                <label for="email_address">Email Address</label>
	                                <input type="email" name="email_address" id="email_address" class="form-control"/>
	                            </div>
	                            <div class="form-group">
	                                <label for="password">Password</label>
	                                <input type="password" name="password" id="password" class="form-control"/>
	                            </div>
	                            <div class="clearfix mb-3">
	                                <div class="float-left">
                                    <i style={{fontSize:'13px'}}>Don't have an account? <a href="/signup">Sign Up</a></i>
	                                </div>
	                                <div class="float-right">
	                                    <a  style={{fontSize:'13px'}}id="forgot" href="/forgetpassword">Forgot Password?</a>
	                                </div>
	                            </div>
	                            <input type= 'submit' className = 'form-control success mb-3'  />
	                        </form>
	                       
	                        {/* <form class="input_style_1" method="post">
	                            <div id="forgot_pw">
	                                <h4 class="mb-3">Forgot Password</h4>
	                                <div class="form-group">
	                                    <label for="email_forgot">Login email</label>
	                                    <input type="email" class="form-control" name="email_forgot" id="email_forgot"/>
	                                </div>
	                                <p>You will receive an email containing a link allowing you to reset your password to a new preferred one.</p>
	                                <div class="text-center"><input type="submit" value="Reset Password" class="btn_1"/></div>
	                            </div>
	                        </form> */}
	                   
	            
                        <center>© 2021 FUTA PROJECT - All Rights Reserved.</center>
                        </div>

        
                <div className='col-sm-12 col-md-4 col-lg-4'>

                </div>
                

            </div>
        </div>
    );
}

export default Login;