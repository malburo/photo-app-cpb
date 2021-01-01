import "./style.css";

function sign_up(){
    return(
        <div className="signup">
      <h1 className="signup_heading">Create account</h1>

      <p className="signup_already">
        Already have an account?<a
          href="https://thethao99.com/wp-content/uploads/2020/05/gai-xinh-677.jpg"
          className="signup_link signup-link-underline"
        >
          Sign In</a
        >
      </p>

      <form action="#" className="signup_form" autocomplete="off"></form>

      <div className="form_group">
        <input
          type="text"
          className="form_input"
          placeholder="E-mail or phone..."
        />
      </div>

      <div className="form_group form_group-2">
        <input type="text" className="form_input" placeholder="Fisrt name" />
        <input type="text" className="form_input" placeholder="Last name" />
      </div>

      <div className="form_group">
        <input type="text" className="form_input" placeholder="Password" />
      </div>

      <div className="form_group">
        <button type="submit" className="form_submit">Sign Up</button>
      </div>

      <div className="form_tos">
        <input type="checkbox" name="" id="tos" />
        <label for="tos"
          >I have read and agree to the
          <a
            href="https://1.bp.blogspot.com/-vxzOoaZkuys/XJjzkeCxwWI/AAAAAAAAAJ4/mMaXATOC97sSebs1humLyyrLVGHmACb8QCLcBGAs/s1600/hinh-anh-gai-xinh-sexy-nong-bong.jpg"
            className="signup_link"
            >Turn os Service</a
          >
        </label>
      </div>
    </div>
    );
}

export default sign_up;
