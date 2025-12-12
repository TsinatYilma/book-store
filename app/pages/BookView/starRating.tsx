"use client"
import {useState} from 'react'
import { StarIcon, UserIcon } from '@heroicons/react/24/outline'
import { authClient } from "@/app/lib/auth-client"
import { useMutation } from "@tanstack/react-query";


const StarRating = ({bookId}:{bookId: string}) => {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    const { data: session, isPending, error } = authClient.useSession();

    function handleRating(value:number){
        setRating(()=>(value))
        console.log("rate value:", value)
        mutation.mutate(value); 

    }
    const mutation = useMutation({
      mutationFn: async (value: number) => {
        const session = await authClient.getSession();
        const userId = session?.data?.user?.id;
  
        if (!userId) throw new Error("User not authenticated");
  
        const res = await fetch(`http://localhost:3000/api/ratings/books/${bookId}`, {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            rateValue: value,
          }),
        });
  
        if (!res.ok) throw new Error("Failed to submit rating");
        return res.json();
      },
      onSuccess: (data) => {
        console.log("Rating submitted:", data);
      },
      onError: (err) => {
        console.error("Error submitting rating:", err);
      },
    });
    async function submitRating(value: number) {
      const session = await authClient.getSession();
      const userId = session?.data?.user?.id;
    
      if (!userId) {
        console.error('User not authenticated');
        return;
      }
    
      await fetch(`http://localhost:3000/api/ratings/books/${bookId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          rateValue: value,
        }),
        credentials: 'include',
      });
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