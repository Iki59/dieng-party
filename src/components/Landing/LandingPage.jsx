import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LandingPhoto from "../../assets/landing.png";

export const LandingPage = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Container>
        <Row>
          <Col>
            <div style={{ marginTop: "11rem" }}>
              <div style={{ marginBottom: "-1rem" }}>
                <p className="text-body-secondary fw-medium">Menjelajahi dieng bersama dieng party</p>
              </div>
              <div className="fs-1 fw-semibold" style={{ marginBottom: "2rem" }}>
                <p>Temukan Keseruan disini</p>
              </div>
              <div className="text-body-secondary fw-medium" style={{ fontSize: "1rem" }}>
                <p style={{ marginBottom: "1px" }}>Selalu tersedia tempat tempat dan rekomendasi</p>
                <p> terbaik hanya ada di Dieng Party.</p>
              </div>
              <div>
                <button
                  className="btn btn-primary fw-semibold mt-3"
                  style={{
                    borderRadius: "90px",
                    padding: "8px 70px",
                  }}
                >
                  Find Recomendation Cottage{" "}
                </button>
              </div>
            </div>
          </Col>
          <Col>
            <div className="mt-5">
              <img src={LandingPhoto} alt="landing" style={{ height: "28rem" }} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
