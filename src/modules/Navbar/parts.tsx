import styled, { css, keyframes } from 'styled-components';
import { colors, mediaTo, backgroundColor, color, font, fullWidthWithoutScrollbar, fill } from '../../assets/styles';
import LinkButton from '../../components/LinkButton/LinkButton';
import Icon from '../../components/Icon';

export const duration: number = 1;

const DropdownOpen = keyframes`
   0% {
      height: 0px;
   }
   100% {
      height: 100%;
   }
`;

const DropdownClose = keyframes`
   0% {
      height: 100%;
   }
   100% {
      height: 0px;
   }
`;

const DropdownAnimationSetup = css<{ isOpen: boolean }>`
   animation: ${({ isOpen }) => isOpen
      ? DropdownOpen
      : DropdownClose
   } ${duration}s  forwards;
   animation-timing-function:  ${({ isOpen }) => isOpen ? 'ease-out' : 'ease-in'}
`;

export const NavWrapper = styled.nav`
   position: sticky;
   top: 0px;
   margin-right: auto;
   background-color: ${colors.darkest};
   color: ${colors.light};
   z-index: 1000;
   ${fullWidthWithoutScrollbar}

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
   background-color: ${colors.darkest};
`;

export const DropdownLayout = styled.menu`
   ${styledMenu}
   z-index: 1000;
   flex-direction: column;
   flex-grow: 1;
   ${backgroundColor('overlay')}
   &>* {
      ${DropdownAnimationSetup}
   }
`;

export const NavLinkButton = styled(LinkButton) <{ height?: number }>`
   height: ${({ height }) => height && height + 'px'};
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
      ${backgroundColor('dark')}
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

export const StyledHomeIcon = styled(Icon)`
   padding: 0;
   ${fill('light')}

`;

export const BurgerIconWrapper = styled(Icon)`
   font-size: 28px;
   padding: 16px;
   background-color: transparent;
   position: sticky;
   text-align: start;
   color: ${colors.darkGrey};
`;
