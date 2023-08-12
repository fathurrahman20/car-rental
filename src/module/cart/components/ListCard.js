import { API } from '../../../common/API';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col } from 'reactstrap';

export default function ListCard({ id, name, image, price, setIsClick, setDetailData }) {
  const fetchDataDetail = id => {
    API.get(`admin/car/${id}`)
      .then(res => {
        setDetailData(res.data);
      })
      .catch(err => {
        console.log('err:', err);
      });
  };

  const formatToIDR = idr => {
    const parsed = idr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    return `${'Rp '}${parsed}`;
  };

  const handleClick = id => {
    setIsClick(true);
    fetchDataDetail(id);
  };
  return (
    <Col md={4} className="col-md-4 m-0 p-0">
      <Card className="card card-result border-1" style={{ width: '21rem' }}>
        {/*{image?<img src={image} className="card-img-top" alt={name}/>: `${name}`}*/}
        <img src={image ?? '/img/no-image.png'} className="card-img-top" alt={name} />
        <CardBody className="card-body">
          <CardTitle className="card-type text-capitalize">{name}</CardTitle>
          <CardSubtitle tag="h5" className="card-title fw-bold">
            {formatToIDR(price)} / hari
          </CardSubtitle>
          <CardText className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </CardText>
          <Button onClick={() => handleClick(id)} className="btn btn-primary w-100">
            Pilih Mobil
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
}
