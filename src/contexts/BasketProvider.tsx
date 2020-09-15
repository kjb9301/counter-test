import React, { createContext, Dispatch, useReducer } from 'react';

import { BasketItem, DeliveryFee } from '../lib/types/basketPageTypes';

type InitialState = {
  basketItems: BasketItem[] | null;
  basketItemsByArea: BasketItem[][] | null;
  deliveryFees: DeliveryFee[] | null;
  deliveryType: {
    type: string;
    price: number;
  };
};

type Action =
  | {
      type: 'GET_BASKET_ITEMS';
      payload: { list: BasketItem[]; listByArea: BasketItem[][] };
    }
  | {
      type: 'GET_DELIVERY_FEES';
      payload: DeliveryFee[];
    }
  | {
      type: 'SELECT_DELIVERY_TYPE';
      payload: { type: string; price: number };
    };

type InitialDispatch = Dispatch<Action>;

const initialState: InitialState = {
  basketItems: null,
  basketItemsByArea: null,
  deliveryFees: null,
  deliveryType: {
    type: '',
    price: 0,
  },
};

export const StateContext = createContext<InitialState | null>(null);
export const DispatchContext = createContext<InitialDispatch | null>(null);

function basketReducer(state: InitialState, action: Action): InitialState {
  switch (action.type) {
    case 'GET_BASKET_ITEMS':
      const { list, listByArea } = action.payload;
      return {
        ...state,
        basketItems: list,
        basketItemsByArea: listByArea,
      };
    case 'GET_DELIVERY_FEES':
      return {
        ...state,
        deliveryFees: action.payload,
      };
    case 'SELECT_DELIVERY_TYPE':
      const { type, price } = action.payload;
      return {
        ...state,
        deliveryType: {
          type,
          price,
        },
      };
    default:
      throw new Error('unhandled action');
  }
}

export function BasketProvider({ children }: { children: React.ReactNode }) {
  const [basketState, dispatch] = useReducer(basketReducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={basketState}>
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}
