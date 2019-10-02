import styled, { css, keyframes } from 'styled-components';
import { colors, imgSrc, mediaTo } from '../../assets/styles';

export const HeaderWrapper = styled.header`
	position: relative;
   margin: 0;
   top: 0px;
   left: 0px;
   width: 100%;
   height: 100%;
   text-align: center;
   background-color: ${colors.dark};
   color: ${colors.white};
`;

export const HeaderBackgroundImage = styled.div`
   background-color: ${colors.black};
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
        color: transparent;
    }
    to {
        color: ${colors.white};
    }
`;
const animatedHeader = css`
    animation-duration: 3s;
    animation-name: ${welcomeHeader};
`;

export const MainTitle = styled.h1`
   font-family: lobster, sans-serif;
   font-size: 60px;
   font-style: italic;
   padding-left: 10%;
   padding-right: 10%;
   ${animatedHeader};
`;

export const Subtitle = styled.h2`
   font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
   font-weight: bold;
   font-size: 28px;
   padding-left: 10%;
   padding-right: 10%;
   animation-delay: 1s;
   animation-fill-mode: both;
   ${animatedHeader};
`;
