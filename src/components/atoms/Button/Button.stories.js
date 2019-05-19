import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "./Button.atom";

storiesOf("Button", module)
  .add("Normal Button", () => <Button>Button</Button>)
  .add("Multiline", () => <Button>Button</Button>)
  .add("Helper Text", () => {
    return <Button>Button</Button>;
  });
