require('../less/main.less');

import './index.css';

'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
import { PieChart, Pie, Sector, Cell, Label} from 'recharts';
import TransitionGroup from 'react-addons-transition-group';
import { TweenMax } from 'gsap';

const data = [
  {name: 'Water', value: 0, label: 'Water', color: '#5cb7b3'},
  {name: 'Habitat', value: 0, label: 'Habitat', color: '#146170'},
  {name: 'Transportation', value: 0, label: 'Transportation', color: '#a65a95'},
  {name: 'Food', value: 0, label: 'Food', color: '#cb7d31'},
  {name: 'Energy', value: 0, label: 'Energy', color: '#cedb29'}
];

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
  width: 100,
  height: 100,
  backgroundColor: 'black',
  position: 'absolute',
  left: 100,
  bottom: 100,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
};


class Entry extends React.Component {
  componentWillMount () {
    this.renderLabel = this.renderLabel.bind(this);

    this.setState({
      total: 0,
      data: data,
      voteEnteringFromLeft: false,
      categoryEnteringFromLeft: null,
      voteEnteringFromRight: false,
      categoryEnteringFromRight: null,
    })
  }

  renderLabel (props) {
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
          {props.value !== 0 ? props.label : ''}
      </text>);
  }

  animateVote (direction, category) {
    let cateogries = ['Transportation', 'Habitat', 'Water', 'Food', 'Energy'];
    category = cateogries[Math.floor(Math.random()*5)]

    if (direction === 'left') {
      this.setState({
        voteEnteringFromLeft: true,
        categoryEnteringFromLeft: category,
      });
    } else {
      this.setState({
        voteEnteringFromRight: true,
        categoryEnteringFromRight: category,
      });
    }
  }

  addVote(direction, category) {
    var updatedData = this.state.data.map((entry, index) => {
      if (entry.name === category) {
        entry.value = entry.value + 1;
      }
      return entry;
    })

    if (direction === 'left') {
      this.setState({
        total: this.state.total+1,
        data: updatedData,
        categoryEnteringFromLeft: null,
      });
    } else {
      this.setState({
        total: this.state.total+1,
        data: updatedData,
        categoryEnteringFromRight: null,
      });
    }
  }

  render () {
    return (
      <div className="container">
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 1920,
            height: 1080,
            background: '#000',
            opacity: 0.00,
          }}
        />
        
        <text
          style={{
            position: 'absolute',
            top: 40,
            left: 40,
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
            top: 1080/2 - 20,
          }}> 
          {this.state.total+'\n'}
          <text style={{ fontSize: 60, display: 'block', lineHeight: 1 }}>Pledges</text>
        </text>

        <PieChart
          className="chart"
          width={1920}
          height={1080}
          style={{
            position: 'relative',
            top: 50,
          }}
        >
          <Pie
            data={this.state.data} 
            cx={'50%'}
            cy={'50%'}
            innerRadius={225}
            outerRadius={375}
            fill="#82ca9d"
            labelLine={false}
            label={this.renderLabel}
            isAnimationActive={true}
          >
            {
              this.state.data.map((entry, index) => 
                <Cell 
                  key={index}
                  fill={entry.color}
                  stroke={'transparent'}
                />
              )
            }
          </Pie> 
         </PieChart>

         <div
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
            }}
            onClick={() => { this.animateVote('left', 'Transportation')}}
         >
            left
        </div>


        <div
            style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
            }}
            onClick={() => { this.animateVote('right', 'Habitat') }}
         >
            right
        </div>

        <TransitionGroup>
          { this.state.voteEnteringFromLeft && 
            <Vote 
              direction={'left'}
              enterCallback={() => { 
                this.setState({
                  voteEnteringFromLeft: false,
                });
              }}
              category={this.state.categoryEnteringFromLeft}
              exitCallback={() => {
                this.addVote('left', this.state.categoryEnteringFromLeft);
              }}
            />
          }
        </TransitionGroup>

        <TransitionGroup> 
          { this.state.voteEnteringFromRight && 
            <Vote 
              direction={'right'}
              enterCallback={() => { 
                this.setState({
                  voteEnteringFromRight: false,
                });
              }}
              category={this.state.categoryEnteringFromRight}
              exitCallback={() => {
                this.addVote('left', this.state.categoryEnteringFromRight);
              }}
            />
          }
        </TransitionGroup>

      </div>
    )
  }
};


class Vote extends React.Component {

  constructor(props) {
    super(props);
    this.enterAnimationComplete = this.enterAnimationComplete.bind(this);
    this.exitAnimationComplete = this.exitAnimationComplete.bind(this);
  }

  enterAnimationComplete (props) {
    this.props.enterCallback();
  }

  exitAnimationComplete (props) {
    this.props.exitCallback();
  }

  componentWillEnter (callback) {
    const el = this.container;
    TweenMax.fromTo(el, 1, {y: 500, opacity: 1}, {y: 0, opacity: 1, onComplete: () => {
      callback();
      this.enterAnimationComplete();
    }});
  }

  componentWillLeave (callback) {
    const el = this.container;
    if (this.props.direction === 'left') {
      TweenMax.fromTo(el, 1, {x: 0, opacity: 1, scale: 1 }, {x: 750, opacity: 1, scale: 0, onComplete: () => {
        callback();
        this.exitAnimationComplete();
      }});
    } else {
      TweenMax.fromTo(el, 1, {x: 0, opacity: 1, scale: 1 }, {x: -750, opacity: 1, scale: 0, onComplete: () => {
        callback();
        this.exitAnimationComplete();
      }});
    }
  }

  render () {
    return (<div
      ref={c => this.container = c}
      style={
        this.props.direction === 'left' ? {
            position: 'absolute',
            top: 500,
            width: 150,
            height: 150,
            left: 100,
          } : { 
            position: 'absolute',
            top: 500,
            width: 150,
            height: 150,
            right: 100,
        }
      }
      >
        {this.props.category === 'Transportation' && <img style={{ flex: 1 }} src={require('./assets/transportation_icon.png')} /> }
        {this.props.category === 'Habitat' && <img style={{ flex: 1 }} src={require('./assets/habitat_icon.png')} /> }
        {this.props.category === 'Water' && <img style={{ flex: 1 }} src={require('./assets/water_icon.png')} /> }
        {this.props.category === 'Food' && <img style={{ flex: 1 }} src={require('./assets/food_icon.png')} /> }
        {this.props.category === 'Energy' && <img style={{ flex: 1 }} src={require('./assets/energy_icon.png')} /> }
      </div>);
  }
}

ReactDOM.render(<Entry />, document.getElementById('content'));
