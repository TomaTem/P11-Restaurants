import React from 'react';
import {useContext} from 'react';
import {globalContext} from '../../contexts/globalContext';
import {Link} from 'react-router-dom';

export default function List() {
  const {state, dispatch} = useContext(globalContext);

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
          <div className='card' key={item.id}>
            <img
              src={item.picture}
              className='card-img-top imgList'
              alt='...'
            />
            <div className='card-body'>
              <h5 className='card-title'>{item.name}</h5>
              <p className='card-text'>{item.address}</p>
              <p><a class="link-opacity-75" href={item.website}>Сайт ресторана</a></p>
              <p className='card-text'>{item.extra}</p>
              <div className='listBtn'>
                <Link to={`/edit/${item.id}`}>
                <button
                  type='button'
                  // onClick={() => editingTask(post.id)}
                  className='btn editBtn'>
                  <i class='fa-regular fa-pen-to-square'></i>
                </button>
                </Link>
                <button
                  type='button'
                  onClick={() => deletingItem(item.id)}
                  className='btn deleteBtn'>
                  <i class='fa-regular fa-square-minus'></i>
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
