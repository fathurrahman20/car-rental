import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Sidebar from './components/Sidebar';

export default function Admin() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      {menu && <Sidebar setMenu={setMenu} />}
      <nav className="navbar bg-body-light" style={{ position: 'relative' }}>
        <div className="container">
          <p className="hamburger-menu btn" onClick={() => setMenu(true)}>
            <GiHamburgerMenu />
          </p>
          <form className="d-flex" role="search">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary fw-bold border-1" type="submit">
              Search
            </button>
            <div className="admin d-md-flex ms-5">
              <img src="/img/photo-admin.svg" alt="" />
              <p className="ms-1 my-md-auto">Admin</p>
            </div>
          </form>
        </div>
      </nav>
    </>
  );
}
