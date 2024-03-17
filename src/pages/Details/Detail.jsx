import React from 'react';
import { DetailVilla } from '../../components/Detail/DetailVilla';
import { IniNavbar } from '../../components/Navbar/iniNavbar';
import dataVilla from '../../../data-villa.json';
import { useParams } from 'react-router-dom';

export const Detail = () => {
  const { id } = useParams();
  const villa = dataVilla.find((item) => item.id == id);
  console.log('ini villa 1', villa);
  return (
    <>
      <div style={{ marginTop: '8rem' }}>
        <IniNavbar />
        <DetailVilla data={villa} />
      </div>
    </>
  );
};
