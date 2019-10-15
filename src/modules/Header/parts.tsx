import styled, { css, keyframes } from 'styled-components';
import {
   imgSrc,
   mediaTo,
   fullWidthWithoutScrollbar,
   backgroundColor,
   color,
} from '../../assets/styles';
import Styled from '../../components/Styles';

export const HeaderWrapper = styled.header`
	position: relative;
   margin: 0;
   top: 0px;
   left: 0px;
   ${fullWidthWithoutScrollbar}
   height: 100%;
   text-align: center;
   ${backgroundColor('darkest')}
   ${color('white')}
`;

export const HeaderBackgroundImage = styled.div`
   ${backgroundColor('black')}
   background-image: ${imgSrc};
   background-position: center;
   background-repeat: no-repeat;
   box-shadow: inset 0 0 200px black;
   background-size: 150%;
   ${mediaTo('desktop')} {
      background-size: 190%;
   }
`;

export const PageHeadersWrapper = styled.div`
   ${backgroundColor('transparent')}
   padding: 10px 0;
`;

const welcomeHeader = keyframes`
   from {
      ${color('transparent')}
   }
   to {
      ${color('white')}
   }
`;
const animatedHeader = css`
   animation-duration: 3s;
   animation-name: ${welcomeHeader};
`;

export const MainTitle = styled(Styled.h1)`
   ${animatedHeader};
`;

export const Subtitle = styled(Styled.h2)`
   animation-delay: 1s;
   animation-fill-mode: both;
   ${animatedHeader};
`;
