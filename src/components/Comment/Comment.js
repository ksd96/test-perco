import PropTypes from 'prop-types';
import user from "./img/icon-user.svg";
import "./styles/comment.scss";

const Comment = ({comment}) => {
  return (
    <li className="comment">
      <div className="comment__user-info">
        <img src={user} className="comment__user-photo" alt="фото пользователя" />
        <p className="comment__user-name">Пользователь</p>
      </div>
      <p className="comment__text">{comment}</p>
    </li>
  )
};

Comment.propTypes = {
  comment: PropTypes.string
};

export default Comment;
