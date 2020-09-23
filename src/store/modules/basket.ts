import { BasketItem } from '../../lib/types/basketPageTypes';

const GET_BASKET_ITEMS = 'basket/GET_BASKET_ITEMS' as const;

export const getBaksetItems = () => ({ type: GET_BASKET_ITEMS });

type BasketActions = ReturnType<typeof getBaksetItems>;

type BasketState = {
  basketItems: BasketItem[];
};

const initialState: BasketState = {
  basketItems: null,
};

function basket(state: BasketState = initialState, action: BasketActions) {
  switch (action.type) {
    case GET_BASKET_ITEMS:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default basket;
