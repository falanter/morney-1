import { Link, LinkProps, useMatch, useResolvedPath } from 'react-router-dom';
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
                    <CustomLink to="/home">
                        <Icon name={'tag'} />
                        home
                    </CustomLink>
                </li>
                <li>
                    <CustomLink to="/about">
                        <Icon name={'statistics'} />
                        about
                    </CustomLink>
                </li>
                <li>
                    <CustomLink to="/user">
                        <Icon name={'tag'} />
                        user
                    </CustomLink>
                </li>
            </ul>
        </NavWrapper>
    )
}
function CustomLink({ children, to, ...props }: LinkProps) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
      <div>
        <Link
          style={{ 
            textDecoration: match ? "underline" : "none" ,
            color:match ? "green" : ""
          }}
          to={to}
          {...props}
        >
          {children}
        </Link>
        {/* {match && " (active)"} */}
      </div>
    );
  }
export default Nav;
