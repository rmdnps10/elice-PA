export const queryStringMaker = (
  type: string,
  searchUrl: string,
  filterItem: string,
) => {
  if (type === 'delete') {
    if (filterItem === '유료') {
      console.log('hello2');
      const updatedQueryString = searchUrl
        .split('&')
        .filter((param) => !param.includes('fare'))
        .join('&');
      return updatedQueryString === '' ? '/?' : `/?${updatedQueryString}`;
    } else if (filterItem === '무료') {
      console.log('hello1');
      const updatedQueryString = searchUrl
        .split('&')
        .filter((param) => !param.includes('free'))
        .join('&');
      return updatedQueryString === '' ? '/?' : `/?${updatedQueryString}`;
    } else {
      console.log('hello');
      return '/' + searchUrl;
    }
  } else if (type === 'add') {
    let query = '';
    switch (filterItem) {
      case '무료':
        query = 'free';
        break;
      case '유료':
        query = 'fare';
        break;
      default:
        return '/' + searchUrl;
    }
    const queryString = searchUrl === '' ? '?' : '&';
    return `${searchUrl}${queryString}price=${query}`;
  } else {
    return '/' + searchUrl;
  }
};