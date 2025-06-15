import React, { useState } from 'react';
import { Modal } from 'antd';
import styled, { createGlobalStyle } from 'styled-components';
import { useRouter } from 'next/navigation';
import { useDeleteBuilding } from '@/hooks/useDeleteBuilding';
import { DeleteButton } from '@/app/buildings/[building]/style';
import { useDeleteAuditorium } from '@/hooks/users/useUpdateProfile';
import { FaTrash } from "react-icons/fa";

const GlobalModalStyle = createGlobalStyle`
  .ant-modal-content {
    background-color: var(--bg) !important;
    color:var(--color);
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
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 16px;
  color: var(--color);
  margin-bottom: 16px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
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

const ConfirmDeleteButton = styled.button`
  background-color: #e53935;
  color: #fff;
  padding: 8px 18px;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background-color: #c62828;
  }
`;

const GenericModal = ({ auditoriumId, icon, auditoriumName, text }) => {
    const deleteAidotoriumMutation = useDeleteAuditorium()
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const deleteAuditoium = (id) => {
        deleteAidotoriumMutation.mutate(id)
    }


    return (
        <>
            <GlobalModalStyle />
            <icon className='icon trash' onClick={showModal}>{icon ? icon : "Binoni o‘chirish"}</icon>
            <Modal
                title={null}
                open={isModalOpen}
                footer={null}
                onCancel={handleCancel}
                closable={false}>
                <Title>Binoni o‘chirish</Title>
                <Description>
                    Siz <strong>{auditoriumName}</strong> Auditoriyani o'chirmoqchimisiz
                </Description>
                <ButtonWrapper>
                    <CancelButton onClick={handleCancel}>Bekor qilish</CancelButton>
                    <ConfirmDeleteButton onClick={() => deleteAuditoium(auditoriumId)}>O‘chirish</ConfirmDeleteButton>
                </ButtonWrapper>
            </Modal>
        </>
    );
};

export default GenericModal;
