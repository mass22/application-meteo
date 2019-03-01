import React from "react";
import { shallow } from "enzyme";
import App from "../containers/App";
import SearchBar from "../containers/search_bar";

describe("Tests de APP", () => {
  const wrapper = shallow(<App />);
  it("Doit s'afficher correctement", () => {
    wrapper;
  });

  it("Doit afficher le composant SearchBar correctement", () => {
    shallow(<SearchBar />);
  });

  it("Doit afficher le bon titre", () => {
    expect(wrapper.find("h1").text()).toBe(
      "Temperature tracker by Massimo Russo"
    );
  });
});
