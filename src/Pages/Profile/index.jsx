import React from "react";
import localstate from "../../Services/localstate";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <div className="container-fluid py-3 py-md-4">
      <div className="row g-4">
        {/* SIDEBAR */}
        <div className="col-12 col-md-4 col-lg-3">
          <div className="card sidebar-card p-4 shadow-sm h-100">
            <div className="text-center mb-3">
              <div className="avatar mx-auto mb-2">
                {user.FirstName.slice(0, 1)}
                {user.LastName.slice(0, 1)}
              </div>

              <h5 className="mb-0">
                {user.FirstName} {user.LastName}
              </h5>

              <small className="text-muted d-block">{user.email}</small>

              <small className="text-muted">{user.Mobno}</small>
            </div>

            <div className="list-group list-group-flush mt-4">
              <a
                href="#"
                className="list-group-item list-group-item-action active-link"
              >
                My Policies
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                Payments
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                Saved Quote
              </a>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="col-12 col-md-8 col-lg-9">
          {/* ADD POLICY BUTTON */}
          <div className="d-flex justify-content-center justify-content-md-end mb-3">
            <button className="btn btn-warning text-white px-4">
              Add Policy
            </button>
          </div>

          {/* Full field STATE */}
          {user.insurance.length > 0 && (
            <div className="row g-3">
              {user.insurance.map((policy, index) => (
                <div className="col-md-6" key={index}>
                  <div className="card policy-card shadow-sm p-4">
                    <div className="d-flex align-items-center gap-3">
                      <div className="icon-box">
                        {policy.inctype}
                      </div>

                      <div>
                        <h6 className="mb-1">{policy.inctype} Insurance</h6>
                        <small className="text-muted">
                        {policy.inctype == "Home"? "": "Vehicle No:"}{policy.carno}
                        {policy.type}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {user.insurance.length === 0 && (
            <div className="card policy-card shadow-sm p-4 p-md-5 text-center">
              <div className="mb-3">
                <i className="bi bi-shield-fill text-warning fs-1">
                  NO POLICIES
                </i>
              </div>

              <h5 className="fw-semibold">
                You don’t have any policy right now!
              </h5>

              <p className="text-muted mb-4">
                Meantime you can checkout our product offerings
              </p>

              {/* POLICY ICONS */}
              <div className="d-flex justify-content-center gap-3 gap-md-4 flex-wrap">
                <div className="text-center">
                  <div className="icon-box mb-2">🚗</div>
                  <small>Car</small>
                </div>

                <div className="text-center">
                  <div className="icon-box mb-2">🏍️</div>
                  <small>Bike</small>
                </div>

                <div className="text-center">
                  <div className="icon-box mb-2">❤️</div>
                  <small>Health</small>
                </div>

                <div className="text-center">
                  <div className="icon-box mb-2">🧳</div>
                  <small>Travel</small>
                </div>

                <div className="text-center">
                  <div className="icon-box mb-2">🏠</div>
                  <small>Home</small>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
