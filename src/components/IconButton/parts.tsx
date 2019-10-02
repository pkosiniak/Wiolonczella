import styled, { keyframes, css } from 'styled-components';
import { backgroundColor, color } from '../../assets/styles';
import { Icon } from '../StyledIcon/parts';

export const ClickEventInverse = keyframes`
   0% {
      ${backgroundColor('lightGray')}
   }
   100% {
      ${backgroundColor('gray')}
   }
`;

export const AnimatedButton = css`
   transition: 0.7s;
   cursor: pointer;

    &:hover {
       ${backgroundColor('lightGray')}
       & > ${Icon} {
          ${color('gold')}
         }
    }

    &:active {
        animation-name: ${ClickEventInverse};
        animation-duration: 0.4s;
        animation-fill-mode: both;
    }
`;

export const Button = styled.button`
   ${backgroundColor('transparent')}
   border-radius: 50%;
   border-style: none;
   outline: none;
   padding: 0;
   margin: auto 0;
   ${AnimatedButton}
`;
