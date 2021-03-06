import styled from "styled-components";
import Nav from "./Nav"

const Wrapper=styled.div`
  /* border: 1px solid red; */
  /* min-height: 100vh; */
  display: flex;
  flex-direction: column;
  height: 100vh;
  /* position: relative; */
`;
const Main=styled.div`
  /* border: 1px solid green; */
  /* flex-grow: 1; */
  flex: 1;
  overflow-y:scroll;
  /* color: red; */
  /* overflow: auto; */

`;

const Layout = (props: any) => {
    return(
        <Wrapper>
            <Main className={props.className}>
                {props.children}
            </Main>
            <Nav />  
        </Wrapper>
    );
};

export default Layout;