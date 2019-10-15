import React, { ReactNode } from 'react';
import * as P from './parts';
import { isFunction } from '../../assets/parse';
import { getPosition } from '../../assets/alignment';
import { Icons } from '../../assets/constants';

export type ToggleType = ReturnType<(Expandable['getToggle'])>;

interface ExpandableProps {
   expand?: boolean;
   permanent?: boolean;
   showArrow?: boolean;
   showToggleText?: boolean;
   arrowSize?: number;
   toggleTextSize?: number;
   className?: string;
   trigger: ReactNode | (((props: ToggleType) => ReactNode));
   children?: ReactNode | ((props: ToggleType) => ReactNode);
}

interface ExpandableState {
   isOpen: boolean;
   triggerHeight: number;
}

class Expandable extends React.Component<ExpandableProps, ExpandableState> {
   state = {
      isOpen: this.props.expand || this.props.permanent || false,
      triggerHeight: 0,
   };

   private getToggle = () => ({
      toggle: this.onClick,
   });

   getTriggerHeight = (element: HTMLElement) => {
      const rect = getPosition(element);
      this.setState({ triggerHeight: rect ? rect.height : 0 });
   };

   onClick = () => {
      if (this.props.permanent) return;
      this.setState({
         isOpen: !this.state.isOpen,
      });
   };

   isFirst = true;

   getToggleElements = () => {
      const prevIsFirst = this.isFirst;
      this.isFirst = false;
      const {
         permanent,
         showArrow = true,
         showToggleText = true,
         arrowSize = 16,
         toggleTextSize = 12,
      } = this.props;
      const { isOpen } = this.state;

      return !permanent && (showArrow || showToggleText) && (
         <P.ToggleWrapper onClick={this.onClick} height={arrowSize}>
            {showToggleText && (
               <P.ToggleText font={{ size: toggleTextSize, lineHeight: arrowSize }}>
                  {isOpen ? 'ukryj' : 'pokaż'}
               </P.ToggleText>
            )}
            {showArrow && (
               <P.ToggleArrow
                  noPadding
                  firstOpen={prevIsFirst}
                  isOpen={isOpen}
                  icon={Icons.arrowUp}
                  square={arrowSize}
               />
            )}
         </P.ToggleWrapper>
      );
   };

   render() {
      const {
         className,
         trigger,
         children,
      } = this.props;
      const { isOpen, triggerHeight } = this.state;

      const [getTrigger, onTriggerClick] = trigger && isFunction(trigger)
         ? [trigger(this.getToggle()), undefined]
         : [trigger, this.onClick];

      const getChildren = children && isFunction(children)
         ? children(this.getToggle())
         : children;

      return (
         <P.Wrapper
            className={className}
            minHeight={triggerHeight}
            isOpen={isOpen}
         >
            <P.TriggerWrapper
               onClick={onTriggerClick}
               ref={this.getTriggerHeight}
            >
               {getTrigger}
               {this.getToggleElements()}
            </P.TriggerWrapper>
            <P.LayoutWrapper isOpen={isOpen}>
               {getChildren}
            </P.LayoutWrapper>
         </P.Wrapper>
      );
   }
}

const ExpandableMemo = React.memo(Expandable);
ExpandableMemo.displayName = 'Expandable';
export default ExpandableMemo;
