import { Col, Container, Row } from 'reactstrap';

export default function Breadcrumb({ path }) {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <p>
            <span className="fw-bold">
              Cars &gt; <span className={path ? 'fw-bold' : ''}>List Car</span> {path ? `>` : ''}{' '}
            </span>
            {path}
          </p>
        </Col>
      </Row>
    </Container>
  );
}
