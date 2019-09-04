import styled, { css } from 'styled-components';
import { colors, mediaMaxWidth } from '../../styles/constants';
import * as mobile from './parts.mobile';

export const Mobile = mobile;

export const NavWrapper = styled.nav`
   position: sticky;
   top: 0px;
   padding-left: 25%;
   /* padding-right: 25%;
   /* Replace with max width */
   /* max-width: 1440px; */
   background-color: ${colors.black};
   color: ${colors.light};
   font-family: Lato, sans-serif;
   letter-spacing: 2px;
   z-index: 1000;

   ${mediaMaxWidth('tablet', css`
      padding-top: 3%;
      padding-left: 0%;
      background-color: transparent;
      font-size: 28px;
   `)}
`;

export const NavElementsWrapper = styled.div`
   display: flex;
   background-color: ${colors.black};
   flex-direction: row;
   ${mediaMaxWidth('tablet', css`
      display: none;
      /* padding: 0; */
      z-index: 1000;
   `)}
`;

export const StyledNavLink = styled.a`
   color: ${colors.light};
   text-decoration: none;
   /* padding: 8px; */
   cursor: pointer;
`;

export const NavItem = css`
    padding: 8px;
    &:hover {
       background-color: ${colors.gray}
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
