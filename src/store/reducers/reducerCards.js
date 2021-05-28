import { actionsCardsTypes } from "../actions/actionsCards";
import initialStates from "../initialStates/initialStates";

const reducerCards= (state = initialStates.cards, action) => {
  switch(action.type) {
    case actionsCardsTypes.CHANGE_CARDS:
      return {
        ...state,
        cards: action.payload
      };
    case actionsCardsTypes.CHANGE_ACTIVE_CARD:
      return {
        ...state,
        openCard: action.payload
      };
    default:
      return state;
  };
};

export default reducerCards;
