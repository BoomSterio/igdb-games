import React from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'

const Rating = ({ size = 50, rating }) => {
  if(!rating) return <div style={{margin: '0 5px'}}>N/A</div>

  return (
    <div style={{ width: `${size}px` }}>
      <CircularProgressbar
        value={rating}
        text={Math.round(rating)}
        styles={buildStyles({
          rotation: 0.25,
          textSize: '30px',
          pathTransitionDuration: 0.6,
          trailColor: `transparent`,
          textColor: '#89c80e',
          pathColor: '#89c80e',
        })}
      />
    </div>
  )
}

export default Rating
