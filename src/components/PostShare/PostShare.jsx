import React, { useState, useRef } from 'react'
import './PostShare.css'
import ProfileImage from '../../img/profileImg.jpg'
import { UilScenery, UilPlayCircle, UilLocationPoint, UilSchedule } from "@iconscout/react-unicons"

const PostShare = () => {

  const [image, setImage] = useState(null)
  const imageRef = useRef()

  const onImageChange = (e) => {
    if(e.target.files && e.target.files[0]) {
        let img = e.target.files[0];
        setImage({
            image: URL.createObjectURL(img),
        });
    }
  }

  return (
    <div className="PostShare">
        <img src={ProfileImage} alt="" />
        <div>
            <input 
              type="text"
              placeholder='Expresss whats new'
            />
        <div className="postOptions">
            <div className="option"
              style={{ color: "var(--video)" }}
            >
                <UilScenery />
                Photo
            </div>
            <div className="option"
              style={{ color: "var(--photo)" }}
            >
                <UilPlayCircle />
                Video
            </div>
            <div className="option"
              style={{ color: "var(--location)" }}
            >
                <UilLocationPoint />
                Location
            </div>
            <div className="option"
              style={{ color: "var(--shedule)" }}
            >
                <UilSchedule />
                Schedule
            </div>
            <button className='button ps-button'>Share</button>
            <div style={{ display: "none" }}>
              <input type="file" name="myImage" ref={imageRef} onChange={onImageChange}/>
            </div>
        </div>
        </div> 
    </div>
  )
}

export default PostShare