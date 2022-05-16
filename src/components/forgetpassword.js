import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
    return (
        <div>
            <div className='row'>
                <div className='col-sm-12 col-md-4 col-lg-4'>

                </div>
                <div className='col-sm-12 col-md-4 col-lg-4' style = {{padding:'150px 50px 50px 50px'}}>
	                        <form className="input_style_1" method="post">
	                            <div id="forgot_pw">
	                                <h4 className="mb-3">Forgot Password</h4>
	                                <div className="form-group">
	                                    <label for="email_forgot">Login email</label>
	                                    <input type="email" className="form-control" name="email_forgot" id="email_forgot"/>
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
        </div>
    );
}

export default Login;