import React, { createContext, Dispatch, useReducer } from 'react';

import {
  BasketItem,
  BasketByArea,
  DeliveryFee,
  RowItem,
} from '../lib/types/basketPageTypes';

type InitialState = {
  basketList: BasketItem[] | null;
  basketListByArea: BasketByArea | null;
  deliveryFees: DeliveryFee[] | null;
  deliveryType: {
    type: string;
    price: number;
    free: boolean;
  };
  rowInfoes: RowItem[];
  allCheck: boolean;
  allCheckArea: boolean;
};

type Action =
  | {
      type: 'GET_BASKET_ITEMS';
      payload: BasketItem[];
    }
  | {
      type: 'GET_BASKET_LIST_BY_AREA';
      payload: BasketByArea;
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
      type: 'GET_ROW_INFO';
      payload: RowItem;
    }
  | {
      type: 'UPDATE_ROW';
      payload: RowItem;
    }
  | {
      type: 'FREE_DELIVERY_PRICE';
      payload: boolean;
    }
  | {
      type: 'REMOVE_PRODUCT';
      payload: any;
    }
  | {
      type: 'ALL_CHECK';
      payload: boolean;
    }
  | {
      type: 'ALL_CHECK_AREA';
      payload: { place: string; allCheckArea: boolean };
    };

type InitialDispatch = Dispatch<Action>;

const initialState: InitialState = {
  basketList: null,
  basketListByArea: null,
  deliveryFees: null,
  deliveryType: {
    type: '',
    price: 0,
    free: false,
  },
  rowInfoes: [],
  allCheck: false,
  allCheckArea: false,
};

export const StateContext = createContext<InitialState | null>(null);
export const DispatchContext = createContext<InitialDispatch | null>(null);

function basketReducer(state: InitialState, action: Action): InitialState {
  switch (action.type) {
    case 'GET_BASKET_ITEMS':
      return {
        ...state,
        basketList: action.payload,
      };
    case 'GET_BASKET_LIST_BY_AREA':
      return {
        ...state,
        basketListByArea: action.payload,
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
          ...state.deliveryType,
          type,
          price,
        },
      };
    case 'GET_ROW_INFO':
      return {
        ...state,
        rowInfoes: [...state.rowInfoes, action.payload],
      };
    case 'UPDATE_ROW':
      const { id, quantity, etcQuantity } = action.payload;
      return {
        ...state,
        rowInfoes: [
          ...state.rowInfoes.map((item) => {
            return item.id === id
              ? (item = { ...item, quantity, etcQuantity })
              : item;
          }),
        ],
      };
    case 'FREE_DELIVERY_PRICE':
      return {
        ...state,
        deliveryType: {
          ...state.deliveryType,
          free: action.payload,
        },
      };
    case 'REMOVE_PRODUCT':
      return {
        ...state,
        basketList: state.basketList.filter(
          (item) => item.id !== action.payload
        ),
      };
    case 'ALL_CHECK':
      return {
        ...state,
        allCheck: action.payload,
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
