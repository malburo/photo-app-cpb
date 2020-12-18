import "./style.css";

function Login() {
  return (
    <div className="signin">
      <h1 className="signin_heading">Sign In</h1>
      <p className="signin_already">
        Already have an Account?
        <a href="#" className="signin_link signin-link-underline">
          Sign Up
        </a>
      </p>

      <div className="form_group">
        <input
          type="text"
          className="form_input"
          placeholder="E-mail or phone..."
        />
      </div>

      <div className="form_group">
        <input type="text" className="form_input" placeholder="Password" />
      </div>

      <div className="form_group">
        <button type="submit" className="form_submit">
          Sign In
        </button>
      </div>

      <div className="forgot_password">
        <a href="#">Forgot password?</a>
      </div>
    </div>
  );
}

export default Login;
