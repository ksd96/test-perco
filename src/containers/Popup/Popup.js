import { useSelector, useDispatch } from "react-redux";
import { useCallback, useState, useEffect } from "react";
import { actionsCards } from "../../store/actions/actionsCards";
import Comment from "../../components/Comment/Comment";
import classNames from 'classnames/bind';
import "./styles/popup.scss";

const Popup = () => {
  const data = useSelector(store => store.cards);
  const dispatch = useDispatch();
  const card = data.cards[data.openCard];
  const [stateValue, setStateValue] = useState({value: ""});

  useEffect(() => {
    const closeEsc = (event) => {
      if (event.key === `Escape`) {
        closePopup();
      };
    };
    document.body.style.overflow = `hidden`;
    window.addEventListener(`keydown`, closeEsc);
    return () => {
      document.body.style.overflow = `auto`;
      window.removeEventListener(`keydown`, closeEsc);
    };
  });

  const closePopup = useCallback(() => {
    dispatch(actionsCards.changeActiveCard(null));
  }, [dispatch]);

  const changeValue = useCallback((evt) => {
    setStateValue({value: evt.target.value});
  }, []);

  const addNewComment = useCallback((evt) => {
    evt.preventDefault();
    if (stateValue.value === "") {
      return
    };
    const newCards = data.cards;
    const comment = stateValue.value;
    newCards[data.openCard].comments.unshift(comment);
    dispatch(actionsCards.changeCards(newCards));
    setStateValue({value: ""});
  }, [stateValue, data.cards, data.openCard, dispatch]);

  const likeClickHandler = useCallback(() => {
    const newCards = data.cards;
    const item = newCards[data.openCard];
    if (item.like === `true`) {
      item.like = `false`
    } else {
      item.like = `true`
    };
    dispatch(actionsCards.changeCards(newCards));
  }, [data.cards, data.openCard, dispatch]);

  const classLike = classNames({
    "popup__button-like": true,
    "popup__button-like_active": card.like === "true"
  });

  return (
    <div className="popup">
      <div className="popup__container">
        <img className="popup__image" src={card.image} alt="изображение" />
        <div className="popup__wrapper">
          <ul className="popup__comments">
            {
              card && card.comments.length > 0 && card.comments.map((comment) => {
                return (
                  <Comment key={comment} comment={comment} />
                )
              })
            }
          </ul>
          <div className="popup__like-container">
            <button onClick={likeClickHandler} className={classLike} type="button"></button>
          </div>
          <form onSubmit={addNewComment} className="popup__form">
            <textarea onChange={changeValue} className="popup__new-comment" value={stateValue.value} placeholder="Добавить комментарий"></textarea>
            <button className="popup__button-submit" type="submit"></button>
          </form>
        </div>
        <button onClick={closePopup} className="popup__button-close"></button>
      </div>
    </div>
  )
};

export default Popup;
