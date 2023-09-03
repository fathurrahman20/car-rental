import { useEffect, useState } from 'react';
import Countdown from 'react-countdown';
import { useDropzone } from 'react-dropzone';
import { useNavigate } from 'react-router-dom';
import { Col, Row } from 'reactstrap';

export default function PaymentDetailRightBody(props) {
  const { confirmPayment, setConfirmPayment } = props;
  const Completionist = () => {
    return <span>Waktu Anda telah habis</span>;
  };
  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return <TimePayment minute={minutes} second={seconds} />;
    }
  };
  return (
    <Row>
      <Col
        md={4}
        style={{
          width: '405px',
          height: 'max-content',
          top: '204px',
          left: '836px',
          borderRadius: '8px',
        }}
        className="list-bank-col d-flex flex-column justify-content-between px-4"
      >
        {confirmPayment ? (
          <>
            <div className="d-flex justify-content-between align-items-center">
              <p className="my-4 fw-bold" style={{ fontSize: '14px' }}>
                Konfirmasi Pembayaran
              </p>
              {confirmPayment && <Countdown date={Date.now() + 600000} renderer={renderer} />}
            </div>
            <p>
              Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu akan segera kami cek
              tunggu kurang lebih 10 menit untuk mendapatkan konfirmasi.
            </p>

            <p className="mt-md-2">Upload Bukti Pembayaran</p>
            <p>
              Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa upload bukti bayarmu
            </p>
            <Previews />
          </>
        ) : (
          <>
            <p className="my-4" style={{ fontSize: '14px' }}>
              Klik konfirmasi pembayaran untuk mempercepat proses pengecekan
            </p>
            <button className="btn btn-success mb-4" onClick={() => setConfirmPayment(true)}>
              Konfirmasi Pembayaran
            </button>
          </>
        )}
      </Col>
    </Row>
  );
}

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16,
  width: '60%',
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  marginBottom: 30,
  marginRight: 'auto',
  marginLeft: 'auto',
  width: '200px',
  height: '100px',
  boxSizing: 'border-box',
  objectFit: 'contain',
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%',
};

function Previews() {
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: acceptedFiles => {
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      );
    },
  });

  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          alt="preview bukti bayar"
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <>
      {files.length === 0 ? (
        <section
          className="container position-relative mb-4"
          style={{
            background: '#D0D0D0',
            width: '296px',
            height: '162px',
            borderWidth: '0px, 0px, 0px, 0px',
            borderStyle: 'solid',
            borderColor: '#D0D0D0',
          }}
        >
          <div {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <img
              className="position-absolute upload-bukti top-50 start-50 translate-middle"
              style={{ width: '10%' }}
              src="/img/fi_upload.svg"
              alt="upload bukti bayar"
            />
          </div>
        </section>
      ) : (
        <section
          className="container position-relative mb-4"
          style={{
            background: '#D0D0D0',
            width: '296px',
            height: '162px',
            borderWidth: '0px, 0px, 0px, 0px',
            borderStyle: 'solid',
            borderColor: '#D0D0D0',
          }}
        >
          <aside
            className="position-absolute top-50 start-50 translate-middle"
            style={thumbsContainer}
          >
            {thumbs}
          </aside>
        </section>
      )}
      <button
        className="btn btn-success mb-4"
        disabled={files.length === 0 ? true : false}
        onClick={() => navigate('/e-ticket')}
      >
        Upload
      </button>
    </>
  );
}

function TimePayment({ minute, second }) {
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
