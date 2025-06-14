'use client'
import React from 'react'
import { Crud, Filter, FilterButtons, FilterInput, FilterItem, Info, Title, Wrapper } from './style'
import {useDeleteAuditorium, useGetAuditorium } from '@/hooks/users/useUpdateProfile';
import Loader from '../loader/Loader';
import { IoFilterSharp } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import { FaPen } from "react-icons/fa";

// filter icons
import { FaPlusCircle } from "react-icons/fa";
import { CustomInput } from '@/app/users/style';
import { useAuth } from '@/context/authContext';

function Auditorium({ building }) {
    const deleteAidotoriumMutation = useDeleteAuditorium()
    const { data, error, isLoading } = useGetAuditorium(building);
    const { role } = useAuth()
    if (isLoading) return <Loader />;

    if (error) {
        const msg = error?.response?.data?.error || error?.message || 'Xatolik yuz berdi';
        return <h2 style={{ marginTop: '20px' }}>{msg}</h2>;
    }

    const deleteAuditoium = (id) => {
        deleteAidotoriumMutation.mutate(id)
    }

    return (
        <>
            <Title>Binoga tegishli Auditoriyalar</Title>
            {role == 'admin' &&
                <Filter>
                    <FilterItem>
                        <FilterButtons><IoFilterSharp /></FilterButtons>
                        <FilterInput type="text" placeholder='Filter' />
                    </FilterItem>
                    <FilterItem >
                        <FilterButtons ><FaPlusCircle />Qo'shish</FilterButtons>
                        <FilterButtons><FaTrash />Barcha Adutiroriyalarni o'chirish</FilterButtons>
                    </FilterItem>
                </Filter>}

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
                        <p>{item?.id}</p>
                        <Crud>
                            <FaPen className='icon' />
                            <FaTrash onClick={() => deleteAuditoium(item?.id)} className='icon trash' />
                        </Crud>
                    </Info>
                ))}
            </Wrapper>
        </>
    );
}

export default Auditorium;
