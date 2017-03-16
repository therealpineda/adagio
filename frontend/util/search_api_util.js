export const searchDatabase = (query) => {
  return $.ajax({
    method: 'get',
    url: 'api/search',
    data: { query },
  });
};
