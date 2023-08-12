import { Col, Container, Row } from 'reactstrap';

export default function About() {
  return (
    <section id="about" className="hidden">
      <Container className="container">
        <Row className="row">
          <Col md={12} className="col-md-12">
            <h3 className="about-title text-capitalize">why us</h3>
            <p className="about-text">Mengapa harus pilih Binar Car Rental?</p>
          </Col>
        </Row>
        <Row className="row about-card">
          <Card
            img="/img/icon_complete.svg"
            title="mobil lengkap"
            text="Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat"
          />
          <Card
            img="/img/icon_price.svg"
            title="harga murah"
            text="Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain"
          />
          <Card
            img="/img/icon_24hrs.svg"
            title="layanan 24 jam"
            text="Siap melayani kebutuhan Anda 24 jam nonstop. Kami juga tersedia di akhir minggu"
          />
          <Card
            img="/img/icon_professional.svg"
            title="sopir profesional"
            text="Sopir yang profesional, berpengalaman, jujur, ramah, dan selalu tepat waktu"
          />
        </Row>
      </Container>
    </section>
  );
}

function Card({ img, title, text }) {
  return (
    <Col md={3} className="col-md-3 hidden">
      <div className="card border-2">
        <img src={img} className="card-img-top" alt="car-pict" />
        <div className="card-body p-0">
          <h5 className="card-title text-capitalize m-0">{title}</h5>
          <p className="card-text m-0">{text}</p>
        </div>
      </div>
    </Col>
  );
}
