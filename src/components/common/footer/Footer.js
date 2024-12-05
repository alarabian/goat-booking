import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { BsFillSendFill } from "react-icons/bs";
import Client from "./client/Client";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <Client />
      <footer className="footerSec sectionSpace">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="footerInfo">
                <Link className="navbar-brand" href="/">
                  <Image
                    src={"/assets/images/logo.png"}
                    alt="Brand"
                    width={160}
                    height={85}
                  ></Image>
                </Link>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                  tenetur placeat maiores, ex autem quae deserunt dolorem
                  doloribus delectus maxime
                </p>
                <div className="social">
                  <ul>
                    <li>
                      <Link href="#">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FaLinkedinIn />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FaYoutube />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footerWidgets">
                <h5>Quick Links</h5>
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="#">Recharge & bill payment </Link>
                  </li>
                  <li>
                    <Link href="booking">Booking </Link>
                  </li>
                  <li>
                    <Link href="contact">Contact </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footerWidgets">
                <h5>Address</h5>
                <ul className="address">
                  <li>
                    <p>+91-8851746286</p>
                  </li>
                  <li>
                    <p>info.abaris@example.com</p>
                    <p>abaris@info.com</p>
                  </li>
                  <li>
                    <p>
                      Namberdar Estate, 2nd Floor, B 98, Kailash Hills, New
                      Friends Colony, New Delhi, Delhi 110025
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footerWidgets">
                <h5>Newsletter </h5>
                <p>subscribe our newsletter to get our latest update & news</p>
                <form>
                  <input
                    type="text"
                    placeholder="Enter here"
                    className="form-control"
                  />
                  <button className="btn sent" type="button">
                    <BsFillSendFill />
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-12">
              <div className="copyRight">
                <div className="copyText">
                  <ul>
                    <li>
                      <Link href="#">Copyright @2024 </Link>
                    </li>
                    <li>
                      <Link href="#">Abaris Infotech</Link>
                    </li>
                    <li>All right reserved</li>
                  </ul>
                </div>
                <div className="extraLink">
                  <ul>
                    <li>
                      <Link href="#">support</Link>
                    </li>
                    <li>
                      <Link href="#">Terms of use</Link>
                    </li>
                    <li>
                      <Link href="#">Privacy policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
