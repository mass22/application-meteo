import React from "react";
import { shallow } from "enzyme";
import App from "../containers/App";
import SearchBar from "../containers/search_bar";

describe("Tests de APP", () => {
  it("Doit s'afficher correctement", () => {
    shallow(<App />);
  });

  it("Doit afficher le composant SearchBar correctement", () => {
    shallow(<SearchBar />);
  });
});
