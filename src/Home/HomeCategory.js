import React, {useEffect} from "react";
import styled from "styled-components";
import RestroomCard from "../components/RestroomCard";

function HomeCategory({restroomIds}) {

  return (
      <Content>
          <CategoryTitle>Placeholder</CategoryTitle>
          <RestroomRow>
              {restroomIds && 
                restroomIds.map(id =>  <RestroomCard id={id}/>)
              }
          </RestroomRow>
      </Content>
  )
}

const Content = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 2.5vh;
`;

const CategoryTitle = styled.div`
  font-size: 24px;
`;

const RestroomRow = styled.div`
display: flex;
gap: 30px;
overflow-x: auto;

`;

export default HomeCategory;
