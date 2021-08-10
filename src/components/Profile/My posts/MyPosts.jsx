import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Posts/Posts';

function MyPosts() {
  return (
    <div>
      My post
      <div>
        <textarea></textarea>
        <button>Send</button>
        <button>Remove</button>
      </div>
      <Posts message = 'Hi it is me ' />
    </div>
  );
}

export default MyPosts;