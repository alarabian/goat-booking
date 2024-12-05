import React from "react";
import { AiFillSound } from "react-icons/ai";
import { FaRegistered } from "react-icons/fa6";

const ReferEarn = () => {
  return (
    <>
      <section className="referEarn sectionSpace bgGray">
        <div className="container">
          <div className="sectionTitle">
            <h2>Refer & Earn</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              accusantium doloribus voluptatum, porro, dolorem voluptates soluta
              odio ex exercitationem, deleniti vitae officiis dignissimos
              corrupti et veritatis incidunt officia. Officiis, reiciendis?
            </p>
          </div>
          <div className="innerRefer">
            <div className="innerReferItem">
              <div className="icon">
                <FaRegistered />
              </div>
              <div className="text">
                <h5>Register your friends</h5>
                <p>Share your referral link with friends. They get &10.</p>
              </div>
            </div>
            <div className="innerReferItem">
              <div className="icon">
                <AiFillSound />
              </div>
              <div className="text">
                <h5>Earn you</h5>
                <p>Share your referral link with friends. They get &10.</p>
              </div>
            </div>
            <div className="innerReferItem">
              <div className="icon">
                <AiFillSound />
              </div>
              <div className="text">
                <h5>Withdraw</h5>
                <p>Share your referral link with friends. They get &10.</p>
              </div>
            </div>
            <div className="innerReferItem">
              <div className="icon">
                <AiFillSound />
              </div>
              <div className="text">
                <h5>Refer your friends</h5>
                <p>Share your referral link with friends. They get &10.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReferEarn;
