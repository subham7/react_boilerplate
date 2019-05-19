import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import FormStructure from "./FormStructure.molecule";

import { Input } from "./../../atoms";

storiesOf("Form Structure", module).add("Simple Form", () => {
  const formField = [
    { field: <Input label="input" onChange={action("Input change")} /> },
    { field: <Input label="input" /> },
    { field: <Input label="input" /> },
    { field: <Input label="input" /> }
  ];

  return (
    <FormStructure
      field={formField}
      btnText="Submit"
      onSubmit={action("clicked")}
    />
  );
});
