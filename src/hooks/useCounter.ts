import { useState } from 'react';

export function useCounter() {
  const [quantity, setQuantity] = useState(1);
  const [etcQuantity, setEtcQuantity] = useState(1);

  const increase = (type: string) => {
    if (type === 'main') {
      setQuantity((quantity) => quantity + 1);
    } else {
      setEtcQuantity((etcQuantity) => etcQuantity + 1);
    }
  };

  const decrease = (type: string) => {
    if (type === 'main') {
      setQuantity((quantity) => (quantity !== 1 ? quantity - 1 : quantity));
    } else {
      setEtcQuantity((etcQuantity) =>
        etcQuantity !== 1 ? etcQuantity - 1 : etcQuantity
      );
    }
  };

  return {
    quantity,
    etcQuantity,
    increase,
    decrease,
  };
}
