import React from 'react';

export default function Footer() {
  return (
    <footer className='text-center text-lg-start fixed-bottom footer'>
      <div className='text-center p-1'>
        © 2023 {' '}
        <a
          className='text-dark'
          href='https://github.com/TomaTem'
          target='_blank'
          rel='noreferrer'>
          TomaTem
        </a>
      </div>
    </footer>
  );
}
