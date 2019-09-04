import styled, { css } from 'styled-components';
import { colors } from '../../styles/constants';

export const Overlay = styled.div`
   z-index: 900;
   position: fixed;
   top: 0px;
   left: 0px;
   width: 100%;
   height: 100%;
   background-color:${colors.overlay} !important;
   /* z-index: 2000; */
`;

export const StyledCheckBox = styled.input`
   color: ${colors.lighterGray};
   display: none;
   visibility: hidden;
   &:checked {
      background-color: ${colors.blackTransparent}
   }
`;

export const InlineMorButton = styled.label`
   padding-left: 13px;
   background-color: transparent;
   display: block;
   visibility: visible;
   position: sticky !important;
   text-align: start;
   color: ${colors.lighterGray};
`;

// @media only screen and (max-width: 720px) {
//    #checkManuVisible:checked>div {
//        width: 100vw;
//        height: 100vh;
//        position: absolute;
//        top: 0px;
//        left: 0px;
//        background-color: rgba(0, 0, 0, 0.5);
//    }
//    .inlineMoreButton {
      //  padding-left: 13px;
      //  background-color: transparent;
      //  display: block;
      //  visibility: visible;
      //  position: sticky !important;
      //  text-align: start;
//    }
//    #checkManuVisible:checked~.inlineMoreButton {
//        color: var(--black);
//    }
//    #checkManuVisible:checked~.navElements {
//        display: flex;
//        flex-direction: column;
//        position: absolute;
//        background-color: var(--black-transp);
//    }
