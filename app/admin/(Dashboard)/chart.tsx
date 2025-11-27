import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { useQuery } from '@tanstack/react-query';
import {fetchAllUsers} from "@/app/lib/fetching-data"
import {User} from "@/app/lib/definition"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const { data: users, isLoading, error } = useQuery<User[], Error>({
  queryKey: ["users"],
  queryFn: fetchAllUsers,
});
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const visitorData = monthNames.map((month, index) => {
const visitors = users?.filter(user => {
const date = new Date(user.created_at);
return date.getMonth() === index; // match month index
}).length;

return { date: month.toLowerCase(), visitors };
});

console.log(visitorData);
const data = {
  labels: visitorData.map(d => d.date),
  datasets: [
    {
      label: 'Total Visitors',
      data: visitorData.map(d => d.visitors),
      borderColor: 'rgba(75,192,192,1)',
      fill: false,
    },
  ],
};

export default function VisitorGraph() {
  
  return <Line data={data} />;
}
