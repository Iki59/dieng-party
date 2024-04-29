import { Col, Container, FormControl, Image, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleRight,
  faFaceSmile,
} from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import peopleImg3 from '../../assets/peopletesti3.jpeg';

const MobileTestimonials = () => {
  const [inputValue, setInputValue] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleEmojiClick = (e) => {
    const newInputValue = `${inputValue}${e.emoji}`;
    setInputValue(newInputValue);
    console.log('Selected emoji:', e);
  };
  return (
    <>
      <Container className="px-lg-4 py-lg-3 px-md-3 py-md-1 px-4 py-3">
        <div>
          <h5>Add a Review</h5>
          <FormControl
            type="text"
            placeholder="Share your thoughts"
            className="input-testi"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <FontAwesomeIcon
            className="emoji-testi"
            icon={faFaceSmile}
            style={{ color: '#a0aabb', fontSize: '18px', cursor: 'pointer' }}
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          />
          <FontAwesomeIcon
            className="btn-testi"
            icon={faCircleRight}
            style={{ color: '#1094d5', fontSize: '18px' }}
          />
          {showEmojiPicker && <EmojiPicker onEmojiClick={handleEmojiClick} />}
        </div>
        <div className="mt-3">
          <Row>
            <Col xs={2}>
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
            </Col>
            <Col xs={10}>
              <div
                className="mb-0"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <p>Robert Downey Jr</p>
                <p>Bintang</p>
              </div>
              <div className="mt-0">
                <p>
                  I bought it 3 weeks ago and now come back just to say
                  "Awesome". I really enjoy it
                </p>
                <p className="text-secondary">about 1 hour ago</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default MobileTestimonials;
