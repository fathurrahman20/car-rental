import { Button, Col, Container, Form, FormGroup, FormText, Input, Label, Row } from 'reactstrap';
import LayoutAdmin from 'src/components/layoutAdmin/layoutAdmin';
import { useMatches, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { toast } from 'react-toastify';
import Breadcrumb from './Breadcrumb';
import { API } from 'src/common/API';
import { getAllData } from 'src/common/redux/actions/admin';
import { connect } from 'react-redux';

function AddCar(props) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState({ value: null, label: null });
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);
  const navigate = useNavigate();
  let matches = useMatches();
  const tokenAdmin = localStorage.getItem('tokenAdmin');

  useEffect(() => {
    const tokenAdmin = localStorage.getItem('tokenAdmin');
    if (!tokenAdmin) navigate('admin/login');
    const id = matches[0].params.id;
    if (id) {
      setIsUpdate(true);
      getById(`admin/car/${id}`, tokenAdmin);
    }
  }, [matches, navigate]);

  async function getById(endPoint, tokenAdmin) {
    let headers = {};
    headers.Access_token = tokenAdmin;
    try {
      const response = await axios.get('https://api-car-rental.binaracademy.org/' + endPoint, {
        headers,
      });
      const data = response.data;
      setName(data.name);
      setPrice(data.price);
      setImage(data.image);
      setImagePreview(data.image);
      setCategory({
        value: data.category,
        label: data.category,
      });
    } catch (error) {
      throw error.response;
    }
  }

  const options = [
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
    { value: 'large', label: 'Large' },
  ];
  function handleCancel() {
    navigate(-1);
  }
  async function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData();
    data.append('name', name);
    data.append('category', category.value);
    data.append('price', price);
    data.append('image', image);

    handleAction(data);
    props.fetchAllData();
  }

  function handleAction(data) {
    const id = matches[0].params.id;
    isUpdate ? handleEdit(`admin/car/${id}`, data) : handleAdd(`admin/car`, data);
  }

  function handleEdit(url, data) {
    return API.put(url, data)
      .then(() => {
        toast.success('Data berhasil diubah');
        navigate('/admin/list-car');
      })
      .catch(err => toast.error(err));
  }

  function handleAdd(url, data) {
    return API.post(url, data, tokenAdmin)
      .then(() => {
        toast.success('Data berhasil ditambahkan');
        navigate('/admin/list-car');
      })
      .catch(err => toast.error(err));
  }
  function onImageUpload(e) {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  }
  function handleChange(selectedOption) {
    setCategory(selectedOption);
  }
  return (
    <LayoutAdmin>
      <div className="py-3" style={{ backgroundColor: '#F4F5F7' }}>
        <Breadcrumb path={isUpdate ? 'Edit Car' : 'Add Car'} />

        <Container className="mt-3">
          <Row>
            <Col md={12}>
              <h4 className="text-capitalize fw-bold">
                {isUpdate ? 'edit car data' : 'add new car'}
              </h4>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col md={12}>
              <Form onSubmit={handleSubmit}>
                <div className="form-grup-admin-wrapper">
                  <FormGroup row>
                    <Label for="name" sm={2}>
                      Nama/Tipe Mobil<span>*</span>
                    </Label>
                    <Col sm={10}>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Input Nama/Tipe Mobil"
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="price" sm={2}>
                      Harga<span>*</span>
                    </Label>
                    <Col sm={10}>
                      <Input
                        id="price"
                        name="price"
                        placeholder="Input Harga Sewa Mobil"
                        type="number"
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                        required
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="fotoMobil" sm={2}>
                      Foto<span>*</span>
                    </Label>
                    <Col sm={10}>
                      <div className="mb-2" style={{ width: '30%' }}>
                        {image && <img src={imagePreview} alt="preview" />}
                      </div>
                      <Input
                        id="fotoMobil"
                        name="file"
                        type="file"
                        placeholder="Upload Foto Mobil"
                        onChange={onImageUpload}
                        required
                      />
                      <FormText>File size max. 2MB</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="exampleSelect" sm={2}>
                      Kategori<span>*</span>
                    </Label>
                    <Col sm={10} style={{ width: '34.5%' }}>
                      <Select value={category} options={options} onChange={handleChange} />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="name" sm={2}>
                      Created at
                    </Label>
                    <Col sm={10}>
                      <p>-</p>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="name" sm={2}>
                      Updated at
                    </Label>
                    <Col sm={10}>
                      <p className="p-0 m-0">-</p>
                    </Col>
                  </FormGroup>
                </div>
                <div className="form-grup-admin d-flex gap-3" style={{ marginTop: '2rem' }}>
                  <Button className="btn btn-cancel fw-semibold" onClick={handleCancel}>
                    Cancel
                  </Button>
                  <Button type="submit" className="btn btn-save fw-semibold">
                    Save
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutAdmin>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllData: () => dispatch(getAllData()),
  };
};

export default connect(null, mapDispatchToProps)(AddCar);