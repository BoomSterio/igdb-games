import React from 'react'
import {buildStyles, CircularProgressbar} from 'react-circular-progressbar'

const Rating = ({size = 50, rating = 0}) => {
    return (
        <div style={{width: `${size}px`}}>
            <CircularProgressbar value={rating} text={Math.round(rating)}
                                 styles={buildStyles({
                                     rotation: 0.25,
                                     textSize: '30px',
                                     pathTransitionDuration: 0.5,
                                     trailColor: `transparent`,
                                     textColor: '#89c80e',
                                     pathColor: '#89c80e',
                                 })}/>
        </div>
    )
}

export default Rating
