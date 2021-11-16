import { Link } from 'react-router-dom';
import styled from 'styled-components'

const NavWrapper=styled.nav`
  /* border: 1px solid blue; */
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  line-height: 24px;
  ul{
    display: flex;
    li{
      width: 33.333%;
      text-align: center;
      padding: 16px;
    }
  }
`;
const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <Link to="/home">home</Link>
                </li>
                <li>
                    <Link to="/about">about</Link>
                </li>
                <li>
                    <Link to="/user">user</Link>
                </li>
            </ul>
        </NavWrapper>
    )
}
export default Nav;
