import { Button, Col, Container, FormGroup, Input, Label, Row, Form } from 'reactstrap';
import { API } from 'src/common/API';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function RentForm({ isClick, setIsClick, setData, setIsLoading }) {
  const [nameCar, setNameCar] = useState('');
  const [category, setCategory] = useState('');
  const [isRented, setIsRented] = useState(false);
  const [price, setPrice] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fetchData = () => {
    const params = `name=${nameCar}&category=${category}&isRented=${isRented}&${mappingPrice(
      price,
    )}`;
    API.get(`customer/v2/car?${params}&page=1&pageSize=10`)
      .then(res => {
        setData(res.data.cars);
      })
      .catch(err => {
        toast.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const mappingPrice = price => {
    switch (price) {
      case 'low':
        return 'minPrice=0&maxPrice=400000';
      case 'medium':
        return 'minPrice=400000&maxPrice=600000';
      case 'high':
        return 'minPrice=600000&maxPrice=1000000';
      default:
        return '';
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitted(true);
    setIsLoading(true);
    fetchData();
  };

  return (
    <section id="formSewa" className="mb-5">
      <Container className="container">
        <Row className="row">
          <Col md={10} className="col-md-10">
            <Form className="my-sm-4 d-block d-md-flex justify-content-around align-self-center">
              <FormGroup className="my-md-3 input-grup align-content-center justify-content-center">
                <Label htmlFor="name" className="form-label">
                  Nama Mobil
                </Label>
                <Input
                  type="text"
                  className="form-control d-inline"
                  id="name"
                  disabled={isSubmitted}
                  aria-describedby="emailHelp"
                  placeholder="Ketik nama/tipe mobil"
                  width="208"
                  onChange={e => setNameCar(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="my-3 input-grup align-content-center justify-content-center">
                <Label htmlFor="kapasitas" className="form-label">
                  Kategori
                </Label>
                <Input
                  type="select"
                  id="kapasitas"
                  className="form-select text-secondary"
                  disabled={isSubmitted}
                  onChange={e => setCategory(e.target.value)}
                >
                  <option hidden>Masukkan Kapasitas Mobil</option>
                  <option className="text-black" value="small">
                    2 - 4 orang
                  </option>
                  <option className="text-black" value="medium">
                    4 - 6 orang
                  </option>
                  <option className="text-black" value="large">
                    6 - 8 orang
                  </option>
                </Input>
              </FormGroup>
              <FormGroup className="my-3 input-grup align-content-center justify-content-center">
                <Label htmlFor="harga" className="form-label">
                  Harga
                </Label>
                <Input
                  type="select"
                  id="harga"
                  className="form-select text-secondary"
                  disabled={isSubmitted}
                  onChange={e => setPrice(e.target.value)}
                >
                  <option hidden>Masukkan harga sewa per hari</option>
                  <option className="text-black" value="low">
                    Rp. 400.000
                  </option>
                  <option className="text-black" value="medium">
                    Rp. 400.000 - Rp.600.000
                  </option>
                  <option className="text-black" value="high">
                    {' '}
                    Rp.600.000
                  </option>
                </Input>
              </FormGroup>
              <FormGroup className="my-3 input-grup align-content-center justify-content-center">
                <Label htmlFor="status" className="form-label">
                  Status
                </Label>
                <Input
                  type="select"
                  id="status"
                  className="form-select text-secondary"
                  disabled={isSubmitted}
                  onChange={e => setIsRented(e.target.value)}
                >
                  <option className="text-black" value={true}>
                    Disewa
                  </option>
                  <option className="text-black" value={false}>
                    Free
                  </option>
                </Input>
              </FormGroup>
              {isClick ? (
                ''
              ) : isSubmitted ? (
                <Button
                  type="submit"
                  className="btn btn-primary align-self-center btn-edit"
                  onClick={() => {
                    setIsSubmitted(false);
                    setData([]);
                    setIsClick(false);
                  }}
                >
                  Edit
                </Button>
              ) : (
                <Button onClick={handleSubmit} className="btn btn-primary align-self-center">
                  Cari Mobil
                </Button>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
