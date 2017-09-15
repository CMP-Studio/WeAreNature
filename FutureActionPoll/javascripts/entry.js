require('../less/main.less');

'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
import { PieChart, Pie, Sector, Cell} from 'recharts';


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const data02 = [{name: 'Group A', value: 2400}, {name: 'Group B', value: 4567},
                  {name: 'Group C', value: 1398}, {name: 'Group D', value: 9800},
                  {name: 'Group E', value: 3908}, {name: 'Group F', value: 4800}];

var Entry = React.createClass({
  render: function(){
    return (
      <div className="myDiv">
      <img 
        src={require('../assets/background.jpg')} 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 1920,
          height: 1080,
        }}
      />

      <div className="Dim"> </div> 


      
       <text> We Pledge to Protect</text>
      <text className="pledgeCount" textAnchor="middle" fill="#82ca9d" > 203 Pledges So Far </text>
      <PieChart className="chart" width={600} height={600}>
        <Pie data={data02}  cx={300} cy={300} innerRadius={200} outerRadius={250} fill="#82ca9d" label>
          {
            data02.map((entry, index) => 
              <Cell 
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            )
          }
        </Pie> 
       </PieChart>

      
      </div>
    )
  }
});

ReactDOM.render(<Entry />, document.getElementById('content'));
