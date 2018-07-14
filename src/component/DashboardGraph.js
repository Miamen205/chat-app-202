import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import { connect } from 'react-redux';

function DashboardGraph(props) {
  console.log('DASHBOARD PROPS', props);
  let data;

  if (props.state.user.progress) {
    data = props.state.user.progress.map(a => {
      const newObj = {};
      newObj['name'] = a['name'];
      // newObj['Bench'] = parseInt(a['Bench (ORM)']);
      newObj['Deadlift'] = parseInt(a['Deadlift (ORM)']);
      // newObj['Squats'] = parseInt(a['Squat (ORM)']);
      // newObj['Overhead Press'] = parseInt(a['Overhead Press (ORM)']);
      newObj['Weight'] = parseInt(a['Weight']);
      return newObj;
    });
  }

  const formatter = value => `${value} lbs`;

  return (
    <div>
      <div
        style={{
          backgroundColor: 'gray',
          display: 'inline-block',
          margin: 'auto',
          position: 'center'
        }}>
        <LineChart
          width={800}
          height={400}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="name" tick={{ fill: 'black' }} />
          <YAxis tickFormatter={formatter} tick={{ fill: 'black' }} />
          <CartesianGrid strokeDasharray="3 3" fill="#696969" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Weight"
            stroke="#ed8c42"
            activeDot={{ r: 8 }}
          />
          {/* <Line type="monotone" dataKey="Bench" stroke="#a64dff" />
          <Line type="monotone" dataKey="Overhead Press" stroke="#22ad3e" />
          <Line type="monotone" dataKey="Deadlift" stroke="#11c1a7" />
          <Line type="monotone" dataKey="Squat" stroke="#11c1a7" /> */}
        </LineChart>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return { state };
};

export default connect(mapStateToProps)(DashboardGraph);
