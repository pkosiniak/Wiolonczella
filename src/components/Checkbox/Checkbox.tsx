import React, { ReactNode } from 'react';
// tslint:disable-next-line: no-import-side-effect
import './Checkbox.scss';

interface CheckboxProps {
   id: string;
   isChecked: boolean;
   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
   children: ReactNode | (() => ReactNode);
}

const Checkbox: React.FC<CheckboxProps> = ({ id, isChecked, onChange, children }) => (
   <label
      htmlFor={id}
      className="container"
   >
      <input
         id={id}
         type="checkbox"
         className="checkbox"
         checked={isChecked}
         onChange={onChange}
         required
      />
      <span className="checkmark" />
      {children}
   </label>
);

export default Checkbox;
