import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Select from "./Select.atom";

const testRadio = e => {
  //action(e.target.value);
  action("clicked");
};

storiesOf("Select", module).add("Select with option", () => {
  const optionData = [
    {
      value: 1,
      text: "One"
    },
    {
      value: 2,
      text: "Two"
    }
  ];

  return (
    <Select
      option={optionData}
      onChange={action("select")}
      name="select1"
      label="Select"
      id="select-tag"
    />
  );
});
