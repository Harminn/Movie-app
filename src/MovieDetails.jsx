import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";

const MovieDetails = ({ searchQuery }) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // const fetchData = () => {
  //   fetch("https://dummyapi.online/api/movies")
  //     .then((response) => response.json())
  //     .then((jsonData) => setData(jsonData))
  //     .catch((error) => console.error("Error fetching data:", error));
  // };

  const fetchData = async (page) => {
    const url =
      "https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "278de21abdmshf13b4533e2b1d20p198a3bjsn079762c16e28",
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
    fetchData(currentPage);
  }, [currentPage]);

  console.log(data);

  const handleMovieClick = (imdbUrl) => {
    window.open(imdbUrl, "_blank");
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-16 ">
        {data
          // .filter((movieData) =>
          //   movieData.movie.toLowerCase().includes(searchQuery.toLowerCase())
          // )
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

      <div className="flex justify-center mt-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-l-md hover:cursor-pointer hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-gray-900"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="px-4 py-2 bg-gray-200 text-gray-700">
          Page {currentPage}
        </span>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:cursor-pointer hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-gray-900"
          onClick={handleNextPage}
          disabled={data.length < 10} // Disable next button if less than 10 items
        >
          Next
        </button>
      </div>
    </>
  );
};

export default MovieDetails;
