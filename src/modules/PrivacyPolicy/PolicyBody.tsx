import React from 'react';
import * as P from './parts';
import { Policy } from '../../assets/data/Policy.json';
import Expandable from '../../components/Expandable/Expandable';
import Responsive from '../../components/Responsive/Responsive';
import Link from '../../components/Link/Link';
import { ToggleType } from '../../components/Modal/Modal';

const data = Policy.Text;

const Body: React.FC = () => {
   const expandableTrigger = [
      ({ toggle }: ToggleType) => (
         <P.H4 key="h4" onClick={toggle}>
            {data.HeaderRodo[1]}
         </P.H4>
      ),
      ({ toggle }: ToggleType) => (
         <P.H4 key="h4C" onClick={toggle}>
            {data.HeaderCookies[0]}
         </P.H4>
      )
   ];

   return (
      <Responsive>
         {({ greaterThenOrEqualTo, isPortrait }) => (
            <>
               <P.H3 key="h3">{data.HeaderRodo[0]}</P.H3>
               <Expandable
                  trigger={expandableTrigger[0]}
                  permanent={(greaterThenOrEqualTo('sTablet') && isPortrait) || greaterThenOrEqualTo('desktop')}
                  expand={isPortrait}
               >
                  {data.TextRodo.map((text, i, arr) => (
                     i < arr.length - 1
                        ? <P.P key={i}>{text}</P.P>
                        : (
                           <P.P key={i} >
                              {text}
                              <Link colorInherit to={`mailto: ${data.AdminContact}`} key={`a${i}`} >
                                 {data.AdminContact}
                              </Link>
                           </P.P>
                        )
                  ))}
               </Expandable>
               <Expandable
                  trigger={expandableTrigger[1]}
                  permanent={(greaterThenOrEqualTo('sTablet') && isPortrait) || greaterThenOrEqualTo('desktop')}
                  expand={isPortrait}
               >
                  {data.TextCookies.map((text, i) => (
                     <P.P key={`i${i}`}>{text}</P.P>
                  ))}
               </Expandable>
            </>
         )}
      </Responsive>
   );
};

export default Body;
