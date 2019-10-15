import React, { ReactNode } from 'react';
import { Policy } from '../../assets/data/Policy.json';
import * as P from './parts';
import Body from './PolicyBody';
import IconButton from '../../components/IconButton/IconButton';
import Modal, { ToggleType } from '../../components/Modal/Modal';
import { getPosition } from '../../assets/alignment';
import { Icons } from '../../assets/constants';

const data = Policy.Header;

export interface PrivacyPolicyProps {
   children?: ReactNode | ((props: ToggleType) => ReactNode);
}
interface PrivacyPolicyState {
   bodyTop: number;
   wrapperTop: number;
   wasShown: boolean;
}

class PrivacyPolicy extends React.Component<PrivacyPolicyProps, PrivacyPolicyState> {
   state = {
      bodyTop: 0,
      wrapperTop: 0,
      wasShown: false,
   };

   wrapperRef = React.createRef<HTMLElement>();
   bodyRef = React.createRef<HTMLElement>();

   getOffsets = (wrapper: HTMLElement | null, body: HTMLElement | null) => {
      const wrapperRect = getPosition(wrapper);
      const bodyRect = getPosition(body);
      this.setState({
         wrapperTop: wrapperRect ? wrapperRect.top : 0,
         bodyTop: bodyRect ? bodyRect.top : 0
      });
   };

   timer = 0;

   orientationChangeWorker = () => {
      setTimeout(() => {
         this.getOffsets(this.wrapperRef.current, this.bodyRef.current);
      }, 500);
   };

   resizeWorker = () => {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
         this.getOffsets(this.wrapperRef.current, this.bodyRef.current);
      }, 500);
   };

   modalPrevState = false;

   render() {
      const { children } = this.props;
      const { bodyTop, wrapperTop } = this.state;
      return (
         <Modal useColumn trigger={children} >
            {({ toggle, isOpen }: ToggleType) => {
               if (isOpen) {
                  if (isOpen !== this.modalPrevState) {
                     window.addEventListener('resize', this.resizeWorker);
                     setTimeout(() => {
                        this.getOffsets(this.wrapperRef.current, this.bodyRef.current);
                     }, 10);
                  }
               } else {
                  if (isOpen !== this.modalPrevState) {
                     window.removeEventListener('resize', this.resizeWorker);
                  }
               }
               this.modalPrevState = isOpen;
               return (
                  <P.Wrapper ref={this.wrapperRef} id="PolicyWrapper">
                     <P.HeaderWrapper>
                        <P.Header id="policyHeader">{data}</P.Header>
                        <IconButton onClick={toggle} icon={Icons.close} />
                     </P.HeaderWrapper>
                     <P.BodyWrapper
                        ref={this.bodyRef}
                        offset={bodyTop + wrapperTop}
                     >
                        <Body />
                     </P.BodyWrapper>
                  </P.Wrapper>
               );
            }}
         </Modal>
      );
   }
}

export default PrivacyPolicy;
