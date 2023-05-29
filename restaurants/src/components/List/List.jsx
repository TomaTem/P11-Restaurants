import React from 'react';
import {useContext, useState} from 'react';
import {globalContext} from '../../contexts/globalContext';
import {Link} from 'react-router-dom';

export default function List() {
  const {state, dispatch} = useContext(globalContext);
  const [cut, setCut] = useState(true);

  function deletingItem(id) {
    dispatch({
      type: 'DELETE_ITEM',
      payload: id,
    });
  }

  return (
    <>
      <div className='container list'>
        <h1>Ваши любимые рестораны</h1>
        <div className='listCards'>
          {state.list.map(item => (
            <div className='card cardList' key={item.id}>
              <img
                src={item.picture}
                className='card-img-top imgList'
                alt='Фотография ресторана'
              />
              <div className='card-body'>
                <h5 className='card-title'>{item.name}</h5>
                <p className='card-text'>{item.address}</p>
                <p>
                  <a className='link-opacity-75 cuttedText' href={item.website}>
                    {item.website}
                  </a>
                </p>
                <div
                  className={`card-text ${cut ? 'cuttedText' : 'uncuttedText'}`}
                  onClick={() => {
                    setCut(!cut);
                  }}>
                  {item.extra}
                </div>
                <div className='listBtn'>
                  <Link to={`/edit/${item.id}`}>
                    <button type='button' className='btn editBtn'>
                      <i className='fa-regular fa-pen-to-square'></i>
                    </button>
                  </Link>
                  <button
                    type='button'
                    onClick={() => deletingItem(item.id)}
                    className='btn deleteBtn'>
                    <i className='fa-regular fa-square-minus'></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
