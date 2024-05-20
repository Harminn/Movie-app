import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoOptionsOutline } from "react-icons/io5";
import MovieDetails from "./MovieDetails";
import { BiSolidCameraMovie } from "react-icons/bi";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <header className="fixed top-0 left-0 right-0 flex flex-row bg-slate-900 py-2 z-10">
          <div className="container mx-auto flex justify-center align-center ml-12">
            <h1 className="text-4xl text-red-600 font-bold ">Tudoom</h1>
            <BiSolidCameraMovie className="h-9 w-10 text-red-500 pl-2 pt-2" />
          </div>
          {/* <div className="flex gap-6 justify-end mt-0 mr-16">
            <IoSearch className="h-9 w-10 text-red-600" />
            <IoOptionsOutline className="text-red-600 h-9 w-10" />
          </div> */}
        </header>

        <main className="bg-slate-900 m-0 py-16">
          <div className="flex justify-center mb-8">
            <input
              type="text"
              placeholder="Search movies..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="px-4 py-2 bg-gray-600 border border-gray-300 rounded-l-md rounded-r-md focus:outline-none"
            />
            {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-gray-900">
              Search
            </button> */}
          </div>

          {/* <MovieList searchQuery={searchQuery} /> */}

          <MovieDetails searchQuery={searchQuery} />
        </main>

        <footer className="bg-gray-800 py-4">
          <div className="container mx-auto text-center text-white">
            &copy; 2024 Tudoom. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
};

export default App;
