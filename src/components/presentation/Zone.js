import React, { Component } from 'react'
import styles from './styles'


class Zone extends Component {
  render() {
    const zipCode = this.props.zone.zipCodes[0]
    return (
      <div style={styles.zone.container}>
        <h2 style={styles.zone.header}>
          <a style={styles.zone.link} href='#'>{this.props.zone.name}</a>
        </h2>
        <span className="detail">{zipCode}</span><br />
        <span>{this.props.zone.numComments} Comments</span>
      </div>
    )
  }
}

export default Zone
