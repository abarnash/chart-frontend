import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const Chart = ({data=data}) =>
  <LineChart
      width={600}
      height={300}
      data={data}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="ts" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="val" stroke="#8884d8" activeDot={{ r: 8 }} />
    // <Line type="monotone" dataKey="avgLos" stroke="#82ca9d" />
  </LineChart>

export default Chart
