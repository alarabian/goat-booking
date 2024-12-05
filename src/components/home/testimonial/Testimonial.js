import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa6";

const Testimonial = () => {
  return (
    <>
      <section className="testimonial sectionSpace bgGray">
        <div className="container">
          <div className="title text-center">
            <h2>Our Customer says</h2>
            <p>
              There are many variations of passages or Lorem ipsum, but the
              majority have suffered alteration of some form...
            </p>
          </div>
          <div className="customerList">
            <div className="customerItem">
              <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p>
                There are many variations of passages or Lorem ipsum, but the
                majority have suffered alteration of some form...
              </p>
              <div className="user">
                <div className="figure">
                  <Image
                    src="/assets/images/bgInfo.jpg"
                    alt="user"
                    width={50}
                    height={50}
                  ></Image>
                </div>
                <div className="text">
                  <h6>Jenelia Desuza</h6>
                  <p>Student</p>
                </div>
              </div>
            </div>
            <div className="customerItem">
              <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p>
                There are many variations of passages or Lorem ipsum, but the
                majority have suffered alteration of some form...
              </p>
              <div className="user">
                <div className="figure">
                  <Image
                    src="/assets/images/bgInfo.jpg"
                    alt="user"
                    width={50}
                    height={50}
                  ></Image>
                </div>
                <div className="text">
                  <h6>Jenelia Desuza</h6>
                  <p>Student</p>
                </div>
              </div>
            </div>
            <div className="customerItem">
              <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p>
                There are many variations of passages or Lorem ipsum, but the
                majority have suffered alteration of some form...
              </p>
              <div className="user">
                <div className="figure">
                  <Image
                    src="/assets/images/bgInfo.jpg"
                    alt="user"
                    width={50}
                    height={50}
                  ></Image>
                </div>
                <div className="text">
                  <h6>Jenelia Desuza</h6>
                  <p>Student</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Testimonial;
