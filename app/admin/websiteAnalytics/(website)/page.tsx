import '@/app/globals.css';
import { gabarito, gantari } from '@/app/ui/fonts'
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function Page(){
    return (
            <div className="flex flex-col mt-8 text-[20px] text-gray-400">
                <div className="flex flex-col p-2 gap-2">
                    <p className="flex items-center gap-2 font-bold text-white"><span className="w-2 h-2 rounded-full bg-white "></span>Overview Dashboard</p>
                    <p className="flex items-center gap-4 text-lg "><span className="w-1 h-1 rounded-full bg-white "></span>Key Metrics: Display large, easy-to-read numbers for metrics like:</p>
                    <div className="flex flex-col px-10">
                           <p className="flex items-center gap-4 text-lg "><span className="w-1 h-1 rounded-full bg-white "></span>Total Users</p>
                           <p className="flex items-center gap-4 text-lg "><span className="w-1 h-1 rounded-full bg-white "></span>Total Books</p>
                           <p className="flex items-center gap-4 text-lg "><span className="w-1 h-1 rounded-full bg-white "></span>Total Book Ratings</p>
                    </div>
                    <p className="flex items-center gap-2 font-bold text-white"><span className="w-2 h-2 rounded-full bg-white "></span>Book Performance</p>
                    <p className="flex items-center gap-4 text-lg "><span className="w-1 h-1 rounded-full bg-white "></span>Total Page Views (Today, This Week, This Month)</p>
                    <p className="flex items-center gap-4 text-lg "><span className="w-1 h-1 rounded-full bg-white "></span>User Growth Chart: A line graph showing new user sign-ups over a period (e.g., last 30 days).</p>
                    <p className="flex items-center gap-4 text-lg "><span className="w-1 h-1 rounded-full bg-white "></span>Top 10 Most Rated Books: A list or bar chart showing the books with the most user ratings.</p>
                    <p className="flex items-center gap-4 text-lg "><span className="w-1 h-1 rounded-full bg-white "></span>Top 10 Highest-Rated Books: A list or bar chart of the books with the highest average rating.</p>
                    <p className="flex items-center gap-4 text-lg "><span className="w-1 h-1 rounded-full bg-white "></span>Most Viewed Books: A list of the books that have received the most page views.</p>
                    <p className="flex items-center gap-2 font-bold text-white"><span className="w-2 h-2 rounded-full bg-white "></span>Genre Trends:</p>
                    <p className="flex items-center gap-4 text-lg "><span className="w-1 h-1 rounded-full bg-white "></span>Most Popular Genres: A pie chart or bar chart showing which genres are most-read or have the most books.</p>
                    <p className="flex items-center gap-4 text-lg "><span className="w-1 h-1 rounded-full bg-white "></span>Genre Engagement: A chart showing which genres get the highest ratings on average.</p>
                    <p className="flex items-center gap-2 font-bold text-white"><span className="w-2 h-2 rounded-full bg-white "></span>User Engagement:</p>
                    <p className="flex items-center gap-4 text-lg "><span className="w-1 h-1 rounded-full bg-white "></span>Active Users: A line graph of daily or weekly active users.</p>
                    <p className="flex items-center gap-4 text-lg "><span className="w-1 h-1 rounded-full bg-white "></span>Average Session Duration: If you track session time, display the average duration users spend on the site.</p>
                    <p className="flex items-center gap-4 text-lg "><span className="w-1 h-1 rounded-full bg-white "></span>Pages per Session: If you track this metric, show the average number of pages viewed during a session.</p>

                </div>
            
            </div>
    )
}
