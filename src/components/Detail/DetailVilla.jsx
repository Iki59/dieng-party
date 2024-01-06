import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import GoHome from "../../assets/button.png";
import Location from "../../assets/location.png";
import Share from "../../assets/share.png";
import Love from "../../assets/love.png";
import More from "../../assets/more.png";
import Close from "../../assets/close.png";
import Avatar from "../../assets/avatar.png";
import Star from "../../assets/Frame 855.png";
import Shape from "../../assets/Shape.png";
import Mark from "../../assets/Line.png";
import Primary from "../../assets/primary img.png";
import Thumb01 from "../../assets/thumb 01.png";
import Thumb03 from "../../assets/thumb 03.png";
import Thumb02 from "../../assets/thumb 02.png";
import BtnAll from "../../assets/btn-all.png";
import Modem from "../../assets/modem.png";
import Computer from "../../assets/computer.png";
import Medical from "../../assets/medical.png";
import Apple from "../../assets/apple.png";
import AvaCentang from "../../assets/avatarcentang.png";

export const DetailVilla = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="mt-3">
              <a href="#">
                <img src={GoHome} alt="button" />
              </a>
            </div>
          </Col>
          <Col>
            <div style={{ marginLeft: "12rem", marginTop: "1rem", fontSize: "0.8rem", fontWeight: "semibold" }}>
              <a href="#" style={{ textDecoration: "none", color: "black", marginRight: "22px" }}>
                Home
              </a>
              <a href="#" style={{ textDecoration: "none", color: "black", marginRight: "22px" }}>
                Stay
              </a>
              <a href="#" style={{ textDecoration: "none", color: "black", marginRight: "22px" }}>
                New Zealand
              </a>
              <a href="#" style={{ textDecoration: "none", color: "black", marginRight: "22px" }}>
                South Island
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="mt-3 fw-bold">
              <h2 className="fs-1">Spectacular views of Queenstown</h2>
            </div>
          </Col>
          <Col>
            <div style={{ marginLeft: "15rem", marginTop: "-3rem" }}>
              <a href="#" style={{ marginRight: "5px" }}>
                <img src={Location} alt="location" />
              </a>
              <a href="#" style={{ marginRight: "5px" }}>
                <img src={Share} alt="share" />
              </a>
              <a href="#" style={{ marginRight: "-12px", marginLeft: "-18px" }}>
                <img src={Love} alt="love" style={{ marginTop: "80px" }} />
              </a>
              <a href="#" style={{ marginRight: "5px" }}>
                <img src={More} alt="more" />
              </a>
              <a href="#" style={{ marginRight: "5px" }}>
                <img src={Close} alt="close" />
              </a>
            </div>
          </Col>
        </Row>
        <div style={{ marginTop: "-1.5rem" }}>
          <img src={Avatar} alt="ava" style={{ marginRight: "20px" }} />
          <img src={Star} alt="star" />
          <p style={{ display: "inline-block", marginLeft: "5px", marginRight: "20px", color: "grey" }}>(256 reviews)</p>
          <img src={Shape} alt="home" />
          <p style={{ display: "inline-block", marginLeft: "5px", marginRight: "20px", color: "grey" }}>Rekomendasi</p>
          <img src={Mark} alt="mark" />
          <p style={{ display: "inline-block", marginLeft: "5px", marginRight: "20px", color: "grey" }}>Queenstown, Otago, New Zealand</p>
        </div>
        <div className="d-flex">
          <div>
            <img src={Primary} alt="primary" style={{ width: "98%" }} />
          </div>
          <div>
            <div className="mb-2">
              <img src={Thumb01} alt="thumb" style={{ width: "98%" }} />
            </div>
            <div className="mb-2">
              <img src={Thumb03} alt="thumb" style={{ width: "98%" }} />
            </div>
            <div className="mb-2">
              <img src={Thumb02} alt="thumb" style={{ width: "98%" }} />
            </div>
          </div>
        </div>
        <img src={BtnAll} alt="button" style={{ marginTop: "-129px", marginLeft: "20px", cursor: "pointer" }} />

        <Row>
          <Col sm={8}>
            <div>
              <h2>Private room in house</h2>
            </div>
            <div>
              <p style={{ color: "grey" }}>
                Hosted by{" "}
                <span style={{ color: "black" }}>
                  <img src={Avatar} alt="ava" style={{ marginRight: "4px", marginLeft: "3px" }} /> Rifkiyantoro
                </span>
              </p>
            </div>
            <hr style={{ marginTop: "24px" }} />
            <div style={{ marginTop: "24px" }}>
              <div>
                <img src={Shape} alt="mini home" />
                <p style={{ display: "inline-block", marginLeft: "8px", marginRight: "20px", color: "grey" }}>2 guests</p>
                <img src={Mark} alt="markjuga" />
                <p style={{ display: "inline-block", marginLeft: "8px", marginRight: "20px", color: "grey" }}>1 bedroom</p>
                <img src={Mark} alt="markjuga" />
                <p style={{ display: "inline-block", marginLeft: "8px", marginRight: "20px", color: "grey" }}>1 private bath</p>
              </div>
            </div>
            <div style={{ color: "grey", marginTop: "40px", fontWeight: "semibold" }}>
              <p>Described by Queenstown House & Garden magazine as having 'one of the best views we've ever seen' you will love relaxing in this newly built, architectural house sitting proudly on Queenstown Hill.</p>
              <p>Enjoy breathtaking 180' views of Lake Wakatipu from your well appointed & privately accessed bedroom with modern en suite and floor-to-ceiling windows.</p>
              <p>Your private patio takes in the afternoon sun, letting you soak up unparalleled lake and mountain views by day and the stars & city lights by night.</p>
            </div>
            <div style={{ marginTop: "4rem" }}>
              <h4>Amenities</h4>
              <Row>
                <Col>
                  <div>
                    <img src={Modem} alt="modem" style={{ marginRight: "25px" }} />
                    <p style={{ display: "inline-block", fontWeight: "500", color: "grey" }}>Free Wifi 24/7</p>
                  </div>
                  <div>
                    <img src={Computer} alt="computer" style={{ marginRight: "25px" }} />
                    <p style={{ display: "inline-block", fontWeight: "500", color: "grey" }}>Free Computer</p>
                  </div>
                  <div>
                    <img src={Medical} alt="medical" style={{ marginRight: "25px" }} />
                    <p style={{ display: "inline-block", fontWeight: "500", color: "grey" }}>Alat Kesehatan</p>
                  </div>
                  <div>
                    <img src={Apple} alt="apple" style={{ marginRight: "25px" }} />
                    <p style={{ display: "inline-block", fontWeight: "500", color: "grey" }}>Sedia Grill</p>
                  </div>
                </Col>
                <Col>
                  <div>
                    <img src={Modem} alt="modem" style={{ marginRight: "25px" }} />
                    <p style={{ display: "inline-block", fontWeight: "500", color: "grey" }}>Free Wifi 24/7</p>
                  </div>
                  <div>
                    <img src={Computer} alt="computer" style={{ marginRight: "25px" }} />
                    <p style={{ display: "inline-block", fontWeight: "500", color: "grey" }}>Free Computer</p>
                  </div>
                  <div>
                    <img src={Medical} alt="medical" style={{ marginRight: "25px" }} />
                    <p style={{ display: "inline-block", fontWeight: "500", color: "grey" }}>Alat Kesehatan</p>
                  </div>
                  <div>
                    <img src={Apple} alt="apple" style={{ marginRight: "25px" }} />
                    <p style={{ display: "inline-block", fontWeight: "500", color: "grey" }}>Sedia Grill</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col sm={4}>
            <div style={{ border: "1px solid grey", padding: "32px", borderRadius: "30px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <div>
                    <p style={{ fontSize: "1.5rem", fontWeight: "700" }}>Rp800k/night</p>
                  </div>
                  <div style={{ marginTop: "-0.7rem" }}>
                    <img src={Star} alt="star" />
                    <p style={{ display: "inline-block", marginLeft: "5px", marginRight: "20px", color: "grey" }}>(256 reviews)</p>
                  </div>
                </div>
                <div>
                  <img src={AvaCentang} alt="avacentang" />
                </div>
              </div>
              <div>
                <button className="btn btn-primary">Booking</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
