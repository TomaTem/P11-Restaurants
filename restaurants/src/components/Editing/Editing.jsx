import React from 'react';
import {useParams} from 'react-router-dom';
import {globalContext} from '../../contexts/globalContext';
import {useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom';

export default function Editing() {
  const {state, dispatch} = useContext(globalContext);
  const navigate = useNavigate();
  const {id} = useParams();
  const currentCard = state.list.find(el => el.id === +id);
  const [newName, setNewName] = useState(currentCard.name);
  const [newPicture, setNewPicture] = useState(currentCard.picture);
  const [newAddress, setNewAddress] = useState(currentCard.address);
  const [newWebsite, setNewWebsite] = useState(currentCard.website);
  const [newExtra, setNewExtra] = useState(currentCard.extra);

  function handleSubmit(event) {
    event.preventDefault();
    if (/\S+\s*/.test(newName) && /\S+\s*/.test(newAddress)) {
      dispatch({
        type: 'EDIT_ITEM',
        payload: {
          newName,
          newPicture,
          newAddress,
          newWebsite,
          newExtra,
          id: currentCard.id,
        },
      });
      navigate('/list', {replace: true});
    } else {
      alert('Название и адрес ресторана должны содержать буквы');
    }
  }

  return (
    <>
      <div className='container editing'>
        <div className='card cardEditing' key={currentCard.id}>
          <img
            src={currentCard.picture}
            className='card-img-top imgList'
            alt='Фотография ресторана'
          />
          <div className='card-body'>
            <h5 className='card-title'>{currentCard.name}</h5>
            <p className='card-text'>{currentCard.address}</p>
            <p>
              <a className='link-opacity-75' href={currentCard.website}>
                {currentCard.website}
              </a>
            </p>
            <p className='card-text'>{currentCard.extra}</p>
          </div>
        </div>

        <form className='mx-5 editForm' onSubmit={handleSubmit}>
          <div className='my-5 addingForm'>
            <h3 className='captionTask'>Отредактируйте карточку ресторана:</h3>
            <input
              required
              className='form-control '
              id='InputName'
              placeholder='Введите название ресторана*'
              onChange={event => setNewName(event.target.value)}
              value={newName}
            />
            <input
              className='form-control '
              type='url'
              id='InputPicture'
              placeholder='Добавьте ссылку на картинку'
              onChange={event => setNewPicture(event.target.value)}
              value={newPicture}
            />
            <input
              required
              className='form-control '
              id='InputPicture'
              placeholder='Введите адрес ресторана*'
              onChange={event => setNewAddress(event.target.value)}
              value={newAddress}
            />
            <input
              className='form-control '
              id='InputPicture'
              placeholder='Добавьте ссылку на сайт ресторана'
              pattern='^(https?:\/\/)?(www\.)?([\da-z\.\-]+)\.([a-z\.]{2,6})([\/\w \.\-]*)*\/?$'
              onChange={event => setNewWebsite(event.target.value)}
              value={newWebsite}
            />
            <textarea
              className='form-control '
              id='InputPicture'
              type='text'
              placeholder='Введите дополнительную информацию...'
              onChange={event => setNewExtra(event.target.value)}
              value={newExtra}
            />
          </div>
          <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
            <button type='submit' className='btn me-md-2 addBtn'>
              Сохранить изменения
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
