'use client';
import React, { useState } from 'react';
import {
    Crud, Info, Title, Wrapper
} from './style';
import { useGetAuditorium } from '@/hooks/users/useUpdateProfile';
import Loader from '../loader/Loader';
import { FaTrash, FaPen } from "react-icons/fa";
import { useAuth } from '@/context/authContext';
import GenericModal from '../AuditoriumModals/Modal';
import UpdateAuditoriumModal from '../AuditoriumModals/Auditoryrename';

function Auditorium({ building }) {
    const { data, error, isLoading } = useGetAuditorium(building);
    const { role } = useAuth();

    const [selectedAuditorium, setSelectedAuditorium] = useState(null);
    const [openEditModal, setOpenEditModal] = useState(false);

    const handleEditClick = (auditorium) => {
        setSelectedAuditorium(auditorium);
        setOpenEditModal(true);
    };

    const handleCloseModal = () => {
        setOpenEditModal(false);
        setSelectedAuditorium(null);
    };

    if (isLoading) return <Loader />;
    if (error) {
        const msg = error?.response?.data?.error || error?.message || 'Xatolik yuz berdi';
        return <h2 style={{ marginTop: '20px' }}>{msg}</h2>;
    }

    return (
        <>
            <Title>Binoga tegishli Auditoriyalar</Title>

            <Wrapper>
                {data?.auditoriums?.map((item) => (
                    <Info key={item?.id}>
                        <h3>{item?.name}</h3>
                        <p><strong>Kafedrasi:</strong> {item?.department}</p>
                        <p><strong>Sig'imi:</strong> {item?.capacity}</p>
                        <p><strong>Izoh:</strong> {item?.description}</p>
                        <p><strong>Elektron doska:</strong> {item?.hasElectronicScreen ? "Mavjud" : "Mavjud emas"}</p>
                        <p><strong>Proyektor:</strong> {item?.hasProjector ? "Mavjud" : "Mavjud emas"}</p>
                        <p><strong>Bino:</strong> {item?.buildingDTO?.name} — {item?.buildingDTO?.address}</p>
                        {role == 'admin' && < Crud >
                            <FaPen className='icon' onClick={() => handleEditClick(item)} />
                            <GenericModal auditoriumName={item.name} auditoriumId={item.id} icon={<FaTrash />} />
                        </Crud>}
                    </Info>
                ))}
            </Wrapper >

            {selectedAuditorium && (
                <UpdateAuditoriumModal
                    open={openEditModal}
                    onClose={handleCloseModal}
                    auditorium={selectedAuditorium}
                    building={building}
                />
            )
            }
        </>
    );
}

export default Auditorium;
