import Router from "./Router/Router"
import { createGlobalStyle } from "styled-components"

export const GlobalStyled = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Tahoma, sans-serif;
}
`

function App() {
  return (
    <>
    <GlobalStyled/>
    <Router/>
      Exercicio de Router
    </>
  );
}

export default App;
