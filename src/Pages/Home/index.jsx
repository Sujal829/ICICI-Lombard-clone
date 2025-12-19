import React, { useRef, useState } from "react";
import data from "./home.json";
import Header from "../../components/Header";
import { Tooltip } from "react-tooltip";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import localstate from "../../Services/localstate";
import { setuser } from "../../Redux/UserSlice";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
function Home() {
  const [inc, setinc] = useState(1);
  const [adultscount, setadultscount] = useState(0);
  const [formflag, setformflag] = useState(false);
  const [incmemflag, setincmemflag] = useState(false);
  const [travelScope, setTravelScope] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  // console.log(user);
  const inpcarno = useRef();
  const navigate = useNavigate();

  const handleformsubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("User not logged in. Login first", {
        position: "top-center",
      });
      alert("User not logged in. Login first");
      return;
    }

    const insuranceObj = {
      inctype: inc == 1 ? "Car" : "Bike",
      carno: inpcarno.current.value,
    };

    try {
      // 1️⃣ Get latest user
      const userRes = await axios.get(`http://localhost:5000/users/${user.id}`);

      const userData = userRes.data;

      // 2️⃣ Append new insurance
      const updatedInsurance = [...(userData.insurance || []), insuranceObj];

      // 3️⃣ Patch insurance
      const patchRes = await axios.patch(
        `http://localhost:5000/users/${user.id}`,
        { insurance: updatedInsurance }
      );

      if (patchRes.status === 200) {
        // 4️⃣ Fetch updated user again
        const updatedUserRes = await axios.get(
          `http://localhost:5000/users/${user.id}`
        );

        const updatedUser = updatedUserRes.data;

        // 5️⃣ Update local storage / state
        localstate.setlocaltoken(updatedUser);
        dispatch(setuser(updatedUser));
        toast.success("Insurance added successfully", {
          position: "top-center",
        });
        // alert("Insurance added successfully");
        inpcarno.current.value = "";
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong", { position: "top-center" });
      // alert("Something went wrong");
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="main">
        <marquee behavior="" direction="">
          <b>
            Health insurance just got 18% cheaper – no GST applicable! | Under
            ‘Saksham Niveshak' - Shareholders are reminded to update their KYC
            details to claim Unpaid/Unclaimed Dividend prior to the transfer to
            IEPFA.
          </b>
        </marquee>
        <div className="head container-fluid">
          <h1>Health insurance now at 0% GST</h1>
          <b>Savings apply on individual and family floater policies</b>
          <img
            src="../../../public/Home/images/banner-img.png"
            alt="banner-img"
          />
        </div>

        <div className="home-forms-section">
          <div className="form-ele">
            {data.incuranceTtypes.map((i) => (
              <div className="items" key={i.id}>
                <div onClick={() => setinc(i.id)}>
                  <img src={i.image} alt="" />
                </div>
                <span>{i.name}</span>
              </div>
            ))}
          </div>
          <br />
          <br />
          <br />
          <br />
          <hr />
          <div className="home-forms">
            {inc == 5 && navigate("/homeinsuranc")}
            {inc == 1 && (
              <div className="form-1">
                <form action="" onSubmit={handleformsubmit}>
                  <div className="form-group">
                    <label htmlFor="car-registration">
                      Car registration no.
                    </label>
                    <input
                      ref={inpcarno}
                      type="text"
                      pattern="^[A-Z]{2}[0-9]{1,2}[A-Z]{1,3}[0-9]{4}$"
                      id="car-registration"
                      placeholder="E.g. MH01DF5698"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Mobile No</label>
                    <input
                      type="tel"
                      name=""
                      id=""
                      defaultValue={user ? user.Mobno : ""}
                      placeholder="Enter mobile no."
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input
                      type="email"
                      name=""
                      id=""
                      defaultValue={user?.email || ""}
                      placeholder="Enter email address"
                    />
                  </div>
                  <div className="form-group">
                    <input type="submit" value="Get quote" />
                    <a href="#">Resent quote</a>
                  </div>
                </form>
              </div>
            )}
            {inc == 2 && (
              <div className="form-1">
                <form action="" onSubmit={handleformsubmit}>
                  <div className="form-group">
                    <label htmlFor="car-registration">
                      Bike registration no.
                    </label>
                    <input
                      ref={inpcarno}
                      type="text"
                      id="car-registration"
                      placeholder="E.g. MH01DF5698"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Mobile No</label>
                    <input
                      type="tel"
                      name=""
                      id=""
                      defaultValue={user ? user.Mobno : ""}
                      placeholder="Enter mobile no."
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input
                      type="email"
                      placeholder="Enter email address"
                      defaultValue={user ? user.email : ""}
                    />
                  </div>
                  <div className="form-group">
                    <input type="submit" value="Get quote" />
                    <a href="#">Resent quote</a>
                  </div>
                </form>
              </div>
            )}

            {inc == 3 && (
              <div className="form-1">
                <form action="" onSubmit={handleformsubmit}>
                  <div className="form-group">
                    <label htmlFor="car-registration">Select Product</label>
                    <select name="" id="">
                      <option value="Elevate">
                        <input type="radio" />
                        Elevate
                      </option>
                      <option value="Activate-Booster">
                        <input type="radio" />
                        Activate Booster
                      </option>
                      <option value="Activate-Booster-combo">
                        <input type="radio" />
                        Activate Booster(Combo*)
                      </option>
                      <option value="Health-Advantage">
                        <input type="radio" />
                        Health Advantage
                      </option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Insurance Member</label>
                    <p onClick={() => setincmemflag(!incmemflag)}>
                      Add Members
                    </p>
                    {incmemflag && (
                      <div className="popup-form">
                        <div>
                          <p>
                            <b>Adult(s)</b> (18 years & above)
                          </p>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setadultscount(adultscount - 1);
                            }}
                          >
                            -
                          </button>
                          <b>{adultscount}</b>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setadultscount(adultscount + 1);
                            }}
                          >
                            +
                          </button>
                        </div>
                        <div>
                          <p>
                            <b>Adult(s)</b> (18 years & above)
                          </p>
                          <button
                            onClick={() => setadultscount(adultscount - 1)}
                          >
                            -
                          </button>
                          <b>{adultscount}</b>
                          <button
                            onClick={() => setadultscount(adultscount + 1)}
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => {
                            setincmemflag(false);
                          }}
                        >
                          Done
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Contact Details</label>
                    <div onClick={() => setformflag(true)}>
                      <p>Add Details</p>
                      {formflag && (
                        <div
                          className={formflag ? `d-block popup-form` : `d-none`}
                        >
                          <form>
                            <label htmlFor="">Mobile No</label>
                            <input type="text" placeholder="Enter mobile no" />
                            <label htmlFor="">Email </label>
                            <input type="text" placeholder="Enter Email " />
                            <label htmlFor="">Pincode</label>
                            <input type="text" placeholder="Enter Pincode " />
                            <label htmlFor="">Your Name</label>
                            <input type="text" placeholder="Enter Your name" />
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setformflag(false);
                              }}
                            >
                              {" "}
                              Done
                            </button>
                          </form>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="submit" value="Get quote" />
                    <a href="#">Resent quote</a>
                  </div>
                </form>
              </div>
            )}

            {inc == 4 && (
              <div className="tabContentBox">
                <div className="tabCnt">
                  <form className="" onSubmit={handleformsubmit}>
                    <div className="row">
                      {/* Travel Scope */}
                      <div className="col-12 col-sm-3 col-md-3 col-lg-3">
                        <div className="ui-form-block">
                          <div className="input-block mobile-block ripple-bar focus mar-bottom focus">
                            <label htmlFor="valid-policynumber">
                              Your travel scope
                            </label>

                            <button
                              type="button"
                              className="health-insure-member btn-traveldetails scope-popup"
                              onClick={() => setTravelScope(!travelScope)}
                            >
                              <span className="scope-popup">Select Scope</span>
                              <img
                                src="../../../public/Home/images/dropdown_arrow.png"
                                alt=""
                              />
                            </button>
                            {travelScope && (
                              <div className="member-detail-popup member-detail-popup-size travel-detail-wraper scope-popup">
                                <div className="row pad-top1 scope-popup">
                                  <h2>Select travel scope by geography</h2>
                                </div>

                                <div className="pad-top1 pad-bot1 travel-city-selection scope-popup">
                                  {/* USA / Canada */}
                                  <div className="radio scope-popup">
                                    <input
                                      id="canada"
                                      name="geography"
                                      type="radio"
                                      value="USA or Canada"
                                      autoComplete="off"
                                      className="scope-popup"
                                    />
                                    <label
                                      htmlFor="canada"
                                      className="radio-label scope-popup"
                                    >
                                      <img
                                        src="../../../public/Home/images/canada_icon.png"
                                        alt=""
                                      />
                                    </label>
                                    <span>USA or Canada</span>
                                  </div>

                                  {/* Asia */}
                                  <div className="radio scope-popup">
                                    <input
                                      id="asia"
                                      name="geography"
                                      type="radio"
                                      value="Asia"
                                      autoComplete="off"
                                      className="scope-popup"
                                    />
                                    <label
                                      htmlFor="asia"
                                      className="radio-label scope-popup"
                                    >
                                      <img
                                        src="../../../public/Home/images/asia_icon.png"
                                        alt=""
                                      />
                                    </label>
                                    <span>Asia</span>
                                  </div>

                                  {/* Schengen */}
                                  <div className="radio scope-popup">
                                    <input
                                      id="schengen"
                                      name="geography"
                                      type="radio"
                                      value="Schengen"
                                      autoComplete="off"
                                      className="scope-popup"
                                    />
                                    <label
                                      htmlFor="schengen"
                                      className="radio-label scope-popup"
                                    >
                                      <img
                                        src="../../../public/Home/images/asia_icon.png"
                                        alt=""
                                      />
                                    </label>
                                    <span>Schengen</span>
                                  </div>

                                  {/* Rest of the world */}
                                  <div className="radio scope-popup">
                                    <input
                                      id="restworld_icon"
                                      name="geography"
                                      type="radio"
                                      value="Rest of the world"
                                      autoComplete="off"
                                      className="scope-popup"
                                    />
                                    <label
                                      htmlFor="restworld_icon"
                                      className="radio-label scope-popup"
                                    >
                                      <img
                                        className="scope-popup"
                                        src="../../../public/Home/images/restworld_icon.png"
                                        alt=""
                                      />
                                    </label>
                                    <span>Rest of the world</span>
                                  </div>
                                </div>

                                <div className="trip-or-section scope-popup">
                                  <div className="trip-or-text scope-popup">
                                    or
                                  </div>
                                </div>

                                <div className="row pad-top2 pad-bot2 scope-popup">
                                  <div className="col-12">
                                    <a className="select-countries-link scope-popup">
                                      Select the countries you're visiting
                                    </a>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Dates Section */}
                      <div className="col-12 col-sm-6 col-md-7 col-lg-7">
                        <div className="row travel-calender-mainwraper cal-popup">
                          {/* Trip Start */}
                          <div className="col-12 col-sm-6 col-md-6 col-lg-6 cal-popup">
                            <div className="ui-form-block cal-popup">
                              <div className="input-block mobile-block ripple-bar focus mar-bottom cal-popup">
                                <label className="cal-popup">
                                  Trip start date <sup>*</sup>
                                </label>

                                <div className="trip-date cal-popup">
                                  <input
                                    type="date"
                                    id="txtTripStartDate"
                                    maxLength="10"
                                    autoComplete="off"
                                    placeholder="Leaving on"
                                    className="tel val-mob val-req numeric cal-popup filled-field-value ng-untouched ng-pristine ng-valid"
                                  />
                                  <img
                                    src="../../../public/Home/images/dropdown_arrow.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Trip End */}
                          <div className="col-12 col-sm-6 col-md-6 col-lg-6 cal-popup">
                            <div className="ui-form-block cal-popup">
                              <div className="input-block mobile-block ripple-bar focus mar-bottom cal-popup">
                                <label className="cal-popup">
                                  Trip end date <sup>*</sup>
                                </label>

                                <div className="trip-date">
                                  <input
                                    type="date"
                                    id="txtTripEndtDate"
                                    maxLength="10"
                                    autoComplete="off"
                                    placeholder="Returning on"
                                    className="tel val-mob val-req numeric cal-popup filled-field-value"
                                  />
                                  <img
                                    className="cal-popup"
                                    src="../../../public/Home/images/dropdown_arrow.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Get Quote Button */}
                      <div className="col-12 col-sm-3 col-md-2 col-lg-2 text-center">
                        <input type="submit" value="Get quote" />
                      </div>
                    </div>

                    {/* Bottom Row */}
                    <div className="row">
                      <div className="col-12 col-sm-6 col-md-10 col-lg-10">
                        <div className="note-remeber">
                          <a
                            title=" If you are a business traveller, our Gold
Multi-Trip Travel Insurance is an ideal plan for
you. Instead of covering you for a single trip,
it can keep you covered for multiple ones
throughout the year. Thus, you don't have to buy
a travel plan every time you plan a trip"
                          >
                            I travel multiple times in a year
                          </a>
                          <span className="travel-tooltip">
                            !
                            <span className="tooltip-text">
                              <Tooltip target="Tooltiptravel">
                                If you are a business traveller, our Gold
                                Multi-Trip Travel Insurance is an ideal plan for
                                you. Instead of covering you for a single trip,
                                it can keep you covered for multiple ones
                                throughout the year. Thus, you don't have to buy
                                a travel plan every time you plan a trip
                              </Tooltip>
                            </span>
                          </span>

                          {" | "}

                          <a
                            title="You can extend your travel policy with us up to
                              182 days."
                          >
                            {" "}
                            Extend my existing policy
                          </a>

                          {" | "}

                          <a
                            href="/student-travel-insurance-landing?opt=student-travel&source=widget"
                            className="std-travel"
                          >
                            Student Travel
                          </a>
                        </div>
                      </div>

                      <div className="col-12 col-sm-6 col-md-2 col-lg-2 text-center">
                        <span
                          id="spnRetrieveQuote"
                          className="try-policy-link big-device"
                        >
                          Recent Quote
                        </span>
                      </div>
                    </div>
                  </form>

                  {/* Checkbox */}
                  <div className="check-feild">
                    <input
                      type="checkbox"
                      id="non-immigrant"
                      className="input-check"
                    />
                    <label htmlFor="non-immigrant">
                      All the travellers have a non-immigrant visa
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="aside eg">
          <div id="aside" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              {data.aside.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#aside"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>
            <div className="carousel-inner">
              {data.aside.map((i) => (
                <div
                  className={
                    i.id == 0 ? "carousel-item active" : "carousel-item"
                  }
                  data-bs-interval="1000"
                  key={i.id}
                >
                  <img src={i.url} className="d-block w-100" alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="section-2">
          <div className="part1">
            <input type="checkbox" /> I agree to the terms & conditions
            <br />
            <input type="checkbox" /> I want to get my quote and policy details
            on
            <img
              src="../../../public/Home/images/whatsapp-icon-black.png"
              alt="whatsapp-icon-black"
            />
          </div>

          <div className="part2">
            <ul>
              <li>
                <a href="#">Discover product prices here &gt;</a>
                <h3>37.57 Million</h3>
                <p>Policies issued</p>
                <span>FY 2024-25</span>
              </li>

              <li>
                <h3>3.2 Million</h3>
                <p>Claims processed</p>
                <span>FY 2024-25</span>
              </li>

              <li>
                <h3>14400+</h3>
                <p>Network garages</p>
                <span>As on June 30, 2025</span>
              </li>

              <li>
                <h3>10300+</h3>
                <p>Healthcare providers</p>
                <span>As on March 31, 2025</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="section-3">
          <h3>Why choose ICICI Lombard?</h3>

          {/* Block 1 */}
          <div className="block1">
            <div>
              <h1>{data.section3[0].heading}</h1>
              <p>
                <b>{data.section3[0].title}</b>
              </p>
              <p>{data.section3[0].des}</p>
            </div>

            <img src={data.section3[0].img} alt="section-3-1" />
          </div>

          {/* Block 2 */}
          <div className="block1">
            <img
              src="../../../public/Home/images/section-3-2.png"
              alt="section-3-2"
            />

            <div>
              <h1>{data.section3[1].heading}</h1>
              <p>
                <b>{data.section3[1].title}</b>
              </p>
              <p>{data.section3[1].des}</p>
              <p>
                <b>We are available where you are.</b>
              </p>

              {/* Fixing ">" to JSX safe entity */}
              <p>&gt; Call centre &gt; Chat &gt; 320+ branches</p>

              <span>{data.section3[1].date}</span>
            </div>
          </div>

          {/* Block 3 */}
          <div className="block1">
            <div>
              <h1>{data.section3[2].heading}</h1>
              <p>
                <b>{data.section3[2].title}.</b>
              </p>
              <p>{data.section3[2].des}</p>
            </div>
            <img src={data.section3[2].img} alt="section-3-3" />
          </div>
        </div>
        {/* Section 4 */}
        <div className="section-4">
          <h2>Our products</h2>

          <div className="container">
            {/* Car */}
            {data.products.map((item) => (
              <div className="block" key={item.id}>
                <p>{item.title}</p>
                <div className="block-img">
                  <img src={item.icon} alt={item.title} />
                </div>

                <ul>
                  {item.features.map((feat, i) => (
                    <li key={i}>
                      {feat}
                      {item.superscript[i] && <sup>{item.superscript[i]}</sup>}
                    </li>
                  ))}
                </ul>

                <a href={item.link}>Explore &gt;</a>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5 */}
        <div className="section-5">
          <div className="container position-relative">
            <div className="left-block">
              <h2>Experience insurance on the go with IL TakeCare app</h2>

              <p>
                Buy policies, renew them, file claims or complete mobile
                self-inspections— <br /> all from your phone.
              </p>

              <p className="left-block-title">Benefits Beyond Insurance</p>

              <ul>
                <li>
                  <img
                    src="../../../public/Home/images/face-scan.svg"
                    alt="face scan"
                  />
                  <span>Health vitals via face scan</span>
                </li>

                <li>
                  <img
                    src="../../../public/Home/images/driving-insight.svg"
                    alt="driving insight"
                  />
                  <span>Driving insights and pattern</span>
                </li>

                <li>
                  <img
                    src="../../../public/Home/images/fitness-track.svg"
                    alt="fitness track"
                  />
                  <span>Fitness tracking and challenges</span>
                </li>
              </ul>

              <span>and more...</span>

              <a className="btn" href="#">
                Learn more
              </a>

              <div className="download-block">
                <h4>Download the IL TakeCare app</h4>

                <img
                  src="../../../public/Home/images/qr-code.png"
                  alt="qr code"
                />

                <div className="app-block">
                  <img
                    src="../../../public/Home/images/google-play.png"
                    alt="google play"
                  />
                  <br />
                  <img
                    src="../../../public/Home/images/app-store.png"
                    alt="app store"
                  />
                </div>
              </div>
            </div>

            <img
              className="position-absolute text-opacity-75 end-0"
              src="../../../public/Home/images/iphone.png"
              alt="iphone"
            />
          </div>
        </div>

        <div className="section-6">
          <div className="section-6-title">
            <h2>#LearnCPRSaveALife</h2>
            <p>
              Did you know? Effective CPR can double the chance of a person{" "}
              <br /> surviving a cardiac arrest.
            </p>
          </div>

          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/wM6oEqHEDzM?si=8C0gyQvig2NgUmx0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="row section-7">
          <div className="col-sm-12 col-md-6 d-flex align-items-start">
            <div>
              <div className="pmfby-logo mb-3">
                <img
                  src={data.PMFBY[0].logo}
                  alt="pmfby-logo"
                  className="img-fluid"
                />
              </div>

              <div className="pmfby-block">
                <h2>{data.PMFBY[0].title}</h2>
                <p>{data.PMFBY[0].des}</p>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 fraud-section">
            <div
              id="carousel-slide"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators fraud-button">
                <button
                  type="button"
                  data-bs-target="#carousel-slide"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                ></button>

                <button
                  type="button"
                  data-bs-target="#carousel-slide"
                  data-bs-slide-to="1"
                ></button>
              </div>

              <div className="carousel-inner">
                {data.FraudAwareness.map((i, index) => (
                  <div
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                    key={index}
                  >
                    <img src={i.logo} alt="fraud-logo" className="img-fluid" />

                    <div className="fraud-block mt-3">
                      <h2>{i.title}</h2>
                      <div className="fraud-block-content">
                        <p>{i.des}</p>
                        <a href={`mailto:${i.mail}`}>
                          <strong>{i.mail}</strong>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="row section-8">
          {/* LEFT SIDE – REVIEWS */}
          <div className="col-sm-12 col-md-6">
            <h2>A happy you, makes a happy us.</h2>

            <div className="review-block">
              <div
                id="carousel-slide2"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                {/* INDICATORS */}
                <div className="carousel-indicators review-block-button">
                  {data.reviews.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      data-bs-target="#carousel-slide2"
                      data-bs-slide-to={index}
                      className={index === 0 ? "active" : ""}
                      aria-current={index === 0 ? "true" : undefined}
                    ></button>
                  ))}
                </div>

                {/* SLIDES */}
                <div className="carousel-inner">
                  {data.reviews.map((item, index) => (
                    <div
                      key={item.id}
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                      <img
                        src={item.profileIcon}
                        alt="profile-icon"
                        className="profile-icon"
                      />

                      <div className="award-block mt-3">
                        <div className="review-block-content">
                          <h4 className="review-block-heading">{item.name}</h4>

                          <div className="ratings">
                            {[...Array(5)].map((_, i) => (
                              <span
                                key={i}
                                className={
                                  i < item.rating ? "star-fill" : "star-grey"
                                }
                              ></span>
                            ))}
                          </div>

                          <p>{item.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE – AWARDS */}
          <div className="col-sm-12 col-md-6">
            <h2>Awards & recognition</h2>

            {data.awards.map((award) => (
              <div key={award.id} className="awards-block-1">
                <div className="award-block-img">
                  <img src={award.image} alt={award.title} />
                </div>

                <div className="award-block-content">
                  <h6>{award.title}</h6>
                  <p>{award.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* MORE AWARDS LINK */}
          <div className="more-awards">
            <b>
              <a href="#">More awards..</a>
            </b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
