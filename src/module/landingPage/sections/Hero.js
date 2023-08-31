import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

export default function Hero() {
  return (
    <section id="hero" className="">
      <Container fluid className="container-fluid overflow-hidden h-auto">
        <Row className="row">
          <Col md={6} className="col-md-6 align-self-center">
            <h3 className="hero-title">Sewa & Rental Mobil Terbaik di kawasan (Bekasi)</h3>
            <p className="hero-text">
              Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas <br />
              terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
              <br />
              untuk sewa mobil selama 24 jam
            </p>
            <Link to="/cart" className="text-capitalize hero-btn">
              mulai sewa mobil
            </Link>
          </Col>
          <Col md={6} className="col-md-6 m-0 p-0">
            <img src="/img/car-banner.png" alt="Car Banner" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
