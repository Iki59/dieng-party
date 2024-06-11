import React from 'react';
import ImageGallery from 'react-image-gallery';
import Arrow from '../../assets/icon/arrow.png';
import { useParams } from 'react-router-dom';
import dataVilla from '../../../data-villa.json';
import 'react-image-gallery/styles/css/image-gallery.css';
import { useNavigate } from 'react-router-dom';

export const Gallery = () => {
  const { id } = useParams();
  const villa = dataVilla.find((item) => item.id == id);
  const dataImage = villa.gallery;

  const navigate = useNavigate();

  return (
    <>
      <div>
        <img
          onClick={() => {
            navigate(`/detail/${villa.id}`);
          }}
          src={Arrow}
          alt="arrow"
          style={{
            width: '3rem',
            marginLeft: '1rem',
            cursor: 'pointer',
          }}
        />
        <ImageGallery items={dataImage} showPlayButton={false} />;
      </div>
    </>
  );
};
