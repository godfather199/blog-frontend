import React from 'react'
import Post from '../post/Post'
import './posts.css'

function Posts({posts}) {
  return (
    <div className="posts">
      <div className="postsWrapper">
        {posts.map((p) => (
          <Post post={p} />
        ))}
      </div>
    </div>
  );
}

export default Posts





