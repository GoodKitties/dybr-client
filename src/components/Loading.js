import React from 'react';
import styled, { keyframes } from 'styled-components';

// keyframes returns a unique name based on a hash of the contents of the keyframes
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const blink = keyframes`
  0% {
    opacity: 0.1;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.1;
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
export const Rotate = styled.div`
  display: block;
  animation: ${rotate360} 2s linear infinite;
`;

export const Blink = styled.div`
  animation: ${blink} 2s linear infinite;
`;

const Loading = () => {
  return (
    <Blink>
      <i className="material-icons">autoupdate</i>
    </Blink>
  );
};

export default Loading;
