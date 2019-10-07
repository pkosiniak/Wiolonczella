import styled from 'styled-components';

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

// const DropdownOpen = keyframes`
//    0% {
//       height: 0px;
//    }
//    100% {
//       height: 100px;
//    }
// `;

// const DropdownClose = keyframes`
//    0% {
//       height: 100px;
//    }
//    100% {
//       height: 0px;
//    }
// `

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

// const DropdownAnimationSetup = css<{isOpen: boolean}>`
//    animation: ${({ isOpen }) => isOpen
//       ? DropdownOpen
//       : DropdownClose
//    } ${duration}s  forwards;
//    animation-timing-function:  ${({ isOpen }) => isOpen ? 'ease-out' : 'ease-in'}
// `;

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

export interface StyledDropdownProps {
   isOpen: boolean;
   position?: string;
}

export const Wrapper = styled.div`
`;

export const TriggerWrapper = styled.div``;

export const RelativeWrapper = styled.div`
   position: relative;
`;

export const LayoutWrapper = styled.div<StyledDropdownProps>`
   display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
   position: ${({ position = 'absolute' }) => position};
   width: max-content;

`;

export const DefaultTrigger = styled.span`
   cursor: pointer;
`;

export const DefaultLayout = styled.span`
`;
