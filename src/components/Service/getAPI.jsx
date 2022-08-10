function fetchImages(findValue, pageNumber) {
  const API_KEY = '28048409-7c5d239fb0980a21fe8515423';
  return fetch(
    `https://pixabay.com/api/?q=${findValue}&page=${pageNumber}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  )
    .then(responce => {
      if (responce.ok) {
        return responce.json();
      }
      return Promise.reject(new Error(`Oh no... We cant find ${findValue}`));
    })
    .then(res => {
      return res.hits;
    });
}

const api = { fetchImages };

export default api;