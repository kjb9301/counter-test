import { BasketItem } from '../../lib/types/basketPageTypes';

const GET_BASKET_ITEMS = 'basket/GET_BASKET_ITEMS' as const;
const ALL_CHECK_AREA = 'basket/ALL_CHECK_AREA' as const;

export const getBaksetItems = (data: BasketItem[]) => ({
  type: GET_BASKET_ITEMS,
  payload: data,
});

export const checkAllArea = (data: string) => ({
  type: ALL_CHECK_AREA,
  payload: data,
});

type BasketActions =
  | ReturnType<typeof getBaksetItems>
  | ReturnType<typeof checkAllArea>;

type BasketState = {
  basketItems: BasketItem[];
  checkArea: boolean;
};

const initialState: BasketState = {
  basketItems: [],
  checkArea: false,
};

function basket(state: BasketState = initialState, action: BasketActions) {
  switch (action.type) {
    case GET_BASKET_ITEMS:
      return {
        ...state,
        basketItems: action.payload,
      };
    case ALL_CHECK_AREA:
      const place = action.payload;
      return {
        ...state,
        checkArea: !state.checkArea,
        basketItems: state.basketItems.map((item) =>
          item.deliveryPlace === place
            ? (item = { ...item, checked: !state.checkArea })
            : item
        ),
      };
    default:
      return state;
  }
}

export default basket;
