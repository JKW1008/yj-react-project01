import { GlobalStyles } from "./styles";
import Header from "./Header";
import MainImage from "./MainImage";
import Profile from "./Profile";
import Portfolio from "./Portfolio";
function App() {
  return (
    <>
      {/* css 리셋 */}
      <GlobalStyles />

      {/* 메뉴 */}
      <Header />

      {/* 메인 이미지 */}
      <MainImage />

      <Profile />

      <Portfolio />
    </>
  );
}

export default App;
