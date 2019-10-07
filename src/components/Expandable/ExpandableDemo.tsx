import React from 'react';
import Expandable from './Expandable';
import LoremIpsum from '../LoremIpsum';

const ExpandableDemo = () => (
   <Expandable trigger={(<div>expand</div>)}>
      <LoremIpsum useColumn paragraphs={5} showOptions={false} />
   </Expandable>
);

export default ExpandableDemo;
