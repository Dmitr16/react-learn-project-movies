import React from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

class Main extends React.Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
    fetch("https://www.omdbapi.com/?i=tt3896198&apikey=e7053792&s=lost")
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  }
  searchMov = (str, type = "all") => {
    this.setState({ loading: true });
    fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=e7053792&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  };

  render() {
    return (
      <main className="container content">
        <Search searchMov={this.searchMov} />
        {this.state.loading ? (
          <Preloader />
        ) : (
          <Movies movies={this.state.movies} />
        )}
      </main>
    );
  }
}

export { Main };
