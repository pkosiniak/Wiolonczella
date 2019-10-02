import styled, { css } from 'styled-components';
import { color, mediaTo } from '../../assets/styles';

export interface LinkProps {
   italic?: boolean;
   ninja?: boolean;
}

export const Link = styled.a<LinkProps>`
   ${color('lightGray')};
   ${({ italic = false }) => italic && css`font-style: italic`};

   &:hover {
      text-decoration: underline;
   }

   &:active {
      ${({ ninja = false }) => ninja
      ? color('lightGray')
      : color('gold')
   }
   }

   &:visited{
      ${color('lightGray')};
   }

   ${ mediaTo('tablet')} {
      text-decoration: underline;
   }
`;
