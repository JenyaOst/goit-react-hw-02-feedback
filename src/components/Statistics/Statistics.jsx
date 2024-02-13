import React, { Component } from 'react'
import css from './FeedbackStatistics.module.css';
 class Statistics extends Component {
    
  render() {
    const { good, neutral, bad } = this.props;
    return (
        <>
        <table className={css['statistics-table']}>
          <tbody>
            <tr className={css['statistics-table-row']}>
              <td>Good:</td>
              <td>{ good }</td>
            </tr>
            <tr className={css['statistics-table-row']}>
              <td>Neutral:</td>
              <td>{ neutral }</td>
            </tr>
            <tr className={css['statistics-table-row']}>
              <td>Bad:</td>
              <td>{ bad }</td>
            </tr>
          </tbody>
        </table>
      </>
    )
  }
}
export {Statistics};
