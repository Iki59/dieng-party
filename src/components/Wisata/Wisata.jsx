import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Img1 from "../../assets/img 01.png";
import Img2 from "../../assets/img 02.png";
import Img3 from "../../assets/img 03.png";

export const Wisata = () => {
  return (
    <>
      <div style={{ minHeight: "100vh" }}>
        <Container>
          <Row>
            <Col>
              <div style={{ marginTop: "8rem" }}>
                <p className="fs-3 fw-bold mb-1">Rekomendasi </p>
                <p className="fs-3 fw-bold">Wisata 🎉</p>
                <p className="fs-5 text-body-secondary fw-light">Tersedia paket wisata terbaik disini.</p>
              </div>
              <div>
                <div className="d-flex">
                  <div
                    style={{
                      backgroundColor: "lightgreen",
                      color: "white",
                      fontSize: "1.2rem",
                      padding: "3px 22px",
                      width: "4rem",
                      borderRadius: "50px",
                      marginBottom: "1rem",
                    }}
                  >
                    01
                  </div>
                  <div style={{ marginLeft: "1rem" }}>
                    <p className="fs-5 fw-bold">Get more discount</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div
                    style={{
                      backgroundColor: "lightblue",
                      color: "white",
                      fontSize: "1.2rem",
                      padding: "3px 22px",
                      width: "4rem",
                      borderRadius: "50px",
                      marginBottom: "1rem",
                    }}
                  >
                    02
                  </div>
                  <div style={{ marginLeft: "1rem" }}>
                    <p className="fs-5 fw-bold">Get premium travel magazine</p>
                  </div>
                </div>
              </div>
              <div>
                <button className="btn btn-primary" style={{ borderRadius: "50px" }}>
                  WhatsApp
                </button>
              </div>
            </Col>
            <Col>
              <div style={{ marginLeft: "5rem", marginBottom: "5rem" }}>
                <div style={{ zIndex: "3", marginTop: "15rem", marginLeft: "12rem" }}>
                  <img src={Img1} alt="img 1" />
                </div>
                <div style={{ zIndex: "2", marginTop: "-35rem" }}>
                  <img src={Img2} alt="img 2" />
                </div>
                <div style={{ zIndex: "1", marginTop: "-8rem", marginLeft: "-5rem" }}>
                  <img src={Img3} alt="img 3" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
