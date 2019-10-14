import styled, { keyframes, css } from 'styled-components';
import { backgroundColor, font, fill, mediaFrom, fullWidthWithoutScrollbar } from '../../assets/styles';
import IconButton from '../../components/IconButton/IconButton';
import Column from '../../components/Column/Column';
import Icon from '../../components/Icon';
import { getReverseScrollbarWidth } from '../../assets/helpers';
import LinkIconButton from '../../components/LinkIconButton/LinkIconButton';

export const duration = 0.9;

const closingBanerAnimation = keyframes`
   from {
      bottom: 0px;
   }
   to {
      bottom: -20%;
   }
`;

const Animation = css`
   animation-duration: ${duration}s;
   animation-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);
`;

interface WrapperProps { hide?: boolean; }

const Wrapper = css<WrapperProps>`
   position: fixed;
   bottom: 0;
   left: 0;
   width: 100vw;
   ${({ hide = false }) => hide && css`
      ${Animation}
      animation-name: ${closingBanerAnimation};
   `}
   text-align: right;
`;

interface HomeButtonProps extends WrapperProps { height: number; }

export const HomeButton = styled(LinkIconButton)<HomeButtonProps>`
   position: fixed;
   bottom: ${({ height }) => height + 3}px;
   right: ${getReverseScrollbarWidth() + 8}px;
   /* margin: 0 ${getReverseScrollbarWidth() + 8}px  3px; */
   ${({hide, height}) => hide ? css`
         @keyframes buttonAnimation {
            0% { bottom: ${height + 3}px; }
            100% { bottom: 3px }
         }
         animation-name: buttonAnimation;
         animation-fill-mode: forwards;
         ${Animation}
      ` : '' }
`;

interface CookiesBannerProps extends WrapperProps {
   isShown?: boolean;
}

export const CookiesBanner = styled.div<CookiesBannerProps>`
   ${Wrapper}
   ${backgroundColor('cookies')}
   ${fullWidthWithoutScrollbar}
   text-align: initial;
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
   ${fill('gold')}
`;

export const CookieText = styled.span`
   ${font('cookies')}
   margin-left: 8px;
`;

export const StyledIconButton = styled(IconButton)`
   ${mediaFrom('desktop')}{
      height: 16px;
   }
`;
