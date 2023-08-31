import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Sidebar({ setMenu }) {
  const [adminMenu, setAdminMenu] = useState('dashboard');
  const navigate = useNavigate();

  function handleDashboardMenu(e) {
    e.preventDefault();

    setAdminMenu('dashboard');
    navigate('/admin');
  }

  function handleCarMenu(e) {
    e.preventDefault();

    setAdminMenu('car');
    navigate('/admin/list-car');
  }
  function handleLogout() {
    localStorage.removeItem('tokenAdmin');
    navigate('/admin/login');
  }
  return (
    <div className="d-md-flex" style={{ position: 'absolute', zIndex: '99' }}>
      <div
        className="sidebar vh-100 text-center"
        style={{
          left: 0,
          background: '#0D28A6',
          width: '100px',
        }}
      >
        <div className="left mx-auto">
          <div className="admin-close-button mt-2" onClick={() => setMenu(false)}>
            <img src="/img/ic-close.svg" alt="" />
          </div>
          <div className="">
            <div
              className={` ${
                window.location.pathname === '/admin' ? 'admin-menu' : ''
              } admin-list-menu mt-md-5 p-md-2`}
              onClick={handleDashboardMenu}
            >
              <img src="/img/ic-dashboard.svg" className="d-md-block mx-auto" alt="" />
              <p className="text-white p-o m-0">Dashboard</p>
            </div>
            <div
              className={`${
                window.location.pathname === '/admin/list-car' ||
                window.location.pathname === '/admin/add-car'
                  ? 'admin-menu'
                  : ''
              } admin-list-menu mt-md-3 p-md-2`}
              onClick={handleCarMenu}
            >
              <img src="/img/ic_car.svg" className="d-md-block mx-auto" alt="" />
              <p className="text-white p-o m-0">Cars</p>
            </div>
            <div
              className={`${
                adminMenu === 'logout' ? 'admin-menu' : ''
              } admin-list-menu mt-md-3 p-md-2`}
              onClick={handleLogout}
            >
              <img src="/img/ic-logout.png" className="d-md-block mx-auto" alt="" />
              <p className="text-white p-o m-0">Logout</p>
            </div>
          </div>
        </div>
      </div>
      <div className="right vh-100" style={{ background: '#F4F5F7', width: '220px' }}>
        <div className="text-center mt-3">
          <img src="/img/logo.svg" alt="" />
        </div>
        <div className="menu-tab" style={{ marginTop: '4.7rem' }}>
          <p
            className="text-uppercase text-muted"
            style={{
              paddingTop: '0.75rem',
              paddingBottom: '0.75rem',
              paddingLeft: '1rem',
              marginTop: '10px',
            }}
          >
            {window.location.pathname === '/admin' && 'dashboard'}
            {(window.location.pathname === '/admin/list-car' ||
              window.location.pathname === '/admin/add-car') &&
              'cars'}
          </p>
          <p className="admin-detail-menu text-dark py-md-2 border-2 text-capitalize">
            {(window.location.pathname === '/admin/list-car' ||
              window.location.pathname === '/admin/add-car') &&
              'list car'}
            {window.location.pathname === '/admin' && 'dashboard'}
          </p>
        </div>
      </div>
    </div>
  );
}
