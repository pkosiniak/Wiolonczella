import React from 'react';
import { DescriptionData } from '../../../../components/Main.components/data/Main.content';
import { naviLinks } from '../../../../components/data/NaviLink.json';
// import './styles/Description.scss';
// import './styles/Main.Components.scss';
import styled from 'styled-components';
import { font } from '../../../../assets/styles';
import Styled from '../../../../components/Styles';

const lData = naviLinks.Description;
const data = DescriptionData;

const Wrapper = Styled.section;
const InnerWrapper = styled.div`
   ${font('paragraph')};
   font-family: Helvetica,Arial,sans-serif;
`;
const H3 = Styled.h3;
const P = Styled.p;
const Ul = Styled.ul;
const Li = Styled.li;

const Description: React.FC = () => {
   const Paragraphs = (paragraphs: string[], key: string) =>
      paragraphs.map((paragraph, i) => (
         <P key={i + key}>{paragraph}</P>
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
