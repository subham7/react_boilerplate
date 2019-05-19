import React from "react";
import { storiesOf } from "@storybook/react";
import Subtitle from "./Subtitle.atom.js";

storiesOf("Subtitle", module).add("With text", () => (
  <Subtitle>Hello World!</Subtitle>
));
