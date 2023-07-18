import {Row, Container, Col, List} from "reactstrap";

export default function Services() {
    return (
        <section id="services" className="hidden">
            <Container className="container">
                <Row className="row">
                    <Col md={6} className="col-md-6 services-image align-self-center">
                        <img src="/img/img_service.png" alt="service" className="w-100"/>
                    </Col>
                    <Col md={6} className="col-md-6 ps-md-5 services-detail">
                        <h4 className="services-title">
                            Best Car Rental for any kind of trip in (Bekasi)!
                        </h4>
                        <p className="services-text">
                            Sewa Mobil di Bekasi bersama Binar Car Rental jaminan harga lebih
                            murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
                            pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
                            meeting, dll.
                        </p>
                        <List className="p-0">
                            <ServicesDetail title="Sewa Mobil Dengan Supir di Bali 12 Jam"/>
                            <ServicesDetail title="Sewa Mobil Lepas Kunci di Bali 12 Jam"/>
                            <ServicesDetail title="Sewa Mobil Jangka Panjang Bulanan"/>
                            <ServicesDetail title="Gratis Antar - Jemput Mobil di Bandara"/>
                            <ServicesDetail title="Layanan Airport Transfer / Drop In Out"/>
                        </List>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

function ServicesDetail({title}) {
    return (
        <li className="list-unstyled">
            <img src="/img/ic-centang.svg" alt="clear-icon"/>
            <p className="services-benefit d-inline-block ms-1">
                {title}
            </p>
        </li>
    )
}