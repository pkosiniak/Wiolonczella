import styled, { keyframes, css } from 'styled-components';
import { backgroundColor, fill } from '../../assets/styles';
import { Rectangle, defaultIconSize, iconPadding } from '../Icon';

export const defaultIconButtonSquare = defaultIconSize + 2 * iconPadding;

export const ClickEventInverse = keyframes`
   0% {
      ${backgroundColor('darkerGrey')}
   }
   100% {
      ${backgroundColor('grey')}
   }
`;

export const AnimatedButton = css`
   transition: 0.7s;
   cursor: pointer;

    &:hover {
       ${backgroundColor('darkerGrey')}
       & > span > svg {
            ${fill('gold')}
         }
    }

    &:active {
        animation-name: ${ClickEventInverse};
        animation-duration: 0.4s;
        animation-fill-mode: both;
    }
`;

export const Button = styled.button<Rectangle>`
   ${backgroundColor('transparent')}
   border-radius: 50%;
   border-style: none;
   outline: none;
   padding: 0;
   margin: auto 0;
   ${({ height, width }) => css`
      height: ${height || defaultIconButtonSquare}px;
      width: ${width || height || defaultIconButtonSquare}px;
   `};
   ${AnimatedButton}
`;
