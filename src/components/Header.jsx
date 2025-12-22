import "../assets/CSS/v1.css";
import PopupLogin from "./PopupLogin";
// import localstate from "../Services/localstate";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
function Header() {
  const user = useSelector((state) => state.auth.user);
  // const user = JSON.parse(localstate.getlocatoken())
  const navigate = useNavigate();
  return (
    <div>
      <header>
        <div className="container-fluid top-nav">
          <div className="row">
            <div className="col-lg-12 top-nav-right d-flex align-items-center">
              {/* Contact */}
              <div className="col-lg-2 col-sm-12 contact">
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-telephone"
                    viewBox="0 0 16 16"
                  ></svg>
                  18002666 <small>(Available 24 x 7)</small>
                </a>
              </div>

              {/* Live Chat */}
              <div className="col-lg-1 col-sm-12 live-chat">
                <a href="#">
                  <span></span>Live Chat
                </a>
              </div>

              {/* Profile Icon */}
              <div className="profile-icon ms-auto">
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="grey"
                    className="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  ></svg>
                </a>
              </div>
              <div>
                <ProfileMenu isLoggedIn={user}/>
                {/* {popuplogin && <PopupLogin />} */}
              </div>
            </div>
          </div>
        </div>

        {/* ---------------- NAVBAR ---------------- */}
        <nav className="navbar navbar-expand-md">
          <div className="container-fluid">
            {/* Toggler for Mobile */}
            <button

              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvas1"
            >
              <span className="navbar-toggler-icon"></span>
              <img src="../../public/Home/images/il-logo.png" alt="" />
            </button>

            {/* Desktop Navigation */}
            <div className="d-none d-md-block w-100">
              <ul className="nav navbar-expand-md justify-content-center container-fluid">
                <img src="../../public/Home/images/il-logo.png" alt="" onClick={()=>navigate('/')}/>

                {/* Motor Menu */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle active"
                    data-bs-toggle="dropdown"
                    href="#"
                  >
                    Motor Insurance
                  </a>

                  <ul className="dropdown-menu">
                    <li>
                      <a onClick={()=>navigate("/carinsurance")} className="dropdown-item">
                        Car Incurance
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item"onClick={()=>navigate("/bikeinsurance")}>
                        Bike Insurance
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Motor Insurance
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Motor Floater
                      </a>
                    </li>
                  </ul>
                </li>

                {/* Health Inc */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                  >
                    Health Insurance
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Health Claims
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Motor Claims
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Travel Claims
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Home Claims
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Cyber Insurance Claims
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Corporate Claims
                      </a>
                    </li>
                  </ul>
                </li>

                {/* Travel INC */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                  >
                    Travel Incurance
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        All Policy Renewals
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Car Policy
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Two Wheeler Policy
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Health Policy
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Home Policy
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Travel Policy
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Business Insurance
                      </a>
                    </li>
                  </ul>
                </li>

                {/* SME  */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                  >
                    SME
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Grievance Redressal
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Counter Office
                      </a>
                    </li>
                  </ul>
                </li>

                {/* Corporate INC */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                  >
                    Corporate Incurance
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Expert Blogs
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Tax Benefits
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Downloads
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Risk Index
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Testimonials
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Knowledge Center
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Podcast
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                  >
                    Other Incurance
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Expert Blogs
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Tax Benefits
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Downloads
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Risk Index
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Testimonials
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Knowledge Center
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Podcast
                      </a>
                    </li>
                  </ul>
                </li>
                {/* Renewals */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                  >
                    Renewals
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Expert Blogs
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Tax Benefits
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Downloads
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Risk Index
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Testimonials
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Knowledge Center
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Podcast
                      </a>
                    </li>
                  </ul>
                </li>
                {/*  */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                  >
                    Claims
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Expert Blogs
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Tax Benefits
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Downloads
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Risk Index
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Testimonials
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Knowledge Center
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Podcast
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Mobile Offcanvas Menu */}
            <div
              className="offcanvas offcanvas-start fullscreen-collapse d-md-none"
              tabIndex="-1"
              id="offcanvas1"
            >
              <div className="offcanvas-header">
                <h5>Login &gt;</h5>
                <button
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                ></button>
              </div>

              <div className="offcanvas-body">
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  {/* Accordion 1 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                      >
                        Motor Insurance
                      </button>
                    </h2>

                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                    >
                      <div className="accordion-body">
                        <ul>
                          <li>
                            <a href="#">Motor Insurance</a>
                          </li>
                          <li>
                            <a href="#">Car Insurance</a>
                          </li>
                          <li>
                            <a href="#">Bike Insurance</a>
                          </li>
                          <li>
                            <a href="#">Motor Floater</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Accordion 2 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                      >
                        Accordion Item #2
                      </button>
                    </h2>

                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                    >
                      <div className="accordion-body">
                        <ul>
                          <li>
                            <a href="#">Motor Insurance</a>
                          </li>
                          <li>
                            <a href="#">Car Insurance</a>
                          </li>
                          <li>
                            <a href="#">Bike Insurance</a>
                          </li>
                          <li>
                            <a href="#">Motor Floater</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Accordion 3 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                      >
                        Accordion Item #3
                      </button>
                    </h2>

                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                    >
                      <div className="accordion-body">
                        <ul>
                          <li>
                            <a href="#">Motor Insurance</a>
                          </li>
                          <li>
                            <a href="#">Car Insurance</a>
                          </li>
                          <li>
                            <a href="#">Bike Insurance</a>
                          </li>
                          <li>
                            <a href="#">Motor Floater</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
