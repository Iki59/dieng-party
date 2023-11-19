import { Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import VillaEx from '../../assets/villaex.jpg';
import Villa2 from '../../assets/villa2.jpg';
import LeftArrow from '../../assets/arrowLeft.svg';
import RightArrow from '../../assets/arrowRight.svg';
import homeIcon from '../../assets/home.svg';
import { useState } from 'react';

const VillaRecomendation = () => {
  const cards = [
    {
      image: VillaEx,
      title: 'Villa Cemara',
      price: 'Rp. 300.000,-/Night',
      text: '1',
    },
    {
      image: Villa2,
      title: 'Villa Cemara',
      price: 'Rp. 300.000,-/Night',
      text: '2',
    },
    {
      image: VillaEx,
      title: 'Villa Cemara',
      price: 'Rp. 300.000,-/Night',
      text: '3',
    },
    {
      image: Villa2,
      title: 'Villa Cemara',
      price: 'Rp. 300.000,-/Night',
      text: '4',
    },
    {
      image: VillaEx,
      title: 'Villa Cemara',
      price: 'Rp. 300.000,-/Night',
      text: '5',
    },
    {
      image: Villa2,
      title: 'Villa Cemara',
      price: 'Rp. 300.000,-/Night',
      text: '6',
    },
    {
      image: VillaEx,
      title: 'Villa Cemara',
      price: 'Rp. 300.000,-/Night',
      text: '7',
    },
    {
      image: Villa2,
      title: 'Villa Cemara',
      price: 'Rp. 300.000,-/Night',
      text: '8',
    },
    {
      image: VillaEx,
      title: 'Villa Cemara',
      price: 'Rp. 300.000,-/Night',
      text: '9',
    },
    {
      image: Villa2,
      title: 'Villa Cemara',
      price: 'Rp. 300.000,-/Night',
      text: '10',
    },
  ];

  const cardsPerPage = 4;
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
    <Container>
      <Row>
        <Col md={11}>
          <h3>Rekomendasi Villa Terbaik</h3>
          <p className="text-muted">Yang terbaik selalu bisa bikin kangen</p>
        </Col>
        <Col md={1}>
          <div>
            <img
              onClick={isPrevDisabled ? null : handlePrev}
              disabled={startIndex === 0}
              className="me-2"
              src={LeftArrow}
              alt="Left Arrow"
            />
            <img
              onClick={isNextDisabled ? null : handleNext}
              disabled={startIndex + cardsPerPage >= cards.length}
              src={RightArrow}
              alt="Right Arrow"
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
                    <Row>
                      {cardSubset.map((card, cardIndex) => (
                        <Col key={cardIndex} md={3}>
                          <Card style={{ width: '16rem', border: 'none' }}>
                            <Card.Img
                              style={{
                                height: '14rem',
                                borderRadius: '10%',
                              }}
                              variant="top"
                              src={card.image}
                            />
                            <div
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
                            </div>
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
                              <p>{card.text}</p>
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
    </Container>
  );
};

export default VillaRecomendation;
