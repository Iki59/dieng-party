import React from "react";
import Logo from "../../assets/logo.png";
import { Col, Row } from "react-bootstrap";

export const Footer = () => {
  return (
    <>
      <div
        style={{
          height: "160px",
          marginTop: "3rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
        }}
      >
        <div
          style={{
            width: "80%",
          }}
        >
          <div className="d-flex mb-2">
            <div className="me-5">
              <img src={Logo} style={{ width: "8rem", marginRight: "6rem" }} />
            </div>
            <div>
              <Row>
                <Col style={{ marginRight: "6rem" }}>
                  <p style={{ marginBottom: "2rem" }}>Villa</p>
                  <p>Paket Wisata</p>
                </Col>
                <Col style={{ marginRight: "6rem" }}>
                  <p style={{ marginBottom: "2rem" }}>Villa</p>
                  <p>Paket Wisata</p>
                </Col>
                <Col style={{ marginRight: "3rem" }}>
                  <p style={{ marginBottom: "2rem" }}>Villa</p>
                  <p>Paket Wisata</p>
                </Col>
                <Col>
                  <p className="fw-bold">Join our community 🔥</p>
                </Col>
              </Row>
            </div>
          </div>
          <div>
            <p>Copyright © 2023 Techmas Dev. All rights reserved</p>
          </div>
        </div>
      </div>
    </>
  );
};
