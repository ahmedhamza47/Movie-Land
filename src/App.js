import Search from "./components/Search";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Title>Movie Land</Title>
        <Search />
        <Pages />
      </BrowserRouter>
    </div>
  );
}
const Title = styled.div`
  margin-top: 2rem;
  font-weight: bold;
  text-align: center;
`;
export default App;
