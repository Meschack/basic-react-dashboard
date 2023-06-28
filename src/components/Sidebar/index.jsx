import React from 'react'
import { RecentPost } from '../RecentPost'
import { StyledList } from '../StyledList'
import { UserProfile } from '../UserProfile'
import { UsersWhoIsOnline } from '../UsersWhoIsOnline'
import avatar1 from '../../assets/avatar1.jpg'
import avatar2 from '../../assets/avatar2.jpg'
import avatar3 from '../../assets/avatar3.jpg'
import avatar4 from '../../assets/avatar4.jpg'
import avatar5 from '../../assets/avatar5.jpg'

import '../../styles/Sidebar.css'

const usersWhoIsOnlineList = [
  {
    avatar: avatar1,
    name: 'John Doe',
    id: '1dfq',
  },

  {
    avatar: avatar2,
    name: 'John Doe',
    id: '2xmkq',
  },

  {
    avatar: avatar3,
    name: 'John Doe',
    id: '3dsqc',
  },

  {
    avatar: avatar4,
    name: 'John Doe',
    id: '4xbljks',
  },

  {
    avatar: avatar5,
    name: 'John Doe',
    id: '5csdcv',
  },
]

const recentsPosts = [
  {
    cover: avatar1,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ipsam.',
    date: 1335246585,
    id: 'adcscs',
  },

  {
    cover: avatar2,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ipsam.',
    date: 13352464585,
    id: '4dscss6',
  },

  {
    cover: avatar3,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ipsam.',
    date: 1335246485,
    id: '21csd5',
  },

  {
    cover: avatar4,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ipsam.',
    date: 13352468585,
    id: '10csege8',
  },
]

export const Sidebar = () => {
  return (
    <div className="sidebar hide">
      <UserProfile />
      <div className="divider"></div>
      <StyledList />
      <div className="divider"></div>
      <UsersWhoIsOnline usersWhoIsOnlineList={usersWhoIsOnlineList} />
      <div className="divider"></div>
      <RecentPost postList={recentsPosts} />
    </div>
  )
}
