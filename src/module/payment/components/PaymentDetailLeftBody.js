import Countdown from 'react-countdown';
import { Row, Col } from 'reactstrap';

const formatToIDR = idr => {
  const parsed = idr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  return `${'Rp '}${parsed}`;
};
export default function PaymentDetailLeftBody({ listBank, dataOrder }) {
  const Completionist = () => <span>Waktu Anda telah habis</span>;
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return <DayPayment hour={hours} minute={minutes} second={seconds} />;
    }
  };
  return (
    <Row className="d-flex flex-column justify-content-center gap-4">
      <Col
        md={6}
        style={{
          width: '605px',
          height: '96px',
          top: '204px',
          left: '199px',
          borderRadius: '8px',
        }}
        className="list-bank-col d-flex justify-content-between align-items-center"
      >
        <div>
          <p className="fw-bold">Selesaikan Pembayaran Sebelum</p>
          <p className="text-muted mb-0">Rabu, 19 Mei 2022 jam 13.00 WIB</p>
        </div>
        <Countdown date={Date.now() + 86400000} renderer={renderer} />
      </Col>
      <Col
        style={{
          width: '605px',
          height: '295px',
          top: '324px',
          left: '199px',
          borderRadius: '8px',
        }}
        md={6}
        className="list-bank-col p-4"
      >
        <p className="fw-bold">Lakukan Transfer Ke</p>
        <div className="list-bank-name d-flex gap-3">
          <p
            style={{
              padding: '6px 18px',
              border: '1px solid #D0D0D0',
              borderRadius: '4px',
              fontSize: '12px',
            }}
          >
            {listBank.bca ? 'BCA' : listBank.bni ? 'BNI' : listBank.mandiri ? 'Mandiri' : ''}
          </p>
          <div className="d-flex flex-column">
            <p className="mb-0" style={{ fontSize: '12px' }}>
              {listBank.bca
                ? 'BCA Transfer'
                : listBank.bni
                ? 'BNI Transfer'
                : listBank.mandiri
                ? 'Mandiri Transfer'
                : ''}
            </p>
            <p style={{ fontSize: '12px' }}>a.n Binar Car Rental</p>
          </div>
        </div>
        <div>
          <p className="label-norek mb-0" style={{ fontSize: '12px' }}>
            Nomor Rekening
          </p>
          <div
            className="d-flex justify-content-between px-2 py-2 mt-1 border-1 border border-dark"
            style={{ borderRadius: '2px' }}
          >
            <p className="m-0 p-0" style={{ fontSize: '12px' }}>
              1234567890
            </p>
            <img src="/img/fi_copy.svg" alt="copy" />
          </div>
        </div>

        <div className="mt-4">
          <p className="label-norek mb-0" style={{ fontSize: '12px' }}>
            Total Bayar
          </p>
          <div
            className="d-flex justify-content-between px-2 py-2 mt-1 border-1 border border-dark"
            style={{ borderRadius: '2px' }}
          >
            <p className="m-0 p-0" style={{ fontSize: '12px' }}>
              {formatToIDR(Number(dataOrder?.total_price))}
            </p>
            <img src="/img/fi_copy.svg" alt="copy" />
          </div>
        </div>
      </Col>
      <Col
        className="p-4"
        style={{
          width: '605px',
          top: '626px',
          left: '199px',
          borderRadius: '8px',
          boxShadow: '0px 0px 4px 0px #00000026',
        }}
      >
        <p className="fw-bold">Instruksi Pembayaran</p>
        <div className="d-flex justify-content-between">
          <p
            className="fw-bold px-md-4 pb-3"
            style={{
              fontSize: '14px',
              borderWidth: '1px',
              borderBottomColor: 'green',
              borderTopColor: 'transparent',
              borderRightColor: 'transparent',
              borderLeftColor: 'transparent',
              borderStyle: 'solid',
            }}
          >
            ATM {listBank.bca ? 'BCA' : listBank.bni ? 'BNI' : listBank.mandiri ? 'Mandiri' : ''}
          </p>
          <p
            className="fw-bold px-md-4"
            style={{
              fontSize: '14px',
              borderBottomWidth: '1px',
              borderBottomColor: 'green',
              borderTopColor: 'transparent',
              borderRightColor: 'transparent',
              borderLeftColor: 'transparent',
            }}
          >
            M-
            {listBank.bca ? 'BCA' : listBank.bni ? 'BNI' : listBank.mandiri ? 'Mandiri' : ''}
          </p>
          <p
            className="fw-bold px-md-4"
            style={{
              fontSize: '14px',
              borderBottomWidth: '5px',
              borderBottomColor: 'green',
              borderTopColor: 'transparent',
              borderRightColor: 'transparent',
              borderLeftColor: 'transparent',
            }}
          >
            {listBank.bca ? 'BCA' : listBank.bni ? 'BNI' : listBank.mandiri ? 'Mandiri' : ''} Klik
          </p>
          <p
            className="fw-bold px-md-4"
            style={{
              fontSize: '14px',
              borderBottomWidth: '1px',
              borderBottomColor: 'green',
              borderTopColor: 'transparent',
              borderRightColor: 'transparent',
              borderLeftColor: 'transparent',
            }}
          >
            Internet Banking
          </p>
        </div>
        <div>
          <ul className="text-muted pe-md-3">
            <li className="py-1" style={{ fontSize: '14px' }}>
              Masukkan kartu ATM, lalu PIN
            </li>
            <li className="py-1" style={{ fontSize: '14px' }}>
              Pilih menu &ldquo;Transaksi Lainnya&rdquo;-&ldquo;Ke Rek{' '}
              {listBank.bca ? 'BCA' : listBank.bni ? 'BNI' : listBank.mandiri ? 'Mandiri' : ''}{' '}
              Virtual Account&rdquo;
            </li>
            <li className="py-1" style={{ fontSize: '14px' }}>
              Masukkan nomor{' '}
              {listBank.bca ? 'BCA' : listBank.bni ? 'BNI' : listBank.mandiri ? 'Mandiri' : ''}{' '}
              Virtual Account: 70020+Order ID <br /> Contoh:
              <br />
              No. Peserta: 12345678, maka ditulis 7002012345678
            </li>
            <li className="py-1" style={{ fontSize: '14px' }}>
              Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi
            </li>
            <li className="py-1" style={{ fontSize: '14px' }}>
              Ambil dan simpanlah bukti transaksi tersebut
            </li>
          </ul>
        </div>
      </Col>
    </Row>
  );
}

function DayPayment({ hour, minute, second }) {
  return (
    <div>
      <span
        style={{
          padding: '4px 2px 4px 2px',
          borderRadius: '2px',
          gap: '10px',
          background: '#FA2C5A',
          color: 'white',
        }}
      >
        {hour < 10 ? '0' + hour : hour}
      </span>
      <span className="px-1">:</span>
      <span
        style={{
          padding: '4px 2px 4px 2px',
          borderRadius: '2px',
          gap: '10px',
          background: '#FA2C5A',
          color: 'white',
        }}
      >
        {minute < 10 ? '0' + minute : minute}
      </span>
      <span className="px-1">:</span>
      <span
        style={{
          padding: '4px 2px 4px 2px',
          borderRadius: '2px',
          gap: '10px',
          background: '#FA2C5A',
          color: 'white',
        }}
      >
        {second < 10 ? '0' + second : second}
      </span>
    </div>
  );
}
