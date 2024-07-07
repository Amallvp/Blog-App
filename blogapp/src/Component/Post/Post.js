import React from 'react'
import './Post.css'
import { Link } from 'react-router-dom'

function Post({ post }) {

  const PF = "http://localhost:5000/images/"

  return (
    <div className="post">
      <div className="postItems">
        <Link className='link' to={`/view/${post._id}`}>{post.photo && <img className='post-img' src={PF + post.photo} alt="" />}</Link>

        <div className="postDetail">
          <div className='postDetails'>
            {/* <span className='postDetails-cat'>Music</span>
            <span className='postDetails-cat'>Life</span> */}
          </div>
          <div>
            <span className='postDetails-cat'>{new Date(post.createdAt).toDateString()}</span>
          </div>
        </div>

        <div className="postTitles">
          <Link className='link' to={`/view/${post._id}`} ><span className='postTitle'>{post.title}</span></Link>
          <p className='postDescription'>{post.desc}</p>
        </div>



      </div>
    </div>
  )
}

export default Post