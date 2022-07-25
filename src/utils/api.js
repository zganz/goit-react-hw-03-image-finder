const KEY = '27763232-d5fad278e4d8773c17239879d';

export const getImages = async (searchStr, page) => {
  return fetch(
    `https://pixabay.com/api/?q=${searchStr}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  )
    .then(response => response.json())
    .then(({ hits }) => {
      const result =
        Array.isArray(hits) &&
        hits.map(({ id, webformatURL, largeImageURL }) => {
          return { id, webformatURL, largeImageURL };
        });

      return result || [];
    })
    .catch(error => {
      console.log(error);
    });
};
