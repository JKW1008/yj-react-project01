import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 128px 0;
`;

const InnerContainer = styled.div`
  width: 1000px;
`;

const BoxTitle = styled.div`
  font-size: 16px;
  font-weight: 300px;
  color: rgba(0, 0, 0, 0.8);
  padding: 12px 0;
`;

const BoxSubTitle = styled.div`
  font-size: 32px;
  font-weight: 600px;
  padding: 12px 0;
`;

const ImageContents = styled.div`
  padding: 64px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 350px;
  background-image: url("https://hips.hearstapps.com/hmg-prod/images/2024-lamborghini-revuelto-127-641a1d518802b.jpg?crop=0.769xw:0.770xh;0.104xw,0.106xh&resize=1200:*");
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  margin: 32px 0;
`;

const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const ContentsButton = styled.div`
  width: 200px;
  height: 60px;
  background: yellow;
  color: black;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Portfolio() {
  return (
    <Container>
      {/* 1000px 중앙정렬 */}
      <InnerContainer>
        <div>
          <BoxTitle>NEWS</BoxTitle>
          <BoxSubTitle>LAMBORGHINI WORLD</BoxSubTitle>
        </div>

        {Array(3)
          .fill("")
          .map((_, i) => (
            <ImageContents>
              <ContentText>
                <div>CONFIGURATOR</div>
                <div>CREATE YOUR REVUELTO</div>
                <div>
                  <div>Choose the color</div>
                  <div>Choose the option</div>
                  <div>Choose your Contry</div>
                </div>
              </ContentText>
              <ButtonContainer>
                <ContentsButton>GO TO CHOICE</ContentsButton>
              </ButtonContainer>
            </ImageContents>
          ))}
      </InnerContainer>
    </Container>
  );
}
