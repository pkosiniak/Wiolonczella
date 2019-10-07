import React, { ReactNode } from 'react';
import Responsive from '../Responsive/Responsive';
import * as P from './parts';
import { OverlayLevel, AnimatedOverlay } from '../Overlay';
import { isFunction } from '../../assets/parse';
import { hideScrollbar, windowResizeListenerWorker } from '../../assets/helpers';
import { Device } from '../../assets/styles';

export type ToggleType = ReturnType<(Modal['getToggle'])>;

interface ModalProps {
   className?: string;
   useColumn?: boolean;
   trigger: ReactNode | ((props: ToggleType) => ReactNode);
   children?: ReactNode | ((props: ToggleType) => ReactNode);
}

interface ModalState {
   isOpen: boolean;
   modalIn: boolean;
   isOnMobile: boolean;
}

class Modal extends React.Component<ModalProps, ModalState> {
   state = {
      isOpen: false,
      modalIn: false,
      isOnMobile: window.innerWidth < Device.mobile.width,
   };

   layoutRef = React.createRef<HTMLDivElement>();

   private getToggle = () => ({
      toggle: this.onClick,
      isOpen: this.state.isOpen,
   });

   onClick = () => {
      const { isOpen, modalIn } = this.state;
      this.setState({ modalIn: !modalIn });
      if (!isOpen) {
         this.setState({ isOpen: !isOpen }, () => { hideScrollbar(this.state.isOpen); });
         window.addEventListener('resize', windowResizeListenerWorker);
      } else {
         setTimeout(() => this.setState({ isOpen: !isOpen },
            () => { hideScrollbar(this.state.isOpen); }),
            P.duration * 1000 + 1);
         window.removeEventListener('resize', windowResizeListenerWorker);
      }
   };

   render() {
      const { className, useColumn, trigger, children } = this.props;
      const { isOpen, modalIn, isOnMobile } = this.state;

      const [getTrigger, onTriggerClick] = trigger && isFunction(trigger)
         ? [trigger(this.getToggle()), undefined]
         : [trigger, this.onClick];

      const getChildren = children && isFunction(children)
         ? children(this.getToggle())
         : children;

      return (
         <>
            <P.Trigger onClick={onTriggerClick}>{getTrigger}</P.Trigger>
            <Responsive>
               {({ isMobile }) => {
                  if (isMobile !== isOnMobile) {
                     this.setState({ isOnMobile: isMobile });
                  }
                  return isOpen && (
                     <>
                        <P.LayoutWrapper
                           ref={this.layoutRef}
                           className={className}
                           useColumns={useColumn}
                           isOpen={modalIn}
                        >
                           {getChildren}
                        </P.LayoutWrapper>
                        {!isMobile && <AnimatedOverlay
                           onClick={this.onClick}
                           level={OverlayLevel.hi}
                           duration={P.duration}
                           isOpen={modalIn}
                        />}
                     </>
                  );
               }}
            </Responsive>
         </>
      );
   }
}

export default Modal;
