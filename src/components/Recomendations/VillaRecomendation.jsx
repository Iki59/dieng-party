import { Card, Col, Container, Row } from 'react-bootstrap';
import VillaEx from '../../assets/villaex.jpg';
import Villa2 from '../../assets/villa2.jpg';
import LeftArrow from '../../assets/arrowLeft.svg';
import RightArrow from '../../assets/arrowRight.svg';
import homeIcon from '../../assets/home.svg';
import { useState } from 'react';

const VillaRecomendation = () => {
  const cards = [
    { image: VillaEx, title: 'Villa Cemara', price: 'Rp. 300.000,-/Night' },
    { image: Villa2, title: 'Villa Cemara', price: 'Rp. 300.000,-/Night' },
    { image: VillaEx, title: 'Villa Cemara', price: 'Rp. 300.000,-/Night' },
    { image: Villa2, title: 'Villa Cemara', price: 'Rp. 300.000,-/Night' },
    { image: VillaEx, title: 'Villa Cemara', price: 'Rp. 300.000,-/Night' },
    { image: Villa2, title: 'Villa Cemara', price: 'Rp. 300.000,-/Night' },
    { image: VillaEx, title: 'Villa Cemara', price: 'Rp. 300.000,-/Night' },
    { image: Villa2, title: 'Villa Cemara', price: 'Rp. 300.000,-/Night' },
    { image: VillaEx, title: 'Villa Cemara', price: 'Rp. 300.000,-/Night' },
    { image: Villa2, title: 'Villa Cemara', price: 'Rp. 300.000,-/Night' },
  ];

  const cardsPerPage = 4;
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    const nextIndex = startIndex + cardsPerPage;
    console.log(nextIndex);
    setStartIndex(Math.min(nextIndex, cards.length - cardsPerPage));
  };
  const handlePrev = () => {
    const prevIndex = startIndex - cardsPerPage;
    console.log(prevIndex);
    setStartIndex(Math.max(prevIndex, 0));
  };
  const visibleCards = cards.slice(startIndex, startIndex + cardsPerPage);

  return (
    <>
      <Container>
        <Row>
          <Col md={11}>
            <h3>Rekomendasi Villa Terbaik</h3>
            <p className="text-muted">Yang terbaik selalu bisa bikin kangen</p>
          </Col>
          <Col md={1}>
            <div>
              <img
                onClick={handlePrev}
                disabled={startIndex === 0}
                className="me-2"
                src={LeftArrow}
              />
              <img
                onClick={handleNext}
                disabled={startIndex + cardsPerPage >= cards.length}
                src={RightArrow}
              />
            </div>
          </Col>
        </Row>
        <Row>
          {visibleCards.map((card, index) => (
            <Col key={index} md={3}>
              <Card style={{ width: '16rem', border: 'none' }}>
                <Card.Img
                  style={{ height: '14rem', borderRadius: '10%' }}
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
                  <Card.Text>
                    <div className="d-flex">
                      <img className="mb-0" src={homeIcon} />
                      <p className="text-muted mb-0 ms-2">{card.price}</p>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default VillaRecomendation;
