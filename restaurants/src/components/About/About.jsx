import React from 'react';

export default function About() {
  return (
    <>
      <div className='container about'>
        <h1>Идеальное место - в твоем списке!</h1>
        <div className='textAbout'>
          Мы – команда людей, которые любят хорошо поесть и проводить время в
          приятной атмосфере. Все мы знаем, что выбор ресторана – это целое
          искусство, и мы создали этот сайт, чтобы помочь вам в этом нелегком
          деле. Мы предлагаем нашим пользователям составлять список любимых
          ресторанов и делиться им с друзьями. <br /> Наша цель – сделать поиск
          ресторанов простым и удобным и помочь вам найти идеальное место для
          ваших следующих встреч и праздников!
        </div>

        <div className='cardAbout'>
          <div className='card'>
            <img
              src='https://www.buro247.ru/images/2017/07/poturemskaya/Christian_Veranda.jpg'
              className='card-img-top'
              alt='...'
            />
            <div className='card-body'>
              <h5 className='card-title'>Christian</h5>
              <p className='card-text'>Кутузовский пр-т, 2/1, стр. 1-а</p>
            </div>
          </div>

          <div className='card'>
            <img
              src='https://www.buro247.ru/images/2017/07/poturemskaya/26-jul-2017-10-best-terraces-in-moscow-7.jpg'
              className='card-img-top'
              alt='...'
            />
            <div className='card-body'>
              <h5 className='card-title'>Valenok</h5>
              <p className='card-text'>Цветной бульвар, 5</p>
            </div>
          </div>

          <div className='card'>
            <img
              src='https://www.buro247.ru/images/2017/07/poturemskaya/26-jul-2017-10-best-terraces-in-moscow-2.jpg'
              className='card-img-top'
              alt='...'
            />
            <div className='card-body'>
              <h5 className='card-title'>Турандот</h5>
              <p className='card-text'>Тверской б-р, 26, стр. 3</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
