import styled from "styled-components";

const ContainerImage = styled.div`
  width: 100%;
  height: 80vh;
  overflow: hidden;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(125, 125, 125, 0.5);
  }
`;

const MainImages = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const MainTitle = styled.div`
  position: absolute;
  width: 1000px;
  font-weight: 900;
  font-size: 90px;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;

  z-index: 99;
`;

const SubTitle = styled.div`
  padding-left: 10px;
  font-size: 40px;
  font-family: "IM Fell English SC", serif;
  margin-top: 20px;
  color: rgba(0, 0, 0, 0.6);
`;

export default function MainImage() {
  return (
    <ContainerImage>
      <MainImages src="https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2023%2F03%2Flamborghini-revuelto-lb744-aventador-replacement-hypercar-ev-reveal-performance-1001-bhp-1.jpeg?q=90&w=1400&cbr=1&fit=max" />
      <MainTitle>
        <div>Lamborgini</div>
        <SubTitle>L'auto più potente del mondo.</SubTitle>
      </MainTitle>
    </ContainerImage>
  );
}
