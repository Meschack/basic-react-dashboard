import React from 'react'
import { Poll } from '../../components/Poll'
import { Calendar } from '../../components/Calendar'
import { CreateNewEvent } from '../../components/CreateNewEvent'
import { Carousel } from '../../components/Carousel'
import { useState } from 'react'
import { Login } from '../Login'

const firstPollElements = [
  {
    title: 'Intranet for Business',
    progressLevel: 42,
    color: 'var(--primary)',
  },

  {
    title: 'Community Demo',
    progressLevel: 60,
    color: 'green',
  },

  {
    title: 'School Demo',
    progressLevel: 19,
    color: 'red',
  },
]

const secondPollElements = [
  {
    title: 'YOyyy',
    progressLevel: 20,
    color: 'var(--primary)',
  },

  {
    title: 'Paul test',
    progressLevel: 20,
    color: 'green',
  },

  {
    title: 'Hbbn',
    progressLevel: 100,
    color: 'orange',
  },

  {
    title: 'Create a newsletter template',
    progressLevel: 20,
    color: 'green',
  },

  {
    title: 'Ronnie',
    progressLevel: 75,
    color: 'var(--primary)',
  },
]
export const Dashboard = () => {
  return (
    <div className="dashboard">
      <header>
        <h1>Welcome</h1>
        <p>
          Good morning, this is the dashboard a complete widgetized page where
          you can pick in 20 widgets
        </p>
      </header>

      <main>
        <Poll elements={firstPollElements} />
        <CreateNewEvent className="calendar-component" />
        <Poll elements={secondPollElements} />
      </main>

      <Carousel />
    </div>
  )
}
