import LayoutAdmin from 'src/components/layoutAdmin/layoutAdmin';
import { Form, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { API } from 'src/common/API';
import { Col, FormGroup, Input, Table, Button } from 'reactstrap';
import ChartSection from './components/ChartSection';
import { toast } from 'react-toastify';

export default function Dashboard() {
  const navigate = useNavigate();
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);

  const formatToIDR = idr => {
    const parsed = idr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    return `${'Rp '}${parsed}`;
  };

  useEffect(() => {
    API.get(
      'admin/v2/order?sort=created_at%3Aasc&page=1&pageSize=5650',
      localStorage.getItem('tokenAdmin'),
    )
      .then(res => {
        setItems(res.data.orders);
      })
      .catch(e => toast.error(e));
  }, []);

  function Items({ currentItems }) {
    return (
      <div className="px-5">
        <Table size="sm">
          <thead>
            <tr>
              <th className="text-center" style={{ background: '#cfd4ed' }}>
                No
              </th>
              <th style={{ background: '#cfd4ed' }}>User Email</th>
              <th style={{ background: '#cfd4ed' }}>Car</th>
              <th style={{ background: '#cfd4ed' }}>Start Rent</th>
              <th style={{ background: '#cfd4ed' }}>Finish Rent</th>
              <th style={{ background: '#cfd4ed' }}>Price</th>
              <th style={{ background: '#cfd4ed' }}>Category</th>
            </tr>
          </thead>
          <tbody>
            {currentItems &&
              currentItems.map(item => (
                <tr key={item.id}>
                  <th className="text-center" scope="row">
                    {item.id - 1}
                  </th>
                  <th>{item.User?.email}</th>
                  <th>{item.Car?.name || '-'}</th>
                  <th>{item?.start_rent_at?.slice(0, 10)}</th>
                  <th>{item?.finish_rent_at?.slice(0, 10)}</th>
                  <th>{formatToIDR(Number(item.total_price))}</th>
                  <th>{item.Car?.category || '-'}</th>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    );
  }

  function PaginatedItems({ itemsPerPage }) {
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const handlePageClick = event => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      setItemOffset(newOffset);
    };

    return (
      <>
        <div
          style={{
            marginLeft: '50px',
            paddingTop: '32px',
            marginBottom: '24px',
          }}
        >
          <span className="fw-bold">Dashboard</span>
        </div>
        <div className="d-flex align-items-center gap-2 mb-4" style={{ marginLeft: '50px' }}>
          <img src="/img/rented-car.jpg" alt="" />
          <p className="m-0 p-0 fw-bold">List Order</p>
        </div>
        <div>
          <Items currentItems={currentItems} />
          <div className=" d-flex justify-content-between mx-5">
            <div>
              <div>
                <Form className="d-flex m-0 p-0">
                  <div className="d-flex flex-column">
                    <p>Limit</p>
                    <Input
                      id="exampleSelect"
                      name="select"
                      type="select"
                      style={{
                        width: '60px',
                        height: '42px',
                        marginTop: '-3px',
                        borderRadius: '2px',
                      }}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </Input>
                  </div>
                  <FormGroup className="row mb-0">
                    <Col sm={10}>
                      <div className="d-flex flex-column">
                        <p>Jump to page</p>
                        <Input
                          id="exampleSelect"
                          name="select"
                          type="select"
                          style={{
                            width: '125px',
                            height: '42px',
                            marginTop: '-3px',
                            borderRadius: '2px',
                          }}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                        </Input>
                      </div>
                    </Col>
                  </FormGroup>
                  <FormGroup check row className="mx-0 p-0" style={{ marginTop: '40px' }}>
                    <Col
                      className="m-0 p-0"
                      sm={{
                        offset: 2,
                        size: 10,
                      }}
                    >
                      <Button
                        type="button"
                        style={{
                          marginTop: '-3px',
                          background: '#0D28A6',
                          color: '#fff',
                          width: 'Hug (43px)',
                          height: 'Hug (36px)',
                          padding: '8px 12px 8px 12px',
                          borderRadius: '0px 2px 2px 0px',
                          gap: '10px',
                        }}
                      >
                        Go
                      </Button>
                    </Col>
                  </FormGroup>
                </Form>
              </div>
            </div>
            <ReactPaginate
              nextLabel=">>"
              onPageChange={handlePageClick}
              marginPagesDisplayed={2}
              pageCount={563}
              previousLabel="<<"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination align-self-end"
              activeClassName="active"
            />
          </div>
        </div>
      </>
    );
  }

  useEffect(() => {
    const tokenAdmin = localStorage.getItem('tokenAdmin');
    if (!tokenAdmin) {
      toast.error('Silakan login terlebih dahulu');
      navigate('admin/login');
    }
  }, [navigate]);

  return (
    <LayoutAdmin>
      <div style={{ background: '#f4f5f7' }}>
        <ChartSection />
        <PaginatedItems itemsPerPage={10} />
      </div>
    </LayoutAdmin>
  );
}
