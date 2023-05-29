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
    // if (/[\S]{0,}\s/.test(name) && /[\S]{0,}\s/.test(address)) {
    let link =
      'https://img.freepik.com/premium-vector/front-view-of-restaurant-exterior-from-street-cafe-building-with-open-glass-door-window-and-furniture-empty-modern-coffeehouse-from-outside-urban-cafeteria-facade-colored-flat-vector-illustration_198278-16999.jpg?w=1380';
    if (picture.length !== 0) {
      link = picture;
    }
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        name,
        picture: link,
        address,
        extra,
        website,
        id: Date.now(),
        // taskCheckStatus: false,
        // taskEditStatus: false,
      },
    });
    setNotification(`Ресторан ${name} добавлен в список`)
    setName('');
    setPicture('');
    setAddress('');
    setWebsite('');
    setExtra('');
    // } else {
    //   alert('Название и адрес ресторана должны содержать буквы')
    // }
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
              id='InputPicture'
              placeholder='Введите адрес ресторана*'
              onChange={event => setAddress(event.target.value)}
              value={address}
            />
            <input
              className='form-control '
              id='InputPicture'
              placeholder='Добавьте ссылку на сайт ресторана'
              pattern='^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$ ||  [(http(s)?):\/\/(www\.)?\w-/=#%&\.\?]{2,}\.[a-z]{2,}([\w-/=#%&\.\?]*)'
              onChange={event => setWebsite(event.target.value)}
              value={website}
            />
            <textarea
              className='form-control '
              id='InputPicture'
              type='text'
              placeholder='Введите дополнительную информацию...'
              onChange={event => setExtra(event.target.value)}
              value={extra}
            />
          </div>
          <p>{notification}</p>
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
