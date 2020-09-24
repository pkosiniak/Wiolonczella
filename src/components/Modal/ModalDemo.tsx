import React from 'react';
import Modal from './Modal';

const ModalDemo: React.FC = () => (
   <Modal trigger={<button>modal trigger</button>}>
      <div style={{ backgroundColor: 'white' }}>
         modal layout
      </div>
   </Modal>
);

export default ModalDemo;
