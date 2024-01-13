import { Col, Container, Image, Row, Tab, Tabs } from 'react-bootstrap';
import TestiImg from '../../assets/testi.jpeg';
import peopleImg from '../../assets/peopletesti.jpeg';
import peopleImg2 from '../../assets/peopletesti2.jpeg';
import peopleImg3 from '../../assets/peopletesti3.jpeg';
import quote from '../../assets/Filled.svg';
import testiImg from '../../assets/Landing.png';
import testiImg2 from '../../assets/testiImg.jpeg';
import { useState } from 'react';

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
  return (
    <>
      <Container className="px-lg-4 px-md-3 px-4">
        <Row className="g-5">
          <Col
            xs={12}
            md={6}
            className="d-flex align-items-center justify-content-left"
          >
            {selectedContent && (
              <div>
                <p>{selectedContent.content}</p>
                <div className="d-flex" style={{ marginLeft: '35px' }}>
                  <Image
                    src={quote}
                    alt="quote"
                    className="me-2"
                    style={{ width: '24px', height: '24px' }}
                  />
                  <span
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
      <Container className="mt-3 mb-5">
        <Tabs
          defaultActiveKey={1}
          id="justify-tab-example"
          className="mb-3"
          justify
          onSelect={handleTabClick}
        >
          {dataTesti.map((item) => (
            <Tab
              key={item.key}
              eventKey={item.key}
              title={item.name}
              style={{
                paddingRight: 0,
              }}
              // onClick={() => handleTabClick(item.key)}
            >
              {/* {item.content} */}
            </Tab>
          ))}
        </Tabs>
      </Container>
    </>
  );
};

export default UserTestimonials;
