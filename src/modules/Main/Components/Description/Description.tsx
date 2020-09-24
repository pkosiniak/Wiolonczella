import React from 'react';
import styled from 'styled-components';
import { DescriptionData } from '../../../../assets/data/Main.content';
import { navLinks } from '../../../../assets/data/NavLink.json';
import { font } from '../../../../assets/styles';
import Styled from '../../../../components/Styles';

const lData = navLinks.Description;
const data = DescriptionData;

const Wrapper = Styled.section;
const InnerWrapper = styled.div`
   ${font('paragraph')};
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
