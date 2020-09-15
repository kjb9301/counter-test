import React from 'react';
import styled from 'styled-components';

function ProductCategoryRow() {
  return (
    <Wrapper>
      <Category className='etc' />
      <Category className='product'>상품정보</Category>
      <Category className='division'>구분</Category>
      <Category className='price'>가격</Category>
      <Category className='quantity'>수량</Category>
      <Category className='sum'>합계</Category>
      <Category className='management'>관리</Category>
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  border: 1px solid red;
  display: flex;
  background-color: #f2f2f2;

  .etc {
    width: 5%;
  }

  .product {
    width: 20%;
  }

  .division {
    width: 20%;
  }

  .price {
    width: 15%;
  }

  .quantity {
    width: 15%;
  }

  .sum {
    width: 15%;
  }

  .management {
    width: 10%;
  }
`;

const Category = styled.li`
  border: 1px solid blue;
  text-align: center;
  padding: 5px 0;
`;

export default ProductCategoryRow;
