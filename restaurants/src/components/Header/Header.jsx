import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <>
      <nav className='navbar navbar-expand-lg'>
        <div className='container-fluid'>
          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link to='/' className='nav-link' aria-current='page'>
                  О нас
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/list'>
                  Список ресторанов
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/add' className='nav-link'>
                  Добавить новое место
                </Link>
              </li>
            </ul>
            <span className='navbar-text navbartext'>
              Составь список своих любимых ресторанов🍴🍝🍷
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}
