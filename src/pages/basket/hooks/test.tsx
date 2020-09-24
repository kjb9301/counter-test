import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { checkAllArea } from '../../../store/modules/basket';
import { RootState } from '../../../store/modules';

function useTest(place: string) {
  console.log('useTest');
  const [checkArea, setCheckArea] = useState(false);
  const dispatch = useDispatch();

  const handleChange = () => {
    setCheckArea(!checkArea);
  };

  useEffect(() => {
    dispatch(checkAllArea(place));
  }, [checkArea]);

  return { checkArea, handleChange };
}

export default useTest;
