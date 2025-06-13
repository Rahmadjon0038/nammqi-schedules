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
    Custommodal, Custommodalitem
} from './style';
import { useAuth } from '@/context/authContext';
import { useUpdate } from '@/hooks/useUpdateBuilding';
import { useRouter, useParams } from 'next/navigation';
import Auditorium from '@/components/auditorium/Auditorium';
import { FaPen } from "react-icons/fa";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import DeleteBildingModal from '@/components/DeletebuildingModal';

function Page() {
    const mutation = useUpdate();
    const params = useParams();
    const building = params?.building;
    const { data, isLoading, error } = useBuilding(building);
    const { role } = useAuth();
    const router = useRouter();

    const [update, setUpdate] = useState({
        name: '',
        address: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdate(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate({
            update,
            building,
            getData: () => {
                setOpen(false); // modalni yopish
            },
            onError: (error) => {
                console.log(error);
            }
        });
    };



    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        bgcolor: 'transparent',
        p: 1,
    };
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    if (isLoading) return <Wrapper>Yuklanmoqda...</Wrapper>;
    if (error) return <Wrapper>Xatolik yuz berdi!</Wrapper>;

    return (
        <>
            <Wrapper>
                <Info>
                    <div className='edit'>
                        <h1><strong>Bino nomi: </strong> {data?.name}</h1>
                        {role === 'admin' && <FaPen className='pen' onClick={handleOpen} />}
                    </div>
                    <p><strong>Manzili:</strong> {data?.address}</p>
                    <p><strong>Yaratgan:</strong> {data?.creatorDTO.firstname} {data?.creatorDTO.lastname} (@{data?.creatorDTO.username})</p>
                    <p><strong>Role:</strong> {data?.creatorDTO.role}</p>
                    {role === 'admin' && (
                        <DeleteBildingModal building={building} buildingName={data?.name}/>
                        // <DeleteButton onClick={() => alert('delete building')}>Binoni o‘chirish</DeleteButton>
                    )}
                </Info>

                {/* Modal for updating building */}
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                    <Box sx={style}>
                        <Custommodal>

                            <Form onSubmit={handleSubmit}>
                                <h2>Binoni yangilash</h2>
                                <Label>Yangi bino nomi</Label>
                                <Input
                                    name="name"
                                    placeholder='Bino nomini kiriting'
                                    value={update.name}
                                    onChange={handleChange}
                                    required
                                />
                                <Label>Yangi manzil</Label>
                                <Input
                                    name="address"
                                    placeholder='Manzilni kiriting'
                                    value={update.address}
                                    onChange={handleChange}
                                    required
                                />
                                <div className="btnbox">
                                    <UpdateButton type="submit">Yangilash</UpdateButton>
                                </div>
                            </Form>
                        </Custommodal>
                    </Box>
                </Modal>


            </Wrapper>

            <Auditorium building={building} />
        </>
    );
}

export default Page;
