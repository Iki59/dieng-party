import React from 'react';
import { Row, Col } from 'react-bootstrap';
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

export const DetailVillaDown = ({ dataVilla }) => {
  console.log('villa 2 nihh', dataVilla);
  return (
    <>
      <Row>
        <Col sm={8}>
          <div>
            <h2>Private room in house</h2>
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
                Rifkiyantoro
              </span>
            </p>
          </div>
          <hr style={{ marginTop: '24px' }} />
          <div style={{ marginTop: '24px' }}>
            <div>
              <img src={Shape} alt="mini home" />
              <p
                style={{
                  display: 'inline-block',
                  marginLeft: '8px',
                  marginRight: '20px',
                  color: 'grey',
                }}
              >
                2 guests
              </p>
              <img src={Mark} alt="markjuga" />
              <p
                style={{
                  display: 'inline-block',
                  marginLeft: '8px',
                  marginRight: '20px',
                  color: 'grey',
                }}
              >
                1 bedroom
              </p>
              <img src={Mark} alt="markjuga" />
              <p
                style={{
                  display: 'inline-block',
                  marginLeft: '8px',
                  marginRight: '20px',
                  color: 'grey',
                }}
              >
                1 private bath
              </p>
            </div>
          </div>
          <div
            style={{ color: 'grey', marginTop: '40px', fontWeight: 'semibold' }}
          >
            <p>
              Described by Queenstown House & Garden magazine as having 'one of
              the best views we've ever seen' you will love relaxing in this
              newly built, architectural house sitting proudly on Queenstown
              Hill.
            </p>
            <p>
              Enjoy breathtaking 180' views of Lake Wakatipu from your well
              appointed & privately accessed bedroom with modern en suite and
              floor-to-ceiling windows.
            </p>
            <p>
              Your private patio takes in the afternoon sun, letting you soak up
              unparalleled lake and mountain views by day and the stars & city
              lights by night.
            </p>
          </div>
          <div style={{ marginTop: '4rem' }}>
            <h4>Amenities</h4>
            <Row>
              <Col>
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
              </Col>
              <Col>
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
              </Col>
            </Row>
          </div>
        </Col>
        <Col sm={4}>
          <div
            style={{
              border: '1px solid grey',
              padding: '32px',
              borderRadius: '30px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <div>
                  <p style={{ fontSize: '1.5rem', fontWeight: '700' }}>
                    Rp800k/night
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
                    (256 reviews)
                  </p>
                </div>
              </div>
              <div>
                <img src={AvaCentang} alt="avacentang" />
              </div>
            </div>
            <div>
              <button
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '15px' }}
              >
                <span style={{ fontWeight: '600' }}>
                  Booking <img src={Shopping} alt="shopping" />
                </span>
              </button>
            </div>
            <div style={{ marginTop: '20px', padding: '0px 60px' }}>
              <a href="#" style={{ textDecoration: 'none', color: 'grey' }}>
                <img src={Mark} alt="mark" />
                Report this property
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

DetailVillaDown.propTypes = {
  dataVilla: PropTypes.any,
};
