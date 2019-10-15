import styled, { css } from 'styled-components';
import { backgroundColor, color, mediaTo, colors, font } from '../../assets/styles';
import Styled from '../../components/Styles';

const wrapperPadding = 24;

export const Wrapper = styled.aside`
   ${backgroundColor('lighter')};
   padding: ${wrapperPadding}px;
`;

export const HeaderWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   ${backgroundColor('darker')};
   ${color('light')};
   padding: 0 32px;
`;

export const Header = styled.h2`
   ${font('policyHeader')}
   ${mediaTo('mobile')} {
      ${font('policyHeaderMobile')}
   }
`;

export const customScrollbar = css`
   &::-webkit-scrollbar {
      width: 10px;
   }
   &:hover::-webkit-scrollbar-thumb {
      ${backgroundColor('cookies')}
   }
   &::-webkit-scrollbar-track{
      margin: 4px 0;
   }
   &:hover::-webkit-scrollbar-button:single-button{
      height: 10px;
      box-sizing: border-box;
      border: solid 5px ${colors.cookies};
   }
   &:hover::-webkit-scrollbar-button:single-button:vertical:decrement{
      border-top: none;
      border-left-color: transparent;
      border-right-color: transparent;
   }
   &:hover::-webkit-scrollbar-button:single-button:vertical:increment{
      border-bottom: none;
      border-left-color: transparent;
      border-right-color: transparent;
   }
`;

interface OverflowProps {
   offset: number;
}

export const OverflowWrapper = css<OverflowProps>`
   box-sizing: border-box;
   overflow-y: auto;
   ${({ offset }) => css`
      height: calc(100vh -  ${offset + wrapperPadding}px);
   `}
   ${customScrollbar}
`;

export const BodyWrapper = styled.article<OverflowProps>`
   ${backgroundColor('white')};
   margin-top: 24px;
   display: flex;
   flex-direction: column;
   flex-shrink: 1;
   justify-content: flex-start;
   align-content: flex-start;
   & :last-child>p :last-child {
      margin-bottom: 0;
   }
   padding: 16px 24px;
   ${OverflowWrapper}
`;

export const H3 = styled(Styled.h3)`
   ${color('darkest')};
   ${mediaTo('sTablet')} {
      margin: 44px 0 32px;
   }
   ${mediaTo('mobile')} {
      margin: 40px 0 28px;
   }
`;

export const H4 = styled(Styled.h4)`
   ${mediaTo('sTablet')} {
      margin: 36px 0 28px;
   }
   ${mediaTo('mobile')} {
      margin: 32px 0 24px;
   }
`;

export const P = styled(Styled.p)`
   ${font('policyParagraph')}
`;
