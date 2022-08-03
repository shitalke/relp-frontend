import styled, {keyframes} from "styled-components";

const ldsellipsis1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

const ldsellipsis2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
`;
const ldsellipsis3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

export const Loading = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #fff;
  background-color: black;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
div:nth-child(1) {
  left: 8px;
  animation: ${ldsellipsis1} 0.6s infinite;
}
div:nth-child(2) {
  left: 8px;
  animation: ${ldsellipsis2} 0.6s infinite;
}
div:nth-child(3) {
  left: 32px;
  animation: ${ldsellipsis2} 0.6s infinite;
}
div:nth-child(4) {
  left: 56px;
  animation: ${ldsellipsis3} 0.6s infinite;
}


`;


