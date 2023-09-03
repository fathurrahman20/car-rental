import { pdfjs } from 'react-pdf';
import Navbar from 'src/components/navbar';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import Footer from 'src/components/footer';
import { Button } from 'reactstrap';
import { Worker, Viewer } from '@react-pdf-viewer/core';

import '@react-pdf-viewer/core/lib/styles/index.css';
import { useNavigate } from 'react-router-dom';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Etiket() {
  const navigate = useNavigate();
  const downloadPDF = () => {
    const pdfURL = '/pdf/ticket.pdf';
    const link = document.createElement('a');
    link.href = pdfURL;
    link.download = 'ticket.pdf';
    link.click();
  };

  return (
    <>
      <Navbar />
      <div className="vertical-space"></div>
      <div className="center-container">
        <div className="container-wrapper">
          <Container fluid className="overflow-hidden h-auto">
            <div className="breadcrumb-back-container">
              <img
                src="/img/fi_arrow-left.png"
                alt="Back"
                className="back-icon previous-payment"
                onClick={() => navigate(-1)}
              />
              <div className="container">
                <h6 className="title">Tiket</h6>
                <p>Order ID: xxxxxxxx</p>
              </div>
              <div className="breadcrumb-container">
                <div>
                  <img
                    src="/img/checklist.png"
                    alt="Checklist"
                    className="breadcrumb-icon"
                    style={{ width: '14px', height: '14px' }}
                  />
                  Pilih Metode
                  <img
                    src="/img/Garis.png"
                    alt="Garis"
                    className="breadcrumb-icon"
                    style={{ width: '28px', height: 'px', margin: '10px 0' }}
                  />
                </div>
                <div>
                  <img
                    src="/img/checklist.png"
                    alt="Checklist"
                    className="breadcrumb-icon"
                    style={{ width: '14px', height: '14px', margin: '10px 0' }}
                  />
                  Bayar
                </div>
                <img
                  src="/img/Garis.png"
                  alt="Garis"
                  className="breadcrumb-icon"
                  style={{ width: '28px', height: '2px' }}
                />
                <img
                  src="/img/3.png"
                  alt="3"
                  className="breadcrumb-icon"
                  style={{ width: '14px', height: '14px' }}
                />
                Tiket
              </div>
            </div>
            <Row className="row">
              <Col md={12} className="col-md-12 align-self-center center-text">
                <img src="/img/success.png" alt="success"></img>
                <h5 className="title-etiket center-text">Pembayaran Berhasil!</h5>
                <h6 className="sub-title-etiket center-text">
                  Tunjukan invoice ini ke petugas BCR di titik temu.
                </h6>
              </Col>

              <Col md={12} className="col-md-12 align-self-center">
                <Card style={{ marginTop: '20px', marginBottom: '20px' }}>
                  <CardBody>
                    <div className="pdf-frame">
                      <h6>Invoice</h6>
                      <p>*no. invoice</p>

                      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js" />
                      <div
                        style={{
                          border: '1px solid rgba(0, 0, 0, 0.3)',
                          height: '200px',
                          width: '557px',
                          margin: 'auto',
                        }}
                      >
                        <Viewer fileUrl="/pdf/ticket.pdf" />
                      </div>

                      <Button
                        className="download-button"
                        color="primary"
                        outline
                        onClick={downloadPDF}
                      >
                        Unduh
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className="vertical-space"></div>
      <Footer />
    </>
  );
}
