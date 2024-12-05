import React from "react";

const Contact = () => {
  return (
    <>
      <section className="contactPage sectionSpace">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="contactForm">
                <h4>Contact with us</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat eum aut vero labore id dolorem. Mollitia architecto
                  perspiciatis aut doloribus laborum, quas odio fuga, voluptatem
                  asperiores deserunt labore tempore odit?
                </p>
                <form className="contactForm row">
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        placeholder="Enter Name"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="mail">Enter Email</label>
                      <input
                        type="mail"
                        placeholder="Enter your mail"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <label htmlFor="phone">Enter Phone</label>
                      <input
                        type="number"
                        placeholder="Enter Mobile Number"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="booking">Booking</label>
                      <select className="form-select">
                        <option value="Bus">Bus</option>
                        <option value="Flight">Flight</option>
                        <option value="Hotel">Hotel</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group mb-3">
                      <label htmlFor="message">Enter Message</label>
                      <textarea
                        className="form-control"
                        rows={3}
                        placeholder="Enter Message"
                      ></textarea>
                    </div>
                    <button className="btn btn-primary">Submit</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contactAside">
                <h5>Contact Detail</h5>

                <ul>
                  <li>
                    <strong>Full Address</strong>
                    <p>Namberdar Estate, 2nd Floor, B 98, Kailash Hills, New
                    Friends Colony, New Delhi, Delhi 110025</p>
                  </li>
                  <li>
                    <strong>Phone</strong>
                    <p>(232) 123-980 (111) 555-980</p>
                  </li>
                  <li>
                    <strong>Mail</strong>
                    <p>info.abaris@example.com</p>
                    <p>abaris@info.com</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
