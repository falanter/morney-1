import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Icon from './Icon';


const NavWrapper=styled.nav`
  /* border: 1px solid blue; */
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  line-height: 24px;
  ul{
    display: flex;
    li{
      width: 33.333%;
      text-align: center;
      padding: 4px 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .icon{
          width:32px;
          height:32px;
      }
    }
  }
`;
const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <Icon name={'tag'} />
                    <Link to="/home">home</Link>
                </li>
                <li>
                    <Icon name={'statistics'} />
                    <Link to="/about">about</Link>
                </li>
                <li>
                    <Icon name={'tag'} />
                    <Link to="/user">user</Link>
                </li>
            </ul>
        </NavWrapper>
    )
}
export default Nav;
