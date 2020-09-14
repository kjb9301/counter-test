export type BasketItem = {
  id: number;
  title: string;
  deliveryPlace: string;
  deliveryType: string;
  productOption: string;
  productImage: string;
  price: number;
  etcTitle: string;
  etcPrice: number;
};

export type DeliveryFee = {
  deliveryType: string;
  deliveryPrice: number;
};
