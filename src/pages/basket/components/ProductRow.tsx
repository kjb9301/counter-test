import React, { useEffect } from 'react';
import styled from 'styled-components';
import { BsHeart, BsTrash } from 'react-icons/bs';

import { BasketItem } from '../../../lib/types/basketPageTypes';
import { useCounter } from '../../../hooks/useCounter';
import { useBasketDispatch } from '../../../hooks/useContext';

import CheckBox from '../../../components/CheckBox';
import QuantityCounter from './QuantityCounter';

type ProductRowProps = {
  product: BasketItem;
};

function ProductRow({ product }: ProductRowProps) {
  const dispatch = useBasketDispatch();
  const {
    id,
    title,
    deliveryPlace,
    productImage,
    productOption,
    etcTitle,
    price,
    etcPrice,
    checked,
  } = product;
  const { quantity, etcQuantity, increase, decrease } = useCounter();

  useEffect(() => {
    dispatch({
      type: 'GET_ROW_INFO',
      payload: {
        id,
        deliveryPlace,
        price,
        quantity,
        etcPrice,
        etcQuantity,
      },
    });
  }, []);

  useEffect(() => {
    dispatch({
      type: 'UPDATE_ROW',
      payload: { id, quantity, etcQuantity },
    });
  }, [quantity, etcQuantity]);

  const removeProduct = () => {
    dispatch({
      type: 'REMOVE_PRODUCT',
      payload: id as any,
    });
  };

  return (
    <Wrapper>
      <Cell width='5%' direction=''>
        <CheckBox
          text=''
          checked={checked}
          onChange={() => console.log('change')}
        />
      </Cell>
      <Cell width='20%' direction='row'>
        <SubCell padding='10px 10px'>
          <ImgContainer>
            <Image src={productImage} />
          </ImgContainer>
        </SubCell>
        <SubCell padding='5px 5px'>
          <Text>{title}</Text>
        </SubCell>
      </Cell>
      <Cell width='20%' direction='column'>
        <SubCell padding='5px 0px'>
          <Text>{productOption}</Text>
        </SubCell>
        <SubCell padding='5px 0px'>
          <Text>{etcTitle}</Text>
        </SubCell>
      </Cell>
      <Cell width='15%' direction='column'>
        <SubCell padding='5px 0px'>
          <Text>{price}원</Text>
        </SubCell>
        <SubCell padding='5px 0px'>
          <Text>{etcPrice}원</Text>
        </SubCell>
      </Cell>
      <Cell width='15%' direction='column'>
        <SubCell padding='5px 0px'>
          <QuantityCounter
            type='main'
            quantity={quantity}
            increase={increase}
            decrease={decrease}
          />
        </SubCell>
        <SubCell padding='5px 0px'>
          <QuantityCounter
            type='etc'
            quantity={etcQuantity}
            increase={increase}
            decrease={decrease}
          />
        </SubCell>
      </Cell>
      <Cell width='15%' direction='column'>
        <SubCell padding='5px 0px'>
          <Text>{price * quantity}원</Text>
        </SubCell>
        <SubCell padding='5px 0px'>
          <Text>{etcPrice * etcQuantity}원</Text>
        </SubCell>
      </Cell>
      <Cell width='10%' direction=''>
        <BsHeart />
        <BsTrash onClick={removeProduct} />
      </Cell>
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  display: flex;
  height: 100px;
`;

const Cell = styled.li<{ width: string; direction: string }>`
  width: ${(props) => props.width};
  display: flex;
  flex-direction: ${(props) => (props.direction !== '' ? props.direction : '')};
  justify-content: center;
  align-items: center;

  svg {
    &:first-child {
      margin-right: 10px;
    }
  }
`;

const SubCell = styled.div<{ padding: string }>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: ${(props) => props.padding};
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: inherit;
  max-height: 100%;
`;

const Input = styled.input.attrs((props) => ({
  type: props.type,
}))``;

const Text = styled.p`
  font-size: 12px;
`;

export default React.memo(ProductRow);
