import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchTemperature } from "../actions/index";
import { Input } from "semantic-ui-react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchTemperature(this.state.term);
    this.setState({ term: "" });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="C--searchBar">
        <Input
          action="Search"
          placeholder="Get a five day forecast in your favorite cities"
          onChange={this.onInputChange}
          value={this.state.term}
        />
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTemperature }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
