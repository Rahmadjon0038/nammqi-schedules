import React, { useState } from 'react';
import { Modal } from 'antd';
import styled, { createGlobalStyle } from 'styled-components';
import { FaTable } from "react-icons/fa";

const GlobalModalStyle = createGlobalStyle`
  .ant-modal-content {
    background-color: var(--bg) !important;
    color: var(--color);
    border-radius: 12px;
    padding: 24px;
    border: 1px solid var(--borderColor) !important;
  }

  .ant-modal-mask {
    background-color: rgba(0, 0, 0, 0.6) !important;
  }
`;

const Title = styled.h2`
  font-size: 22px;
  color: var(--color);
  margin-bottom: 12px;
`;

const InfoItem = styled.p`
  font-size: 16px;
  color: var(--color);
  margin: 6px 0;
  span {
    font-weight: bold;
    color: var(--primaryColor, #4cafef);
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
`;

const CancelButton = styled.button`
  background-color: #444;
  color: #ddd;
  padding: 8px 18px;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background-color: #555;
  }
`;

const ViewLessonModal = ({ schedule }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);
  return (
    <>
      <GlobalModalStyle />
      <div className="icon trash" onClick={showModal}>
        <FaTable style={{ color: 'green', transform: 'scale(1.5)', cursor: 'pointer' }} />
      </div>
      <Modal
        title={null}
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
        closable={false}>
        <Title>{schedule?.lesson?.subject || "Noma'lum fan"}</Title>
        <InfoItem><span>O‘qituvchi:</span> {schedule?.lesson?.teacher}</InfoItem>
        <InfoItem><span>Guruh:</span> {schedule?.lesson?.group}</InfoItem>
        <InfoItem><span>Auditoriya:</span> {schedule?.lesson?.auditorium}</InfoItem>
        <InfoItem><span>Turi:</span> {schedule?.lesson?.type}</InfoItem>
        <InfoItem><span>Izoh:</span> {schedule?.lesson?.description || "Izoh mavjud emas"}</InfoItem>
        <InfoItem><span>Izoh:</span> {schedule?.id}</InfoItem>
        <b>{schedule?.auditorium?.id}</b>
        <ButtonWrapper>
          <CancelButton onClick={handleCancel}>Yopish</CancelButton>
        </ButtonWrapper>
      </Modal>
    </>
  );
};

export default ViewLessonModal;
