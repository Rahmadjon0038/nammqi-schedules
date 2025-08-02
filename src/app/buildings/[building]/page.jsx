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
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import DeleteBildingModal from '@/components/DeletebuildingModal';
import { Filter, FilterButtons, FilterInput, FilterItem } from '@/components/auditorium/style';
import CreateAuditoriumModal from '@/components/AuditoriumModals/CreateAuditoriumModal';
import GenericModalDelteAudirotiums from '@/components/AuditoriumModals/DeleteAuditoriums';
import { IoFilter, IoFilterSharp } from "react-icons/io5";
import { FaPen, FaPlusCircle, FaTable } from "react-icons/fa";
import { useAddAuiditoriums } from '@/hooks/users/useUpdateProfile';
import { Button, Dropdown } from 'antd';


function Page() {
    const mutation = useUpdate();
    const allAuiditoriumsMutaton = useAddAuiditoriums();

    const params = useParams();
    const building = params?.building;
    const { data, isLoading, error } = useBuilding(building);
    const { role } = useAuth();
    const [inputValue, setInputValue] = useState('');
    const [search, setSearch] = useState('');
    const [daraja, setDaraja] = useState('');

    const inputChange = (e) => {
        const val = e.target.value;
        setInputValue(val);

        if (val.trim() === '') {
            setSearch('');
        } else {
            setSearch(val); // valni bevosita uzatamiz
        }
    };

    const handleFilter = (filterType) => {
        setDaraja(filterType);

    };


    const items = [
        {
            key: '1',
            label: (
                <p onClick={() => handleFilter('name')}>Auditoriya nomi (to‘liq yoki qisman)</p>

            ),
        },
        {
            key: '2',
            label: (
                <p onClick={() => handleFilter('department')}>Kafedra yoki bo‘lim nomi</p>
            ),
        },
        {
            key: '3',
            label: (
                <p onClick={() => handleFilter('capacity')}>Minimal sig‘im (masalan: 50)</p>
            ),
        },

    ]

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

    const addAllAuiditoriums = (e) => {
        const file = e.target.files[0]; // Faylni olayapmiz
        if (!file) {
            console.log("Fayl tanlanmagan");
            return;
        }
        const formData = new FormData();
        formData.append("file", file);
        allAuiditoriumsMutaton.mutate(formData)
    };

    return (
        <>
            <Wrapper>
                <Info>
                    <div className='edit'>
                        <h2>Bino nomi: {data?.name}</h2>
                        {role === 'admin' && <FaPen className='pen' onClick={handleOpen} />}
                    </div>
                    <p><strong>Manzili:</strong> {data?.address}</p>
                    <p><strong>Yaratgan:</strong> {data?.creatorDTO.firstname} {data?.creatorDTO.lastname} (@{data?.creatorDTO.username})</p>
                    <p><strong>Role:</strong> {data?.creatorDTO.role}</p>
                    {role === 'admin' && (
                        <DeleteBildingModal building={building} buildingName={data?.name} />

                    )}
                </Info>

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
                                    onChange={handleChange} />
                                <Label>Yangi manzil</Label>
                                <Input
                                    name="address"
                                    placeholder='Manzilni kiriting'
                                    value={update.address}
                                    onChange={handleChange}
                                />
                                <div className="btnbox">
                                    <UpdateButton type="submit">Yangilash</UpdateButton>
                                </div>
                            </Form>
                        </Custommodal>
                    </Box>
                </Modal>

            </Wrapper>

            <Filter>

                <FilterItem>
                    {/* <FilterButtons><IoFilterSharp /></FilterButtons> */}
                    <Dropdown
                        className="custom-dropdown"
                        menu={{ items }}
                        placement="bottom"
                        overlayClassName="custom-menu">
                        <FilterButtons className='customBtn'><IoFilter />{daraja ? daraja : "Filter turini tanlang"}</FilterButtons>
                    </Dropdown>

                    <FilterInput type="text" placeholder='Filter' onChange={inputChange} value={inputValue} />

                </FilterItem>

                <FilterItem>

                    {role == 'admin' && <CreateAuditoriumModal buildingID={building} >
                        <FilterButtons><FaPlusCircle />Qo'shish</FilterButtons>
                    </CreateAuditoriumModal>}

                    {role == 'admin' && < FilterButtons > <FaTable className='exel' />Exel orqali qo'shish <input onChange={addAllAuiditoriums} className='xls' type="file" /></FilterButtons>}

                    {role == 'admin' && <GenericModalDelteAudirotiums building={building} />}
                </FilterItem>
            </Filter >

            <Auditorium building={building} page={1} filter={daraja} search={search} setSearch={setSearch} />
        </>
    );
}

export default Page;
