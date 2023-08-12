import { Col, Container, Row } from 'reactstrap';

export default function Footer() {
  return (
    <section id="footer">
      <Container className="container">
        <Row className="row">
          <Col md={3} className="col-md-3 fw-bold">
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </Col>
          <Col md={3} className="col-md-3 justify-content-center">
            <p>Our services</p>
            <p>Why Us</p>
            <p>Testimonial</p>
            <p>FAQ</p>
          </Col>
          <Col md={3} className="col-md-3">
            <p className="fw-bold">Connect with us</p>
            <ul className="list-unstyled d-flex">
              <li>
                <a href="src/components/footer/Footer">
                  <img src="/img/icon_facebook.svg" alt="facebook-icon" />
                </a>
              </li>
              <li>
                <a href="src/components/footer/Footer">
                  <img src="/img/icon_twitch.svg" alt="twitch-icon" />
                </a>
              </li>
              <li>
                <a href="src/components/footer/Footer">
                  <img src="/img/icon_instagram.svg" alt="instagram-icon" />
                </a>
              </li>
              <li>
                <a href="src/components/footer/Footer">
                  <img src="/img/icon_mail.svg" alt="mail-icon" />
                </a>
              </li>
              <li>
                <a href="src/components/footer/Footer">
                  <img src="/img/icon_twitch.svg" alt="twitch-icon" />
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3} className="col-md-3">
            <p className="fw-bold">Copyright Binar 2022</p>
            <a href="src/components/footer/Footer">
              <img src="/img/footer-logo.svg" className="img-fluid" alt="BCR logo" srcSet="" />
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
