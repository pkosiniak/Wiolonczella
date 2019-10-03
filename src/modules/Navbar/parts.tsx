import styled, { css } from 'styled-components';
import { colors, mediaTo, backgroundColor, color, font } from '../../assets/styles';
import LinkButton from '../../components/LinkButton/LinkButton';

export const NavWrapper = styled.nav`
   position: sticky;
   top: 0px;
   margin-right: auto;
   background-color: ${colors.black};
   color: ${colors.light};
   z-index: 1000;

   ${mediaTo('tablet')} {
      background-color: transparent;
      width: fit-content;
   }
`;

const styledMenu = css`
   margin: 0;
   display: flex;
   padding-inline-start: 0;
   list-style: none;
`;

export const NavElementsWrapper = styled.menu`
   ${styledMenu}
   background-color: ${colors.black};
`;

export const DropdownLayout = styled.menu`
   ${styledMenu}
   z-index: 1000;
   flex-direction: column;
   flex-grow: 1;
   ${backgroundColor('overlay')}
`;

export const NavLinkButton = styled(LinkButton)`
   padding: 8px 12px;
   display: flex;
   cursor: pointer;
   &>button {
      ${color('light')}
      ${font('navbar')}
      font-family: Lato, sans-serif;
      letter-spacing: 2px;
   }
   &:hover {
      ${backgroundColor('darkGray')}
   }
   ${mediaTo('tablet')} {
      padding: 12px 16px;
      &>button {
         ${font('navbarMobile')}
      }
   }
`;

export const ListItem = styled.li`
   padding: 0;
`;

export const StyledHomeIcon = styled.i``;

export const BurgerIconWrapper = styled.i`
   font-size: 28px;
   padding: 16px;
   background-color: transparent;
   position: sticky;
   text-align: start;
   color: ${colors.lighterGray};
`;
