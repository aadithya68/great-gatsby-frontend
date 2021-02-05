import React from "react";
import { createPages } from "./controller";

class GroupsLayout extends React.Component {
  constructor(props) {
    super(props);
    this.headerStyle = {
      color: "yellow",
    };
  }


  getMovies(groupvalue){
    console.log(groupvalue);
    createPages(groupvalue).then((data) => {
      console.log(data);
      let movies = JSON.parse(data.data.posts).results;
      console.log(movies);
      this.props.setMoviesFromGroup(movies);
    });
  }

  render(){
    return (
      <div class="col-md-12">
        <div class="row">
          <div >
            <h6 onClick={() => this.getMovies("tamil")} style={this.headerStyle}>MOVIE PLAYLISTS</h6>
          </div>
          <div>
            <h6 onClick={() => this.getMovies("avengers")} style={this.headerStyle}>STARRED GROUPS</h6>
          </div>
          <div>
            <h6 onClick={() => this.getMovies("marvel")} style={this.headerStyle}>GROUPS</h6>
          </div>
        </div>
      </div>
    );
  }

}

export default GroupsLayout;
