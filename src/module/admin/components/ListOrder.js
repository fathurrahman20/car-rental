import ReactPaginate from 'react-paginate';
import { API } from 'src/common/API';
import { Col, FormGroup, Input, Table, Button, Form } from 'reactstrap';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';

export default function ListOrder() {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
  const [limit, setLimit] = useState(10);
  const [pages, setPages] = useState(1);

  const formatToIDR = idr => {
    const parsed = idr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    return `${'Rp '}${parsed}`;
  };

  useEffect(() => {
    API.get('admin/v2/order?sort=created_at%3Aasc&page=1&pageSize=5700')
      .then(res => {
        setItems(res.data.orders);
      })
      .catch(e => toast.error(e));
  }, []);

  function getPage(page) {
    API.get(`admin/v2/order?sort=created_at%3Aasc&page=${page}&pageSize=10`)
      .then(res => {
        setItems(res.data.orders);
      })
      .catch(e => toast.error(e));
  }

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
                  <th className="text-center" scope="row" key={item.id}>
                    {item.id ? item.id - 1 : 'load'}
                  </th>
                  <th key={item.id}>{item.User?.email || 'loading...'}</th>
                  <th key={item.id}>{item.Car?.name || '-'}</th>
                  <th key={item.id}>{item?.start_rent_at?.slice(0, 10) || 'loading...'}</th>
                  <th key={item.id}>{item?.finish_rent_at?.slice(0, 10) || 'loading...'}</th>
                  <th key={item.id}>
                    {item.total_price ? formatToIDR(Number(item.total_price)) : 'loading...'}
                  </th>
                  <th key={item.id}>{item.Car?.category || '-'}</th>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    );
  }

  function handleGoBtn(e) {
    e.preventDefault();
    getPage(pages);
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
                <Form className="d-flex m-0 p-0" onSubmit={handleGoBtn}>
                  <div className="d-flex flex-column">
                    <p>Limit</p>
                    <Input
                      id="exampleSelect"
                      name="select"
                      type="select"
                      style={{
                        width: '65px',
                        height: '42px',
                        marginTop: '-3px',
                        borderRadius: '2px',
                      }}
                      value={limit}
                      onChange={e => setLimit(e.target.value)}
                    >
                      {Array.from({ length: 10 }, (_, i) => i + 1).map(num => (
                        <option value={num} key={num}>
                          {num}
                        </option>
                      ))}
                    </Input>
                  </div>
                  <FormGroup className="row mb-0">
                    <Col sm={10}>
                      <div className="d-flex flex-column">
                        <p>Jump to page</p>
                        <Input
                          id="exampleSelect"
                          name="jumpPage"
                          type="select"
                          value={pages}
                          style={{
                            width: '125px',
                            height: '42px',
                            marginTop: '-3px',
                            borderRadius: '2px',
                          }}
                          onChange={e => setPages(e.target.value)}
                        >
                          {Array.from({ length: 569 }, (_, i) => i + 1).map(num => (
                            <option value={num} key={num}>
                              {num}
                            </option>
                          ))}
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
                        type="submit"
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
              pageCount={568}
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
  return <PaginatedItems itemsPerPage={limit} />;
}
