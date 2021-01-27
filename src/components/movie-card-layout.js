import React from "react";
import "./movie-card-layout.css";

export default function MovieCardLayout({ children }) {
  console.log({children}.children.props.children.backdrop_path);
  const Background = {children}?.children?.props?.children?.backdrop_path ? ('https://image.tmdb.org/t/p/w500' + {children}.children.props.children.backdrop_path) : null; 
  const style = {
    height: 400,
    backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%),url(${Background})`
  };
  return (
    <div class="col-md-3" id="movie-card" style={style}>
      {children}
    </div>
  );
}
