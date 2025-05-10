// import React from 'react';
// import './Banner.css'; // if you're using styles

// function Banner({ movie }) {
//   return (
//     <div 
//       className="banner"
//       style={{
//         backgroundSize: "cover",
//         backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//         <div className='banner_contents'>
//             <h1 className='banner_title'>
//                 {movie?.title || movie?.name || movie?.original_name}
//             </h1>
//             <div className='banner_buttons'>
//                 <button className='banner_buttons_play'>Play</button>
//                 <button className='banner_buttons'>List</button>
//             </div>
//             <h1 className='banner_description'>{truncate(movie.overview, 150)}</h1>
//         </div>
//         <div className='banner_fadeBottom'></div>
  
//     </div>
    
//   );
// }

// export default Banner;
import React, { useState, useEffect } from 'react';
import axios from '../../utils/axios'
import requests from '../../utils/requests';
import './banner.css';

function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      console.log(request)//to check the data we gat.
      const results = request.data.results;
      setMovie(results[Math.floor(Math.random() * results.length)]);
    }
    fetchData();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '…' : str;
  };

  return (
    <div 
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_buttons_play">Play</button>
          <button className="banner_buttons">My List</button>
        </div>
        <h1 className="banner_description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner_fadeBottom" />
    </div>
  );
}

export default Banner;
