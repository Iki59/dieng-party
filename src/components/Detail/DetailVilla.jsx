import { Container } from "react-bootstrap";
import { DetailVillaDown } from "./DetailVillaDown";
import { DetailVillaUp } from "./DetailVillaUp";
import { useParams } from "react-router-dom";
import dataVilla from "../../../data-villa.json";

export const DetailVilla = () => {
  const { id } = useParams();
  const villa = dataVilla.find((item) => item.id == id);

  console.log("gambar", villa.image);
  return (
    <>
      <Container>
        <DetailVillaUp dataVilla={villa} />
        <DetailVillaDown dataVilla={villa} />
      </Container>
    </>
  );
};
