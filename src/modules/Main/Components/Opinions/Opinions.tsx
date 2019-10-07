import * as React from 'react';
import { opinions } from '../../../../components/Main.components/data/Opinions.content.json';
import { naviLinks } from '../../../../components/data/NaviLink.json';
import { OpinionData } from '../../../../components/Main.components/data/Main.content';
// import './styles/Opinions.scss';
import styled from 'styled-components';
import { font } from '../../../../assets/styles';

const oData = opinions;
const lData = naviLinks.Opinins;
const data = OpinionData;

const Wrapper = styled.section``;
const H3 = styled.h3``;
const H4 = styled.h4`
   padding-left: 16px;
`;
const H5 = styled.h5`
   padding-left: 32px;
`;
const Article = styled.article``;
// const Header = styled.header``;
const OpinionText = styled.p`
   ${font('opinions')}
`;

const Opinions: React.FC = () => {

   const Lines = (lines: string[]) =>
      (
         lines.map((line, i) => (
            <OpinionText key={'l' + i}>
               {line}
            </OpinionText>
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
      </Wrapper >
   );
}

export default Opinions;
