import { useRef, useState } from "react";
import "../assets/CSS/v1.css";
import UseApi from "../Services/useApi";
import axios from "axios";
import localstate from "../Services/localstate";
import { data, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../Redux/UserSlice";
const PopupLogin = () => {
  const dispatch = useDispatch();
  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.auth
  );
  const mobno = useRef();
  const fname = useRef();
  const lname = useRef();
  const email = useRef();
  const [createaccflag, setcreateaccflag] = useState(false);
  const [loginfromflag, setloginformflag] = useState(true);
  //  const nevigate = useNavigate()
  const handelLogin = async () => {
    try {
      dispatch(loginStart());
      const no = mobno.current.value;
      const data = await UseApi();
      // console.log(data);
      const exist = data.some((i) => {
        return i.Mobno == no;
      });
      const user = data.filter((i) => i.Mobno === no);
      if (exist) {
        localstate.setlocaltoken(user[0]);
        dispatch(
          loginSuccess({
            user: user[0],
            token: "token",
          })
        );
        alert("Otp send to rej no :   Login SuccessFully !!");
        setloginformflag(false);
      } else {
        alert("Mobile no not Register plz create account first");
        setcreateaccflag(true);
      }
    } catch (err) {
      console.log(err);
      dispatch(loginFailure(error));
    }
  };
  const handlecreateaccount = () => {
    setloginformflag(false);
    setcreateaccflag(true);
  };
  const createaccount = async () => {
    try {
      dispatch(loginStart());
      const firstname = fname.current.value;
      const lastname = lname.current.value;
      const mobileno = mobno.current.value;
      const emailid = email.current.value
      const data = await UseApi();
      console.log(data);
      const mobnoexist = data.filter((i) => i.Mobno == mobileno);
      if (mobnoexist.length > 0) {
        alert("Mobile No  is Already Exist Please Login");
        setcreateaccflag(false);
        setloginformflag(true);
      } else {
        if (firstname && lastname && mobileno) {
          console.log(firstname, lastname, mobileno);
          let obj = {
            id: Date.now().toString(),
            FirstName: firstname,
            LastName: lastname,
            Mobno: mobileno,
            email: emailid,
            insurance: []
          };
          localstate.setlocaltoken(obj);
          const res = await axios.post("http://localhost:5000/users", obj);
          dispatch(
            loginSuccess({
              user: res.data,
              token: "token",
            })
          );
          alert("Account Created Sucessfull");
          setcreateaccflag(false);
          setloginformflag(false);
          // nevigate('/')
        } else {
          alert("enter all data");
        }
      }
    } catch (error) {
      dispatch(loginFailure(error));
    }
  };
  return (
    <>
    {/* {loading && <p> Loading ......</p>} */}
      {loginfromflag && (
        <div className="il-popup light js-il-popup-body">
          <a className="close js-il-popup-close"></a>

          <div className="il-content">
            <div className="dark-form login-otp-wrap">
              <form noValidate>
                <div className="il-login-mobile">
                  <h2>Login</h2>
                  <p>Enter your mobile number to login</p>

                  <div className="il-input-block mobile-input">
                    <label htmlFor="otpMobile">Mobile no.</label>
                    <input
                      ref={mobno}
                      type="tel"
                      maxLength="10"
                      minLength="10"
                      id="otpMobile"
                      className="val-mobile-otp tel"
                    />
                  </div>

                  <div className="il-btn">
                    <a
                      onClick={handelLogin}
                      className="il-btn-primary il-btn-orange js-send-otp"
                    >
                      Send OTP
                    </a>
                  </div>

                  <div className="create-account-link hide">
                    <p>
                      New to ICICI Lombard?{" "}
                      <a
                        onClick={handlecreateaccount}
                        className="il-link js-create-account"
                      >
                        Create an account
                      </a>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {createaccflag && (
        <div className="il-popup light js-il-popup-body">
          <a className="close js-il-popup-close"></a>

          <div className="il-content">
            <div className="dark-form login-otp-wrap">
              <form noValidate>
                <div className="il-login-mobile">
                  <h2>Create Account</h2>

                  <div className="il-input-block mobile-input">
                    <input
                      ref={fname}
                      placeholder="Enter First name"
                      type="text"
                      id="fname"
                      className="val-mobile-otp tel"
                    />
                  </div>
                  <div className="il-input-block mobile-input">
                    <input
                      ref={lname}
                      placeholder="Enter Last name"
                      type="text"
                      id="lname"
                      className="val-mobile-otp tel"
                    />
                  </div>
                  <div className="il-input-block mobile-input">
                    <input
                      ref={mobno}
                      placeholder="Enter Mobile No:"
                      type="tel"
                      maxLength="10"
                      minLength="10"
                      id="otpMobile"
                      className="val-mobile-otp tel"
                    />
                  </div>
                  <div className="il-input-block mobile-input">
                    <input
                      ref={email}
                      placeholder="Enter Email"
                      type="email"
                      id="email"
                      className="val-mobile-otp tel"
                    />
                  </div>


                  <div className="il-btn">
                    <a
                      onClick={createaccount}
                      className="il-btn-primary il-btn-orange js-send-otp"
                    >
                      Send OTP
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupLogin;
