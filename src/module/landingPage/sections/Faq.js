import { Container, Row, Col } from "reactstrap";

export default function Faq() {
  return (
    <section id="faq" className="hidden">
      <Container className="container">
        <Row className="row">
          <Col md={5} className="col-md-5">
            <h4 className="text-capitalize fw-bold faq-title">
              Frequently Asked Question
            </h4>
            <p className="fw-bold faq-text text-break">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis,
              dolores.
            </p>
          </Col>
          <Col md={7} className="col-md-7">
            <FaqDetail
              id="collapseOne"
              target="#collapseOne"
              title="Apa saja syarat yang dibutuhkan?"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Corporis, quae possimus! Facere, rem dignissimos eligendi incidunt
              blanditiis dolores ipsum unde molestias ratione reiciendis
              adipisci quo inventore deserunt quod qui ut, quisquam dolorum quam
              laboriosam magni.
            </FaqDetail>
            <FaqDetail
              id="collapseTwo"
              target="#collapseTwo"
              title="Berapa hari minimal sewa mobil lepas kunci?"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
              beatae quos sunt. Eaque ducimus voluptatum tempore aut sunt. Iste
              id eius, deleniti similique a eaque aliquam neque autem
              necessitatibus dolorum eum quisquam repudiandae veniam provident?
            </FaqDetail>
            <FaqDetail
              id="collapseThree"
              target="#collapseThree"
              title="Berapa hari sebelumnya sebaiknya booking sewa mobil?"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              praesentium illo quisquam non? Accusamus molestias dignissimos,
              adipisci reprehenderit doloribus vel iure corporis est! Fugiat
              doloremque odio neque molestias animi. Praesentium enim animi
              assumenda voluptatibus non!
            </FaqDetail>
            <FaqDetail
              id="collapseFour"
              target="#collapseFour"
              title="Apakah Ada biaya antar-jemput?"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              sapiente ipsum delectus, quo ullam cumque hic ratione a fugit ut
              doloribus quod similique cupiditate mollitia quidem illum atque
              explicabo et iusto maxime, repellat nam ex!
            </FaqDetail>
            <FaqDetail
              id="collapseFive"
              target="#collapseFive"
              title="Berapa hari minimal sewa mobil lepas kunci?"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
              beatae quos sunt. Eaque ducimus voluptatum tempore aut sunt. Iste
              id eius, deleniti similique a eaque aliquam neque autem
              necessitatibus dolorum eum quisquam repudiandae veniam provident?
            </FaqDetail>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

function FaqDetail({ target, id, title, children }) {
  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item border-2">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={target}
            aria-expanded="false"
            aria-controls={id}
          >
            {title}
          </button>
        </h2>
        <div
          id={id}
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">{children}</div>
        </div>
      </div>
    </div>
  );
}
