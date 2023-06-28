import React from 'react'
import '../../styles/UserWhoIsOnline.css'

export const UsersWhoIsOnline = ({ usersWhoIsOnlineList }) => {
  return (
    <React.Fragment>
      <h2>Who's online</h2>
      <ul className="users-online-list">
        {usersWhoIsOnlineList.map((user) => (
          <li key={user.id}>
            <img src={user.avatar} alt={user.name} />
          </li>
        ))}
      </ul>
    </React.Fragment>
  )
}
