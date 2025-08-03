'use client';

import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Custommodal, Form, Label, Input, UpdateButton } from './style';
import { useCreateAuditorium } from '@/hooks/users/useUpdateProfile';
import useMedia from 'use-media';

function CreateAuditoriumModal({ buildingID, children }) {
    const [open, setOpen] = useState(false);

    const createMutation = useCreateAuditorium()
    const [form, setForm] = useState({
        name: '',
        department: '',
        capacity: '',
        description: '',
        hasElectronicScreen: false,
        hasProjector: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setForm(prev => ({ ...prev, [name]: newValue }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ buildingID, newAuditorium: form }, 'test')

        createMutation.mutate(
            { buildingID, newAuditorium: form },
            {
                onSuccess: () => {
                    handleClose();
                    setForm({
                        name: '',
                        department: '',
                        capacity: '',
                        description: '',
                        hasElectronicScreen: false,
                        hasProjector: false,
                    });
                },
            }
        );
    };

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const isWide = useMedia("(max-width: 768px)");

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: isWide ? '90%' : '50%',
        bgcolor: 'transparent',
        p: 1,
    };

    return (
        <>
            {/* <UpdateButton onClick={handleOpen}>Yangi Auditoriya Qo‘shish</UpdateButton> */}
            <span onClick={handleOpen}> {children}</span>
            <Modal open={open} onClose={handleClose}>
                <Box sx={modalStyle}>
                    <Custommodal>
                        <Form onSubmit={handleSubmit}>
                            <h2>Yangi auditoriya qo‘shish</h2>

                            <Label>Nomi</Label>
                            <Input name="name" value={form.name} onChange={handleChange} required />

                            <Label>Kafedrasi</Label>
                            <Input name="department" value={form.department} onChange={handleChange} required />

                            <Label>Sig‘imi</Label>
                            <Input name="capacity" value={form.capacity} onChange={handleChange} type="number" required />

                            <Label>Izoh</Label>
                            <Input name="description" value={form.description} onChange={handleChange} />

                            <Label>
                                <input
                                    type="checkbox"
                                    name="hasElectronicScreen"
                                    checked={form.hasElectronicScreen}
                                    onChange={handleChange}
                                /> Elektron doska
                            </Label>

                            <Label>
                                <input
                                    type="checkbox"
                                    name="hasProjector"
                                    checked={form.hasProjector}
                                    onChange={handleChange}
                                /> Proyektor
                            </Label>

                            <UpdateButton type="submit" disabled={createMutation.isLoading}>
                                {createMutation.isLoading ? 'Yuklanmoqda...' : 'Qo‘shish'}
                            </UpdateButton>
                        </Form>
                    </Custommodal>
                </Box>
            </Modal>
        </>
    );
}

export default CreateAuditoriumModal;
