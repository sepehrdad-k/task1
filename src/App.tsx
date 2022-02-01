import Curser from "./components/Curser";
import Target from "./components/Target";
import GlobalStyles from "./GlobalStyles";
import { useState } from "react";
import styled from "styled-components";
function App() {
  const [message, setMessage] = useState("Try to catch the red circle!");
  return (
    <>
      <GlobalStyles />
      <Title>
        <h1>{message}</h1>
      </Title>
      <Curser />
      <Target setmessage={setMessage} />
    </>
  );
}

//styles

const Title = styled.div`
  display: flex;
  justify-content: center;
  h1 {
    color: white;
  }
`;

export default App;
