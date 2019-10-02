import styled, { css } from 'styled-components';
import { colors, mediaTo } from '../../assets/styles';
import * as mobile from './parts.mobile';

export const Mobile = mobile;

export const NavWrapper = styled.nav`
   position: sticky;
   top: 0px;
   background-color: ${colors.black};
   color: ${colors.light};
   font-family: Lato, sans-serif;
   letter-spacing: 2px;
   z-index: 1000;

   ${mediaTo('tablet')} {
      padding-top: 3%;
      background-color: transparent;
      font-size: 28px;
   }
`;

export const NavElementsWrapper = styled.div`
   display: flex;
   background-color: ${colors.black};
   /* flex-direction: row; */
   /* ${mediaTo('tablet')} {
      display: none;
      z-index: 1000;
   } */
`;

export const StyledNavLink = styled.a`
   color: ${colors.light};
   text-decoration: none;
   cursor: pointer;
`;

export const NavItem = css`
    padding: 8px;
    &:hover {
       background-color: ${colors.darkGray}
    }
`;

export const StyledHomeIcon = styled.i`
   ${NavItem}
`;

export const StyledNavItem = styled.div`
   ${NavItem}
`;

// ${mediaMaxWidth('tablet', css`
//       background-color: ${color.blackTransparent};
//       padding: 7%;
//    `)}
