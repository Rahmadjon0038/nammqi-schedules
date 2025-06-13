import React, { useState } from 'react';
import { Modal } from 'antd';
import styled, { createGlobalStyle } from 'styled-components';
import { useRouter } from 'next/navigation';
import { useDeleteBuilding } from '@/hooks/useDeleteBuilding';
import { DeleteButton } from '@/app/buildings/[building]/style';

const GlobalModalStyle = createGlobalStyle`
  .ant-modal-content {
    background-color: var(--bg) !important;
    color:var(--color);
    border-radius: 12px;
    padding: 24px;
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

const DeleteBuildingModal = ({ building, buildingName }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();
    const deleteMutation = useDeleteBuilding();

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const deleteBuilding = () => {
        deleteMutation.mutate({
            building,
            getData: () => {
                setIsModalOpen(false);
                router.push('/buildings');
            },
            onError: (error) => {
                console.error(error);
            },
        });
    };

    return (
        <>
            <GlobalModalStyle />
            <DeleteButton onClick={showModal}>Binoni o‘chirish</DeleteButton>
            <Modal
                title={null}
                open={isModalOpen}
                footer={null}
                onCancel={handleCancel}
                closable={false}
            >
                <Title>Binoni o‘chirish</Title>
                <Description>
                    Siz <strong>{buildingName}</strong> binosini o‘chirmoqchimisiz?
                    agar bino o'chirsangiz unga tegishli barcha auditoriyalar dars jadvallari o'chib ketadi
                </Description>
                <ButtonWrapper>
                    <CancelButton onClick={handleCancel}>Bekor qilish</CancelButton>
                    <ConfirmDeleteButton onClick={deleteBuilding}>O‘chirish</ConfirmDeleteButton>
                </ButtonWrapper>
            </Modal>
        </>
    );
};

export default DeleteBuildingModal;
