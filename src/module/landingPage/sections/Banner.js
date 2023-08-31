import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

export default function Banner() {
  return (
    <section id="banner" className="hidden">
      <Container className="container">
        <Row className="row justify-content-center">
          <Col md={12} className="col-md-12 text-white text-center">
            <h3 className="banner-title">Sewa Mobil di Bekasi Sekarang</h3>
            <p className="banner-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <Link to="/cart" className="banner-btn">
              Mulai Sewa Mobil
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
