import React from "react";
import { storiesOf } from "@storybook/react";
import { StyledH1 } from "./StyledH1";

storiesOf("StyledH1", module)
  .add("Primary", () => <StyledH1>text</StyledH1>)
  .add("Secondary", () => <StyledH1 title>text</StyledH1>);
