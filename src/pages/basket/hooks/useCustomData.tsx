import { useState, useEffect } from 'react';
import { BasketItem, BasketByArea } from '../../../lib/types/basketPageTypes';

function useCustomData(basketItems: BasketItem[]) {
  const [deliveryPlaces, setDeliveryPlaces] = useState<string[] | null>(null);
  const [
    basketItemsByArea,
    setBasketItemsByArea,
  ] = useState<BasketByArea | null>(null);

  useEffect(() => {
    const { basketItemsByArea, noDupDeliveryPlaces } = preprocessData(
      basketItems
    );
    setDeliveryPlaces(noDupDeliveryPlaces);
    setBasketItemsByArea(basketItemsByArea);
  }, [basketItems]);

  const preprocessData = (basketItems: BasketItem[]) => {
    const deliveryPlaces = basketItems.map((item) => item.deliveryPlace);
    const noDupDeliveryPlaces = deliveryPlaces.filter(
      (item, index, arr) => arr.indexOf(item) === index
    );

    const basketItemsByArea: BasketByArea = {};
    noDupDeliveryPlaces.forEach((place) => {
      basketItemsByArea[place] = basketItems.filter(
        (item) => place === item.deliveryPlace
      );
    });

    return { noDupDeliveryPlaces, basketItemsByArea };
  };

  return {
    deliveryPlaces,
    basketItemsByArea,
  };
}

export default useCustomData;
