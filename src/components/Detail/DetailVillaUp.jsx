import { useState } from 'react';
import { Carousel, Col, Container, Image, Row } from 'react-bootstrap';
import GoHome from '../../assets/button.png';
import Avatar from '../../assets/avatar.png';
import Star from '../../assets/ratingStar.png';
import Shape from '../../assets/Shape.png';
import Mark from '../../assets/Line.png';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';

export const DetailVillaUp = ({ dataVilla }) => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  // const isTablet = useMediaQuery({
  //   query: '(min-width: 768px) and (max-width: 991px)',
  // });
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
          <img
            src={Star}
            alt="star"
            style={{ width: '18px', marginTop: '-5px' }}
          />
          <p
            style={{
              display: 'inline-block',
              marginLeft: '8px',
              marginRight: '20px',
              color: 'grey',
              fontWeight: 'bold',
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
          <img
            src={Mark}
            alt="mark"
            style={{
              width: '1.8rem',
              height: '1.8rem',
            }}
          />
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
                onClick={() => {
                  navigate(`/gallery/${dataVilla.id}`);
                }}
                src={`../${dataVilla.image}`}
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                onClick={() => {
                  navigate(`/gallery/${dataVilla.id}`);
                }}
                src={`../${dataVilla.image2}`}
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                onClick={() => {
                  navigate(`/gallery/${dataVilla.id}`);
                }}
                src={`../${dataVilla.image3}`}
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                }}
              />
            </Carousel.Item>
          </Carousel>
        ) : (
          <Row className="g-2">
            <Col md={10}>
              <Image
                onClick={() => {
                  navigate(`/gallery/${dataVilla.id}`);
                }}
                src={`../${dataVilla.image}`}
                alt="primary"
                style={{
                  width: '98%',
                  height: isMobile ? '100%' : '64%',
                  borderRadius: '10px',
                  objectFit: 'cover',
                  overflow: 'hidden',
                }}
                className="card-villa"
              />
              {/* <img
                onClick={() => {
                  navigate(`/gallery/${dataVilla.id}`);
                }}
                src={BtnAll}
                alt="button"
                style={{
                  position: "absolute",
                  top: isTablet ? "51%" : "140%",
                  left: isTablet ? "11%" : "10%",
                  cursor: "pointer",
                  width: "170px",
                }}
              /> */}
            </Col>
            <Col md={2}>
              <div>
                <div className="mb-2">
                  <Image
                    onClick={() => {
                      navigate(`/gallery/${dataVilla.id}`);
                    }}
                    src={`../${dataVilla.image2}`}
                    alt="thumb"
                    style={{
                      width: '80%',
                      borderRadius: '10px',
                      objectFit: 'cover',
                      overflow: 'hidden',
                    }}
                    className="card-villa"
                  />
                </div>
                <div className="mb-2">
                  <Image
                    onClick={() => {
                      navigate(`/gallery/${dataVilla.id}`);
                    }}
                    src={`../${dataVilla.image3}`}
                    alt="thumb"
                    style={{
                      width: '80%',
                      borderRadius: '10px',
                      objectFit: 'cover',
                      overflow: 'hidden',
                    }}
                    className="card-villa"
                  />
                </div>
                <div className="mb-2">
                  <Image
                    onClick={() => {
                      navigate(`/gallery/${dataVilla.id}`);
                    }}
                    src={`../${dataVilla.image4}`}
                    alt="thumb"
                    style={{
                      width: '80%',
                      borderRadius: '10px',
                      objectFit: 'cover',
                      overflow: 'hidden',
                    }}
                    className="card-villa"
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
