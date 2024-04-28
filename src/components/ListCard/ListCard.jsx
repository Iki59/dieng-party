import { useState } from 'react';
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  ListGroup,
  Row,
} from 'react-bootstrap';
import dataVilla from '../../../data-villa.json';
import Wonosobo from '../../assets/Wonosobo.png';
import Star from '../../assets/Star.svg';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ListCard = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(9);

  const showMoreCards = () => {
    setVisible((prevValue) => prevValue + 9);
  };

  const dataVillaLength = dataVilla.length;

  return (
    <>
      <div className="min-vh-100">
        <Container className="mt-3 px-lg-4 px-md-3 px-4">
          <div>
            <Image src={Wonosobo} alt="Wonosobo" className="img-fluid" />
          </div>
          <div className="mt-5">
            <div className="mb-4">
              <h3>Over 300 Stays</h3>
            </div>
            <div>
              <Row className="g-3 g-md-3">
                {dataVilla.slice(0, visible).map((item, index) => (
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
                        objectFit: 'cover',
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
                            <Col xs={9} md={8} lg={9}>
                              <h4 style={{ fontSize: '17px' }}>{item.title}</h4>
                            </Col>
                            <Col xs={3} md={4} lg={3}>
                              {/* <div
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
                              </div> */}
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
                            <p className="ms-auto fw-bold">
                              {item.ratings}{' '}
                              <span className="text-secondary">
                                (12 reviews)
                              </span>
                            </p>
                          </div>
                        </ListGroup.Item>
                      </ListGroup>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
            <div className="d-flex justify-content-center mb-5 mt-3">
              {visible < dataVillaLength && (
                <Button
                  onClick={showMoreCards}
                  className="bg-white text-black fw-bold border-secondary rounded-5 btn-hover"
                  style={{
                    marginTop: '0px',
                    marginBottom: '2px',
                    padding: '7px 20px',
                    fontSize: '14px',
                    border: '1px solid',
                    color: '#23262F',
                  }}
                >
                  <FontAwesomeIcon icon={faStar} className="me-2" />
                  Show more
                </Button>
              )}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ListCard;
