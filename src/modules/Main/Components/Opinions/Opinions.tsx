import * as React from 'react';
import { opinions } from '../../../../components/Main.components/data/Opinions.content.json';
import { naviLinks } from '../../../../components/data/NaviLink.json';
import { OpinionData } from '../../../../components/Main.components/data/Main.content';
import styled from 'styled-components';
import { font, color } from '../../../../assets/styles';
import Styled from '../../../../components/Styles';

const oData = opinions;
const lData = naviLinks.Opinins;
const data = OpinionData;

const Wrapper = Styled.section;
const H3 = Styled.h3;
const H4 = styled(Styled.h4)`
   margin-bottom: 0;
`;
const H5 = styled(Styled.h5)`
   margin-top: 0;
`;
const Article = styled.article`
   & > ${Styled.p} {
      ${color('darker')}
      ${font('opinions')}
   }
`;
const P = Styled.p;

const Opinions: React.FC = () => {

   const Lines = (lines: string[]) =>
      (
         lines.map((line, i) => (
            <P key={'l' + i}>
               {line}
            </P>
         ))
      );

   return (
      <Wrapper>
         <H3 id={lData.address} >{data.Header}</H3>
         {oData.map((opinion, i) => (
            <Article key={i}>
               <H4>{opinion.name}</H4>
               <H5>{opinion.about}</H5>
               {Lines(opinion.lines)}
            </Article>
         ))}
      </Wrapper>
   );
};

export default Opinions;
