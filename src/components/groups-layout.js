import React from "react";
import { createPages } from "./controller";
import "./groups-layout.css";

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
      <ul class="flex">
          <li >
            <ul  style={this.headerStyle}>
              Movie playlist
              <li><a onClick={() => this.getMovies("tamil")}>Kollywood playlist</a></li>
            </ul>
          </li>
          <li>
            <ul  style={this.headerStyle}>
              Starred groups
              <li><a onClick={() => this.getMovies("Avengers")}>Avengers</a></li>
            </ul>
          </li>
          <li>
            <ul style={this.headerStyle}>
                Groups
                <li><a onClick={() => this.getMovies("marvel")}>Marvel maniacs</a></li>
            </ul>
          </li>
      </ul>
    );
  }

}

export default GroupsLayout;
