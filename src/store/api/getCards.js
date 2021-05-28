import { api } from "./api";
import { actionsCards } from "../actions/actionsCards";

const getCards = () => {
  return dispatch => {
    api.getCards().then((cards) => {
      dispatch(actionsCards.changeCards(cards));
    });
  };
};

export default getCards;
