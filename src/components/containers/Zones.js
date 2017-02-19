import React, { Component } from 'react'
import Zone from '../presentation/Zone'
import superagent from 'superagent'

class Zones extends Component {

  constructor() {
    super()
    this.state = {
      zone: {
        name: '',
        zipCode: '',
        numComments: 0
      },
      list:[]
    }
  }

  componentDidMount() {
    superagent
      .get('/api/zone')
      .query(null)
      .set('Accept', 'application/json')
      .end((err, response)=> {
        if(err) {
          alert('ERROR: '+err)
          return
        }
        let results = response.body.results
        this.setState({list: results})
      })
  }

  submitZone(evt) {
    let updatedValue = Object.assign([], this.state.list)
    updatedValue.push(this.state.zone)
    this.setState({list: updatedValue})
  }

  updateZone(evt) {
    let updatedZone = Object.assign({}, this.state.zone)
    updatedZone[evt.target.id] = evt.target.value
    this.setState({zone: updatedZone})
  }

  render() {
    console.log(this.state.zone.zipCodes);
    const list = this.state.list.map((item, i)=> <li key={i}><Zone zone={item} /></li>)
    return (
      <div>

        <ol>
          {list}
        </ol>

      <input id="name" onChange={this.updateZone.bind(this)} className="form-control" type="text" name="zonename" placeholder="Zone Name"/> <br />
      <input id="zipCode" onChange={this.updateZone.bind(this)} className="form-control" type="text" name="zipCodes" placeholder="21040, 21041, ..."/> <br />
      <button className="btn btn-success" onClick={this.submitZone.bind(this)}>Submit Zone</button>

      </div>
    )
  }
}

export default Zones
