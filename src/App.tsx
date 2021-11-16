import React from 'react';
import styled from 'styled-components'
import {Routes,Route,Navigate} from 'react-router-dom';
import Nav from 'components/Nav';


const Wrapper=styled.div`
  /* border: 1px solid #ccc; */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main=styled.div`
  /* border: 1px solid green; */
  flex-grow: 1;
  overflow: auto;
`;


function App() {
  return (
    <Wrapper>
      <Main>
        <Routes>
          <Route path="/"element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/user"  element={<User/>} />
          <Route path="*" element={<NoMatch/>} />
        </Routes>
      </Main>
      <Nav />
    </Wrapper>
  );
}
function Home(){
  return <h2>Home</h2>;
}
function About(){
  return <h2>about</h2>;
}
function User(){
  return <h2>user</h2>;
}
function NoMatch(){
  return <h2>404</h2>;
}

export default App;
