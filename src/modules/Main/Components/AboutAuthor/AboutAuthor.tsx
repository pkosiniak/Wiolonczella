import React from 'react';
import { AboutAuthorData } from '../../../../components/Main.components/data/Main.content';
import { naviLinks as navLinks } from '../../../../components/data/NaviLink.json';
import styled from 'styled-components';
import { mediaTo } from '../../../../assets/styles';

const lData = navLinks.AboutAuthor;
const data = AboutAuthorData;

const Wrapper = styled.section``;

const H3 = styled.h3``;

const Paragraph = styled.p`
   letter-spacing: 1px;
   margin: 10px 0;
   ${mediaTo('sTablet')} {
      line-height: 26px;
   }
`;

const AboutAuthor: React.FC = () => (
   <Wrapper>
      <H3 id={lData.address}>{data.Header}</H3>
      {data.Paragraphs.map((paragraph, i) => (
         <Paragraph key={i}>{paragraph}</Paragraph>
      ))}
   </Wrapper>
);

export default AboutAuthor;
