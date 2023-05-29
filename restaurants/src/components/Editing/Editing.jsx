import React from 'react';
import {useParams, Link} from 'react-router-dom';
import {globalContext} from '../../contexts/globalContext';
import {useContext, useState, dispatch} from 'react';

export default function Editing() {
  const {state} = useContext(globalContext);
  const {id} = useParams();
  const currentCard = state.list.find(el => el.id === +id);
  console.log(currentCard);

  const {dispatch} = useContext(globalContext);
  const [newName, setNewName] = useState(currentCard.name);
  const [newPicture, setNewPicture] = useState(currentCard.picture);
  const [newAddress, setNewAddress] = useState(currentCard.address);
  const [newWebsite, setNewWebsite] = useState(currentCard.website);
  const [newExtra, setNewExtra] = useState(currentCard.extra);

  return (
    <>
      <div className='container editing'>
        <div className='card' key={currentCard.id}>
          <img
            src={currentCard.picture}
            className='card-img-top imgList'
            alt='...'
          />
          <div className='card-body'>
            <h5 className='card-title'>{currentCard.name}</h5>
            <p className='card-text'>{currentCard.address}</p>
            <p>
              <a class='link-opacity-75' href={currentCard.website}>
                Сайт ресторана
              </a>
            </p>
            <p className='card-text'>{currentCard.extra}</p>
          </div>
        </div>

        {/* <form className='mx-5' onSubmit={handleSubmit}> */}
        <form className='mx-5 editForm'>
          <div className='my-5 addingForm'>
            <h3 className='captionTask'>Добавьте новый ресторан:</h3>
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
              pattern='^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$ ||  [(http(s)?):\/\/(www\.)?\w-/=#%&\.\?]{2,}\.[a-z]{2,}([\w-/=#%&\.\?]*)'
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
            <Link to={`/list`}>
              <button type='submit' className='btn me-md-2 addBtn'>
                Сохранить изменения
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
