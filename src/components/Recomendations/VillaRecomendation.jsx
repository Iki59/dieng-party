import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";
// import VillaEx from '../../assets/villaex.jpg';
// import Villa2 from '../../assets/villa2.jpg';
import LeftArrow from "../../assets/arrowLeft.svg";
import RightArrow from "../../assets/arrowRight.svg";
import homeIcon from "../../assets/home.svg";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import dataVilla from "../../../data-villa.json";

export const VillaRecomendation = () => {
  const navigate = useNavigate();

  const cards = dataVilla.filter((villa) => {
    return villa.recomendation === true;
  });

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 991px)",
  });
  const cardsPerPage = isMobile ? 1 : isTablet ? 3 : 4;
  const [startIndex, setStartIndex] = useState(0);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(startIndex + cardsPerPage >= cards.length);

  const handleNext = () => {
    const nextIndex = (startIndex + 1) % cards.length;
    setStartIndex(nextIndex);

    const remainingCards = Math.floor(cards.length / cardsPerPage);
    const limit = isMobile ? nextIndex + 1 : nextIndex;

    if (remainingCards <= limit) {
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

  return (
    <>
      <div id="villa">
        <Container className="px-lg-4 py-lg-5 px-md-3 py-md-3 px-4 py-5">
          <Row>
            <Col xs={12} md={10} lg={10}>
              <h1>Rekomendasi Terbaik</h1>
              <p className="text-muted">Yang terbaik selalu bisa bikin kangen</p>
            </Col>
            <Col xs={3} md={2} lg={2} className="d-flex justify-content-end">
              <div className="d-none d-sm-block d-flex">
                <Button className="me-2 button" onClick={handlePrev} disabled={isPrevDisabled}>
                  <img src={LeftArrow} alt="Left Arrow" />
                </Button>
                <Button className="button" onClick={handleNext} disabled={isNextDisabled}>
                  <img src={RightArrow} alt="Right Arrow" />
                </Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Carousel activeIndex={startIndex} onSelect={() => {}} interval={null} controls={false}>
                {[...Array(Math.ceil(cards.length / cardsPerPage))].map((item, index) => {
                  const start = index * cardsPerPage;
                  const end = start + cardsPerPage;
                  const cardSubset = cards.slice(start, end);

                  return (
                    <Carousel.Item key={index}>
                      <Row className="g-md-3 g-lg-2">
                        {cardSubset.map((card, cardIndex) => (
                          <Col key={cardIndex} md={4} lg={3}>
                            <Card
                              className="w-100 card-villa"
                              style={{ border: "none" }}
                              onClick={() => {
                                navigate(`/detail/${card.id}`);
                              }}
                            >
                              <Card.Img
                                style={{
                                  height: "14rem",
                                  borderRadius: "10%",
                                  objectFit: "cover",
                                }}
                                variant="top"
                                src={`${card.image}`}
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
                                  <img className="mb-0" src={homeIcon} alt="Home Icon" />
                                  <p className="text-muted mb-0 ms-2">{card.price}</p>
                                </div>
                              </Card.Body>
                            </Card>
                          </Col>
                        ))}
                      </Row>
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </Col>
          </Row>
          <div className="d-md-none ms-3">
            <Button className="me-2 button" onClick={handlePrev} disabled={isPrevDisabled}>
              <img src={LeftArrow} alt="Left Arrow" />
            </Button>
            <Button className="button" onClick={handleNext} disabled={isNextDisabled}>
              <img src={RightArrow} alt="Right Arrow" />
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
};
