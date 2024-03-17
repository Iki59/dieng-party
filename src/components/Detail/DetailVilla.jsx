import { Container } from 'react-bootstrap';
import { DetailVillaDown } from './DetailVillaDown';
import { DetailVillaUp } from './DetailVillaUp';
import VillaRecomendation from '../Recomendations/VillaRecomendation';
import UserTestimonials from '../Testimonials/UserTestimonials';
import { Faq } from '../Faq/Faq';
import { Contact } from '../ContactUs/Contact';
import { Footer } from '../Footer/Footer';
import { MobileTestimonials } from '../Testimonials/MobileTestimonials';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types'

export const DetailVilla = ({data}) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  console.log('ini villa 2', data)

  return (
    <>
      <Container>
        <DetailVillaUp dataVilla={data} />
        <DetailVillaDown dataVilla={data} />
        {isMobile && <MobileTestimonials />}
        <VillaRecomendation />
        <UserTestimonials />
        <Faq />
        <Contact />
        <Footer />
      </Container>
    </>
  );
};

DetailVilla.propTypes = {
  data: PropTypes.any,
};
