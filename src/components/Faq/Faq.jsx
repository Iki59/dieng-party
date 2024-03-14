import React from "react";
import { Container, Form } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

export const Faq = () => {
  const style = {
    Btn: {
      border: "none",
      padding: "3px 15px",
      backgroundColor: "white",
      color: "black",
      cursor: "pointer",
      transition: "salmon 0.3s ease",
    },
    BtnHover: {
      backgroundColor: "salmon",
      color: "white",
    },
    Accordion: {
      borderBottom: "1px solid #E6E8EC",
      borderTop: "none",
      borderLeft: "none",
      borderRight: "none",
    },
  };

  return (
    <>
      <h2 className="text-center">Frequently Asked Question</h2>
      <div className="text-center m-5 d-md-none">
        <Form.Select aria-label="Default select example fs-9">
          <option value="1">General</option>
          <option value="2">Support</option>
          <option value="3">Hosting</option>
          <option value="3">Product</option>
        </Form.Select>
      </div>
      <div className="text-center m-5 d-none d-xs-block">
        <button className="mx-2" style={style.Btn}>
          General
        </button>
        <button className="mx-2" style={style.Btn}>
          Support
        </button>
        <button className="mx-2" style={style.Btn}>
          Hosting
        </button>
        <button className="mx-2" style={style.Btn}>
          Product
        </button>
      </div>
      <Container className="px-lg-4 px-md-3 px-4">
        <div>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" style={style.Accordion}>
              <Accordion.Header>Apa saja tempat wisata yang populer di Dieng?</Accordion.Header>
              <Accordion.Body>
                Dataran Tinggi Dieng: Pemandangan alam yang indah dengan hamparan bunga daisy dan telaga yang menawan. Gunung Prau: Pendakian gunung dengan pemandangan sunrise yang menakjubkan. Telaga Warna: Telaga dengan air yang
                berwarna-warni karena kandungan belerang. Kawah Sikidang: Kawah aktif dengan asap belerang yang mengepul. Candi Arjuna: Kompleks candi Hindu peninggalan Kerajaan Mataram Kuno. Telaga Cebong: Telaga kecil dengan banyak
                kecebong yang lucu. Batu Pandang Ratapan Angin: Spot foto dengan pemandangan alam yang indah. Gardu Pandang Tieng: Tempat terbaik untuk melihat sunrise dan sunset. Dieng Culture Festival: Festival budaya tahunan yang
                menampilkan berbagai pertunjukan seni dan budaya.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" style={style.Accordion}>
              <Accordion.Header>Kapan waktu terbaik untuk mengunjungi Dieng?</Accordion.Header>
              <Accordion.Body>Musim kemarau (April-Oktober): Cuaca cerah dan tidak hujan, cocok untuk pendakian dan wisata alam. Musim penghujan (November-Maret): Bunga daisy bermekaran, pemandangan lebih hijau dan asri.</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" style={style.Accordion}>
              <Accordion.Header>Bagaimana cara menuju Dieng?</Accordion.Header>
              <Accordion.Body>
                Dari Jakarta: Jika naik bus, langsung turun di terminal Mendolo Wonosobo, kemudian naik bus atau angkutan ke Dieng. Dari Yogyakarta: Naik bus atau mobil ke Wonosobo, kemudian naik bus atau angkutan ke Dieng.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" style={style.Accordion}>
              <Accordion.Header>Apa saja pilihan homestay, vila, dan cabin di Dieng?</Accordion.Header>
              <Accordion.Body>
                Homestay: Pilihan yang ekonomis dengan suasana yang ramah dan dekat dengan penduduk lokal. Vila: Pilihan yang lebih privat dan nyaman dengan fasilitas yang lengkap. Cabin: Pilihan yang unik dan romantis dengan suasana yang
                tenang dan dekat dengan alam.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" style={style.Accordion}>
              <Accordion.Header>Bagaimana cara memesan homestay, vila, dan cabin di Dieng?</Accordion.Header>
              <Accordion.Body>
                Pesan online: Melalui situs web atau aplikasi pemesanan hotel seperti Booking.com, Agoda, atau Traveloka. Pesan langsung: melewati website terkait dan atau Menghubungi pemilik homestay, vila, atau cabin melalui telepon atau
                email.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5" style={style.Accordion}>
              <Accordion.Header>Berapa harga homestay, vila, dan cabin di Dieng?</Accordion.Header>
              <Accordion.Body>Homestay: Rp 100.000 - Rp 300.000 per malam. Vila: Rp 300.000 - Rp 1.000.000 per malam. Cabin: Rp 500.000 - Rp 2.000.000 per malam.</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Container>
    </>
  );
};
