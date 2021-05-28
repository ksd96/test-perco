import "./styles/card.scss";
import PropTypes from 'prop-types';
import { useCallback } from "react";

const Card = ({openPopupHandler, card}) => {
  const openPopup = useCallback(() => {
    openPopupHandler(card.date);
  }, [card, openPopupHandler]);

  return (
    <li className="places__item card">
      <button onClick={openPopup} className="card__button" type="button">
        <img className="card__image" src={card.image} alt="изображение" />
      </button>
    </li>
  )
};

Card.propTypes = {
  openPopupHandler: PropTypes.func,
  card: PropTypes.shape({
    image: PropTypes.string,
    like: PropTypes.string,
    date: PropTypes.number,
    comment: PropTypes.arrayOf(PropTypes.string)
  })
}

export default Card;
