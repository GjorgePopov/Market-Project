import React from 'react'
import WeeklyDeals from '../../components/weeklydeals/WeeklyDeals'
import CarouselSection from '../../components/carousel/Carousel'
import GrabnGo from '../../components/grab/Grab'

export default function Home() {
  return (
    <div>
         
         <CarouselSection/>
        <WeeklyDeals/>
        <GrabnGo/>

    </div>
  )
}


