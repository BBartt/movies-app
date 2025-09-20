import React from "react";
import styled, { keyframes } from "styled-components";

const SplashScreenWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background-color: rgba(255, 255, 255, 0.95);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #ccc;
  border-top: 4px solid #333;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
  margin-bottom: 16px;
`;

const Message = styled.p`
  font-size: 1.2rem;
  color: #333;
`;

const SplashScreen = () => (
  <SplashScreenWrapper>
    <Spinner />
    <Message>Loading application...</Message>
  </SplashScreenWrapper>
);

export default SplashScreen;
