import { Button, Container, Modal } from 'react-bootstrap';
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ReactWhatsapp from 'react-whatsapp';
import { formatDateLong, getCurrentDate } from '../../utils/FormatDate';

export const ModalBooking = ({ show, handleClose, name }) => {
  const [selectedFrom, setSelectedFrom] = useState(getCurrentDate());
  const [selectedTo, setSelectedTo] = useState(getCurrentDate());
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Container>
        <Modal.Header closeButton>
          <Modal.Title>Tanggal Menginap</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex gap-4">
            <div>
              <p>Check-In</p>
              <Datepicker
                selected={selectedFrom}
                onChange={(date) => setSelectedFrom(date)}
                minDate={getCurrentDate()}
                dateFormat="dd-MM-YYYY"
              />
            </div>
            <div>
              <p>Check-Out</p>
              <Datepicker
                selected={selectedTo}
                onChange={(date) => setSelectedTo(date)}
                minDate={getCurrentDate()}
                dateFormat="dd-MM-YYYY"
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <ReactWhatsapp
            number="+6281237339956"
            message={`Saya tertarik untuk memesan villa di ${name} dari tanggal ${formatDateLong(
              selectedFrom
            )} sampai ${formatDateLong(selectedTo)}, Apakah masih tersedia?`}
            className="btn btn-primary"
          >
            <span onClick={handleClose}>Booking</span>
          </ReactWhatsapp>
        </Modal.Footer>
      </Container>
    </Modal>
  );
};

ModalBooking.propTypes = {
  show: PropTypes.boolean,
  handleClose: PropTypes.any,
  name: PropTypes.string,
};
