'use client';

import { useBuilding } from '@/hooks/buildings/buildingID';
import React, { useState } from 'react';
import {
    Wrapper,
    Info,
    Form,
    Label,
    Input,
    UpdateButton,
    DeleteSection,
    DeleteButton,
} from './style';
import { useAuth } from '@/context/authContext';
import { useUpdate } from '@/hooks/useUpdateBuilding';

function Page({ params }) {
    const mutation  = useUpdate()
    const { building } = params; // `params` ni to'g'ri olish
    const { data, isLoading, error } = useBuilding(building);
    const { role } = useAuth(); // Bu erda Hooks chaqiriladi

    const [update, setUpdate] = useState({
        name: '',
        address: ''
    });

    const handleChange = (e) => {
        let { name, value } = e.target;
        setUpdate({ ...update, [name]: value });
    };

    const handleSubmit = (e) => {
        let id = building
        e.preventDefault();
        mutation.mutate({
            update,id, getData: (data) => {
                console.log(data)
            },
            onError: (error) => {
                console.log(error)
            }
        })
    };

    if (isLoading) return <Wrapper>Yuklanmoqda...</Wrapper>;
    if (error) return <Wrapper>Xatolik yuz berdi!</Wrapper>;

    return (
        <>
            <Wrapper>
                <Info>
                    <h1><strong>Bino nomi:</strong> {data?.name}</h1>
                    <p><strong>Manzili:</strong> {data?.address}</p>
                    <p><strong>Yaratgan:</strong> {data?.creatorDTO.firstname} {data?.creatorDTO.lastname} (@{data?.creatorDTO.username})</p>
                    <p><strong>Role:</strong> {data?.creatorDTO.role}</p>
                </Info>

                {role === 'admin' && (
                    <Form onSubmit={handleSubmit}>
                        <h2>Binoni yangilash</h2>
                        <Label>Yangi bino nomi</Label>
                        <Input onChange={handleChange} name="name" />

                        <Label>Yangi manzil</Label>
                        <Input onChange={handleChange} name="address" />

                        <UpdateButton>Yangilash</UpdateButton>
                    </Form>
                )}
            </Wrapper>

            {role === 'admin' && (
                <DeleteSection>
                    <DeleteButton>Binoni o‘chirish</DeleteButton>
                </DeleteSection>
            )}
        </>
    );
}

export default Page;
