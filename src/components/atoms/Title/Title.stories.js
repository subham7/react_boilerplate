import React from "react";
import { storiesOf } from "@storybook/react";
import Title from "./Title.atom.js";

storiesOf("Title", module).add("With text", () => <Title>Hello World!</Title>);
