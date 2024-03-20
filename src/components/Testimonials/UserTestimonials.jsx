import {
  Carousel,
  Col,
  Container,
  Image,
  Row,
  Tab,
  Tabs,
} from 'react-bootstrap';
import TestiImg from '../../assets/testi.jpeg';
import peopleImg from '../../assets/peopletesti.jpeg';
import peopleImg2 from '../../assets/peopletesti2.jpeg';
import peopleImg3 from '../../assets/peopletesti3.jpeg';
import quote from '../../assets/Filled.svg';
import testiImg from '../../assets/landing.png';
import testiImg2 from '../../assets/testiImg.jpeg';
import LeftArrow from '../../assets/arrowLeft.svg';
import RightArrow from '../../assets/arrowRight.svg';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const UserTestimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [selectedContent, setSelectedContent] = useState({
    key: 1,
    name: (
      <div className="d-flex gap-3">
        <div className="w-25">
          <div
            style={{
              display: 'inline-block',
              position: 'relative',
              width: '40px',
              height: '40px',
              overflow: 'hidden',
              borderRadius: '50%',
            }}
          >
            <Image
              src={peopleImg}
              style={{
                width: 'auto',
                height: '100%',
                // marginLeft: '5px',
              }}
            />
          </div>
        </div>
        <div>
          <p style={{ textAlign: 'left', margin: 0 }}>Andi</p>
          <p style={{ textAlign: 'left' }}>Website Developer</p>
        </div>
      </div>
    ),
    textName: 'Andi',
    content: (
      <div className="regular" style={{ fontFamily: 'Poppins' }}>
        Stacks is the cleanest design system I’ve used. It helps a lot of
        projects done without thinking. Nice Work!
      </div>
    ),
    testimonialImage: testiImg,
  });

  const dataTesti = [
    {
      key: 1,
      name: (
        <div className="d-flex gap-3">
          <div className="w-25">
            <div
              style={{
                display: 'inline-block',
                position: 'relative',
                width: '40px',
                height: '40px',
                overflow: 'hidden',
                borderRadius: '50%',
              }}
            >
              <Image
                src={peopleImg}
                style={{
                  width: 'auto',
                  height: '100%',
                  // marginLeft: '5px',
                }}
              />
            </div>
          </div>
          <div>
            <p style={{ textAlign: 'left', margin: 0, fontSize: '14px' }}>
              Andi
            </p>
            <p style={{ textAlign: 'left', margin: 0, fontSize: '14px' }}>
              Website Developer
            </p>
          </div>
        </div>
      ),
      textName: 'Andi',
      content: (
        <div className="regular" style={{ fontFamily: 'Poppins' }}>
          Stacks is the cleanest design system I’ve used. It helps a lot of
          projects done without thinking. Nice Work!
        </div>
      ),
      testimonialImage: testiImg,
    },
    {
      key: 2,
      name: (
        <div className="d-flex gap-3">
          <div className="w-25">
            <div
              style={{
                display: 'inline-block',
                position: 'relative',
                width: '40px',
                height: '40px',
                overflow: 'hidden',
                borderRadius: '50%',
              }}
            >
              <Image
                src={peopleImg2}
                style={{
                  width: 'auto',
                  height: '100%',
                  // marginLeft: '5px',
                }}
              />
            </div>
          </div>
          <div>
            <p style={{ textAlign: 'left', margin: 0, fontSize: '14px' }}>
              Budi
            </p>
            <p style={{ textAlign: 'left', margin: 0, fontSize: '14px' }}>
              Website Developer
            </p>
          </div>
        </div>
      ),
      textName: 'Budi',
      content: (
        <div className="regular" style={{ fontFamily: 'Poppins' }}>
          Who could look on these monuments without reflecting on the vanity of
          mortals in thus offering up testimonials of their respect for persons
          of whose very names posterity is ignorant?
        </div>
      ),
      testimonialImage: TestiImg,
    },
    {
      key: 3,
      name: (
        <div className="d-flex gap-3">
          <div className="w-25">
            <div
              style={{
                display: 'inline-block',
                position: 'relative',
                width: '40px',
                height: '40px',
                overflow: 'hidden',
                borderRadius: '50%',
              }}
            >
              <Image
                src={peopleImg3}
                style={{
                  width: 'auto',
                  height: '100%',
                  // marginLeft: '5px',
                }}
              />
            </div>
          </div>
          <div>
            <p style={{ textAlign: 'left', margin: 0, fontSize: '14px' }}>
              Junet
            </p>
            <p style={{ textAlign: 'left', margin: 0, fontSize: '14px' }}>
              Website Developer
            </p>
          </div>
        </div>
      ),
      textName: 'Junet',
      content: (
        <div className="regular" style={{ fontFamily: 'Poppins' }}>
          I think even if I did the research mentioned above, it would be a
          total waste of money because if those people don’t believe in the
          testimonials, they won’t believe in the research at all. They would
          say that I made it all up. So why waste money?
        </div>
      ),
      testimonialImage: testiImg2,
    },
    {
      key: 4,
      name: (
        <div className="d-flex gap-3">
          <div className="w-25">
            <div
              style={{
                display: 'inline-block',
                position: 'relative',
                width: '40px',
                height: '40px',
                overflow: 'hidden',
                borderRadius: '50%',
              }}
            >
              <Image
                src={peopleImg3}
                style={{
                  width: 'auto',
                  height: '100%',
                  // marginLeft: '5px',
                }}
              />
            </div>
          </div>
          <div>
            <p style={{ textAlign: 'left', margin: 0, fontSize: '14px' }}>
              Ronald
            </p>
            <p style={{ textAlign: 'left', margin: 0, fontSize: '14px' }}>
              Website Developer
            </p>
          </div>
        </div>
      ),
      textName: 'Ronald',
      content: (
        <div className="regular" style={{ fontFamily: 'Poppins' }}>
          Stacks is the cleanest design system I’ve used. It helps a lot of
          projects done without thinking. Nice Work!
        </div>
      ),
      testimonialImage: testiImg,
    },
    {
      key: 5,
      name: (
        <div className="d-flex gap-3">
          <div className="w-25">
            <div
              style={{
                display: 'inline-block',
                position: 'relative',
                width: '40px',
                height: '40px',
                overflow: 'hidden',
                borderRadius: '50%',
              }}
            >
              <Image
                src={peopleImg}
                style={{
                  width: 'auto',
                  height: '100%',
                  // marginLeft: '5px',
                }}
              />
            </div>
          </div>
          <div>
            <p style={{ textAlign: 'left', margin: 0, fontSize: '14px' }}>
              Thomas
            </p>
            <p style={{ textAlign: 'left', margin: 0, fontSize: '14px' }}>
              Website Developer
            </p>
          </div>
        </div>
      ),
      textName: 'Thomas',
      content: (
        <div className="regular" style={{ fontFamily: 'Poppins' }}>
          Stacks is the cleanest design system I’ve used. It helps a lot of
          projects done without thinking. Nice Work!
        </div>
      ),
      testimonialImage: testiImg,
    },
    {
      key: 6,
      name: (
        <div className="d-flex gap-3">
          <div className="w-25">
            <div
              style={{
                display: 'inline-block',
                position: 'relative',
                width: '40px',
                height: '40px',
                overflow: 'hidden',
                borderRadius: '50%',
              }}
            >
              <Image
                src={peopleImg2}
                style={{
                  width: 'auto',
                  height: '100%',
                  // marginLeft: '5px',
                }}
              />
            </div>
          </div>
          <div>
            <p style={{ textAlign: 'left', margin: 0, fontSize: '14px' }}>
              Keisha
            </p>
            <p style={{ textAlign: 'left', margin: 0, fontSize: '14px' }}>
              Website Developer
            </p>
          </div>
        </div>
      ),
      textName: 'Keisha',
      content: (
        <div className="regular" style={{ fontFamily: 'Poppins' }}>
          Who could look on these monuments without reflecting on the vanity of
          mortals in thus offering up testimonials of their respect for persons
          of whose very names posterity is ignorant?
        </div>
      ),
      testimonialImage: TestiImg,
    },
  ];

  const handleTabClick = (key) => {
    console.log('ini key', key);
    const foundItem = dataTesti[key - 1];
    if (foundItem) {
      console.log('foundItem', foundItem);
      setSelectedContent(foundItem);
      setSelectedTestimonial(key);
    } else {
      console.error(`Item with key ${key} not found in dataTesti`);
    }
  };
  console.log('selected', selectedTestimonial);
  console.log('content', selectedContent);

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 991px)',
  });
  const cardsPerPage = isMobile ? 2 : isTablet ? 3 : 4;
  const [startIndex, setStartIndex] = useState(0);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(
    startIndex + cardsPerPage >= dataTesti.length
  );

  const handleNext = () => {
    const nextIndex = (startIndex + 1) % dataTesti.length;
    console.log('ini nextindex', nextIndex);
    setStartIndex(nextIndex);

    const remainingCards = dataTesti.length - (nextIndex + cardsPerPage);

    if (remainingCards <= 0) {
      setIsNextDisabled(true);
    }

    setIsPrevDisabled(false);
  };

  const handlePrev = () => {
    const prevIndex = (startIndex - 1 + dataTesti.length) % dataTesti.length;
    setStartIndex(prevIndex);

    if (prevIndex === 0) {
      setIsPrevDisabled(true);
    }

    setIsNextDisabled(false);
  };

  return (
    <>
      <div id="testimonial">
        <Container className="px-lg-4 px-md-3 px-4">
          <Row className="g-5">
            <Col
              xs={12}
              md={6}
              className="d-flex align-items-center justify-content-left"
            >
              {selectedContent && (
                <div>
                  <span>{selectedContent.content}</span>
                  <div className="d-flex mt-3" style={{ marginLeft: '35px' }}>
                    <Image
                      src={quote}
                      alt="quote"
                      className="me-2 fade-in"
                      style={{ width: '24px', height: '24px' }}
                    />
                    <span
                      className="fade-in"
                      style={{
                        fontFamily: 'Poppins',
                        fontSize: '14px',
                        fontWeight: '500',
                        lineHeight: '24px',
                      }}
                    >
                      {selectedContent.textName}
                    </span>
                  </div>
                </div>
              )}
            </Col>
            <Col xs={12} md={6} className="d-flex justify-content-center">
              {selectedContent && (
                <Image
                  className="img-fluid w-100"
                  src={selectedContent.testimonialImage}
                  style={{
                    height: '20rem',
                    padding: '0px',
                    borderRadius: '22px',
                    objectFit: 'cover',
                  }}
                />
              )}
            </Col>
          </Row>
        </Container>
        <Container className="mt-4 mb-5">
          <div className="d-flex justify-content-end me-3">
            <img
              onClick={isPrevDisabled ? null : handlePrev}
              disabled={startIndex === 0}
              className="me-2"
              src={LeftArrow}
              alt="Left Arrow"
            />
            <img
              onClick={isNextDisabled ? null : handleNext}
              disabled={startIndex + cardsPerPage >= dataTesti.length}
              src={RightArrow}
              alt="Right Arrow"
            />
          </div>
          <Carousel
            activeIndex={startIndex}
            onSelect={() => {}}
            // interval={null}
            // controls={false}
          >
            {[...Array(Math.ceil(dataTesti.length / cardsPerPage))].map(
              (item, index) => {
                const start = index * cardsPerPage;
                const end = start + cardsPerPage;
                const testiSubset = dataTesti.slice(start, end);

                return (
                  <Carousel.Item key={index}>
                    <Tabs
                      defaultActiveKey={1}
                      id="justify-tab-example"
                      className="mb-3"
                      justify
                      onSelect={handleTabClick}
                    >
                      {testiSubset.map((item) => (
                        <Tab
                          key={item.key}
                          eventKey={item.key}
                          title={item.name}
                          style={{
                            paddingRight: 0,
                          }}
                        >
                          {/* {item.content} */}
                        </Tab>
                      ))}
                    </Tabs>
                  </Carousel.Item>
                );
              }
            )}
          </Carousel>
        </Container>
      </div>
    </>
  );
};

export default UserTestimonials;
