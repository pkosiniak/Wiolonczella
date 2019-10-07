import styled, { css } from 'styled-components';
import { backgroundColor, color } from '../../assets/styles';

export interface Rectangle {
   width?: number;
   height?: number;
}

export const Icon = styled.i<Rectangle>`
   ${backgroundColor('transparent')}
   ${color('darkGrey')}
   ${({ width, height = 32 }) => css`
      font-size: ${height}px;
      ${width && `width: ${width}px`};
   `
   }
   padding: 5px;
`;
