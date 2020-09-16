import React, { createContext, Dispatch, useReducer } from 'react';

import {
  BasketItem,
  BasketByArea,
  DeliveryFee,
} from '../lib/types/basketPageTypes';

type InitialState = {
  basketList: BasketItem[] | null;
  basketListByArea: BasketByArea | null;
  deliveryFees: DeliveryFee[] | null;
  deliveryType: {
    type: string;
    price: number;
  };
};

type Action =
  | {
      type: 'GET_BASKET_ITEMS';
      payload: { basketList: BasketItem[]; basketListByArea: BasketByArea };
    }
  | {
      type: 'GET_DELIVERY_FEES';
      payload: DeliveryFee[];
    }
  | {
      type: 'SELECT_DELIVERY_TYPE';
      payload: { type: string; price: number };
    }
  | {
      type: 'GET_TOTAL';
      payload: any;
    };

type InitialDispatch = Dispatch<Action>;

const initialState: InitialState = {
  basketList: null,
  basketListByArea: null,
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
      const { basketList, basketListByArea } = action.payload;
      return {
        ...state,
        basketList,
        basketListByArea,
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
