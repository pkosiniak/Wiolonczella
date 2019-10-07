import React from 'react';
import { DescriptionData } from '../../../../components/Main.components/data/Main.content';
import { naviLinks } from '../../../../components/data/NaviLink.json';
// import './styles/Description.scss';
// import './styles/Main.Components.scss';
import styled from 'styled-components';
import { mediaTo, font } from '../../../../assets/styles';

const lData = naviLinks.Description;
const data = DescriptionData;

const Wrapper = styled.section``;
const InnerWrapper = styled.div`
   ${font('description')};
   font-family: Helvetica,Arial,sans-serif;
`;
const H3 = styled.h3``;
const Paragraph = styled.p`
   margin: 10px;
   text-align: justify;
   ${mediaTo('sTablet')} {
      margin-left: 0px;
      text-align: left;
   }
`;
const Ul = styled.ul``;
const Li = styled.li``;

const Description: React.FC = () => {
   const Paragraphs = (paragraphs: string[], key: string) =>
      paragraphs.map((paragraph, i) => (
         <Paragraph key={i + key}>{paragraph}</Paragraph>
      ));

   return (
      <Wrapper>
         {<H3 id={lData.address}>{data.Header}</H3>}
         <InnerWrapper className="paragraf" id="longDesc">
            {Paragraphs(data.Paragraphs1, 'a')}
            <Ul>
               {data.List.map((listItem, i) => (
                  <Li key={`Li${i}`}>{listItem}</Li>
               ))}
            </Ul>
            {Paragraphs(data.Paragraphs2, 'b')}
         </InnerWrapper>
      </Wrapper>
   );
};

export default Description;
