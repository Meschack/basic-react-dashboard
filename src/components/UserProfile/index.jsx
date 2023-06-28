import React from 'react'
import '../../styles/UserProfile.css'
import profilePicture from '../../assets/avatar1.jpg'

const userInfos = {
  avatar: profilePicture,
  name: 'Furquan Khan',
  email: 'furquankhan@gmail.com',
}

export const UserProfile = () => {
  return (
    <div className="user-profile">
      <img src={userInfos.avatar} alt="Avatar de l'utilisateur" />
      <div>
        <strong>{userInfos.name} </strong>
        <span>{userInfos.email}</span>
      </div>
      <i className="fas fa-chevron-down"></i>
    </div>
  )
}
