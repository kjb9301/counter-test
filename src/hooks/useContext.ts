import { useContext } from 'react';

import { StateContext, DispatchContext } from '../contexts/BasketProvider';

export function useBasketState() {
  return useContext(StateContext);
}

export function useBasketDispatch() {
  return useContext(DispatchContext);
}
