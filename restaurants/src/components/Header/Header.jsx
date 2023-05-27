import React from 'react';

export default function Header() {
  return (
    <>
      <nav className='navbar navbar-expand-lg'>
        <div className='container-fluid'>
          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a className='nav-link' aria-current='page' href='#'>
                  О нас
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Список ресторанов
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Добавить новое место
                </a>
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
