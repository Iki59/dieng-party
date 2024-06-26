import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import Star from '../../assets/ratingStar.png';
import { useNavigate } from 'react-router-dom';
import data from '../../../data-villa.json';
const VillaCard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-vh-100" id="homestay">
      <Container className="px-lg-4 py-lg-5 px-md-3 py-md-3 px-4 py-5">
        <Row className="mb-3">
          <Col md={9} lg={10}>
            <h1 className="fs-1 fw-bold">Villa</h1>
          </Col>
          <Col md={3} lg={2} className="d-none d-sm-block">
            <Button
              onClick={() => navigate('/villa-list')}
              className="bg-white text-black fw-bold border-secondary rounded-5 btn-hover"
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
          {/* <div className="d-flex">
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
          </div> */}
        </Row>
        <Row className="g-3 g-md-3">
          {data.slice(0, 9).map((item, index) => (
            <Col md={4} key={index}>
              <Card
                className="w-100 card-villa"
                onClick={() => {
                  navigate(`/detail/${item.id}`);
                }}
                style={{
                  border: '1px solid #E6E8EC',
                  borderRadius: '22px',
                  overflow: 'hidden',
                }}
              >
                <Card.Img
                  className="img-fluid w-100"
                  style={{
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
                      <Col xs={9} md={8} lg={9}>
                        <h4 style={{ fontSize: '17px' }}>{item.title}</h4>
                      </Col>
                      <Col xs={3} md={4} lg={3}>
                        {/* <p className="m-1 d-flex justify-content-center text-success fw-bold" style={{ fontSize: "12px" }}>
                          {item.price}
                        </p> */}
                      </Col>
                    </Row>
                    <div className="d-flex mt-0">
                      <div className="d-flex me-2">
                        <img
                          className="mb-3 me-1"
                          style={{ width: '15px' }}
                          src={item.facilities[0].image}
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
                          src={item.facilities[1].image}
                          alt="Breakfast"
                        />
                        <p
                          className="text-secondary"
                          style={{ fontSize: '13px' }}
                        >
                          {item.facilities[1].name}
                        </p>
                      </div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div
                      className="d-flex justify-content-between mt-0 mb-0"
                      style={{ fontSize: '12px' }}
                    >
                      <p className="fw-bold">{item.price}</p>
                      <div className="d-flex">
                        <img
                          src={Star}
                          alt="star"
                          style={{
                            width: '1rem',
                            height: '1rem',
                            marginRight: '1.5px',
                          }}
                        />
                        <p className="ms-auto fw-bold">{item.ratings}</p>
                      </div>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="d-flex justify-content-center mb-5 d-block d-sm-none">
          <Button
            className="bg-white text-black fw-bold border-secondary rounded-5 mt-4"
            onClick={() => navigate('/villa-list')}
            style={{
              padding: '7px 20px',
              fontSize: '14px',
              border: '1px solid',
            }}
          >
            See more +
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default VillaCard;
