import React, { ReactNode } from 'react';
import * as C from './constants';
import * as P from './parts';
import { isFunction } from '../../assets/parse';
import { setAlignment } from '../../assets/setAlignment';

export type ToggleType = ReturnType<(Dropdown['getToggle'])>;

export interface DropdownProps extends C.DropdownComponentProps {
   trigger: ReactNode | ((props: ToggleType) => ReactNode);
   children?: ReactNode | ((props: ToggleType) => ReactNode);
}

export interface DropdownState {
   isDropdownOpen: boolean;
}

class Dropdown extends React.Component<DropdownProps, DropdownState> {
   state = {
      isDropdownOpen: false,
   };

   private getToggle = () => ({
      toggle: this.onClick,
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
         this.setState({ isDropdownOpen: false });
         this.removeOutsideClickListener();
      }
   };

   onClick = () => this.setState({ isDropdownOpen: !this.state.isDropdownOpen }, () => {
      if (this.state.isDropdownOpen) {
         if (this.dropdownRef.current && this.layoutRef.current)
            setAlignment(this.dropdownRef.current, this.layoutRef.current, this.props.align);
         document.addEventListener('click', this.handleOutsideClick);
         document.addEventListener('touchstart', this.handleOutsideClick);
      } else
         this.removeOutsideClickListener();
   });

   render() {
      const { className, trigger, children } = this.props;
      const { isDropdownOpen } = this.state;

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
            <P.LayoutWrapper ref={this.layoutRef} isDropdownOpen={isDropdownOpen} >
               {getChildren}
            </P.LayoutWrapper>
         </P.Wrapper>
      );
   }
}

export default Dropdown;
