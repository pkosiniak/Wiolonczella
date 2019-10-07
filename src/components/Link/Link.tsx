import styled, { css } from 'styled-components';
import { color, mediaTo } from '../../assets/styles';

export interface LinkProps {
   italic?: boolean;
   ninja?: boolean;
   inherit?: boolean;
}

export const Link = styled.a<LinkProps>`
   ${({ inherit }) => inherit ? color({ other: 'inherit' }) : color('darkerGrey')};
   ${({ italic = false }) => italic && css`font-style: italic`};

   text-decoration: none;

   ${ mediaTo('tablet')} {
      text-decoration: underline;
   }

   &:hover {
      text-decoration: underline;
   }

   &:active {
      ${({ ninja = false }) => ninja
      ? color('darkerGrey')
      : color('gold')
   }
   }

   &:visited{
      ${color('darkerGrey')};
   }


`;
