import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  padding: 64px 0;
`;

const InnerContainer = styled.div`
  width: 1000px;
  height: 200px;
  background: rgba(0, 0, 0, 0.3);
`;

const GridContainer = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
`;

const MainBox = styled.div`
  background: white;
  height: 500px;
  &:hover {
    background: darkgray;
    color: white;
    cursor: pointer;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const GoodsName = styled.div`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
`;

export default function Profile() {
  return (
    <Container>
      {/* 1000픽셀 중앙정렬 */}
      <InnerContainer>
        {/* 그리드 */}
        <GridContainer>
          {/* 박스 */}
          <MainBox>
            <GoodsName>REVUELTO</GoodsName>
            <div>FROM NOW ON</div>
            <div>POWER</div>
            <div>MAX.SPEED</div>
            <div>0 - 100 km/h</div>
            <div>Create your Revuelto</div>
          </MainBox>
          <MainBox>
            <GoodsName>Huracán</GoodsName>
            <div>FROM NOW ON</div>
            <div>POWER</div>
            <div>MAX.SPEED</div>
            <div>0 - 100 km/h</div>
            <div>Create your Huracán</div>
          </MainBox>
          <MainBox>
            <GoodsName>URUS</GoodsName>
            <div>FROM NOW ON</div>
            <div>POWER</div>
            <div>MAX.SPEED</div>
            <div>0 - 100 km/h</div>
            <div>Create your URUS</div>
          </MainBox>
        </GridContainer>
      </InnerContainer>
    </Container>
  );
}
