import React, { createContext, Dispatch, useReducer } from 'react';

import { BasketItem, DeliveryFee } from '../lib/types/basketPageTypes';

type InitialState = {
  basketItems: BasketItem[] | null;
  deliveryFees: DeliveryFee[] | null;
};

type Action = any;

type InitialDispatch = Dispatch<Action>;

export const StateContext = createContext<InitialState | null>(null);
export const DispatchContext = createContext<InitialDispatch | null>(null);

const initialState = {
  basketItems: null,
  deliveryFees: null,
};

function basketReducer(state: InitialState, action: Action): InitialState {
  switch (action.type) {
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
