import React from 'react';
import {useState, useContext} from 'react';
import {globalContext} from '../../contexts/globalContext';
import {Link} from 'react-router-dom';

export default function Adding() {
  const {dispatch} = useContext(globalContext);
  const [name, setName] = useState('');
  const [picture, setPicture] = useState('');
  const [address, setAddress] = useState('');
  const [website, setWebsite] = useState('');
  const [extra, setExtra] = useState('');
  const [notification, setNotification] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (/\S+\s*/.test(name) && /\S+\s*/.test(address)) {
      dispatch({
        type: 'ADD_ITEM',
        payload: {
          name,
          picture,
          address,
          website,
          extra,
          id: Date.now(),
        },
      });
      setNotification(`Ресторан ${name} добавлен в список`);
      setName('');
      setPicture('');
      setAddress('');
      setWebsite('');
      setExtra('');
    } else {
      alert('Название и адрес ресторана должны содержать буквы');
    }
  }

  return (
    <>
      <div className='container list'>
        <form className='mx-5' onSubmit={handleSubmit}>
          <div className='my-5 addingForm'>
            <h3 className='captionTask'>Добавьте новый ресторан:</h3>
            <input
              required
              className='form-control '
              id='InputName'
              placeholder='Введите название ресторана*'
              maxLength='40'
              onChange={event => setName(event.target.value)}
              value={name}
            />
            <input
              className='form-control '
              type='url'
              id='InputPicture'
              placeholder='Добавьте ссылку на картинку'
              onChange={event => setPicture(event.target.value)}
              value={picture}
            />
            <input
              required
              className='form-control '
              id='InputAddress'
              placeholder='Введите адрес ресторана*'
              maxLength='80'
              onChange={event => setAddress(event.target.value)}
              value={address}
            />
            <input
              className='form-control '
              id='InputWebsite'
              placeholder='Добавьте ссылку на сайт ресторана'
              pattern='^(https?:\/\/)?(www\.)?([\da-z\.\-]+)\.([a-z\.]{2,6})([\/\w \.\-]*)*\/?$'
              onChange={event => setWebsite(event.target.value)}
              value={website}
            />
            <textarea
              className='form-control '
              id='InputExtra'
              type='text'
              placeholder='Введите дополнительную информацию...'
              onChange={event => setExtra(event.target.value)}
              value={extra}
            />
          </div>
          <p className='noteAdd'>{notification}</p>
          <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
            <Link to={`/list`}>
              <button type='button' className='btn me-md-2 addBtn'>
                К списку ресторанов
              </button>
            </Link>
            <button type='submit' className='btn me-md-2 addBtn'>
              Добавить
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
