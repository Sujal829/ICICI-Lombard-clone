import React, { useState } from "react";

function MemberDetails() {
  const [adults, setAdults] = useState(0);
  const [kids, setKids] = useState([]); // each kid = { dob: "" }

  // Adults handlers
  const increaseAdults = () => setAdults((prev) => prev + 1);
  const decreaseAdults = () => {
    if (adults > 0) setAdults((prev) => prev - 1);
  };

  // Kids handlers
  const increaseKids = () => {
    setKids((prev) => [...prev, { dob: "" }]);
  };

  const decreaseKids = () => {
    setKids((prev) => prev.slice(0, -1));
  };

  const handleKidDOBChange = (index, value) => {
    const updatedKids = [...kids];
    updatedKids[index].dob = value;
    setKids(updatedKids);
  };

  return (
    <div className="member-detail-popup insure-members-wraper ins-mem-pop">

      {/* Adults Section */}
      <div className="row adult-wraper ins-mem-pop">
        <div className="col-md-8">
          <div className="adult-label">
            Adult(s) <span>(18 years & above)</span>
          </div>
        </div>

        <div className="col-md-4 text-right">
          <button onClick={decreaseAdults} disabled={adults === 0}>-</button>

          <input
            type="text"
            value={adults}
            disabled
            className="adult-textbox"
          />

          <button onClick={increaseAdults}>+</button>
        </div>
      </div>

      {/* Kids Section */}
      <div className="row kids-sub-wraper ins-mem-pop">
        <div className="col-md-8">
          <div className="adult-label">
            Kid(s) <span>(3 months - 30 years)</span>
          </div>
        </div>

        <div className="col-md-4 text-right">
          <button onClick={decreaseKids} disabled={kids.length === 0}>-</button>

          <input
            type="text"
            value={kids.length}
            disabled
            className="adult-textbox"
          />

          <button onClick={increaseKids}>+</button>
        </div>
      </div>

      {/* Dynamic Date Inputs for Kids */}
      {kids.length > 0 && (
        <div className="kids-dob-section">
          {kids.map((kid, index) => (
            <div key={index} className="kid-dob-field">
              <label>Kid {index + 1} Date of Birth</label>
              <input
                type="date"
                value={kid.dob}
                onChange={(e) =>
                  handleKidDOBChange(index, e.target.value)
                }
              />
            </div>
          ))}
        </div>
      )}

      {/* Done Button */}
      <div className="text-right">
        <button
          className="btn-done"
          onClick={() => console.log({ adults, kids })}
        >
          Done
        </button>
      </div>
    </div>
  );
}

export default MemberDetails;
