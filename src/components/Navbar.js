import React from 'react';
import { Link } from 'react-router-dom';
import MyDropdown from './MyDropdown';

function Navbar() {
  return (
    <div className='container' style={{ height: "20px" }}>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-light" style={{ borderRadius: "24px", margin: "1px" }}>
        <div className="container-fluid">
          <div>
            <h4 style={{ display: "inline", color: "red" }}>ShopKaro</h4>
            <Link to='/' className="btn btn2 btn-light mx-1">All Products</Link>
            <Link to='/MensWear' className="btn btn2 btn-light mx-1">Mens Wear</Link>
            <Link to='/LediesWear' className="btn btn2 btn-light mx-1">Ledies Wear</Link>
            <Link to='/Electronics' className="btn btn2 btn-light mx-1">Electronics</Link>
            <Link to='/Jewelry' className="btn btn2 btn-light mx-1">Jewelry</Link>
           </div>
          <MyDropdown />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
