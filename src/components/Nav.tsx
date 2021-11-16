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
        box-shadow: 0 0 1px rgba(0,0,0,0.25);
        a{
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
  }
`;
const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <Link to="/home">
                        <Icon name={'tag'} />
                        home
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        <Icon name={'statistics'} />
                        about
                    </Link>
                </li>
                <li>
                    <Link to="/user">
                        <Icon name={'tag'} />
                        user
                    </Link>
                </li>
            </ul>
        </NavWrapper>
    )
}
export default Nav;
