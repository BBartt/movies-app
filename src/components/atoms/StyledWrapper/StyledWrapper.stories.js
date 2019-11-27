import React from "react";
import { storiesOf } from "@storybook/react";
import { StyledWrapper } from "./StyledWrapper";

storiesOf("StyledWrapper", module)
  .add("Primary", () => <StyledWrapper>lorem ipsum</StyledWrapper>)
  .add("Secondary", () => (
    <StyledWrapper border_r_b>lorem ipsum</StyledWrapper>
  ));
