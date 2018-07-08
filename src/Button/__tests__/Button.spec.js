import React from "react";
import { shallow } from "enzyme";

import Button from "../Button";

it("renders <Button /> without throwing", () => {
  const wrapper = shallow(<Button>I am a Button</Button>);
  expect(wrapper).toMatchSnapshot();
});
