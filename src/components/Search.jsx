import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    type: "all",
  };
  handleChange = (event) => {
    this.setState({ search: event.target.value });
  };
  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMov(this.state.search, this.state.type);
    }
  };

  handleClick = () => {
    this.props.searchMov(this.state.search, this.state.type);
  };

  handleFilter = (event) => {
    this.setState(
      () => ({ type: event.target.dataset.type }),
      () => {
        this.props.searchMov(this.state.search, this.state.type);
      }
    );
  };

  render() {
    return (
      <div className="row">
        <div className="input-field">
          <input
            placeholder="Search"
            type="text"
            className="form"
            value={this.state.search}
            onChange={this.handleChange}
            onKeyDown={this.handleKey}
          />

          <button className="btn search-btn" onClick={this.handleClick}>
            Search
          </button>
        </div>
        <div>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="all"
              onChange={this.handleFilter}
              checked={this.state.type === "all"}
            />
            <span>All</span>
          </label>

          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="movie"
              onChange={this.handleFilter}
              checked={this.state.type === "movie"}
            />
            <span>Movies only</span>
          </label>

          <label>
            <input
              name="type"
              className="with-gap"
              type="radio"
              data-type="series"
              onChange={this.handleFilter}
              checked={this.state.type === "series"}
            />
            <span>Series</span>
          </label>
        </div>
      </div>
    );
  }
}

export { Search };
