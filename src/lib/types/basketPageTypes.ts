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

export type BasketByArea = {
  [key: string]: BasketItem[];
};

export type DeliveryFee = {
  deliveryType: string;
  deliveryPrice: number;
};

export type RowItem = {
  id: number;
  deliveryPlace?: string;
  price?: number;
  quantity: number;
  etcPrice?: number;
  etcQuantity: number;
};
