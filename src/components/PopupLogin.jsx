import React from "react";
import { useRef } from "react";
import "../assets/CSS/v1.css";
import UseApi from "../Services/useApi";
import axios from "axios";
import localstate from "../Services/localstate";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../Redux/UserSlice";
import { ToastContainer, toast } from 'react-toastify';
const PopupLogin = ({loginfromflag,setloginformflag,createaccflag,setcreateaccflag}) => {
  const dispatch = useDispatch();
  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.auth
  );
  const mobno = useRef();
  const fname = useRef();
  const lname = useRef();
  const email = useRef();
  
   const nevigate = useNavigate()
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
        // alert("Otp send to rej no :   Login SuccessFully !!");
        toast.success("Login Successfully!!",{position: "top-center"});
        setloginformflag(false);
        if(no == '0123456789') return <Navigate to="/admin" replace />;
      } else {
        toast.error("Mobile no not Register plz create account first",{position: "top-center"})
        // alert("Mobile no not Register plz create account first");
        // /
        setcreateaccflag(true);
      }
    } catch (err) {
      toast.error("DB Not connected",{position: "top-center"});
      // alert("DB Not Connected");
      setloginformflag(false)
      dispatch(loginFailure(err));
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
      if(!data){
        toast.error("DB not connected",{position: "top-center"});
        setcreateaccflag(false);
      }
      const mobnoexist = data.filter((i) => i.Mobno == mobileno);
      if (mobnoexist.length > 0) {
        toast.error("Mobile No  is Already Exist Please Login", {position: "top-center"});
        // alert("Mobile No  is Already Exist Please Login");
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
          toast.success("Account Created Sucessfull",{position: "top-center"});
          // alert("Account Created Sucessfull");
          setcreateaccflag(false);
          setloginformflag(false);
          nevigate('/')
        } else {
          toast.warning("Enter All Data !", {position: "top-center",});
          // alert("enter all data");
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
          <button className="" onClick={()=>setloginformflag(false)}>Close</button>

          <div className="il-content">
            <div className="dark-form login-otp-wrap">
              <form noValidate>
                <div className="il-login-mobile">
                  <h2>Login</h2>
                  <p>Enter your mobile number to login</p>

                  <div className="il-input-block mobile-input">
                    {/* <label htmlFor="otpMobile">Mobile no.</label> */}
                    <input
                    placeholder="Mob.No"
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
                     {loading? "Loadnig..." : "Send OTP"}
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
          <button onClick={()=>setcreateaccflag(false)}>Close</button>

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
                      {loading ?"Loading..." :"Send OTP"}
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
