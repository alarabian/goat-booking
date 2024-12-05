import Link from 'next/link'
import React from 'react'

const BusSorting = () => {
  return (
    <>
      <div className="busSorting">
        <div className="busLength">
         <h6>showing <strong>50 Buses</strong></h6>
        </div>
        <div className="sortList">
          <h6>Sort By:</h6>
          <ul>
            <li className='active'><Link href="#">Relevance</Link></li>
            <li><Link href="#">Fastest</Link></li>
            <li><Link href="#">Cheapest</Link></li>
            <li><Link href="#">Departure</Link></li>
            <li><Link href="#">Arrival</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default BusSorting