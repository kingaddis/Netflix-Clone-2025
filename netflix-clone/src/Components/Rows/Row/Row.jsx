import React, { useEffect, useState } from "react";
import axios from "../../../utils/axios"; // Update if your axios path is different
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
// import ReactPlayer from 'react-youtube';
import "./row.css"; // Ensure you have the CSS file

const base_url = "https://image.tmdb.org/t/p/original";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
        .then((url) => {
          console.log(url)
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log("Trailer not found", error));
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map((movie, index) => (
          <img
            key={index}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name || movie.title}
          />
        ))}
      </div>

      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;




// import React, { useEffect, useState } from 'react';
// import axios from '../../../utils/axios';
// // import './Row.css'; 

// const base_url = "https://image.tmdb.org/t/p/original";
//https://image.tmdb.org/t/p/original/eGPH1IwktalozwCmeLTp3aPbHGC.jpg to gait the image base url +
//https://api.themoviedb.org/3/discover/tv?api_key=4821bb81e9afaf5e364f746e052d476c&with_networks=213
// baseur + api key +image 
// const Row = ({ title, fetchUrl, isLargeRow }) => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//              const request = await axios.get(fetchUrl);
//         console.log(request)
//         setMovies(request.data.results); // Fix this line
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     }

//     fetchData();
//   }, [fetchUrl]); // Dependency array should include fetchUrl

//   return (
//     <div className="row">
//       <h2>{title}</h2>

//       <div className="row_posters">
//         {movies.map((movie,index) => (
//           <img
//             key={index}
//             className={`row_poster ${isLargeRow && "row_posterLarge"}`}
//             src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
//             alt={movie.name || movie.title}
//           />
//         ))}
//     </div>
//       <div style={{padding: '40px'}}>
//       {trailerUrl && <YouTub video={trailerUrl}optsw={opts}/>}

//     </div>
//   );
// };

// export default Row;
