import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    count: 0,
    name: '',
    comment: '',
    commentsList: [],
  }

  nameInput = event => {
    this.setState({name: event.target.value})
  }

  commentInput = event => {
    this.setState({comment: event.target.value})
  }

  AddComment = () => {
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLike: false,
    }

    this.setState(previousState => ({
      count: previousState.count + 1,
      name: '',
      comment: '',
    }))

    this.setState(previousState => ({
      commentsList: [...previousState.commentsList, newComment],
    }))
  }

  likedComment = id => {
    this.setState(previousState => ({
      commentsList: previousState.commentsList.map(each => {
        if (each.id === id) {
          return {...each, isLike: !each.isLike}
        }
        return each
      }),
    }))
  }

  deleteComment = id => {
    const {commentsList} = this.state
    const updateComment = commentsList.filter(each => each.id !== id)
    this.setState({commentsList: updateComment})

    this.setState(previousState => ({
      count: previousState.count - 1,
    }))
  }

  render() {
    const {name, comment, commentsList, count} = this.state
    return (
      <div className="app-container">
        <div className="input-container">
          <div className="comment-input" onSubmit={this.AddComment}>
            <h1 className="heading">Comments</h1>
            <p className="para">Say Something about 4.0 Technologies</p>
            <input
              type="text"
              className="input-name"
              placeholder="Your name"
              onChange={this.nameInput}
              value={name}
            />
            <textarea
              type="text"
              className="input-comment"
              placeholder="Your Comment"
              onChange={this.commentInput}
              value={comment}
            />
            <button type="button" className="add-btn" onClick={this.AddComment}>
              Add Comment
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>
        <div className="comment-container">
          <p className="comments">
            <span className="count">{count}</span>Comments
          </p>
          <ul>
            {commentsList.map(each => (
              <CommentItem
                eachComment={each}
                key={each.id}
                isDelete={this.deleteComment}
                isLiked={this.likedComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
