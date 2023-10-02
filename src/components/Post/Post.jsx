import React from 'react'
import './Post.css'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'

const Post = ({ data }) => {
  return (
    <div className="Post">
        <img src={data.img} alt="" />

        <div className="postReact">
            <img src={data.likes?Heart: NotLike} alt="" />
            <img src={Comment} alt="" />
            <img src={Share} alt="" />
        </div>
    </div>
  )
}

export default Post