import React from 'react';
import { AboutAuthorData } from '../../../../components/Main.components/data/Main.content';
import { naviLinks as navLinks } from '../../../../components/data/NaviLink.json';
import styled from 'styled-components';
import { mediaTo, font } from '../../../../assets/styles';
import Styled from '../../../../components/Styles';

const lData = navLinks.AboutAuthor;
const data = AboutAuthorData;

const Wrapper = Styled.section;
const H3 = Styled.h3;
const P = styled(Styled.p)`
   letter-spacing: 1px;
   ${mediaTo('sTablet')} {
      ${font('aboutAuthorMobile')}
   }
`;

const AboutAuthor: React.FC = () => (
   <Wrapper>
      <H3 id={lData.address}>{data.Header}</H3>
      {data.Paragraphs.map((paragraph, i) => (
         <P key={i}>{paragraph}</P>
      ))}
   </Wrapper>
);

export default AboutAuthor;
