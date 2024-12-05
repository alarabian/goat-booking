

import PageCover from '@/components/common/cover/PageCover'
import PaymentSuccess from '@/components/payment-success/PaymentSuccess'
import React from 'react'

const page = () => {
  return (
    <>
      <PageCover title={"Payment Successful"}  />
      <PaymentSuccess />
    </>
  )
}

export default page