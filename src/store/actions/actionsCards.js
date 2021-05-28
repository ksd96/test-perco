const actionsCardsTypes = {
  CHANGE_CARDS: `CHANGE_CARDS`,
  CHANGE_ACTIVE_CARD: `CHANGE_ACTIVE_CARD`
};

const actionsCards = {
  changeCards: (payload) => ({type: actionsCardsTypes.CHANGE_CARDS, payload}),
  changeActiveCard: (payload) => ({type: actionsCardsTypes.CHANGE_ACTIVE_CARD, payload})
};

export { actionsCards, actionsCardsTypes };
