import styled from "styled-components";
import Logo from "./logo.png";

const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
background-color: #222222;
color: white; 
`;

const GlobalNav = styled.div`
width: 1000px;
display: flex;
justify-content: space-between;
height: 80px;
align-items: center
`;

const SmallNav = styled.div`
display: flex;
justify-content: space-between;
div{
  padding: 0 15px;
  cursor: pointer;
  &:hover{
    color: red;
  }
}
`;

export default function Header(){
    return(
        <Container> 
        <GlobalNav>
          <div>
            <img src={Logo} width="60px" alt="logo"/>
          </div>
          <SmallNav>
          <div>MODELS</div>
          <div>CUSTOM SOLUTIONS</div>
          <div>OWNERSHIP</div>
          <div>MOTORSPORT</div>
          <div>DEALERSHIPS</div>
          </SmallNav>
        </GlobalNav>
      </Container>
    )
}