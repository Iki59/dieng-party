import { Card, Carousel, Col, Container, Row } from 'react-bootstrap';
// import VillaEx from '../../assets/villaex.jpg';
// import Villa2 from '../../assets/villa2.jpg';
import LeftArrow from '../../assets/arrowLeft.svg';
import RightArrow from '../../assets/arrowRight.svg';
import homeIcon from '../../assets/home.svg';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import dataVilla from '../../../data-villa.json';
import { useNavigate } from 'react-router-dom';

const VillaRecomendation = () => {
  const navigate = useNavigate();

  const cards = dataVilla.filter((item) => item.recomendation === true);
  console.log('ini cards', cards);

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 991px)',
  });
  const cardsPerPage = isMobile ? 1 : isTablet ? 3 : 4;
  const [startIndex, setStartIndex] = useState(0);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(
    startIndex + cardsPerPage >= cards.length
  );

  console.log(isNextDisabled);

  const handleNext = () => {
    const nextIndex = (startIndex + 1) % cards.length;
    console.log('ini nextindex', nextIndex);
    setStartIndex(nextIndex);

    const remainingCards = cards.length - (nextIndex + cardsPerPage);

    if (remainingCards <= 0) {
      setIsNextDisabled(true);
    }

    setIsPrevDisabled(false);
  };

  const handlePrev = () => {
    const prevIndex = (startIndex - 1 + cards.length) % cards.length;
    setStartIndex(prevIndex);

    if (prevIndex === 0) {
      setIsPrevDisabled(true);
    }

    setIsNextDisabled(false);
  };
  console.log('ini start', startIndex);

  return (
    <>
      <div id="villa">
        <Container className="px-lg-4 py-lg-5 px-md-3 py-md-3 px-4 py-5">
          <Row>
            <Col xs={12} md={10} lg={11}>
              <h1>Rekomendasi Villa Terbaik</h1>
              <p className="text-muted">
                Yang terbaik selalu bisa bikin kangen
              </p>
            </Col>
            <Col xs={3} md={2} lg={1}>
              <div className="d-none d-sm-block">
                <img
                  onClick={isPrevDisabled ? null : handlePrev}
                  disabled={startIndex === 0}
                  className="me-2"
                  src={LeftArrow}
                  alt="Left Arrow"
                  style={{ cursor: 'pointer' }}
                />
                <img
                  onClick={isNextDisabled ? null : handleNext}
                  disabled={startIndex + cardsPerPage >= cards.length}
                  src={RightArrow}
                  alt="Right Arrow"
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Carousel
                activeIndex={startIndex}
                onSelect={() => {}}
                interval={null}
                controls={false}
              >
                {[...Array(Math.ceil(cards.length / cardsPerPage))].map(
                  (item, index) => {
                    const start = index * cardsPerPage;
                    const end = start + cardsPerPage;
                    const cardSubset = cards.slice(start, end);

                    return (
                      <Carousel.Item key={index}>
                        <Row className="g-md-3 g-lg-2">
                          {cardSubset.map((card, cardIndex) => (
                            <Col key={cardIndex} md={4} lg={3}>
                              <Card
                                className="w-100"
                                style={{ border: 'none' }}
                                onClick={() => {
                                  navigate(`/detail/${card.id}`);
                                }}
                              >
                                <Card.Img
                                  style={{
                                    height: '14rem',
                                    borderRadius: '10%',
                                  }}
                                  variant="top"
                                  src={`../${card.image}`}
                                />
                                {/* <div
                                style={{
                                  background: 'black',
                                  padding: '3px 14px',
                                  borderRadius: '40px',
                                  position: 'absolute',
                                  top: '8%',
                                  left: '21%',
                                  transform: 'translate(-50%, -50%)',
                                  textAlign: 'center',
                                }}
                              >
                                <p
                                  className="text-white mb-0 mt-0"
                                  style={{ fontSize: '13px' }}
                                >
                                  20% OFF
                                </p>
                              </div> */}
                                <Card.Body>
                                  <Card.Title>{card.title}</Card.Title>
                                  <div className="d-flex">
                                    <img
                                      className="mb-0"
                                      src={homeIcon}
                                      alt="Home Icon"
                                    />
                                    <p className="text-muted mb-0 ms-2">
                                      {card.price}
                                    </p>
                                  </div>
                                </Card.Body>
                              </Card>
                            </Col>
                          ))}
                        </Row>
                      </Carousel.Item>
                    );
                  }
                )}
              </Carousel>
            </Col>
          </Row>
          <div className="d-md-none ms-3">
            <img
              onClick={isPrevDisabled ? null : handlePrev}
              disabled={startIndex === 0}
              className="me-2"
              src={LeftArrow}
              alt="Left Arrow"
              style={{ cursor: 'pointer' }}
            />
            <img
              onClick={isNextDisabled ? null : handleNext}
              disabled={startIndex + cardsPerPage >= cards.length}
              src={RightArrow}
              alt="Right Arrow"
              style={{ cursor: 'pointer' }}
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default VillaRecomendation;
