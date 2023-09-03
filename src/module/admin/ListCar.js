import { Col, Container, Row } from 'reactstrap';
import LayoutAdmin from 'src/components/layoutAdmin/layoutAdmin';
import { useEffect, useState } from 'react';
import CarList from './components/CarList';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from './components/Breadcrumb';
import { toast } from 'react-toastify';
import {
  getAllData,
  getLargeData,
  getMediumData,
  getSmallData,
} from 'src/common/redux/actions/admin';
import { connect } from 'react-redux';

function ListCar(props) {
  const [isButton, setIsButton] = useState({
    all: false,
    small: false,
    medium: false,
    large: false,
  });
  const tokenAdmin = localStorage.getItem('tokenAdmin');
  const navigate = useNavigate();

  if (!tokenAdmin) {
    toast.error('Silakan login terlebih dahulu');
    navigate('admin/login');
  }
  function handleAllButton() {
    props.fetchAllData();
    setIsButton({
      all: true,
      small: false,
      medium: false,
      large: false,
    });
  }

  function handleSmallButton() {
    props.fetchSmallData();
    setIsButton({
      all: false,
      small: true,
      medium: false,
      large: false,
    });
  }

  function handleMediumButton() {
    props.fetchMediumData();
    setIsButton({
      all: false,
      small: false,
      medium: true,
      large: false,
    });
  }

  function handleLargeButton() {
    props.fetchLargeData();
    setIsButton({
      all: false,
      small: false,
      medium: false,
      large: true,
    });
  }

  useEffect(() => {
    props.fetchAllData();
    setIsButton({
      all: true,
      small: false,
      medium: false,
      large: false,
    });
  }, []);
  return (
    <>
      {tokenAdmin && (
        <LayoutAdmin>
          <div className="py-3" style={{ backgroundColor: '#F4F5F7' }}>
            <Breadcrumb />

            <Container className="mt-3">
              <Row className="d-flex">
                <Col md={6}>
                  <h4 className="text-capitalize mb-3">list car</h4>
                  <div className="d-flex gap-3 admin-btn-category">
                    <button
                      id="all"
                      onClick={handleAllButton}
                      className={`button ${isButton.all ? 'button-aktif' : ''}`}
                    >
                      All
                    </button>
                    <button
                      id="small"
                      onClick={handleSmallButton}
                      className={`button ${isButton.small ? 'button-aktif' : ''}`}
                    >
                      2 - 4 people
                    </button>
                    <button
                      id="medium"
                      onClick={handleMediumButton}
                      className={`button ${isButton.medium ? 'button-aktif' : ''}`}
                    >
                      4 - 6 people
                    </button>
                    <button
                      id="large"
                      onClick={handleLargeButton}
                      className={`button ${isButton.large ? 'button-aktif' : ''}`}
                    >
                      6 - 8 people
                    </button>
                  </div>
                </Col>
                <Col md={6} className="text-end">
                  <button
                    className="text-capitalize btn btn-primary text-white"
                    onClick={() => navigate('/admin/add-car')}
                  >
                    + add new car
                  </button>
                </Col>
              </Row>
            </Container>

            <Container className="mt-5">
              <Row className="mx-auto justify-content-center">
                {isButton.all && props.dataCarAdmin.allData === null && (
                  <h1 className="text-center">Loading...</h1>
                )}
                {props.dataCarAdmin?.allData?.map(car => {
                  return <CarList car={car} key={car.id} isButton={isButton} />;
                }) ||
                  props.dataCarAdmin?.smallData?.map(car => {
                    return <CarList car={car} key={car.id} isButton={isButton} />;
                  }) ||
                  props.dataCarAdmin?.mediumData?.map(car => {
                    return <CarList car={car} key={car.id} isButton={isButton} />;
                  }) ||
                  props.dataCarAdmin?.largeData?.map(car => {
                    return <CarList car={car} key={car.id} isButton={isButton} />;
                  })}
              </Row>
            </Container>
          </div>
        </LayoutAdmin>
      )}
    </>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllData: () => dispatch(getAllData()),
    fetchSmallData: () => dispatch(getSmallData()),
    fetchMediumData: () => dispatch(getMediumData()),
    fetchLargeData: () => dispatch(getLargeData()),
  };
};

const mapStateToProps = state => ({
  dataCarAdmin: state.admin,
});

export default connect(mapStateToProps, mapDispatchToProps)(ListCar);
