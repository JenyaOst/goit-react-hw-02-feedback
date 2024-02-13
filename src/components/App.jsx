import React, { Component } from 'react'
import { Options } from './Options/Options';
import { Statistics } from './Statistics/Statistics';
 class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  handleAddFeedback = btnName => {
    this.setState(prevState => {
      return { [btnName]: prevState[btnName] + 1 }
    })
  }
  countTotalFeedback = total =>{

  }
  countPositiveFeedbackPercentage = percent =>{

  }


  render() {
    return (
      <div>App
      <Options
      options={Object.keys(this.state)}
      handleAddFeedback={this.handleAddFeedback}
        /> 
        <Statistics
        good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
        
        />
      </div>
    )
  }
}

export {App};