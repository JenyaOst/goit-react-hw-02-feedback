import React, { Component } from 'react'
import css from './Options.module.css';

 class Options extends Component {
  render() {
    return (
      <div className={css.options}>
        {this.props.options.map( option => {
        return(
        <button
        key={option}
        type='button' 
        className={css.button}
        onClick={() => this.props.handleAddFeedback(option)}
        >{option}</button>
       )})}
       
      </div>
    )
  }
}
export {Options};