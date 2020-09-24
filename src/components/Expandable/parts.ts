import styled, { keyframes, css } from 'styled-components';
import Icon from '../Icon/Icon';
import { setFont, backgroundColor, colors, families } from '../../assets/styles';
import { isFirefox } from '../../assets/browsers';

const ArrowRotate = keyframes`
   0% {
      transform: rotate(180deg);
   }
   100% {
      transform: rotate(0deg);
   }
   `;

const ArrowRotateRevers = keyframes`
   0% {
      transform: rotate(0deg);
   }
   100% {
      transform: rotate(180deg);
   }
   `;

const ExpandGrow = keyframes`
   0% {
      height: 0px;
   }
   100% {
      height: 100%;
   }
`;

const ExpandShrink = keyframes`
   0% {
      height: 100%;
   }
   100% {
      height: 0px;
   }
`;

export const duration: number = 0.4;

const AnimationStyle = css`
   animation-duration: ${duration}s;
   animation-fill-mode: forwards;
`;

interface WrapperProps {
   minHeight: number;
   isOpen: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
   display: flex;
   flex-direction: column;
   ${({ isOpen, minHeight }) => isFirefox
      && `max-height: ${isOpen ? 'calc(100% + 40px)' : `${minHeight}px`}`};
`;

export const TriggerWrapper = styled.span`
   &>* {
      display: inline-flex;
   };
`;

export interface ToggleWrapperProps {
   height: number;
}

export const ToggleWrapper = styled.button<ToggleWrapperProps>`
   ${backgroundColor('transparent')}
   margin-left: 8px;
   outline: none;
   border-radius: ${({ height }) => height}px;
   border-style: none;
   padding: 0;
   justify-content: center;
   min-width: 80px;
   &:hover{
      border: 1px solid ${colors.lightGrey}
   }
`;

interface ToggleProps {
   isOpen: boolean;
   firstOpen: boolean;
}

export const ToggleArrow = styled(Icon)<ToggleProps>`
   margin-left: 8px;
   padding: 0 !important;
   transform: rotate(180deg);
   transform-origin: center;
   ${AnimationStyle};

   ${({ isOpen, firstOpen }) => {
      if (firstOpen) return;
      return isOpen
         ? css`
            animation-fill-mode: forwards;
            animation-timing-function: ease-out;
            animation-name: ${ArrowRotate};
         ` : css`
            animation-fill-mode: backwards;
            animation-timing-function: ease-in;
            animation-name: ${ArrowRotateRevers};
      `;
   }}
`;

interface ToggleTextProps {
   font: {
      size: number;
      lineHeight: number;
   };
}

export const ToggleText = styled.i<ToggleTextProps>`
   margin-left: 8px;
   /* font-family: monospace; */
   text-align: right;
   ${({ font }) => setFont(font.size, {lineHeight: font.lineHeight, family: families.monospace})};
`;

export interface LayoutWrapperProps {
   isOpen: boolean;
}

export const LayoutWrapper = styled.div<LayoutWrapperProps>`
   ${AnimationStyle};
   transform-origin: top;
   transition: transform ${duration}s;
   display: flex;
   flex-direction: column;
   ${({ isOpen }) => isOpen
      ? css`
         transition-timing-function: ease-out;
         animation-timing-function: ease-out;
         transform: scaleY(1);
         animation-name: ${ExpandGrow};
         `
      : css`
         transition-timing-function: ease-in;
         animation-timing-function: ease-in;
         transform: scaleY(0);
         animation-name: ${ExpandShrink};
      `};
`;
