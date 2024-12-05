import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaDownload, FaPrint } from "react-icons/fa6";

const HotelInvoice = () => {
  return (
    <>
      <section className="hotelInvoiceSec sectionSpace">
        <div className="container">
          <div className="invoiceBody">
            <div className="header">
              <div className="logo">
                <Link className="navbar-brand" href="/">
                  <Image
                    src={"/assets/images/logo.png"}
                    alt="Brand"
                    width={180}
                    height={50}
                  ></Image>
                </Link>
              </div>
              <div className="invoiceNum">
                <h5>Invoice</h5>
                <p>Invoice Number - 91123</p>
              </div>
            </div>
            <div className="invoiceList">
              <ul>
                <li>
                  <strong>Guest Name</strong>
                  <span>Jitendra Singh</span>
                </li>
                <li>
                  <strong>Hotel Detail</strong>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique veritatis quis sit praesentium? Lorem ipsum dolor
                    sit amet consectetur adipisicing elit.
                  </span>
                </li>
                <li>
                  <strong>Booking ID</strong>
                  <span>123432142</span>
                </li>
                <li>
                  <strong>Booking Date</strong>
                  <span>12/06/2023</span>
                </li>
                <li>
                  <strong>Payment Mode</strong>
                  <span>Credit Card</span>
                </li>
                <li>
                  <strong>Check In:</strong>
                  <span>22/12/23</span>
                </li>
                <li>
                  <strong>Check Out:</strong>
                  <span>23/12/23</span>
                </li>
                <li>
                  <strong>Room:</strong>
                  <span>1</span>
                </li>
              </ul>
            </div>
            <div className="invoiceTable">
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Description</th>
                    <th scope="col">Price</th>
                    <th scope="col">Vat%</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Room Charges</td>
                    <td>₹4433</td>
                    <td>5%</td>
                    <td>₹0</td>
                  </tr>
                  <tr>
                    <td>Extra Guests cost</td>
                    <td>₹0</td>
                    <td>₹0</td>
                    <td>₹0</td>
                  </tr>
                  <tr>
                    <td>Room Charges</td>
                    <td>₹15</td>
                    <td>2%</td>
                    <td>₹220</td>
                  </tr>
                  <tr>
                    <th>Total</th>
                    <td>0</td>
                    <td>0</td>
                    <td>₹4473</td>
                  </tr>
                </tbody>
              </table>
              <div className="note">
                <p>
                  <strong>Please Note: </strong>Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Eveniet ducimus quod ipsam
                  voluptate incidunt, sapiente laudantium, distinctio.
                </p>
              </div>
            </div>
            <div className="invoiceContact">
              <ul>
                <li>
                  <div className="icon">I</div>
                  <div className="text">
                    <p>(406) 444-1234</p>
                    <p>(326) 777-3234</p>
                  </div>
                </li>
                <li>
                  <div className="icon">I</div>
                  <div className="text">
                    <p>Parker Road, Delhi</p>
                  </div>
                </li>
                <li>
                  <div className="icon">I</div>
                  <div className="text">
                    <p>info@gmail.com</p>
                    <p>abaris@gmail.com</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="footer">
              <p className="note">
                Note: This is computer generated receipt and does not require
                physical signature
              </p>
              <div className="actionBtn">
                <button className="btn" type="button">
                  {" "}
                  <FaPrint /> Print
                </button>
                <button className="btn" type="button">
                  {" "}
                  <FaDownload /> Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HotelInvoice;
