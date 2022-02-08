import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <div>
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">VU MINH KHOI</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;