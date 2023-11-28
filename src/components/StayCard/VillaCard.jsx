import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import Villa3 from '../../assets/villa3.jpeg';
import Wifi from '../../assets/wifi.svg';
import Breakfast from '../../assets/breakfast.svg';

const VillaCard = () => {
  const cards = [
    {
      image: Villa3,
      title: ' Villa Kayu Pemandangan Bukit',
      price: 'Rp. 300.000,-/Night',
      text: '1',
    },
    {
      image: Villa3,
      title: ' Villa Kayu Pemandangan Bukit',
      price: 'Rp. 300.000,-/Night',
      text: '2',
    },
    {
      image: Villa3,
      title: ' Villa Kayu Pemandangan Bukit',
      price: 'Rp. 300.000,-/Night',
      text: '3',
    },
    {
      image: Villa3,
      title: ' Villa Kayu Pemandangan Bukit',
      price: 'Rp. 300.000,-/Night',
      text: '4',
    },
    {
      image: Villa3,
      title: ' Villa Kayu Pemandangan Bukit',
      price: 'Rp. 300.000,-/Night',
      text: '5',
    },
    {
      image: Villa3,
      title: ' Villa Kayu Pemandangan Bukit',
      price: 'Rp. 300.000,-/Night',
      text: '6',
    },
    {
      image: Villa3,
      title: ' Villa Kayu Pemandangan Bukit',
      price: 'Rp. 300.000,-/Night',
      text: '7',
    },
    {
      image: Villa3,
      title: ' Villa Kayu Pemandangan Bukit',
      price: 'Rp. 300.000,-/Night',
      text: '8',
    },
    {
      image: Villa3,
      title: ' Villa Kayu Pemandangan Bukit',
      price: 'Rp. 300.000,-/Night',
      text: '9',
    },
  ];
  return (
    <>
      <Container className="px-4">
        <Row>
          <Col md={10}>
            <h2>128 experiences</h2>
          </Col>
          <Col md={2}>
            <Button
              className="bg-white text-black fw-bold border-secondary rounded-5"
              style={{
                marginTop: '0px',
                marginBottom: '2px',
                padding: '7px 20px',
                fontSize: '14px',
              }}
            >
              See more +
            </Button>
          </Col>
        </Row>
        <div className="d-flex">
          <p
            className="me-3 text-success"
            style={{
              border: '2px solid',
              padding: '4px',
              borderRadius: '7px',
              fontSize: '14px',
            }}
          >
            UP TO 25% OFF
          </p>
          <p>May 1-14, 2 guests</p>
        </div>
        <Row>
          {cards.map((item, index) => (
            <Col className="mb-4" md={4} key={index}>
              <Card
                style={{
                  width: '19rem',
                  border: '1px solid #E6E8EC',
                  borderRadius: '22px',
                  overflow: 'hidden',
                }}
              >
                <Card.Img
                  className="img-fluid"
                  style={{
                    width: '100%',
                    height: '14rem',
                    padding: '0px',
                    borderRadius: '22px',
                    objectFit: 'cover',
                  }}
                  variant="top"
                  src={item.image}
                />
                <div
                  style={{
                    background: 'white',
                    padding: '3px 9px',
                    borderRadius: '5px',
                    position: 'absolute',
                    top: '7%',
                    left: '28%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                  }}
                >
                  <p
                    className="text-black mb-0 mt-0 fw-bold"
                    style={{ fontSize: '14px' }}
                  >
                    REKOMENDASI
                  </p>
                </div>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                    <Row>
                      <Col md={9}>
                        <h4 style={{ fontSize: '17px' }}>{item.title}</h4>
                      </Col>
                      <Col md={3}>
                        <div
                          className="border-success"
                          style={{
                            border: '2px solid',
                            borderRadius: '5px',
                            padding: '4px',
                            paddingTop: '1px',
                          }}
                        >
                          <p
                            className="m-0 d-flex justify-content-center text-secondary fw-bold"
                            style={{
                              fontSize: '12px',
                              textDecoration: 'line-through',
                            }}
                          >
                            $356
                          </p>
                          <p
                            className="m-0 d-flex justify-content-center text-success fw-bold"
                            style={{ fontSize: '12px' }}
                          >
                            $267
                          </p>
                        </div>
                      </Col>
                    </Row>
                    <div className="d-flex mt-0">
                      <div className="d-flex me-2">
                        <img
                          className="mb-3 me-1"
                          style={{ width: '15px' }}
                          src={Wifi}
                          alt="Wifi"
                        />
                        <p
                          className="text-secondary"
                          style={{ fontSize: '13px' }}
                        >
                          Free Wifi
                        </p>
                      </div>
                      <div className="d-flex">
                        <img
                          className="mb-3 me-1"
                          style={{ width: '15px' }}
                          src={Breakfast}
                          alt="Breakfast"
                        />
                        <p
                          className="text-secondary"
                          style={{ fontSize: '13px' }}
                        >
                          Breakfast Included
                        </p>
                      </div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div
                      className="d-flex justify-content-between mt-0 mb-0"
                      style={{ fontSize: '12px' }}
                    >
                      <p className="fw-bold">$200 total</p>
                      <p className="ms-auto fw-bold">
                        4.8 <span className="text-secondary">(12 reviews)</span>
                      </p>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="d-flex justify-content-center mb-5">
          <Button
            className="bg-white text-black fw-bold border-secondary rounded-5"
            style={{
              marginTop: '0px',
              marginBottom: '2px',
              padding: '7px 20px',
              fontSize: '14px',
              border: '1px solid',
            }}
          >
            See more
          </Button>
        </div>
      </Container>
    </>
  );
};

export default VillaCard;