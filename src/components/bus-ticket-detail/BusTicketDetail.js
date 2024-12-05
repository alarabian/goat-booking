import Link from "next/link";

const BusTicketDetail = () => {
  return (
    <>
      <section className="busTicketDetail sectionSpace">
        <div className="container">
          <div className="BusTicketInfo">
            <div className="title">
              <h3>Abaris Bus Ticket</h3>
            </div>
            <div className="busTicketCard">
              <div className="busTicketItem">
                <ul>
                  <li>
                    From <span>Jaipur</span>
                  </li>
                  <li>
                    To <span>Jodhpur</span>
                  </li>

                  <li>
                    Date of Journey <span>21-12-2023</span>
                  </li>
                </ul>
              </div>

              <div className="busTicketItem">
                <ul>
                  <li>
                    Reporting Time <span>5:25 PM</span>
                  </li>
                  <li>
                    Departure Time <span>10:55 AM</span>
                  </li>
                  <li>
                    Status <span>Booked</span>
                  </li>
                  <li>
                    Ticket ID <span>0084565DF</span>
                  </li>
                </ul>
              </div>

              <div className="busTicketItem">
                <ul>
                  <li>
                    Passenger Name <span>Mohammad Shadab</span>
                  </li>
                  <li>
                    Seat <span>L3</span>
                  </li>
                  <li>
                    Ticket PNR <span>62113542-537647</span>
                  </li>
                </ul>
              </div>

              <div className="busTicketItem">
                <ul>
                  <li>
                    Boarding Point Address{" "}
                    <span>
                      111, Sumeru Complex neethkalth magar, Meera Road
                    </span>
                  </li>
                  <li>
                    Bus Type <span>Ashok Leyland 2X1 Seater Sleeper</span>
                  </li>
                </ul>
              </div>

              <div className="busTicketItem">
                <ul>
                  <li>
                    Gajraj Travel (Jaipur )<span>9222 xx005, 9222 xx008</span>
                  </li>
                  <li>
                    Total Fare <span>765</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bookingCommonTable">
            <div className="getTouch">
              <p>
                Any Questions? Get in touch with our 24x7 customer care team
              </p>
              <Link href="#" className="getTouchBtn btn">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BusTicketDetail;
