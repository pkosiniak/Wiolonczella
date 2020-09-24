
import React from 'react';
import Dropdown from './Dropdown';
import DropdownWrapper from './DropdownWrapper';

const DropdownDemo: React.FC = () => (
   <>
      <DropdownWrapper triggerElement={(<button>trigger</button>)} layoutElement={(<span>layout</span>)} />
      <Dropdown trigger={(<button>trigger</button>)}><span>layout</span></Dropdown>
   </>
);

export default DropdownDemo;
