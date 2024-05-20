import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { useImmer } from "use-immer";

const MovieDetails = ({ searchQuery }) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    const url =
      "https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "f6c7d07c18mshfa1f06c1640ff0dp12a09ejsn4b39844f7f4b",
        "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setData(result.data);
      // console.log(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  const handleMovieClick = (imdbUrl) => {
    window.open(imdbUrl, "_blank");
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-16 ">
        {data
          .filter((movieData) =>
            movieData.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((movieData) => (
            <div
              onClick={() => handleMovieClick(movieData.link)}
              key={movieData.id}
              className="bg-white rounded-md shadow-md overflow-hidden"
            >
              <img
                src={movieData.image}
                className="w-full h-64 object-cover hover:opacity-70 hover:cursor-pointer"
              />
              <div className="p-4">
                <h2 className="font-bold text-lg mb-2">{movieData.title}</h2>
                <p className="text-gray-700 text-sm">
                  Rating :- {movieData.ranking}
                </p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default MovieDetails;
