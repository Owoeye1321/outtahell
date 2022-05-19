import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  return (
    <div>
      <div className="row">
        <div className="col-sm-12 col-md-4 col-lg-4"></div>
        <div
          className="col-sm-12 col-md-4 col-lg-4"
          style={{ padding: "150px 50px 50px 50px" }}
        >
          <h4 className="mb-3">Login</h4>
          <form className="input_style_1" method="post">
            <div className="form-group">
              <label for="email_address">Email Address</label>
              <input
                type="email"
                name="email_address"
                id="email_address"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                required
              />
            </div>
            <div className="clearfix mb-3">
              <div className="float-left">
                <i style={{ fontSize: "13px" }}>
                  Don't have an account? <a href="/signup">Sign Up</a>
                </i>
              </div>
              <div className="float-right">
                <a
                  style={{ fontSize: "13px" }}
                  id="forgot"
                  href="/forgetpassword"
                >
                  Forgot Password?
                </a>
              </div>
            </div>
            <input type="submit" className="form-control success mb-3" />
          </form>

          <center>© 2021 C-RENTALS PROJECT - All Rights Reserved.</center>
        </div>

        <div className="col-sm-12 col-md-4 col-lg-4"></div>
      </div>
    </div>
  );
}

export default Login;
