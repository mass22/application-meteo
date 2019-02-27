import React, { Component } from "react";
import SearchBar from "./search_bar";
import TemperatureList from "./temperature_list";
import { Container, Header } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Container text>
            <Header as="h1">Temperature tracker by Massimo Russo</Header>
            <SearchBar />
          </Container>
          <TemperatureList />
        </Container>
      </div>
    );
  }
}

export default App;
