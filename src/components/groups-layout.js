import React from "react";
import { createPages } from "./controller";

export default function GroupsLayout(setMovieList) {
  console.log(setMovieList)
  const style = {
    backgroundImage: `linear-gradient(to right, #7d7e7d 0%,#0e0e0e 100%)`,
  };
  const headerStyle = {
    color: "yellow",
  };
  
  const fetchMovies = (movieName, e) => {
    createPages(movieName).then((data) => {
      let movies = JSON.parse(data.data.posts).results;
      setMovieList(movies); //Array of Movies
    });
  }

  return (
    <div class="col-md-3" style={style}>
      <div class="row">
        <div class="col-md-12">
          <h6 style={headerStyle}>MOVIE PLAYLISTS</h6>
        </div>
        <div class="col-md-12">
          <h6 style={headerStyle}>STARRED GROUPS</h6>
        </div>
        <div class="col-md-12">
          <h6 style={headerStyle}>GROUPS</h6>
          <h9 style={headerStyle} onClick = {(e) => fetchMovies('Vij', e)}>JDBoys</h9>
          <h9 style={headerStyle} onClick = {(e) => fetchMovies('Mar', e)}>MaariBoys</h9>
          <h9 style={headerStyle} onClick = {(e) => fetchMovies('Aji', e)}>ViswasamBoys</h9>
        </div>
      </div>
    </div>
  );
}
