import React from 'react';
import styled from "styled-components";
import Card from "./components/Card";

const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f3f3;
`

function App() {
  return (
    <Box>
      <Card/>
    </Box>
  );
}

export default App;
