import styled from "styled-components";
import { GlobalStyles } from "./styles";

  const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;`
  
  const GlobalNav = styled.div`
    width: 1000px;
   
    display: flex;
    justify-content: space-between;

    height: 80px;
    align-items: center`

  const SmallNav = styled.div`
    display: flex;
    justify-content: space-between;
    div{
      padding: 0 15px;
    }
    `



function App() {
  return (
    <div>
      <GlobalStyles/>
      <Container> 
        <GlobalNav>
          <div>logo</div>
          <SmallNav>
          <div>업체소개</div>
          <div>포트폴리오</div>
          <div>사진</div>
          <div>게시판</div>
          <div>연락</div>
          </SmallNav>
        </GlobalNav>
      </Container>
    </div>
  );
}

export default App;
