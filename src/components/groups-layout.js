import React from "react";

export default function GroupsLayout() {
  const style = {
    backgroundImage: `linear-gradient(to right, #7d7e7d 0%,#0e0e0e 100%)`,
  };
  const headerStyle = {
    color: "yellow",
  };
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
        </div>
      </div>
    </div>
  );
}
