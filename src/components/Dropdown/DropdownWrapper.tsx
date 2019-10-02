import React from 'react';
import * as C from './constants';
import * as P from './parts';
import Dropdown, { ToggleType } from './Dropdown';

export type DropdownWrapperProps<TP = {}, LP = {}> = C.DropdownComponentProps
   & C.DropdownTriggerElementProps<TP>
   & C.DropdownLayoutElementProps<LP>;

export interface DropdownWrapperState<TP = {}> {
   triggerText: string;
   triggerProps?: TP;
}

class DropdownWrapper<TP = {}, LP = {}> extends React.Component<DropdownWrapperProps<TP, LP>, DropdownWrapperState<TP>> {
   state = {
      triggerText: this.props.defaultTriggerText || '',
      triggerProps: this.props.triggerProps,
   };

   setTriggerProps = (triggerText: string, otherTriggerProps?: Partial<TP>) => {
      this.setState({ triggerText });
      this.setState({ triggerProps: otherTriggerProps as TP });
   };

   getTrigger = ({ toggle }: ToggleType): JSX.Element => {
      const {
         triggerElementFn,
         triggerFC: TriggerFC,
         triggerElement,
         triggerProps,
      } = this.props;

      const { triggerText } = this.state;

      if (triggerElementFn)
         return triggerElementFn({
            onDropdownToggle: toggle,
            text: triggerText,
            triggerProps,
         });
      if (TriggerFC)
         return (
            <TriggerFC
               text={triggerText}
               triggerProps={triggerProps}
               onDropdownToggle={toggle}
            />
         );
      if (triggerElement)
         return React.cloneElement(triggerElement, { onClick: toggle });
      return <P.DefaultTrigger onClick={toggle}>{triggerText}</P.DefaultTrigger>;
   };

   getLayout = ({ toggle }: ToggleType): JSX.Element => {
      const {
         layoutFC: LayoutFC,
         layoutElement,
         layoutElementFn,
         layoutProps,
         defaultTriggerText
      } = this.props;

      if (layoutElementFn) {
         return layoutElementFn({
            defaultTriggerText,
            layoutProps,
            onDropdownToggle: toggle,
            setTriggerProps: this.setTriggerProps,
         });
      }
      if (LayoutFC) {
         return (
            <LayoutFC
               defaultTriggerText={defaultTriggerText}
               layoutProps={layoutProps}
               onDropdownToggle={toggle}
               setTriggerProps={this.setTriggerProps}
            />
         );
      }
      if (layoutElement)
         return layoutElement;
      return (<P.DefaultLayout>{' '}</P.DefaultLayout>);
   };

   render() {
      const { align, className } = this.props;

      return (
         <Dropdown
            align={align}
            className={className}
            trigger={this.getTrigger}
         >
            {(props) => this.getLayout(props)}
         </Dropdown>
      );
   }
}

export default DropdownWrapper;
