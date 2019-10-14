import styled, { css, keyframes } from 'styled-components';
import {
   colors,
   imgSrc,
   mediaTo,
   fullWidthWithoutScrollbar,
   backgroundColor,
   color,
   font,
   setFont
} from '../../assets/styles';

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
   background-color: ${colors.darkest};
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
   font-weight: normal;
   background-color: transparent;
   padding-top: 10px;
   padding-bottom: 10px;
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

export const MainTitle = styled.h1`
   font-family: lobster, sans-serif;
   ${setFont(60, { style: 'italic' })};
   ${mediaTo('sTablet')} {
      ${font(50)};
   }
   ${mediaTo('mobile')} {
      ${font(40)};
   }
   padding: 0 10%;
   ${animatedHeader};
`;

export const Subtitle = styled.h2`
   font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
   ${setFont(28, { weight: 'bold' })};
   ${mediaTo('sTablet')} {
      ${font(24)};
   }
   ${mediaTo('mobile')} {
      ${font(20)};
   }
   padding: 0 10%;
   animation-delay: 1s;
   animation-fill-mode: both;
   ${animatedHeader};
`;
