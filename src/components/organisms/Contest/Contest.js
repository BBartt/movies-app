import React, { useEffect } from "react";
import { StyledWrapper } from "components/atoms/StyledWrapper/StyledWrapper";
import { StyledH1 } from "components/atoms/StyledH1/StyledH1";
import { StyledImg } from "components/atoms/StyledImg/StyledImg";
import { pictures } from "assets/images/images";
import { CHANGE_PLACEHOLDER } from "features/ui/uiSlice";
import { useDispatch } from "react-redux";

const words = [
  "attention",
  "ATTENTION please",
  "the answer is",
  "the real",
  "name of",
  "Slim Shady",
  "#/contest",
];

const changePath = (words) => {
  for (let i = 0; i < words.length; i++) {
    setTimeout(() => {
      window.history.pushState("", null, words[i]);
    }, 3000 * (i + 1));
  }
};

const Contest = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    changePath(words);
    dispatch({ type: CHANGE_PLACEHOLDER });

    return () => {
      dispatch({ type: CHANGE_PLACEHOLDER });
    };
  }, []);

  return (
    <StyledWrapper className="container col-12 col-lg-11 my-5">
      <StyledH1 title="title">the riddle is for perceptive persons</StyledH1>
      <StyledImg src={pictures.wally} />
      <StyledH1 title="title">have fun</StyledH1>

      <StyledWrapper
        hasBorderRightBottom
        className="text-center my-5 h1 text-break"
      >
        gurcreevacntrfjvyyuryclbhsvaqlbhepnyyvatohgqbagorqhcrqphgqbjagurjbbqfgurlorreqbf
        <hr />
        16 32 35 34 31 41 53 36 45 56 46 43 52 45 54 21
      </StyledWrapper>
      <hr />
      <StyledWrapper
        hasBorderRightBottom
        className="text-center my-5 display-4 text-break"
      >
        In order for the light to shine so brightly, the darkness must be
        present.
        <hr />
        001011000101101000100001101101100101000100111
      </StyledWrapper>
    </StyledWrapper>
  );
};

export default Contest;
