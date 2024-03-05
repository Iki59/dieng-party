import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LandingPhoto from "../../assets/aaa.png";
import { useMediaQuery } from "react-responsive";

export const LandingPage = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 991px)",
  });
  return (
    <>
      <Container className="px-lg-4 py-lg-5 px-md-3 py-md-3 px-4 py-5">
        <Row className="g-md-5 g-lg-0 g-5 d-flex align-items-center">
          <Col md={6}>
            <div>
              <p className="fw-medium mb-1" style={{ color: "black" }}>
                MENJELAJAHI DIENG BERSAMA HOUSE OF DIENG
              </p>
            </div>
            <div className="fs-1 fw-semibold" style={{ marginBottom: "2rem" }}>
              <h1>Temukan Keseruan disini</h1>
            </div>
            <div className="text-body-secondary fs-9 fw-medium">
              <p>Nikmati liburan staycation yang tak terlupakan di ketinggian Dieng, dengan pilihan menginap di villa mewah, cabin house, atau homestay tradisional yang nyaman..</p>
            </div>
            <div>
              <button
                className="btn btn-primary fs-8 fw-semibold mt-3 p-2 w-75"
                style={{
                  borderRadius: "90px",
                }}
              >
                Temukan Rekomendasi Villa{" "}
              </button>
            </div>
          </Col>
          <Col md={6}>
            <div>
              <img
                className="w-100"
                src={LandingPhoto}
                alt="landing"
                style={{
                  height: isTablet ? "21rem" : isMobile ? "20rem" : "28rem",
                  borderRadius: "8px",
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
