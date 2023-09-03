import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { API } from 'src/common/API';
import { Button, Col, Form, FormGroup, Input } from 'reactstrap';
import { toast } from 'react-toastify';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ChartSection() {
  const [dataChart, setDataChart] = useState();
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        display: false,
      },
      title: {
        position: 'bottom',
        display: true,
        text: 'Date',
      },
    },
  };

  const labels = dataChart?.map(data => {
    return data?.day.slice(8, 10);
  });

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: dataChart?.map(data => {
          return data?.orderCount;
        }),
        backgroundColor: '#586b90',
      },
    ],
  };

  useEffect(() => {
    API.get('admin/order/reports?from=2022-01-01&until=2022-01-31')
      .then(res => setDataChart(res.data))
      .catch(e => toast.error(e));
  }, []);
  return (
    <>
      <div className="mb-5" style={{ marginLeft: '30px', paddingTop: '32px' }}>
        <span className="fw-bold">Dashboard &gt; </span>
        <span>Dashboard</span>
      </div>
      <div className="d-flex align-items-center gap-2 mb-4" style={{ marginLeft: '50px' }}>
        <img src="/img/rented-car.jpg" alt="" />
        <p className="m-0 p-0 fw-bold">Rented Car Data Visualization</p>
      </div>
      <div className="select-month" style={{ paddingLeft: '50px' }}>
        <p>Month</p>
        <Form className="d-flex">
          <FormGroup row className="">
            <Col sm={10}>
              <Input
                id="exampleSelect"
                name="select"
                type="select"
                style={{
                  width: '147px',
                  height: '42px',
                  marginTop: '-3px',
                  borderRadius: '2px',
                }}
              >
                <option value="Januari 2023">Januari - 2023</option>
                <option value="Februari 2023">Februari - 2023</option>
                <option value="Maret 2023">Maret - 2023</option>
                <option value="April 2023">April - 2023</option>
                <option value="Mei 2023">Mei - 2023</option>
                <option value="Juni 2023">Juni - 2023</option>
                <option value="Juli 2023">Juli - 2023</option>
                <option value="Agustus 2023">Agustus - 2023</option>
                <option value="September 2023">September - 2023</option>
                <option value="Oktober 2023">Oktober - 2023</option>
                <option value="November 2023">November - 2023</option>
                <option value="Desember 2023">Desember - 2023</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup check row className="m-0 p-0">
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
      <Bar style={{ padding: '50px' }} options={options} data={data} />
    </>
  );
}
