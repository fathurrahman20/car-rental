import DateRangeExample from './DateRange';
import { API } from '../../../common/API';
import { useNavigate } from 'react-router-dom';
import { addDays, format } from 'date-fns';
import { useState } from 'react';
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  List,
  Row,
  Button,
} from 'reactstrap';

export default function CardDetail({ detailData }) {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ]);
  const navigate = useNavigate();
  const formatToIDR = idr => {
    const parsed = idr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    return `${'Rp '}${parsed}`;
  };

  const mappingCategory = value => {
    if (value === 'small' || value === 'Small' || value === '2-4 orang') {
      return '2 - 4 orang';
    } else if (value === 'medium' || value === 'Medium' || value === '4-6 orang') {
      return '4 - 6 orang';
    } else if (value === 'large' || value === 'Large' || value === '6-8 orang') {
      return '6 - 8 orang';
    }
  };

  const handleSubmit = () => {
    const userDate = {
      start_rent_at: format(date[0].startDate, 'yyyy-MM-dd'),
      finish_rent_at: format(date[0].startDate, 'yyyy-MM-dd'),
      car_id: detailData.id,
    };
    API.post('customer/order', userDate)
      .then(response => {
        console.log(response.status);
        if (response.status === 201) {
          navigate('');
        }
      })
      .catch(error => {
        console.error(error);
      });
    console.log(userDate);
  };
  return (
    <section id="cardDetail">
      <Container className="container">
        <Row className="row justify-content-md-between flex-wrap">
          <Col md={8} className="col-md-8 m-md-0 p-md-0 detail-package">
            <p className="fw-bold text-capitalize ms-3 mt-2">tentang paket</p>
            <p className="fw-bold text-capitalize ms-3">include</p>
            <List>
              <li className="text-secondary">
                Apa saja yang termasuk dalam paket misal durasi max 12 Jam
              </li>
              <li className="text-secondary">Sudah termasuk bensin selama 12 jam</li>
              <li className="text-secondary">Sudah termasuk Tiket wisata</li>
              <li className="text-secondary">Sudah termasuk pajak</li>
            </List>
            <p className="fw-bold text-capitalize ms-3">exclude</p>
            <List>
              <li className="text-secondary">Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li className="text-secondary">
                Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam
              </li>
              <li className="text-secondary">Tidak termasuk akomodasi penginapan</li>
            </List>
            <p className="fw-bold text-capitalize ms-3">refund, reschedule, overtime</p>
            <List>
              <li className="text-secondary">Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li className="text-secondary">
                Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam
              </li>
              <li className="text-secondary">Tidak termasuk akomodasi penginapan</li>
              <li className="text-secondary">Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li className="text-secondary">
                Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam
              </li>
              <li className="text-secondary">Tidak termasuk akomodasi penginapan</li>
              <li className="text-secondary">Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li className="text-secondary">
                Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam
              </li>
              <li className="text-secondary">Tidak termasuk akomodasi penginapan</li>
            </List>
          </Col>
          <Col md={4} className="col-md-4 m-md-0 p-md-0 car-detail justify-content-md-end">
            <Card className="card card-detail border-1">
              <img
                src={detailData.image ?? '/img/no-image.png'}
                className="card-img-top"
                alt="car pict"
              />
              <CardBody className="card-body">
                <CardTitle className="card-type fw-bold fs-6 m-0 p-0 text-capitalize">
                  {detailData.name}
                </CardTitle>
                <CardSubtitle className="d-flex align-items-center m-0 p-0">
                  <img src="/img/ic_users.svg" className="pe-2" alt="users-icon" />
                  <CardText className="m-0 p-0 text-secondary fw-bold fs-6 car-category">
                    {mappingCategory(detailData.category)}
                  </CardText>
                </CardSubtitle>
                <div className="d-flex justify-content-between fw-bold mt-5 mb-3">
                  <CardText className="text-capitalize">total</CardText>
                  <CardText>{formatToIDR(Number(detailData.price))}</CardText>
                </div>
                <div>
                  <p className="text-secondary">Tentukan lama sewa mobil (max. 7 hari)</p>
                  <DateRangeExample date={date} setDate={setDate} />
                </div>{' '}
                <div>
                  <Button
                    className="btn btn-success justify-content-center align-self-center w-100"
                    onClick={handleSubmit}
                  >
                    Lanjutkan Pembayaran
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
