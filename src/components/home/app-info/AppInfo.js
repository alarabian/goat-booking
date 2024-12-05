import Image from "next/image";
import Link from "next/link";
import React from "react";

const AppInfo = () => {
  return (
    <>
      <section className="AppInfoPart sectionSpace">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="appInfoTitle">
                <div className="title">
                  <h2>The fastest way to pay in-store & online</h2>
                  <h6>
                    Download our app for the fastest, most convenient way to
                    send recharge
                  </h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius accusantium doloribus voluptatum, porro, dolorem
                    voluptates soluta odio ex exercitationem, deleniti vitae
                    officiis dignissimos corrupti et veritatis incidunt officia.
                    Officiis, reiciendis?
                  </p>
                  <div className="download">
                    <Link href="#">
                      <Image
                        src={"/assets/images/google.png"}
                        alt="Info"
                        width={130}
                        height={40}
                        
                      ></Image>
                    </Link>
                    <Link href="#">
                      <Image
                        src={"/assets/images/apple.jpg"}
                        alt="Info"
                        width={130}
                        height={40}
                        
                      ></Image>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="appInfoFigure">
                <Image
                  src={"/assets/images/bgInfo.jpg"}
                  alt="Info"
                  width={512}
                  height={512}
                  
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppInfo;
