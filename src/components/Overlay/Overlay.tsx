import styled, { keyframes } from 'styled-components';
import { backgroundColor } from '../../assets/styles';

export enum OverlayLevel {
   low = 1,
   mid = 900,
   hi = 1900,
}

export const Overlay = styled.div<{ level?: OverlayLevel }>`
   z-index: ${({ level = OverlayLevel.mid }) => level};
   position: fixed;
   top: 0px;
   left: 0px;
   width: 100vw;
   height: 100vh;
   ${backgroundColor('overlay')}
`;

const OverlayOpen = keyframes`
   0% {
      opacity: 0;
   }
   100% {
      opacity: 1;
   }
`;

const OverlayClose = keyframes`
   0% {
      opacity: 1;
   }
   100% {
      opacity: 0;
   }
`;

interface AnimatedOverlay {
   duration: number;
   isOpen: boolean;
}

export const AnimatedOverlay = styled(Overlay)<AnimatedOverlay>`
   animation: ${({ isOpen }) => isOpen
      ? OverlayOpen
      : OverlayClose
   } forwards;
   animation-duration: ${({duration}) => duration}s;
   animation-timing-function: ${({ isOpen }) => isOpen ? 'ease-out' : 'ease-in'}
`;
