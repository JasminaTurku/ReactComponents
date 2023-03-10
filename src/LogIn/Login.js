import slika1 from "../../src/images/1.png";
import "./Login.css";
function LogIn() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={slika1} alt="profile" className="profile"></img>
            </div>
          </div>
          <div>
            <h1>Login Page</h1>
            <div>
              <input type="text" placeholder="user name" className="name" />
            </div>
            <div className="second-input">
              <input type="password" placeholder="password" className="name" />
            </div>
          </div>
          <div className="login-button">
            <button> Login</button>
          </div>
          <p className="link">
            <a href="#"> Forgot password ?</a> Or <a href="#">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default LogIn;
