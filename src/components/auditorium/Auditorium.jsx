'use client';
import React, { useState } from 'react';
import {
    Crud, CustomButton, Info, NextPages, Title, Wrapper
} from './style';
import { useGetAuditorium } from '@/hooks/users/useUpdateProfile';
import Loader from '../loader/Loader';
import { FaTrash, FaPen } from "react-icons/fa";
import { useAuth } from '@/context/authContext';
import GenericModal from '../AuditoriumModals/Modal';
import UpdateAuditoriumModal from '../AuditoriumModals/Auditoryrename';
import AddLessonModal from '../AuditoriumModals/AddLessonModal';


function Auditorium({ building, filter, search }) {
    const [page, setPage] = useState(1)
    const { data, isLoading, error } = useGetAuditorium(building, page, filter, search);

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
        // const msg = error?.response?.data?.error || error?.message || 'Xatolik yuz berdi';
        const msg = 'Auditoriyalar mavjud emas';
        return <h2 style={{ marginTop: '20px' }}>{msg}</h2>;
    }

    return (
        <>
            <Title>Binoga tegishli Auditoriyalar</Title>
            <Wrapper>
                {data?.auditoriums?.length === 0 ? (
                    <h2 style={{ marginTop: '20px', textAlign: 'center' }}>
                        {search?.trim()
                            ? "Qidiruv bo‘yicha natija topilmadi"
                            : "Bu binoda auditoriyalar mavjud emas"}
                    </h2>
                ) : (
                    data?.auditoriums?.map((item) => (
                        <Info key={item?.id}>
                            <h3>{item?.name}</h3>
                            <p><strong>Kafedrasi:</strong> {item?.department}</p>
                            <p><strong>Sig'imi:</strong> {item?.capacity}</p>
                            <p><strong>Izoh:</strong> {item?.description}</p>
                            <p><strong>Elektron doska:</strong> {item?.hasElectronicScreen ? "Mavjud" : "Mavjud emas"}</p>
                            <p><strong>Proyektor:</strong> {item?.hasProjector ? "Mavjud" : "Mavjud emas"}</p>
                            <p><strong>Bino:</strong> {item?.buildingDTO?.name} — {item?.buildingDTO?.address}</p>
                            <p><strong>Id:</strong> {item?.id}</p>
                            {role === 'admin' && (
                                <Crud>
                                    <FaPen className='icon' onClick={() => handleEditClick(item)} />
                                    <GenericModal auditoriumName={item.name} auditoriumId={item.id} icon={<FaTrash />} />
                                    <AddLessonModal auditoriumID={item?.id}>Qoshish</AddLessonModal>

                                </Crud>
                            )}
                        </Info>
                    ))
                )}
            </Wrapper>



            {selectedAuditorium && (
                <UpdateAuditoriumModal
                    open={openEditModal}
                    onClose={handleCloseModal}
                    auditorium={selectedAuditorium}
                    building={building}
                />
            )
            }
            <NextPages className="nextPage">
                <CustomButton
                    disabled={!data?.hasPreviousPage}
                    onClick={() => {
                        if (data?.hasPreviousPage) setPage(prev => prev - 1)
                    }}
                >
                    Oldingi
                </CustomButton>

                <CustomButton
                    disabled={!data?.hasNextPage}
                    onClick={() => {
                        if (data?.hasNextPage) setPage(prev => prev + 1)
                    }}
                >
                    Keyingi
                </CustomButton>
            </NextPages>

        </>
    );
}

export default Auditorium;
