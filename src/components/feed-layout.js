import React from "react";
import { createPages } from "./controller";
import MovieCardLayout from "./movie-card-layout";
import MovieDetailsLayout from "./movie-details-layout";
import GroupsLayout from "./groups-layout"

class FeedLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
    this.style = {
      backgroundImage: `linear-gradient(to right, #7d7e7d 0%,#0e0e0e 100%)`,
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
      <div class="col-md-12">
          <div class="col-md-3" style={this.style}>
            <GroupsLayout setMoviesFromGroup={this.setMoviesFromGroup}/>
          </div>
          <div class="col-md-9">
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
