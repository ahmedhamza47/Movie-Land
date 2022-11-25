import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages";
import Navbar from "./components/Navbar";
function App() {
  return (
    <Body>
      <BrowserRouter>
        <Navbar />

        <Pages />
      </BrowserRouter>
    </Body>
  );
}
const Body = styled.div``;

export default App;
