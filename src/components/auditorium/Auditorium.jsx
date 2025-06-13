'use client'
import React from 'react'
import { Info, Title, Wrapper } from './style'
import { useGetAuditorium } from '@/hooks/users/useUpdateProfile';
import Loader from '../loader/Loader';

function Auditorium({ building }) {
    const { data, error, isLoading } = useGetAuditorium(building);

    if (isLoading) return <Loader />;
    if (error) return <h2 style={{ marginTop: '20px' }}>{error?.response?.data?.error || 'Xatolik yuz berdi'}</h2>;

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
                    </Info>
                ))}
            </Wrapper>
        </>
    );
}

export default Auditorium;
