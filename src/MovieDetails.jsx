import React, { useState, useEffect } from "react";

const MovieDetails = ({ searchQuery }) => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch("https://dummyapi.online/api/movies")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  //   const filteredMovies = data.filter((movie) =>
  //     movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  //   );

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-16 ">
        {data
          .filter((movieData) =>
            movieData.movie.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((movieData) => (
            <div
              key={movieData.id}
              className="bg-white rounded-md shadow-md overflow-hidden"
            >
              <img
                src={movieData.posterUrl}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="font-bold text-lg mb-2">{movieData.movie}</h2>
                <p className="text-gray-700 text-sm">{movieData.rating}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default MovieDetails;
