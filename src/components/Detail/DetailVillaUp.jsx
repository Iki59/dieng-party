import React, { useState } from 'react';
import { Carousel, Col, Container, Image, Row } from 'react-bootstrap';
import GoHome from '../../assets/button.png';
import Location from '../../assets/location.png';
import Share from '../../assets/share.png';
import Love from '../../assets/love.png';
import More from '../../assets/more.png';
import Close from '../../assets/close.png';
import Avatar from '../../assets/avatar.png';
import Star from '../../assets/Frame 855.png';
import Shape from '../../assets/Shape.png';
import Mark from '../../assets/Line.png';
import Primary from '../../assets/primary img.png';
import Thumb01 from '../../assets/thumb 01.png';
import Thumb03 from '../../assets/thumb 03.png';
import Thumb02 from '../../assets/thumb 02.png';
import BtnAll from '../../assets/btn-all.png';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';

export const DetailVillaUp = ({ dataVilla }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 991px)',
  });
  return (
    <>
      <Container className="px-lg-4 py-lg-3 px-md-3 py-md-1 px-4 py-3">
        <Row>
          <Col>
            <div className="mt-3">
              <a href="#">
                <img src={GoHome} alt="button" />
              </a>
            </div>
          </Col>
          {/* <Col>
            <div
              style={{
                marginTop: '1rem',
                fontSize: '0.8rem',
                fontWeight: 'semibold',
              }}
            >
              <a
                className="me-3"
                href="#"
                style={{
                  textDecoration: 'none',
                  color: 'black',
                }}
              >
                Home
              </a>
              <a
                className="me-3"
                href="#"
                style={{
                  textDecoration: 'none',
                  color: 'black',
                }}
              >
                Stay
              </a>
              <a
                className="me-3"
                href="#"
                style={{
                  textDecoration: 'none',
                  color: 'black',
                }}
              >
                New Zealand
              </a>
              <a
                className="me-3"
                href="#"
                style={{
                  textDecoration: 'none',
                  color: 'black',
                }}
              >
                South Island
              </a>
            </div>
          </Col> */}
        </Row>
        <div className="mt-3 mb-5 fw-bold">
          <h2 className="fs-1">{dataVilla.headTitle}</h2>
        </div>
        <div>
          <img src={Avatar} alt="ava" style={{ marginRight: '20px' }} />
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
          {dataVilla.recomendation === true ? (
            <>
              <img src={Shape} alt="home" />
              <p
                style={{
                  display: 'inline-block',
                  marginLeft: '5px',
                  marginRight: '20px',
                  color: 'grey',
                }}
              >
                Rekomendasi
              </p>
            </>
          ) : (
            ''
          )}
          <img src={Mark} alt="mark" />
          <p
            style={{
              display: 'inline-block',
              marginLeft: '5px',
              marginRight: '20px',
              color: 'grey',
            }}
          >
            {dataVilla.location}
          </p>
        </div>
        {/* <section id="photoArray">
          <div>
            <Image
              src={`../${dataVilla.image}`}
              alt="primary"
              style={{ width: '100%' }}
            />
          </div>
          <div>
            <Image
              src={`../${dataVilla.image2}`}
              alt="thumb"
              style={{ width: '100%' }}
            />
          </div>
          <div>
            <Image
              src={`../${dataVilla.image3}`}
              alt="thumb"
              style={{ width: '100%' }}
            />
          </div>
          <div>
            <Image
              src={`../${dataVilla.image4}`}
              alt="thumb"
              style={{ width: '100%' }}
            />
          </div>
        </section> */}
        {isMobile ? (
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <Image
                src={`../${dataVilla.image}`}
                style={{ width: '100%', height: '250px', objectFit: 'cover' }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src={`../${dataVilla.image2}`}
                style={{ width: '100%', height: '250px', objectFit: 'cover' }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src={`../${dataVilla.image3}`}
                style={{ width: '100%', height: '250px', objectFit: 'cover' }}
              />
            </Carousel.Item>
          </Carousel>
        ) : (
          <Row className="g-2">
            <Col md={10}>
              <Image
                src={`../${dataVilla.image}`}
                alt="primary"
                style={{
                  width: '100%',
                  height: isMobile ? '100%' : '90%',
                  borderRadius: '10px',
                }}
              />
              <img
                src={BtnAll}
                alt="button"
                style={{
                  position: 'absolute',
                  top: isTablet ? '51%' : '140%',
                  left: isTablet ? '11%' : '10%',
                  cursor: 'pointer',
                  width: '170px',
                }}
              />
            </Col>
            <Col md={2}>
              <div>
                <div className="mb-2">
                  <Image
                    src={`../${dataVilla.image2}`}
                    alt="thumb"
                    style={{ width: '100%' }}
                  />
                </div>
                <div className="mb-2">
                  <Image
                    src={`../${dataVilla.image3}`}
                    alt="thumb"
                    style={{ width: '100%' }}
                  />
                </div>
                <div className="mb-2">
                  <Image
                    src={`../${dataVilla.image4}`}
                    alt="thumb"
                    style={{ width: '100%' }}
                  />
                </div>
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};

DetailVillaUp.propTypes = {
  dataVilla: PropTypes.any,
};
