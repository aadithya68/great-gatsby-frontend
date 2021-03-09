import React from "react";
import { createPages } from "./controller";
import MovieCardLayout from "./movie-card-layout";
import MovieDetailsLayout from "./movie-details-layout";
import GroupsLayout from "./groups-layout"
import "./feed-layout.css";

class FeedLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
    this.style = {
      background: "#333333",
    };
  }

  setMoviesFromGroup = data =>  this.setState(state => 
  ({...state, movies: data}), ()=> console.log(this.state));

  componentDidMount() {
    createPages("master").then((data) => {
      console.log(data);
      let movies = JSON.parse(data.data.posts).results;
      console.log(movies);
      this.setState({ movies: movies });
    });
  }

  render() {
    return (
      <div class="row">
          <div class="col-md-3" style={this.style}>
            <GroupsLayout setMoviesFromGroup={this.setMoviesFromGroup}/>
          </div>
          <div class="col-md-9 movies-column">
            {this.state.movies.map((movie) => {
              return (
                <MovieCardLayout>
                  <MovieDetailsLayout>{movie}</MovieDetailsLayout>
                </MovieCardLayout>
              );
            })}
          </div>
        </div>
    );
  }
}

export default FeedLayout;
