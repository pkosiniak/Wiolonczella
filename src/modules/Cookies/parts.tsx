import styled, { keyframes, css } from 'styled-components';
import { backgroundColor, color, font } from '../../assets/styles';
import IconButton from '../../components/IconButton/IconButton';
import Column from '../../components/Column/Column';
import { Icon } from '../../components/StyledIcon/parts';

const closingBanerAnimation = keyframes`
   from {
      bottom: 0px;
   }
   to {
      bottom: -60px;
   }
`;

export const CookiesBanner = styled.div<{ hide?: boolean; isShown?: boolean }>`
   position: fixed;
   bottom: 0;
   left: 0;
   ${backgroundColor('cookies')}
   width: 100%;
   ${({ hide = false }) => hide && css`
      animation-name: ${closingBanerAnimation};
      animation-duration: 1s;
      animation-timing-function: ease;
   `}
   ${({ isShown }) => !isShown && css`display: none;`}
`;

export const StyledColumn = styled(Column)`
   display: flex;
   justify-content: space-between;
`;

export const CookieGroup = styled.span`
   display: flex;
   align-items: center;
`;

export const CookieIcon = styled(Icon)`
   ${color('gold')}
   font-size: 48px;
`;

export const CookieText = styled.span`
   ${font('cookies')}
   margin-left: 8px;
`;

export const StyledIconButton = styled(IconButton)`
`;
