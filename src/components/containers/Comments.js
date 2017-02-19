import React, { Component } from 'react'
import Comment from '../presentation/Comment'
import styles from './styles'
import superagent from 'superagent'

class Comments extends Component {
  constructor(){
    super()
    this.state = {
      comment: {
        username: '',
        body:'',
        timestamp:''
      },
      comments : []
    }
  }

  componentDidMount() {
    superagent
      .get('/api/comment')
      .query(null)
      .set('Accept', 'application/json')
      .end((err, response)=> {
        if(err) {
          alert("ERROR"+err)
          return
        }
        let results = response.body.results
        this.setState({comments: results})
      })
  }

  submitComment(evt) {
    // console.log("submitComment: "+JSON.stringify(this.state.comment));
    let updatedList = Object.assign([], this.state.comments)
    updatedList.push(this.state.comment)
    this.setState({comments: updatedList})
  }

  updateUsername(evt){
    let updatedComment = Object.assign({}, this.state.comment)
    updatedComment['username'] = evt.target.value
    this.setState({comment: updatedComment})
  }

  updateBody(evt) {
    let updatedComment = Object.assign({}, this.state.comment)
    updatedComment['body'] = evt.target.value
    this.setState({comment: updatedComment})
  }

  updateTime(evt) {
    let updatedComment = Object.assign({}, this.state.comment)
    updatedComment['timestamp'] = evt.target.value
    this.setState({comment: updatedComment})

  }

  render() {

    const comments = this.state.comments.map(
      (item, i)=>
        <li key={i}><Comment comment={item} /></li>
    )

    return(
      <div style={styles.comments.container}>
        <h3 style={styles.comments.title}>Comment for Zone 1</h3>
        <div style={styles.comments.innerContainer}>

          <ul style={styles.comments.theUL}>
            {comments}
          </ul>

          <input onChange={this.updateUsername.bind(this)} className="form-control" type='text' placeholder='username' /> <br />
          <input onChange={this.updateBody.bind(this)} className="form-control" type='text' placeholder='Comment' /> <br/>
          <input onChange={this.updateTime.bind(this)} className='form-control' type='text' placeholder='Time' /> <br />
          <button onClick={this.submitComment.bind(this)} className="btn btn-info">Submit Comment</button>

        </div>
      </div>
    )
  }
}

export default Comments
