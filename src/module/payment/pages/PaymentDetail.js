import { useLocation, useMatches, useNavigate } from 'react-router-dom';
import Footer from 'src/components/footer';
import Header from 'src/components/navbar';
import BreadcrumbComp from '../components/BreadcrumbComp';
import { Container } from 'reactstrap';
import { useEffect, useState } from 'react';
import React from 'react';
import { API } from 'src/common/API';
import PaymentDetailLeftBody from 'src/module/payment/components/PaymentDetailLeftBody';
import PaymentDetailRightBody from 'src/module/payment/components/PaymentDetailRightBody';
import { toast } from 'react-toastify';

export default function PaymentDetail() {
  const { state } = useLocation();
  const { listBank } = state;
  const matches = useMatches();
  const [confirmPayment, setConfirmPayment] = useState(false);
  const [dataOrder, setDataOrder] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const tokenCustomer = localStorage.getItem('tokenCustomer');
    if (!tokenCustomer) return navigate('/');
    function getOrderById() {
      const id = matches[0].params.id;
      API.get(`customer/order/${id}`)
        .then(res => {
          const data = res.data;
          setDataOrder(data);
        })
        .catch(e => toast.error(e));
    }
    getOrderById();
  }, [matches, navigate]);

  return (
    <>
      <Header />

      <BreadcrumbComp
        title={
          listBank.bca
            ? 'BCA Transer'
            : listBank.bni
            ? 'BNI Transfer'
            : listBank.mandiri
            ? 'Mandiri Transfer'
            : ''
        }
        orderId={'Order Id: ' + matches[0].params.id}
      />

      <Container className="my-5 d-flex flex-column flex-md-row gap-5 justify-content-center">
        <PaymentDetailLeftBody listBank={listBank} dataOrder={dataOrder} />
        <PaymentDetailRightBody
          confirmPayment={confirmPayment}
          setConfirmPayment={setConfirmPayment}
        />
      </Container>
      <Footer />
    </>
  );
}
