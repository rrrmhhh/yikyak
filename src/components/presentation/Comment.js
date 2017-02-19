import React, { Component } from 'react'
import styles from './styles'

class Comment extends Component {
  render() {
    return (
      <div style={styles.comment.container}>
        <p style={styles.comment.theP}>{this.props.comment.body}</p>
        <span style={styles.comment.theU}>{this.props.comment.username}</span>
        <span style={styles.comment.gimmeroom}>|</span>
        <span style={styles.comment.theT}>{this.props.comment.timestamp}</span> <br />
        <hr />
      </div>
    )
  }
}

export default Comment
