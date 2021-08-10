import React from 'react';
import MyPosts from './My posts/MyPosts';
import s from './Profile.module.css';

function Profile() {
  return (
    <div className={s.content}>
      <div>
        <img src="https://i.ytimg.com/vi/uKntdthpcCY/maxresdefault.jpg"></img>
      </div>
      <div className={s.ava}>
        <img src ='https://pictureholiday.ru/wp-content/uploads/2018/05/krut-kart-dlya-dev-15-min.jpg'></img>
      </div>
      <MyPosts />
    </div>
  );
}

export default Profile;