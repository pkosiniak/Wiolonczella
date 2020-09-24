import styled, { css, keyframes } from 'styled-components';
import { mediaTo } from '../../assets/styles';
import { ColumnSize } from '../Column/Column';

export const duration: number = 0.2;

const ModalOpen = keyframes`
   0% {
      left: -100%;
   }
   100% {
      left: 0px;
   }
`;

const ModalClose = keyframes`
   0% {
      left: 0px;
   }
   100% {
      left: -100%;
   }
`;

const ModalAnimationSetup = css<{isOpen: boolean}>`
   animation: ${({ isOpen }) => isOpen
      ? ModalOpen
      : ModalClose
   } ${duration}s  forwards;
   animation-timing-function:  ${({ isOpen }) => isOpen ? 'ease-out' : 'ease-in'}
`;

interface LayoutWrapperProps {
   useColumns?: boolean;
   isOpen: boolean;
}

export const LayoutWrapper = styled.div<LayoutWrapperProps>`
   z-index: 2000;
   position: fixed;
   top: 0px;
   bottom: 0px;
   ${ModalAnimationSetup}

   ${({ useColumns }) => useColumns
      && ColumnSize.map((col, i, arr) => i < arr.length - 1
         ? col.to(css`
               margin-top: 5vh;
               margin-bottom: 5vh;
               width: calc(100% - 2 * ${col.margin}%);
            `)
         : mediaTo('mobile') + `{
               height: 100vh;
               width: 100vw;
               margin: 0;
            }`
      )
   }
`;

export const Trigger = styled.div`
   /* display: inline-block; */
`;
