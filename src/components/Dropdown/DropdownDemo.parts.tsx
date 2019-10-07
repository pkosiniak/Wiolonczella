// import React, { useState } from 'react';
// import { DropdownTriggerProps, DropdownLayoutProps } from './index';

// export interface Dropd {
//    str: string;
// }

// export const Trigger: React.FC<DropdownTriggerProps<Dropd>> = ({ onClick, props, otherProps }) => {
//    const str = props ? props.str : '';
//    return (
//       <>
//          <button onClick={onClick}>{'text' + str}</button>
//          <span>{otherProps as string}</span>
//       </>
//    );
// };

// export class TriggerClass extends React.Component<DropdownTriggerProps<Dropd>> {
//    render() {
//       const { onClick, text, props } = this.props;
//       const str = props ? props.str : '';
//       return (
//          <>
//             <button onClick={onClick}>{'text' + str + text}</button>
//          </>
//       );
//    }
// }

// export const Drop: Dropd = { str: 'Drop' };

// export const tc: React.FC<DropdownTriggerProps<Dropd>> = (props) => (
//    <TriggerClass {...props} />
// );

// export const sTrigger = ({ onClick, text, props }: DropdownTriggerProps<Dropd>) => (
//    <>
//       <button onClick={onClick}>
//          {text}{props && props.str}
//       </button>
//    </>
// );

// export const eTrigger = <button>dropDrop</button>;

// // LISTY
// export interface LP { str: string; }

// export const List: React.FC<DropdownViewProps<LP>> = ({ setTriggerElementText, defaultTriggerElementText, props }) => {
//    const str = props ? props.str : '';
//    const [checked, setChecked] = useState<boolean[]>([false, false]);

//    const names = ['item 1', 'item 2 '];

//    const setTriggerText = (): string => {

//       const text: string[] = [];
//       checked.forEach((value, i) => { if (value) text.push(names[i]); });
//       const defaultText = defaultTriggerElementText || '';
//       return text.join() === '' ? defaultText : text.join(', ');
//    };

//    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//       checked[+event.target.id] = !checked[+event.target.id];
//       setChecked(checked);
//       let counter = 0;
//       checked.forEach((value) => { if (value) counter++; });

//       if (setTriggerElementText)
//          setTriggerElementText(setTriggerText(), counter);
//    };

//    return (
//       <div>
//          <h4>
//             {str}
//          </h4>
//          <ul>
//             <li>
//                <input type="checkbox" name="item 1" id="0" onChange={onChange} />
//                <label htmlFor="1">item 1</label>
//             </li>
//             <li>
//                <input type="checkbox" name="item 2" id="1" onChange={onChange} />
//                <label htmlFor="2">item 2</label>
//             </li>
//          </ul>
//       </div>
//    );
// };

// export const ListView = (
//    <ul>
//       <li>item nr 1</li>
//       <li>item nr 2</li>
//    </ul>
// );
