import React, { ReactNode } from 'react';
import Responsive from '../Responsive/Responsive';
import * as P from './parts';
import { OverlayLevel, AnimatedOverlay } from '../Overlay';
import { isFunction } from '../../assets/parse';
import { windowResizeListenerWorker, delayedHideScrollbar } from '../../assets/helpers';

export type ToggleType = ReturnType<(Modal['getToggle'])>;

interface ModalProps {
   className?: string;
   useColumn?: boolean;
   trigger: ReactNode | ((props: ToggleType) => ReactNode);
   children?: ReactNode | ((props: ToggleType) => ReactNode);
   historyGoBack?: () => void;
   shouldOpen?: boolean;
}

interface ModalState {
   isOpen: boolean;
   modalIn: boolean;
}

class Modal extends React.Component<ModalProps, ModalState> {
   state = {
      isOpen: false,
      modalIn: false,
   };

   layoutRef = React.createRef<HTMLDivElement>();

   private getToggle = () => ({
      toggle: this.onClick,
      isOpen: this.state.isOpen,
   });

   onHashChange = () => {
      const { historyGoBack } = this.props;
      const { isOpen } = this.state;
      if (!historyGoBack || !isOpen) return;
      historyGoBack();
      this.onClick();
   };

   onClick = () => {
      const { isOpen, modalIn } = this.state;
      const { historyGoBack } = this.props;
      const timeout = P.duration * 1000;
      this.setState({ modalIn: !modalIn });
      if (!isOpen) {
         this.setState({ isOpen: true }, () => {
            delayedHideScrollbar(true, timeout * 0.925);
         });
         window.addEventListener('resize', windowResizeListenerWorker);
         if (historyGoBack) {
            setTimeout(() => window.addEventListener('hashchange', this.onHashChange), 100);
         }
      } else {
         delayedHideScrollbar(false, timeout * 0.075);
         setTimeout(() => this.setState({ isOpen: false }), timeout + 1);
         window.removeEventListener('resize', windowResizeListenerWorker);
         if (historyGoBack) {
            window.removeEventListener('hashchange', this.onHashChange);
            historyGoBack();
         }
      }
   };

   render() {
      const { className, useColumn, trigger, shouldOpen, children } = this.props;
      const { isOpen, modalIn } = this.state;
      if (shouldOpen && !isOpen) this.onClick();

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
               {({ isMobile }) => isOpen && (
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
               )}
            </Responsive>
         </>
      );
   }
}

export default Modal;
