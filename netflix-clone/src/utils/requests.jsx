const API_KEY=Process.env.REACT_APP_API_KRY;


const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
fetchTvShow: `/discover/tv?api_key=${API_KEY}&language=en-US`,

};

export default requests;

// https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35 you get the joson file
// https://api.themoviedb.org/3/trending/all/week?api_key=4821bb81e9afaf5e364f746e052d476c
///  "backdrop_path": "/rAgsOIhqRS6tUthmHoqnqh9PIAE.jpg", with the bas URL YOUWILL SEE TH IMAGE data from joson