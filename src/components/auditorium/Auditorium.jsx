'use client'
import React from 'react'
import { Info, Wrapper } from './style'
import { useGetAuditorium } from '@/hooks/users/useUpdateProfile';
import Loader from '../loader/Loader';

function Auditorium({ building }) {
    const { data, error, isLoading } = useGetAuditorium(building);

    if (error) {
        console.log()
        return <h2>{error.response.data.error}</h2>
    }

    console.log(data)
    return (
        <Wrapper>
            {data ? data?.auditoriums?.map((item) => (
                <Info key={item?.id}>
                    <h3>Nomi: {item?.name}</h3>
                    <p>Kafedrasi: {item?.department}</p>
                    <p>Sig'imi: {item?.capacity}</p>
                    <p>{item?.description}</p>
                    <p>Elektron doska: {item?.hasElectronicScreen ? "Mavjud" : "Mavjud emas"}</p>
                    <p>proyektor: {item?.hasProjector ? "Mavjud" : "Mavjud emas"}</p>
                </Info>
            )) : <Loader />}
        </Wrapper>
    )
}

export default Auditorium