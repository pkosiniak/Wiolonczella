import React, { useState } from 'react';
import Checkbox from './Checkbox';

const CheckboxDemo: React.FC = () => {
   const [checked, setChecked] = useState(false);
   const onChange = () => setChecked((prevState) => !prevState);
   return (
      <Checkbox id="demoCheckbox" isChecked={checked} onChange={onChange}>
         CheckBox
      </Checkbox>
   );
};

export default CheckboxDemo;
