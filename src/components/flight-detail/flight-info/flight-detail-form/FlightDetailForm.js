const FlightDetailForm = () => {
  return (
    <>
      <div className="flightDetailForm">
        <form>
          <div className="row">
            <div className="col-md-3">
              <div className="form-group mb-3">
                <input type="text" placeholder="First Name" className="form-control" />
              </div>
              <div className="form-group mb-3">
                <select className="form-select">
                  <option value="Child">Child</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group mb-3">
                <input type="text" placeholder="Last Name" className="form-control" />
              </div>
              <div className="form-group mb-3">
                <select className="form-select">
                  <option value="Gender Select">Gender Select</option>
                  <option value="male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group mb-3">
                <input type="date" className="form-control" />
              </div>
              <div className="form-group mb-3">
                <input type="mail" placeholder="Email" className="form-control" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group mb-3">
                <select className="form-select">
                  <option value="Adult">Adult</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              <div className="form-group mb-3">
                <input type="phone" placeholder="Phone" className="form-control" />
              </div>
            </div>
          </div>
        </form>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" />
          <label className="form-check-label" for="flexCheckDefault">
            I consent to receive marketing emails from Abaris
          </label>
        </div>
      </div>
    </>
  );
};

export default FlightDetailForm;
