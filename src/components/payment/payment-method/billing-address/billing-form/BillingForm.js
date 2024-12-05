import React from "react";

const BillingForm = () => {
  return (
    <>
      <form className="form row">
        <div className="col-md-6">
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
            />
          </div>
          <div className="form-group mb-3">
            <input type="mail" className="form-control" placeholder="Email" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
            />
          </div>
          <div className="form-group mb-3">
            <select className="form-select">
              <option value="india">INDIA</option>
              <option value="pakistan">PAKISTAN</option>
            </select>
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
          <textarea className="form-control" rows={3} placeholder="Message"></textarea>
          </div>
        </div>
      </form>
    </>
  );
};

export default BillingForm;
