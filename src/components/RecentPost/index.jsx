import React from 'react'

import '../../styles/RecentPost.css'

const convertTimestampToLocaleDateString = (timestamp) => {
  const date = new Date(timestamp * 1000) // Timestamp multiplié par 1000 pour l'obtenir en millisecondes

  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  }

  const dateString = date.toLocaleDateString('fr-FR', options)

  return dateString
}

export const RecentPost = ({ postList }) => {
  return (
    <React.Fragment>
      <h2>Recent Posts</h2>
      <ul className="recent-posts">
        {postList.map((post) => (
          <li key={post.id}>
            <img src={post.cover} alt="Miniature de la publication" />
            <div>
              <p>{post.content}</p>
              <em>{convertTimestampToLocaleDateString(post.date)}</em>
            </div>
          </li>
        ))}
      </ul>
    </React.Fragment>
  )
}
