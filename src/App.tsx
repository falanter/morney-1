import React from 'react';
import {Routes,Route,Navigate} from 'react-router-dom';
import Tags from 'view/Tags';
import Money from 'view/Money';
import NoMatch from 'view/NoMatch';
import Statistics from 'view/Statistics';
import styled from 'styled-components';
// import Test from 'view/Test';
import Tag from 'view/Tag'

// import { useTags } from 'useTags';

const AppWrapper=styled.div`
  color:#333;
`;

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<Navigate to="/money" />} />
        <Route path="/money"  element={<Money/>} />
        <Route path="/tags" element={<Tags/>} >
        </Route>
        {/* <Route path="/tags/:me" element={<Test/>} /> */}
        <Route path="/tags/:id" element={<Tag/>} />
        <Route path="/statistics"  element={<Statistics/>} />
        <Route path="*" element={<NoMatch/>} />
      </Routes>
    </AppWrapper>
  );
}

export default App;
