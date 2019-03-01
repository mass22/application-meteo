import React from "react";
import { shallow } from "enzyme";
import searchBar from "../containers/search_bar";

describe("Tests de APP", () => {
  const wrapper = shallow(<searchBar />);
  it("Doit s'afficher correctement", () => {
    wrapper;
  });
});
