import { Col, Container, Row, Button } from 'reactstrap';
import ListBank from 'src/module/payment/elements/ListBank';

export default function PaymentBodyContent(props) {
  const { listBank, setListBank, dataOrder, setBtn } = props;

  const formatToIDR = idr => {
    const parsed = idr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    return `${'Rp '}${parsed}`;
  };

  const mappingCategory = value => {
    switch (value) {
      case 'small':
        return '2 - 4 orang';
      case 'medium':
        return '4 - 6 orang';
      case 'large':
        return '6 - 8 orang';
      default:
        break;
    }
  };
  return (
    <Container className="detail-order-body">
      <Row className="d-flex justify-content-center gap-5">
        <Col md={6} className="list-bank-col" style={{}}>
          <div className="payment-title">
            <p className="text-capitalize fw-bold mb-1 p-0">pilih bank transfer</p>
            <p className="m-0 p-0">
              Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking
            </p>
          </div>
          <div className="payment-option">
            <ListBank
              bank="BCA"
              paymentMethod="BCA Transfer"
              listBank={listBank}
              setListBank={setListBank}
            />
            <hr className="mt-0" />
            <ListBank
              bank="BNI"
              paymentMethod="BNI Transfer"
              listBank={listBank}
              setListBank={setListBank}
            />
            <hr className="mt-0" />
            <ListBank
              bank="Mandiri"
              paymentMethod="Mandiri Transfer"
              listBank={listBank}
              setListBank={setListBank}
            />
            <hr className="mt-0" />
          </div>
        </Col>
        <Col md={4} className="detail-invoice">
          <div className="detail-invoice-car-category">
            <h6 className="fw-bold">{dataOrder?.Car?.name}</h6>
            <div className="d-flex gap-2">
              <img src="/img/fi_users.svg" alt="" />
              <p className="text-muted">
                {mappingCategory(dataOrder?.Car?.category.toLowerCase())}
              </p>
            </div>
          </div>
          <div
            className="d-flex justify-content-between"
            style={{ marginTop: '24px', marginLeft: '10px' }}
          >
            <p style={{ fontSize: '14px' }}>Total</p>
            <p className="fw-bold" style={{ fontSize: '14px' }}>
              {formatToIDR(Number(dataOrder?.total_price))}
            </p>
          </div>
          <div style={{ marginLeft: '10px' }}>
            <p className="fw-bold">Harga</p>
            <ul className="d-flex justify-content-between" style={{ paddingLeft: '1.3rem' }}>
              <li style={{ fontSize: '14px' }}>
                Sewa Mobil {formatToIDR(Number(dataOrder?.Car?.price))} x{' '}
                {Number(dataOrder?.finish_rent_at.slice(8, 10)) -
                  Number(dataOrder?.start_rent_at.slice(8, 10)) +
                  1 +
                  ' hari'}
              </li>
              <p style={{ fontSize: '14px' }}>{formatToIDR(Number(dataOrder?.total_price))}</p>
            </ul>
          </div>
          <div style={{ marginLeft: '10px' }}>
            <p className="fw-bold">Biaya Lainnya</p>
            <ul
              className="d-flex justify-content-between mb-0 pb-0"
              style={{ paddingLeft: '1.3rem' }}
            >
              <li className="" style={{ fontSize: '14px' }}>
                Pajak
              </li>
              <p className="text-success mb-0 pb-2" style={{ fontSize: '14px' }}>
                Termasuk
              </p>
            </ul>
            <ul className="d-flex justify-content-between" style={{ paddingLeft: '1.3rem' }}>
              <li style={{ fontSize: '14px' }}>Biaya makan sopir</li>
              <p className="text-success" style={{ fontSize: '14px' }}>
                Termasuk
              </p>
            </ul>
          </div>
          <div style={{ marginLeft: '10px' }}>
            <p className="fw-bold">Belum Termasuk</p>
            <ul className=" mb-0" style={{ paddingLeft: '1.3rem' }}>
              <li className="mb-2" style={{ fontSize: '14px' }}>
                Bensin
              </li>
              <li style={{ fontSize: '14px' }}>Tol dan parkir</li>
            </ul>
          </div>
          <hr className="ms-auto me-auto mt-4" style={{ width: '95%' }} />
          <div
            className="d-flex justify-content-between"
            style={{ marginTop: '24px', marginLeft: '10px' }}
          >
            <p className="fw-bold" style={{ fontSize: '14px' }}>
              Total
            </p>
            <p className="fw-bold" style={{ fontSize: '14px' }}>
              {formatToIDR(Number(dataOrder?.total_price))}
            </p>
          </div>
          <Button
            className="btn-success mb-4 ms-auto me-auto w-100"
            disabled={!(listBank.bca || listBank.bni || listBank.mandiri)}
            onClick={() => setBtn(true)}
          >
            Bayar
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
