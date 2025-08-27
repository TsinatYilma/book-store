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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);
const visitorData = [
  { date: 'jan', visitors: 120 },
  { date: 'feb', visitors: 150 },
  { date: 'mar', visitors: 90 },
  { date: 'Aor', visitors: 200 },
  { date: 'May', visitors: 170 },
];
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
