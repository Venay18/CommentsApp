// Write your code here
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {eachComment, isDelete, isLiked} = props
  const {id, name, comment, isLike} = eachComment
  const initialLetter = name.slice(0, 1)

  const onClickLike = () => {
    isLiked(id)
  }
  const onClickDelete = () => {
    isDelete(id)
  }

  const imgUrl = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  return (
    <li>
      <p>{initialLetter}</p>
      <h1>{name}</h1>

      <p>{comment}</p>
      <button type="text">
        <img src={imgUrl} alt="like" onClick={onClickLike} />
      </button>
      <button type="text">
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          alt="delete"
          onClick={onClickDelete}
        />
      </button>
      <hr />
    </li>
  )
}

export default CommentItem
