import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import { API } from 'src/common/API';
import { toast } from 'react-toastify';
import {
  deleteAllData,
  getAllData,
  getLargeData,
  getMediumData,
  getSmallData,
} from 'src/common/redux/actions/admin';
import { connect } from 'react-redux';

function CarList(props, args) {
  const { car, isButton } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const navigate = useNavigate();

  const formatToIDR = idr => {
    const parsed = idr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    return `${'Rp '}${parsed}`;
  };

  function convertDate(data) {
    const dates = data;
    const date = dates.slice(0, 10);
    const time = dates.slice(11, 16);
    const tgl = new Date(date).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    const fulltime = tgl + ', ' + time;
    return fulltime;
  }

  const mappingCategory = value => {
    if (value === 'small' || value === 'Small' || value === '2-4 orang') {
      return '2 - 4 orang';
    } else if (value === 'medium' || value === 'Medium' || value === '4-6 orang') {
      return '4 - 6 orang';
    } else if (value === 'large' || value === 'Large' || value === '6-8 orang') {
      return '6 - 8 orang';
    }
  };

  function handleEdit(id) {
    navigate(`/admin/add-car/${id}`);
  }

  async function handleDelete(id, name) {
    props.fetchDeleteData();
    toggle();
    await API.delete(`admin/car/${id}`)
      .then(res => {
        if (res.status === 200) {
          if (isButton.all) {
            props.fetchAllData();
          }
          if (isButton.small) {
            props.fetchSmallData();
          }
          if (isButton.medium) {
            props.fetchMediumData();
          }
          if (isButton.large) {
            props.fetchLargeData();
          }
          toast.success(`Mobil ${name} berhasil dihapus dari daftar`);
        }
      })
      .catch(e => toast.error(e));
  }

  return (
    <Col md={4} key={car.id} style={{ width: 'auto', margin: '0 0.7rem 2rem 0.7rem' }}>
      <Card
        style={{
          width: '18rem',
          height: '23rem',
        }}
      >
        <div className="car-img-wrapper" style={{ width: 'auto', height: '10rem' }}>
          <img
            alt={car.name}
            src={car.image || '/img/loading.png'}
            style={{ width: '100%', objectFit: 'cover' }}
            loading="lazy"
          />
        </div>
        <CardBody>
          <CardTitle tag="h5">{car.name}</CardTitle>
          <CardSubtitle className="my-2 fw-semibold" tag="h6">
            {formatToIDR(car.price)}/hari
          </CardSubtitle>
          <CardText className="mb-0">
            <span className="pe-2">
              <img src="/img/fi_users.svg" alt="" />
            </span>
            {mappingCategory(car.category)}
          </CardText>
          <CardText className="mt-2">
            <span className="pe-2">
              <img src="/img/fi_clock.svg" alt="update" />
            </span>
            {convertDate(car.updatedAt)}
          </CardText>
          <div className="d-flex justify-content-between gap-3 mt-4">
            <Button
              onClick={toggle}
              className="btn btn-danger w-50"
              style={{
                backgroundColor: '#fff',
                color: '#FA2C5A',
                borderColor: 'FA2C5A',
              }}
            >
              <span className="me-1">
                <img
                  src="/img/fi_trash.svg"
                  alt="button delete car"
                  className="pb-1 me-1"
                  style={{ width: '20%' }}
                />
              </span>
              Delete
            </Button>
            <Button
              className="btn btn-success w-50 border-0"
              onClick={() => handleEdit(car.id)}
              style={{ backgroundColor: '#5CB85F' }}
            >
              <span className="me-1">
                <img
                  src="/img/fi_edit.svg"
                  alt="button edit car"
                  className="pb-1 me-1"
                  style={{ width: '20%' }}
                />
              </span>
              Edit
            </Button>
            <Modal isOpen={modal} toggle={toggle} {...args}>
              <ModalBody className="d-flex justify-content-center flex-wrap mb-0 pb-0">
                <img className="mb-3" src="/img/delete-car.jpg" alt="hapus data mobil" />
                <div className="mx-4 mt-3 px-4 text-center">
                  <h4 className="fw-bold text-capitalize mb-3">menghapus data mobil</h4>
                  <p>
                    Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin menghapus?
                  </p>
                </div>
              </ModalBody>
              <ModalFooter className="border-0 justify-content-center gap-2 mt-0 pt-0">
                <Button
                  color="primary"
                  onClick={() => handleDelete(car.id, car.name)}
                  style={{
                    background: '#0D28A6',
                    width: '87px',
                    border: 0,
                    borderRadius: '2px',
                  }}
                >
                  Ya
                </Button>{' '}
                <Button
                  color="outline-primary"
                  onClick={toggle}
                  style={{
                    background: '#fff',
                    width: '87px',
                    borderColor: '#0D28A6',
                    color: '#0D28A6',
                    borderWidth: '1px',
                    borderRadius: '2px',
                  }}
                >
                  Tidak
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllData: () => dispatch(getAllData()),
    fetchSmallData: () => dispatch(getSmallData()),
    fetchMediumData: () => dispatch(getMediumData()),
    fetchLargeData: () => dispatch(getLargeData()),
    fetchDeleteData: () => dispatch(deleteAllData()),
  };
};

const mapStateToProps = state => ({
  dataCarAdmin: state.admin,
});

export default connect(mapStateToProps, mapDispatchToProps)(CarList);
