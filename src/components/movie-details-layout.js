import React from "react";
export default function MovieDetailsLayout({ children }) {
  console.log(children);
  return (
    <div class="row">
      <div class="col-md-12">
        <h2>{children.title}</h2>
      </div>
      <div class="col-md-12">
        <h4>{children.original_title}</h4>
      </div>
      <div class="col-md-12">
        <p>{children.overview}</p>
      </div>
      <div class="col-md-12">
        <p>Vote Count : {children.vote_count}</p>
      </div>
    </div>
  );
}
