import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "semantic-ui-react";
import GraphTemperature from "../../components/Graph/graph_component";
import "./temperature-list.scss";
const Timestamp = require("react-timestamp");

class TemperatureList extends Component {
  renderTemperature(cityData) {
    if (cityData.cod >= "400") {
      return false;
    }

    const name = cityData.city.name;
    const temps = cityData.list.map((temps, i) => {
      return <Table.Cell key={i}>{Math.round(temps.temp.day)} °C</Table.Cell>;
    });
    const date = cityData.list.map(date => {
      return (
        <Table.HeaderCell key={date.dt}>
          <Timestamp time={date.dt} format="date" />
        </Table.HeaderCell>
      );
    });
    return (
      <div key={Math.random()} className="tc__item">
        <Table stackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>City</Table.HeaderCell>
              {date}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <strong>{name}</strong>
              </Table.Cell>
              {temps}
            </Table.Row>
          </Table.Body>
        </Table>
        <GraphTemperature cityTemps={cityData} />
      </div>
    );
  }

  render() {
    return (
      <div className="C--table-list-container">
        {this.props.temperature.map(this.renderTemperature)}
      </div>
    );
  }
}

function mapStateToProps({ temperature }) {
  return { temperature };
}

export default connect(mapStateToProps)(TemperatureList);
