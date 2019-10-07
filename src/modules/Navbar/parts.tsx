import styled, { css, keyframes } from 'styled-components';
import { colors, mediaTo, backgroundColor, color, font, fullWidthWithoutScrollbar } from '../../assets/styles';
import LinkButton from '../../components/LinkButton/LinkButton';
// import { duration } from '../../components/Dropdown/parts';

export const duration: number = 1;
// const DropdownOpen = keyframes`
//    0% {
//       flex: 0;
//    }
//    100% {
//       flex: 1;
//    }
// `;

// const DropdownClose = keyframes`
//    0% {
//       flex: 1;
//    }
//    100% {
//       flex: 0;
//    }
// `

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

// const DropdownOpen = keyframes`
//    0% {
//       transition: scaleX(0);
//    }
//    100% {
//       transition: scaleX(1);
//    }
// `;

// const DropdownClose = keyframes`
//    0% {
//       transition: scaleX(1);
//    }
//    100% {
//       transition: scaleX(0);
//    }
// `

const DropdownAnimationSetup = css<{isOpen: boolean}>`
   animation: ${({ isOpen }) => isOpen
      ? DropdownOpen
      : DropdownClose
   } ${duration}s  forwards;
   animation-timing-function:  ${({ isOpen }) => isOpen ? 'ease-out' : 'ease-in'}
`;

// const DropdownAnimationSetup = css<{ isOpen: boolean }>`
//    transition: transform  ${duration}s  forwards;
//   ${({ isOpen }) => isOpen
//       ? css`
//          transform: scaleX(1);
//          animation-timing-function: ease-out;
//       `
//       : css`
//          transform: scaleX(0);
//          animation-timing-function: ease-in;
//       `
//    }
// `;

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

export const StyledHomeIcon = styled.i``;

export const BurgerIconWrapper = styled.i`
   font-size: 28px;
   padding: 16px;
   background-color: transparent;
   position: sticky;
   text-align: start;
   color: ${colors.darkGrey};
`;
