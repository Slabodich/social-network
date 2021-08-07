import React from 'react';
import s from './Profile.module.css';

function Profile() {
    return (
      <div className={s.content}>
      <div>
        <img src="https://i.ytimg.com/vi/uKntdthpcCY/maxresdefault.jpg"></img>
      </div>
      <div>
        ava
      </div>
      <div>
        My post
      </div>
      <div>
        new post
      </div>
      <div>
        <div>
          post1
        </div>
        <div>
          post2
        </div>
      </div>
    </div>
    );
}

export default Profile;