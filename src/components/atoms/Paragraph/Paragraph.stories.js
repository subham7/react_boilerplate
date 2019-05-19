import React from "react";
import { storiesOf } from "@storybook/react";
import Paragraph from "./Paragraph.atom.js";

storiesOf("Paragraph", module).add("With text", () => (
  <Paragraph>
    Lorem ipsum dolor sit amet, ei possim tincidunt nam. Vide abhorreant
    disputationi an eos, est cu audiam eligendi tractatos. Ea ius sonet
    mediocrem. Eu pro meis recusabo, ut mel graece theophrastus.
  </Paragraph>
));
