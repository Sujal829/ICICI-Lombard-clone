import { useState } from "react";
import "../../assets/CSS/homeinsurance.css";
import localstate from "../../Services/localstate";
import { setuser } from "../../Redux/UserSlice";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

function HomeInsurance() {
  const [formflag, setformflag] = useState(true);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    insuranceFor: "",
    mobile: user?.Mobno,
    email: user?.email,
    pincode: "",
    carpetArea: "",
    constructionCost: "",
    homeContentsCost: "",
  });

  const handleformsubmit = async (e) => {
    e?.preventDefault();

    if (!user?.id) {
      alert("User not logged in. Login first");
      return;
    }

    // ✅ Use state instead of refs
    const insuranceObj = {
      inctype: "Home",
      type: formData.insuranceFor,
      pincode: formData.pincode,
      carpetArea: formData.carpetArea,
      costofConstruction: formData.constructionCost,
      costofHomeContent: formData.homeContentsCost,
    };

    // ✅ Basic validation
    if (
      !insuranceObj.type ||
      !insuranceObj.pincode ||
      !insuranceObj.carpetArea ||
      !insuranceObj.costofConstruction
    ) {
      alert("Please fill all required fields");
      return;
    }

    try {
      /* 1️⃣ Fetch latest user */
      const { data: userData } = await axios.get(
        `http://localhost:5000/users/${user.id}`
      );

      /* 2️⃣ Append insurance safely */
      const updatedInsurance = [...(userData.insurance || []), insuranceObj];

      /* 3️⃣ Update backend */
      await axios.patch(`http://localhost:5000/users/${user.id}`, {
        insurance: updatedInsurance,
      });

      /* 4️⃣ Sync Redux + localStorage */
      const updatedUser = {
        ...userData,
        insurance: updatedInsurance,
      };

      localstate.setlocaltoken(updatedUser);
      dispatch(setuser(updatedUser));

      alert("Insurance added successfully ✅");
    } catch (error) {
      console.error("Add insurance error:", error);
      alert("Something went wrong ❌");
    }
  };

  return (
    <div className="sfContentBlock">
      <section className="section-content homeformBanner">
        <div className="il-container">
          <div className="row">
            <div className="twoCardouter">
              {/* Left Banner */}
              <div className="banner-content">
                <h2>Complete Home Protect Policy</h2>
                <p className="bannerTitle">
                  Home insurance at affordable rates
                </p>

                <ul>
                  <li className="icon iconOne">
                    Prices starting @ just ₹190<sup>*</sup>
                  </li>
                  <li className="icon iconTwo">
                    Insure your home instantly online
                  </li>
                  <li className="icon iconThree">
                    Tenure options from 1 to 5 years
                  </li>
                </ul>

                <figure>
                  <img
                    title="ICICI Lombard's Complete Home Protect Policy"
                    alt="Complete Home Protect Policy"
                    src="../../../public/HomeInsurance/home-insurance.svg"
                  />
                  <p className="sum_insured_txt">
                    *This is an indicative annual premium for 1 lakh sum insured
                  </p>
                </figure>
              </div>

              {/* Right Form */}
              {formflag && (
                <div className="bannerFormblock">
                  <form className="homeins-form-block">
                    <p className="bannerFormTitle">
                      The home insurance is for:
                    </p>

                    <div className="policy-tabs">
                      <label className="policy-radio">
                        <input
                          type="radio"
                          name="policyinsurance"
                          value="Home owner"
                          checked={formData.insuranceFor === "Home owner"}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              insuranceFor: e.target.value,
                            })
                          }
                        />
                        Home owner
                      </label>

                      <label className="policy-radio">
                        <input
                          type="radio"
                          name="policyinsurance"
                          value="Tenant"
                          checked={formData.insuranceFor === "Tenant"}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              insuranceFor: e.target.value,
                            })
                          }
                        />
                        Tenant
                      </label>
                    </div>

                    <div className="input-block">
                      <input
                        value={formData.mobile}
                        placeholder="Mobile Number"
                        type="tel"
                        id="mobile"
                        maxLength={10}
                        readOnly
                      />
                      <span className="ui-error greyColr">
                        No spam assurance.
                      </span>
                    </div>

                    <div className="input-block">
                      <input
                        value={formData.email}
                        placeholder="Email"
                        type="email"
                        id="email"
                        maxLength={50}
                        readOnly
                      />
                    </div>

                    <div className="input-block">
                      <input
                        value={formData.pincode}
                        onChange={(e) =>
                          setFormData({ ...formData, pincode: e.target.value })
                        }
                        placeholder="Pincode"
                        type="tel"
                        id="pincode"
                        maxLength={6}
                      />
                      <span className="ui-error greyColr">
                        Enter pincode of your home address
                      </span>
                    </div>

                    <div className="check-feild">
                      <input type="checkbox" id="terms" checked readOnly />
                      <label htmlFor="terms">
                        I agree to the{" "}
                        <a href="#" className="termlink">
                          terms and conditions
                        </a>
                      </label>
                    </div>

                    {/* ✅ ALL ORIGINAL CLASSES RESTORED */}
                    <div className="ui-submit-btn">
                      <a
                        href="#"
                        className="btn-orange viewprice-btn btn-width-100"
                        onClick={(e) => {
                          e.preventDefault();
                          if (!formData.insuranceFor || !formData.pincode) {
                            alert("Complete step 1");
                            return;
                          }
                          setformflag(false);
                        }}
                      >
                        View price
                      </a>
                    </div>
                  </form>
                </div>
              )}

              {!formflag && (
                <div className="bannerFormblock">
                  <div>
                    <div
                      id="homeins-form-contents"
                      className="homeins-form-block fixed"
                    >
                      <h4 id="back-contents">
                        Please enter your home details
                        <div className="indexNo">
                          2/<span>2</span>
                        </div>
                      </h4>

                      <div className="pad-top2" />

                      {/* Home Building */}
                      <div className="bannerFormTitle">
                        Home building
                        <div className="tooltip">
                          <img
                            src="/docs/default-source/apps/homeinsurance/assets/images/tooltip-icon.png"
                            alt="info"
                          />
                          <span className="tooltiptext">
                            Home plinth & foundation + permanent attachments
                            like walls & infrastructure
                          </span>
                        </div>
                      </div>

                      <div className="input-block mb-5rem">
                        <label htmlFor="homeins-carpetarea"></label>
                        <input
                          value={formData.carpetArea}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              carpetArea: e.target.value,
                            })
                          }
                          placeholder="Enter carpet area (sqft)"
                          type="tel"
                          id="homeins-carpetarea"
                          maxLength={4}
                          className="tel numeric val-mob"
                        />
                        <div className="tooltip helpTooltip">
                          Help
                          <span className="tooltiptext">
                            Actual usable area of your home excluding the walls
                            & external balconies
                          </span>
                        </div>
                      </div>

                      <div className="input-block">
                        <label htmlFor="homeins-construct"></label>
                        <input
                          value={formData.constructionCost}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              constructionCost: e.target.value,
                            })
                          }
                          placeholder=" Cost of construction (per sqft)"
                          type="tel"
                          id="homeins-construct"
                          maxLength={4}
                          className="tel numeric val-mob rs-icon-value"
                        />
                        <div className="tooltip helpTooltip">
                          Help
                          <span className="tooltiptext">
                            Construction rate per square feet. You can check
                            this cost on your state’s ready reckoner website
                          </span>
                        </div>
                      </div>

                      {/* Home Contents */}
                      <div className="bannerFormTitle">
                        Home contents
                        <div className="tooltip">
                          <img
                            src="/docs/default-source/apps/homeinsurance/assets/images/tooltip-icon.png"
                            alt="info"
                          />
                          <span className="tooltiptext">
                            Furniture, fixtures, electronics, durables,
                            functional equipment & miscellaneous items
                          </span>
                        </div>
                      </div>

                      <div className="input-block">
                        <label htmlFor="homeins-costhome"></label>
                        <input
                          value={formData.homeContentsCost}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              homeContentsCost: e.target.value,
                            })
                          }
                          placeholder=" Cost of home contents"
                          type="tel"
                          id="homeins-costhome"
                          maxLength={10}
                          className="tel numeric val-mob rs-icon-value"
                        />
                      </div>

                      <div className="ui-submit-btn">
                        <button
                          onClick={handleformsubmit}
                          type="button"
                          id="getquote-submit"
                          className="btn-primary btn-orange getquote-btn btn-width-100"
                        >
                          Get quote
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeInsurance;
