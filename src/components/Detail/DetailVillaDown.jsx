import React from 'react';
import { Row, Col, Image, Container } from 'react-bootstrap';
import Modem from '../../assets/modem.png';
import Computer from '../../assets/computer.png';
import Medical from '../../assets/medical.png';
import Apple from '../../assets/apple.png';
import AvaCentang from '../../assets/avatarcentang.png';
import Shopping from '../../assets/shopping.png';
import Avatar from '../../assets/avatar.png';
import Shape from '../../assets/Shape.png';
import Mark from '../../assets/Line.png';
import Star from '../../assets/Frame 855.png';
import PropTypes from 'prop-types';
import ReactWhatsapp from 'react-whatsapp';

export const DetailVillaDown = ({ dataVilla }) => {
  return (
    <>
      <Container className="px-lg-4 py-lg-3 px-md-3 py-md-1 px-4 py-3">
        <Row>
          <Col sm={8} md={7}>
            <div>
              <h2>{dataVilla.title}</h2>
            </div>
            <div>
              <p style={{ color: 'grey' }}>
                Hosted by{' '}
                <span style={{ color: 'black' }}>
                  <img
                    src={Avatar}
                    alt="ava"
                    style={{ marginRight: '4px', marginLeft: '3px' }}
                  />{' '}
                  {dataVilla.host}
                </span>
              </p>
            </div>
            <hr
              style={{
                marginTop: '24px',
                color: '#abb1b8',
                border: '1px solid #abb1b8',
              }}
            />
            <div className="mt-4">
              <div>
                <img src={Shape} alt="mini home" />
                <p
                  style={{
                    display: 'inline-block',
                    marginLeft: '6px',
                    marginRight: '10px',
                    color: 'grey',
                  }}
                >
                  {`${dataVilla.guests} guests`}
                </p>
                <img src={Mark} alt="markjuga" />
                <p
                  style={{
                    display: 'inline-block',
                    marginLeft: '6px',
                    marginRight: '10px',
                    color: 'grey',
                  }}
                >
                  {`${dataVilla.bedroom} bedroom`}
                </p>
                <img src={Mark} alt="markjuga" />
                <p
                  style={{
                    display: 'inline-block',
                    marginLeft: '6px',
                    marginRight: '10px',
                    color: 'grey',
                  }}
                >
                  {`${dataVilla.privateBath} private bath`}
                </p>
              </div>
            </div>
            <div
              className="mt-4"
              style={{ color: 'grey', fontWeight: 'semibold' }}
            >
              <p>{dataVilla.description}</p>
              <p>{dataVilla.description2}</p>
              <p>{dataVilla.description3}</p>
            </div>
            <div className="mt-5">
              <h4>Amenities</h4>
              <Row className="mt-3">
                <Col md={5}>
                  {dataVilla.wifi === true ? (
                    <div>
                      <img
                        src={Modem}
                        alt="modem"
                        style={{ marginRight: '25px' }}
                      />
                      <p
                        style={{
                          display: 'inline-block',
                          fontWeight: '500',
                          color: 'grey',
                        }}
                      >
                        Free Wifi 24/7
                      </p>
                    </div>
                  ) : (
                    ''
                  )}
                  {dataVilla.computer === true ? (
                    <div>
                      <img
                        src={Computer}
                        alt="computer"
                        style={{ marginRight: '25px' }}
                      />
                      <p
                        style={{
                          display: 'inline-block',
                          fontWeight: '500',
                          color: 'grey',
                        }}
                      >
                        Free Computer
                      </p>
                    </div>
                  ) : (
                    ''
                  )}
                  {dataVilla.medical === true ? (
                    <div>
                      <img
                        src={Medical}
                        alt="medical"
                        style={{ marginRight: '25px' }}
                      />
                      <p
                        style={{
                          display: 'inline-block',
                          fontWeight: '500',
                          color: 'grey',
                        }}
                      >
                        Alat Kesehatan
                      </p>
                    </div>
                  ) : (
                    ''
                  )}
                  {dataVilla.grill === true ? (
                    <div>
                      <img
                        src={Apple}
                        alt="apple"
                        style={{ marginRight: '25px' }}
                      />
                      <p
                        style={{
                          display: 'inline-block',
                          fontWeight: '500',
                          color: 'grey',
                        }}
                      >
                        Sedia Grill
                      </p>
                    </div>
                  ) : (
                    ''
                  )}
                </Col>
                {/* <Col md={3}>
                <div
                  className="d-flex justify-content-center"
                  style={{ borderLeft: '2px solid #dfe3e8', height: '100%' }}
                ></div>
              </Col> */}
                <Col md={4}>
                  {dataVilla.wifi === true ? (
                    <div>
                      <img
                        src={Modem}
                        alt="modem"
                        style={{ marginRight: '25px' }}
                      />
                      <p
                        style={{
                          display: 'inline-block',
                          fontWeight: '500',
                          color: 'grey',
                        }}
                      >
                        Free Wifi 24/7
                      </p>
                    </div>
                  ) : (
                    ''
                  )}
                  {dataVilla.computer === true ? (
                    <div>
                      <img
                        src={Computer}
                        alt="computer"
                        style={{ marginRight: '25px' }}
                      />
                      <p
                        style={{
                          display: 'inline-block',
                          fontWeight: '500',
                          color: 'grey',
                        }}
                      >
                        Free Computer
                      </p>
                    </div>
                  ) : (
                    ''
                  )}
                  {dataVilla.medical === true ? (
                    <div>
                      <img
                        src={Medical}
                        alt="medical"
                        style={{ marginRight: '25px' }}
                      />
                      <p
                        style={{
                          display: 'inline-block',
                          fontWeight: '500',
                          color: 'grey',
                        }}
                      >
                        Alat Kesehatan
                      </p>
                    </div>
                  ) : (
                    ''
                  )}
                  {dataVilla.grill === true ? (
                    <div>
                      <img
                        src={Apple}
                        alt="apple"
                        style={{ marginRight: '25px' }}
                      />
                      <p
                        style={{
                          display: 'inline-block',
                          fontWeight: '500',
                          color: 'grey',
                        }}
                      >
                        Sedia Grill
                      </p>
                    </div>
                  ) : (
                    ''
                  )}
                </Col>
              </Row>
            </div>
          </Col>
          <Col sm={4} md={5}>
            <div
              style={{
                border: '1px solid #dfe3e8',
                padding: '30px',
                borderRadius: '30px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <div>
                    <p style={{ fontWeight: '700' }} className="fs-3">
                      {dataVilla.price}
                    </p>
                  </div>
                  <div style={{ marginTop: '-0.7rem' }}>
                    <img src={Star} alt="star" />
                    <p
                      style={{
                        display: 'inline-block',
                        marginLeft: '5px',
                        marginRight: '20px',
                        color: 'grey',
                      }}
                    >
                      ({`${dataVilla.reviews} reviews`})
                    </p>
                  </div>
                </div>
                <div>
                  <Image src={AvaCentang} alt="avacentang" />
                </div>
              </div>
              <div>
                <ReactWhatsapp
                  number="+6285395249752"
                  message={`Saya tertarik untuk memesan villa di ${dataVilla.title}`}
                  className="btn btn-primary"
                  style={{ width: '100%', marginTop: '15px' }}
                >
                  <span style={{ fontWeight: '600' }}>
                    Booking <img src={Shopping} alt="shopping" />
                  </span>
                </ReactWhatsapp>
              </div>
              <div className="mt-3 d-flex justify-content-center">
                <a href="#" style={{ textDecoration: 'none', color: 'grey' }}>
                  <img src={Mark} alt="mark" className="me-1" />
                  Report this property
                </a>
              </div>
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
