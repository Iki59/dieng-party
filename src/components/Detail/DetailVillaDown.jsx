import { Row, Col, Image, Container, Button } from "react-bootstrap";
import AvaCentang from "../../assets/rifkiProfile.jpg";
import Shopping from "../../assets/shopping.png";
import Avatar from "../../assets/rifkiProfile.jpg";
import Shape from "../../assets/Shape.png";
import Mark from "../../assets/Line.png";
import Star from "../../assets/ratingStar.png";
import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { ModalBooking } from "../Modals/ModalBooking";

export const DetailVillaDown = ({ dataVilla }) => {
  const [show, setShow] = useState(false);
  const facilities = dataVilla?.facilities;
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 991px)",
  });

  return (
    <>
      <ModalBooking show={show} handleClose={() => setShow(false)} name={dataVilla.title} />
      <Container
        className="px-lg-4 py-lg-3 px-md-3 py-md-1 px-4 py-3"
        style={{
          marginTop: isTablet ? '-10rem' : isMobile ? '0rem' : '-15rem',
        }}
      >
        <Row>
          <Col sm={8} md={7}>
            <div>
              <h2>{dataVilla.title}</h2>
            </div>
            <div>
              <p style={{ color: "grey" }}>
                Hosted by{" "}
                <span style={{ color: "black" }}>
                  <img
                    src={Avatar}
                    alt="ava"
                    style={{
                      marginRight: "4px",
                      marginLeft: "3px",
                      width: "1.5rem",
                      height: "1.5rem",
                      borderRadius: "80px",
                    }}
                  />{" "}
                  {dataVilla.host}
                </span>
              </p>
            </div>
            <hr
              style={{
                marginTop: "24px",
                color: "#abb1b8",
                border: "1px solid #abb1b8",
              }}
            />
            <div className="mt-4">
              <div>
                <img src={Shape} alt="mini home" />
                <p
                  style={{
                    display: "inline-block",
                    marginLeft: "6px",
                    marginRight: "10px",
                    color: "grey",
                  }}
                >
                  {`${dataVilla.guests} Tamu`}
                </p>
                <img src={Mark} alt="markjuga" />
                <p
                  style={{
                    display: "inline-block",
                    marginLeft: "6px",
                    marginRight: "10px",
                    color: "grey",
                  }}
                >
                  {`${dataVilla.bedroom} Kamar`}
                </p>
                {/* <img src={Mark} alt="markjuga" />
                <p
                  style={{
                    display: "inline-block",
                    marginLeft: "6px",
                    marginRight: "10px",
                    color: "grey",
                  }}
                >
                  {`${dataVilla.privateBath} private bath`}
                </p> */}
              </div>
            </div>
            <div className="mt-4" style={{ color: "grey", fontWeight: "semibold" }}>
              <p>{dataVilla.description}</p>
              <p>{dataVilla.description2}</p>
              <p>{dataVilla.description3}</p>
            </div>
            <div className="mt-5">
              <h4>Fasilitas</h4>
              <Row className="mt-3">
                {facilities.map((item, index) => (
                  <Col xs={6} md={5} key={index}>
                    <img src={item?.image} alt="image facility" style={{ marginRight: "25px", width: "1.5rem" }} />
                    <p
                      style={{
                        display: "inline-block",
                        fontWeight: "500",
                        color: "grey",
                      }}
                    >
                      {item?.name}
                    </p>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
          <Col sm={4} md={5}>
            <div
              style={{
                border: "1px solid #dfe3e8",
                padding: "30px",
                borderRadius: "30px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <div>
                    <p style={{ fontWeight: "700" }} className="fs-3">
                      {dataVilla.price}
                    </p>
                  </div>
                  <div style={{ marginTop: "-0.7rem" }}>
                    <img src={Star} alt="star" style={{ width: "18px", marginTop: "-5px" }} />
                    <p
                      style={{
                        display: "inline-block",
                        marginLeft: "8px",
                        marginRight: "20px",
                        color: "grey",
                        fontWeight: "bold",
                      }}
                    >{`${dataVilla.ratings}`}</p>
                    {/* <p
                      style={{
                        display: 'inline-block',
                        marginLeft: '5px',
                        marginRight: '20px',
                        color: 'grey',
                      }}
                    >
                      ({`${dataVilla.reviews} reviews`})
                    </p> */}
                  </div>
                </div>
                <div>
                  <Image
                    src={AvaCentang}
                    alt="avacentang"
                    style={{
                      height: "4rem",
                      width: "4rem",
                      borderRadius: "80px",
                    }}
                  />
                </div>
              </div>
              <div>
                <Button type="btn-primary" className="w-100" onClick={() => setShow(true)}>
                  Booking <img src={Shopping} alt="shopping" />
                </Button>
              </div>
              {/* <div className="mt-3 d-flex justify-content-center">
                <a href="#" style={{ textDecoration: "none", color: "grey" }}>
                  <img src={Mark} alt="mark" className="me-1" />
                  Report this property
                </a>
              </div> */}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

DetailVillaDown.propTypes = {
  dataVilla: PropTypes.any,
};
