"use client"
import {useState} from 'react'
import { StarIcon, UserIcon } from '@heroicons/react/24/outline'

const StarRating = () => {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    function handleRating(value:number){
        setRating(()=>(value))
    }
    return(
        <div className="flex">
            { [...Array(5)].map((star, i) =>{
                            const ratingValue = i + 1
                              return  (
                              
                              <label htmlFor="" key={i}>
                                    <input type="radio" className='hidden' name='starRating' value={ratingValue} />
                                    <StarIcon
                                        key={i}
                                        className={`w-[24px] h-[24px] hover:cursor-pointer `}
                                        style={{
                                            fill: ratingValue <= (hover || rating) ? '#0AA0A1' : 'transparent',
                                            stroke: '#0AA0A1',
                                            strokeWidth: 1,
                                          }}
                                        onMouseEnter={()=>(setHover(ratingValue))}
                                        onMouseLeave={()=>(setHover(0))}
                                        onClick={() => handleRating(ratingValue)}
                                        />
                                </label>)
                            })} 
        </div>
    )
}

export default StarRating;