import React from 'react'
import Landing from '../components/Landing'
import EventsPage from '../components/EventsPage'

const Home = () => {
  return (
    <div className='w-full h-full'>
        <Landing/>
        <EventsPage/>
    </div>
  )
}

export default Home