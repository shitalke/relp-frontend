import styled from "styled-components";

// TODO: apply some better styling here.
export const InfoContainer = styled.div`
  display: flex;
  margin: auto;
  width: 200px;
`;

export const IconImg = styled.img`
  height: ${props => props.width || "22px"};
  width: ${props => props.width || "22px"};
  float: left;
`;

export const InfoString = styled.div`
  text-align: left;
  margin-left: 20px;
`;
