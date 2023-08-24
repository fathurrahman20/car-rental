import { Container, Row, Col } from 'reactstrap';
import BreadCrumb from 'src/module/payment/elements/BreadCrumb';
import { useMatches, useNavigate } from 'react-router-dom';

export default function BreadcrumbComp({ title, orderId }) {
  const matches = useMatches();
  const navigate = useNavigate();
  const isFirstPage = window.location.pathname === `/cart/payment/${matches[0].params.id}`;
  const isSecondPage = window.location.pathname === `/cart/payment-detail/${matches[0].params.id}`;
  return (
    <Container fluid className="container-breadcrumb">
      <Row className="row-breadcrumb">
        <Col md={12} className="d-flex flex-wrap align-items-center justify-content-between px-3">
          <div>
            <div className="previous-payment d-flex" onClick={() => navigate(-1)}>
              <img className="me-2 btn-back" src="/img/fi_arrow-left.svg" alt="go-back" />
              <button className="d-flex border-0 bg-transparent" style={{ width: '20rem' }}>
                {' '}
                {title}
              </button>
            </div>
            {orderId && (
              <p className="d-block" style={{ marginLeft: '38px' }}>
                {orderId}
              </p>
            )}
          </div>
          <div className="d-flex align-items-center" style={{}}>
            {isFirstPage && (
              <>
                <BreadCrumb no="1" title="Pilih Metode" />
                <img src="/img/payment_line.svg" alt="" className="mx-2 payment-line" />
                <BreadCrumb no="2" title="Bayar" />
                <img src="/img/payment_line.svg" className="mx-2 payment-line" alt="" />
                <BreadCrumb no="3" title="Tiket" />
              </>
            )}
            {isSecondPage && (
              <>
                <BreadCrumb no="1" title="Pilih Metode" />
                <img src="/img/payment_line.svg" alt="" className="mx-2 payment-line" />
                <BreadCrumb no="2" title="Bayar" />
                <img src="/img/payment_line.svg" className="mx-2 payment-line" alt="" />
                <BreadCrumb no="3" title="Tiket" />
              </>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
