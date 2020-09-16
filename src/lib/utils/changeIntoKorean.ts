export const getPlaceName = (place: string) => {
  switch (place) {
    case 'seoul':
      return '서울';
    case 'incheon':
      return '인천';
    default:
      return '';
  }
};
