import React, { useState } from 'react';
import { Modal } from 'antd';
import { IoMdMenu } from "react-icons/io";


const MobileSidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);
  return (
    <>
      <GlobalModalStyle />
      <div className="icon trash" onClick={showModal}>
        <IoMdMenu className="menu" />
      </div>
      <Modal
        title={null}
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
        closable={false}>
        s
      </Modal>
    </>
  );
};

export default MobileSidebar;
