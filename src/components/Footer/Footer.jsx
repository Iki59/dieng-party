import React from "react";
import Logo from "../../assets/RY2.png";
import { Col, Row } from "react-bootstrap";
import LogoInstagram from "../../assets/instagram.png";
import LogoTiktok from "../../assets/tiktok.png";

export const Footer = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
          marginBottom: "1rem",
          marginTop: "2rem",
        }}
      >
        <div
          style={{
            width: "85%",
          }}
        >
          {/* <div className="d-flex mb-2">
            <div className="me-5">
              <img src={Logo} style={{ width: '8rem', marginRight: '6rem' }} />
            </div>
            <div> */}
          <Row className="px-2 px-sm-0">
            <Col md={3} className="mb-4">
              <img src={Logo} style={{ width: "12rem" }} />
            </Col>
            <Col md={4} className="d-sm-block d-flex mt-5">
              <p className="me-5" style={{ marginBottom: "2rem", fontWeight: "bold" }}>
                <p>Alamat: Jl. Dieng, Batur, Banjarnegara, Jawa Tengah</p>
              </p>
              <p> </p>
            </Col>
            <Col md={2} className="d-sm-block d-flex mt-5">
              <p>Telepon: +6281237339956</p>
            </Col>
            <Col md={3}>
              <p className="fw-bold mt-5">check our social media 🔥</p>
              <a href="https://www.instagram.com/houseofdieng/" target="_blank">
                <img src={LogoInstagram} alt="instagram" style={{ width: "2rem" }} />
              </a>
              <a href="https://www.tiktok.com/@house_of_dieng" target="_blank">
                <img src={LogoTiktok} alt="tiktok" style={{ width: "5.8rem" }} />
              </a>
            </Col>
            <div className="mt-4">
              <p className="fs-10">Copyright © 2023 Techmas Dev. All rights reserved</p>
            </div>
          </Row>
          {/* </div>
          </div> */}
        </div>
      </div>
    </>
  );
};
