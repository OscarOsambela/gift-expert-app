import React from "react";
import { shallow } from "enzyme";
import GifGridItem from "../../Components/GifGridItem";

describe("Pruebas en <GifgridItem />", () => {
  test("debe de mostrar el componente correctamente", () => {
    const wrapper = shallow(<GifGridItem />);
  });
});
