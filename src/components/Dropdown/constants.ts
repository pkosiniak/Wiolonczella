import { AlignType } from '../../assets/setAlignment';

export interface DropdownTriggerProps<TP = {}> {
   onDropdownToggle: () => void;
   text?: string;
   triggerProps?: TP;
}

export interface DropdownLayoutProps<LP = {}, TP = {}> {
   setTriggerProps?: (triggerText: string, otherTriggerProps?: TP) => void;
   defaultTriggerText?: string;
   onDropdownToggle: () => void;
   layoutProps?: LP;
}

export interface DropdownTriggerElementProps<TP = {}> {
   triggerElementFn?: (props: DropdownTriggerProps<TP>) => JSX.Element;
   triggerFC?: React.FC<DropdownTriggerProps<TP>>;
   triggerElement?: JSX.Element;
   triggerProps?: TP;
   defaultTriggerText?: string;
}

export interface DropdownLayoutElementProps<LP = {}> {
   layoutElementFn?: (props: DropdownLayoutProps<LP>) => JSX.Element;
   layoutFC?: React.FC<DropdownLayoutProps<LP>>;
   layoutElement?: JSX.Element;
   layoutProps?: LP;
}

export interface DropdownComponentProps {
   align?: AlignType | string;
   className?: string;
}
