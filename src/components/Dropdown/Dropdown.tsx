import React, { ReactNode } from 'react';
import * as C from './constants';
import * as P from './parts';
import { isFunction } from '../../assets/parse';
import { setAlignment } from '../../assets/setAlignment';

export type ToggleType = ReturnType<(Dropdown['getToggle'])>;

export interface DropdownProps extends C.DropdownComponentProps {
   useAnimation?: boolean;
   trigger: ReactNode | ((props: ToggleType) => ReactNode);
   children?: ReactNode | ((props: ToggleType) => ReactNode);
}

export interface DropdownState {
   isOpen: boolean;
   dropdownIn: boolean;
}

class Dropdown extends React.Component<DropdownProps, DropdownState> {
   state = {
      isOpen: false,
      dropdownIn: false,
   };

   private getToggle = () => ({
      toggle: this.onClick,
      isOpen: this.state.dropdownIn,
   });

   dropdownRef = React.createRef<HTMLDivElement>();
   layoutRef = React.createRef<HTMLDivElement>();

   removeOutsideClickListener() {
      document.removeEventListener('click', this.handleOutsideClick);
      document.removeEventListener('touchstart', this.handleOutsideClick);
   }

   handleOutsideClick = (event: Event) => {
      if (this.dropdownRef.current
         && !this.dropdownRef.current.contains(event.target as Node)) {
         this.setState({ dropdownIn: false });
         setTimeout(() => this.setState({ isOpen: false }), P.duration / 5 * 1000 + 1);
         this.removeOutsideClickListener();
      }
   };

   onClick = () => {
      const { isOpen, dropdownIn } = this.state;
      this.setState({ dropdownIn: !dropdownIn });
      if (!isOpen) {
         this.setState({ isOpen: true }, () => {
            setAlignment(this.dropdownRef.current, this.layoutRef.current, this.props.align);
            document.addEventListener('click', this.handleOutsideClick);
            document.addEventListener('touchstart', this.handleOutsideClick);
         });
      }
      else {
         setTimeout(() => this.setState({ isOpen: false }), P.duration / 5 * 1000 + 1);
         this.removeOutsideClickListener();
      }
   }

   render() {
      const { className, trigger, children, useAnimation } = this.props;
      const { isOpen, dropdownIn } = this.state;
      const isDropdownOpen = useAnimation ? isOpen : dropdownIn;

      const [getTrigger, onTriggerClick] = trigger && isFunction(trigger)
         ? [trigger(this.getToggle()), undefined]
         : [trigger, this.onClick];

      const getChildren = children && isFunction(children)
         ? children(this.getToggle())
         : children;

      return (
         <P.Wrapper className={className} ref={this.dropdownRef} >
            <P.TriggerWrapper onClick={onTriggerClick}>
               {getTrigger}
            </P.TriggerWrapper>
            <P.RelativeWrapper>
               <P.LayoutWrapper ref={this.layoutRef} isOpen={isDropdownOpen} >
                  {getChildren}
               </P.LayoutWrapper>
            </P.RelativeWrapper>
         </P.Wrapper>
      );
   }
}

export default Dropdown;
