import PageCover from '@/components/common/cover/PageCover'
import FlightDetail from '@/components/flight-detail/FlightDetail'
import React from 'react'

const page = () => {
  return (
    <>
      <PageCover title="Confirm Flight Details" />
      <FlightDetail />
    </>
  )
}

export default page