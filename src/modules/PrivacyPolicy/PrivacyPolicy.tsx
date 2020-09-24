import React, { ReactNode } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Policy } from '../../assets/data/Policy.json';
import { navLinks } from '../../assets/data/NavLink.json';
import * as P from './parts';
import Body from './PolicyBody';
import IconButton from '../../components/IconButton/IconButton';
import Modal, { ToggleType } from '../../components/Modal/Modal';
import { getPosition } from '../../assets/alignment';
import { Icons } from '../../assets/constants';

const data = Policy.Header;
const nData = navLinks.PrivacyPolicy;

export interface PrivacyPolicyProps {
   children?: ReactNode | ((props: ToggleType) => ReactNode);
}
interface PrivacyPolicyState {
   bodyTop: number;
   wrapperTop: number;
   wasShown: boolean;
}

type PrivacyPolicyPropsType = PrivacyPolicyProps & RouteComponentProps;

class PrivacyPolicy extends React.Component<PrivacyPolicyPropsType, PrivacyPolicyState> {
   state = {
      bodyTop: 0,
      wrapperTop: 0,
      wasShown: false,
   };

   shouldGoBack = false;

   componentDidMount() {
      this.shouldGoBack = this.props.location.hash !== nData.hashAddress;
   }

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

   shouldModalOpen = () => this.props.location.hash === nData.hashAddress;

   historyGoBack = () => {
      const { history, location } = this.props;
      if (location.hash === nData.hashAddress) {
         this.shouldGoBack
            ? history.goBack()
            : history.push(location.pathname);
      }
   };

   render() {
      const { children } = this.props;
      const { bodyTop, wrapperTop } = this.state;

      return (
         <Modal
            useColumn
            trigger={children}
            historyGoBack={this.historyGoBack}
            shouldOpen={this.shouldModalOpen()}
         >
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
                  <P.Wrapper ref={this.wrapperRef} id={nData.address}>
                     <P.HeaderWrapper>
                        <P.Header>{data}</P.Header>
                        <IconButton
                           // FIXME: fix here x button pos right on PP
                           onClick={toggle}
                           icon={Icons.close}
                        />
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

const RoutedPrivacyPolicy = withRouter(PrivacyPolicy);

export default RoutedPrivacyPolicy;
