import React from 'react';
import s from './Posts.module.css';

function Posts(props) {
  return (
    <div>
       <div className={s.item}>
          <img src='https://pictureholiday.ru/wp-content/uploads/2018/05/krut-kart-dlya-dev-15-min.jpg'></img>
          {props.message}
        </div>
    </div>
  );
}

export default Posts;