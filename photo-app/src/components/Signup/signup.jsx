import "./style.css";

function sign_up(){
    return(
        <div class="signup">
      <h1 class="signup_heading">Create account</h1>

      <p class="signup_already">
        Already have an account?<a
          href="https://thethao99.com/wp-content/uploads/2020/05/gai-xinh-677.jpg"
          class="signup_link signup-link-underline"
        >
          Sign In</a
        >
      </p>

      <form action="#" class="signup_form" autocomplete="off"></form>

      <div class="form_group">
        <input
          type="text"
          class="form_input"
          placeholder="E-mail or phone..."
        />
      </div>

      <div class="form_group form_group-2">
        <input type="text" class="form_input" placeholder="Fisrt name" />
        <input type="text" class="form_input" placeholder="Last name" />
      </div>

      <div class="form_group">
        <input type="text" class="form_input" placeholder="Password" />
      </div>

      <div class="form_group">
        <button type="submit" class="form_submit">Sign Up</button>
      </div>

      <div class="form_tos">
        <input type="checkbox" name="" id="tos" />
        <label for="tos"
          >I have read and agree to the
          <a
            href="https://1.bp.blogspot.com/-vxzOoaZkuys/XJjzkeCxwWI/AAAAAAAAAJ4/mMaXATOC97sSebs1humLyyrLVGHmACb8QCLcBGAs/s1600/hinh-anh-gai-xinh-sexy-nong-bong.jpg"
            class="signup_link"
            >Turn os Service</a
          >
        </label>
      </div>
    </div>
    )
}

export default sign_up;
