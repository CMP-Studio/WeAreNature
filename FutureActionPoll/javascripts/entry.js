require('../less/main.less');

import './index.css';

'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
import { PieChart, Pie, Sector, Cell, Label} from 'recharts';


const COLORS = ['#5cb7b3', '#146170', '#a65a95', '#cb7d31', '#cedb29'];

const data02 = [{name: 'Group A', value: 2400, label: 'Water'},
                {name: 'Group B', value: 4567, label: 'Habitat'},
                {name: 'Group C', value: 1398, label: 'Transportation'},
                {name: 'Group D', value: 9800, label: 'Food'},
                {name: 'Group E', value: 3908, label: 'Energy'}];

const styles = {
  
};



var Entry = React.createClass({
  renderLabel: function(props) {
    return (
      <text 
        x={props.x > props.cx ? props.x+15 : props.x - 15}
        y={props.y > props.cy ? props.y+15 : props.y - 15}
        textAnchor={props.x > props.cx ? 'start' : 'end'}
        fill={'#fefaeb'}
        style={{
          color: '#fefaeb',
          fontSize: 35,
          fontFamily: 'BrandonBody',
          flexDirection: 'column',
          textAlign: 'center',
          lineHeight: 1.5,
        }}
      >
          {props.label}
      </text>);
  },

  render: function(){
    return (
      <div className="myDiv">
      
      <img 
        src={require('./assets/background.jpg')} 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 1920,
          height: 1080,
        }}
      />
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 1920,
          height: 1080,
          background: '#000',
          opacity: 0.35,
        }}
      />

      <div className="Dim"> </div> 


      
      <text
        style={{
          position: 'absolute',
          top: 60,
          left: 60,
          color: '#fefaeb',
          fontSize: 70,
          fontFamily: 'BrandonTitle',
        }}
      > 
        We pledge to protect...
      </text>

      <text 
        className="pledgeCount"
        textAnchor="middle"
        fill="#82ca9d"
        style={{
          color: '#fefaeb',
          fontSize: 90,
          fontFamily: 'BrandonBody',
          flexDirection: 'column',
          textAlign: 'center',
          lineHeight: 1,
          position: 'absolute',
          top: 1080/2 - 15,
        }}> 
        203{'\n'}
        <text style={{ fontSize: 60, display: 'block', lineHeight: 1 }}>Pledges</text>
      </text>

      <PieChart
        className="chart"
        width={1920}
        height={1080}
        style={{
          position: 'relative',
          top: 60,
        }}
      >
        <Pie
          data={data02} 
          cx={'50%'}
          cy={'50%'}
          innerRadius={225}
          outerRadius={375}
          fill="#82ca9d"
          labelLine={false}
          label={this.renderLabel}
        >
          {
            data02.map((entry, index) => 
              <Cell 
                key={index}
                fill={COLORS[index % COLORS.length]}
                stroke={'transparent'}
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
