import styled, { css } from 'styled-components';
import { mediaTo, backgroundColor } from '../assets/styles';

interface StyledButtonGroupProps { top?: number; bottom?: number; }

export const StyledDemoButtonGroup = styled.div<StyledButtonGroupProps>`
   position: fixed;
   right: 0;
   ${({ top }) => top && `top: ${top}px`};
   ${({ bottom }) => bottom && `bottom: ${bottom}px`};
   z-index: 10000;
   ${mediaTo('tablet')} {
      &:hover {
         max-width: 100px;
      }
      min-width: 0px;
      max-width: 10px;
   };
`;

export const StyledButtonsGroup = styled.div`
   display: flex;
   flex-direction: column;
   border: 1px solid #3338;
`;

interface StyledShowButtonProps {
   top?: number;
   bottom?: number;
   noWidth?: boolean;
   isActive: boolean;
   isHeader?: boolean;
   isAll?: boolean;
}

export const Body = styled.div<{backColor: boolean}>`
   ${({backColor}) => backgroundColor(backColor ? 'white' : 'transparent', true)};
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`;

export const StyledShowButton = styled.button<StyledShowButtonProps>`
   position: ${({ top, bottom }) => top || bottom ? 'fixed' : 'static'};
   ${({ top }) => top && `top: ${top}px`};
   ${({ bottom }) => bottom && `bottom: ${bottom}px`};
   right: 0;
   font-size: 7px;
   padding: 1px;
   font-family: Verdana, Geneva, Tahoma, sans-serif;
   font-weight:  ${({ isHeader }) => isHeader && 'bold'};
   ${({ isActive, isHeader, isAll }) => isActive
      ? css`
         color: #fff;
         border: 1px solid ${isHeader ? '#8888' : '#fff8'} ;
         background-color: #0008;
         ${isAll && css`border-right: 1px solid #8888`};
         &:hover {
            background-color: #1118;
            border: 1px solid ${isHeader ? '#bbb8' : '#7778'};
            ${isAll && css`border-right: 1px solid #bbb8`};
         };
      `
      : css`
         color: #000;
         border: 1px solid ${isHeader ? '#fff8' : '#0008'};
         ${isAll && css`border-right: 1px solid #fff8`};
         background-color: #fff8;
         &:hover {
            background-color: #eee8;
            border: 1px solid ${isHeader ? '#8888' : '#9998'};
            ${isAll && css`border-right: 1px solid #8888`};
         };
      `
   };

   ${({ noWidth, isAll, isHeader }) => !noWidth && css`
      min-width: ${isAll ? 20 : 80}px;
      min-width: ${isHeader && !isAll && 60}px;
      max-width: 100px;
      `
   };
   ${({ top, bottom }) => (top || bottom) && css`
      ${mediaTo('tablet')} {
         &:hover {
            max-width: 100px;
         }
         min-width: 0px;
         max-width: 10px;
      }`
   };
   z-index: 10000;
`;
