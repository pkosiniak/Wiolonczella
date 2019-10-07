import React, { ReactNode } from 'react';
import { Policy } from '../../components/data/Policy.json';
import * as P from './parts';
import IconButton from '../../components/IconButton/IconButton';
import Modal, { ToggleType } from '../../components/Modal/Modal';
import Expandable from '../../components/Expandable/Expandable';
import Responsive from '../../components/Responsive/Responsive';
import { getPosition } from '../../assets/setAlignment';
import { Link } from '../../components/Link/Link';

const data = Policy;

export interface PrivacyPolicyProps {
   children?: ReactNode | ((props: ToggleType) => ReactNode);
}
interface PrivacyPolicyState {
   bodyTop: number;
   wrapperTop: number;
}

class PrivacyPolicy extends React.Component<PrivacyPolicyProps, PrivacyPolicyState> {
   state = {
      bodyTop: 0,
      wrapperTop: 0,
   };

   getBodyOffset = (element: HTMLElement) => {
      const rect = getPosition(element);
      this.setState({ bodyTop: rect ? rect.top : 0 });
   };

   getWrapperOffset = (element: HTMLElement) => {
      const rect = getPosition(element);
      this.setState({ wrapperTop: rect ? rect.top : 0 });
   };

   orientationChangeWorker = () => this.forceUpdate();
   timer = 0;

   resizeWorker = () => {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
         this.forceUpdate();
      }, 500);
   };

   body = () => {
      const expandableTrigger = [
         ({ toggle }: ToggleType) => (
            <P.H4 key="h4" onClick={toggle}>
               {data.Text.HeaderRodo[1]}
            </P.H4>
         ),
         ({ toggle }: ToggleType) => (
            <P.H4 key="h4C" onClick={toggle}>
               {data.Text.HeaderCookies[0]}
            </P.H4>
         )
      ];

      return (
         <Responsive>
            {({ greaterThenOrEqualTo, isPortrait }) => (
               <>
                  <P.H3 key="h3">{data.Text.HeaderRodo[0]}</P.H3>
                  <Expandable
                     trigger={expandableTrigger[0]}
                     permanent={(greaterThenOrEqualTo('sTablet') && isPortrait) || greaterThenOrEqualTo('desktop')}
                     expand={isPortrait}
                  >
                     {data.Text.TextRodo.map((text, i, arr) => (
                        i < arr.length - 1
                           ? <P.Paragraph key={i}>{text}</P.Paragraph>
                           : (
                              <span>
                                 <P.Paragraph hasInline key={i} >{text}</P.Paragraph>
                                 <Link inherit href={`mailto: ${data.Text.AdminContact}`} key={`a${i}`} >
                                    {data.Text.AdminContact}
                                 </Link>
                              </span>
                           )
                     ))}
                  </Expandable>
                  <Expandable
                     trigger={expandableTrigger[1]}
                     permanent={(greaterThenOrEqualTo('sTablet') && isPortrait) || greaterThenOrEqualTo('desktop')}
                     expand={isPortrait}
                  >
                     {data.Text.TextCookies.map((text, i) => (
                        <P.Paragraph key={`i${i}`}>{text}</P.Paragraph>
                     ))}
                  </Expandable>
               </>
            )}
         </Responsive>
      );
   };

   render() {
      const { children } = this.props;
      const { bodyTop, wrapperTop } = this.state;
      return (
         <Modal useColumn trigger={children} >
            {({ toggle, isOpen }: ToggleType) => {
               if (isOpen) {
                  window.addEventListener('resize', this.resizeWorker);
                  window.addEventListener('orientationchange', this.orientationChangeWorker);
               } else {
                  window.removeEventListener('resize', this.resizeWorker);
                  window.addEventListener('orientationchange', this.orientationChangeWorker);
               }
               return (
                  <P.Wrapper ref={this.getWrapperOffset}>
                     <P.HeaderWrapper>
                        <P.Header id="policyHeader">{data.Header}</P.Header>
                        <IconButton onClick={toggle} className="far fa-times-circle" />
                     </P.HeaderWrapper>
                     <P.BodyWrapper
                        ref={this.getBodyOffset}
                        offset={bodyTop + wrapperTop}
                     >
                        {this.body}
                     </P.BodyWrapper>
                  </P.Wrapper>
               );
            }}
         </Modal>
      );
   }
}

export default PrivacyPolicy;
