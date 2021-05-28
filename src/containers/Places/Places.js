import Card from '../../components/Card/Card';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState, useCallback } from 'react';
import getCards from '../../store/api/getCards';
import './styles/places.scss';
import { actionsCards } from '../../store/actions/actionsCards';

const Places = () => {
  const data = useSelector(store => store.cards);
  const dispatch = useDispatch();
  const [countCards, setCountCards] = useState({firstCard: 0, lastCard: 9});

  useEffect(() => {
    dispatch(getCards());
  }, [dispatch]);

  const openPopup = useCallback((date) => {
    dispatch(actionsCards.changeActiveCard(date));
  }, [dispatch]);

  const getMoreCards = useCallback(() => {
    const STEP = 9;
    const newLastCard = countCards.lastCard + STEP;

    setCountCards({firstCard: countCards.firstCard, lastCard: newLastCard});
  }, [countCards]);

  return (
    <section className="places page__section">
      <ul className="places__list">
       {
        data.cards && Object.values(data.cards).slice(countCards.firstCard, countCards.lastCard).map((card) => {
           return <Card key={card.date} openPopupHandler={openPopup} card={card} />
         })
       }
      </ul>
      { Object.values(data.cards).length >= countCards.lastCard &&
        <button onClick={getMoreCards} className="places__button-more" type="button">больше фото</button>
      }
    </section>
  )
};

export default Places;
