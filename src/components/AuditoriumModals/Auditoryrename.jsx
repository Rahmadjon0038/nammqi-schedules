'use client';
import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Custommodal, Form, Label, Input, UpdateButton } from './style';
import { useUpdateAuditorium } from '@/hooks/users/useUpdateProfile';


function UpdateAuditoriumModal({ open, onClose, auditorium, building }) {
    const upDateMutation = useUpdateAuditorium();
    const [form, setForm] = useState({

        name: auditorium.name || '',
        department: auditorium.department || '',
        capacity: auditorium.capacity || '',
        description: auditorium.description || '',
        hasElectronicScreen: auditorium.hasElectronicScreen,
        hasProjector: auditorium.hasProjector,
    });


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setForm(prev => ({ ...prev, [name]: newValue }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        upDateMutation.mutate({
            auditoriumId: auditorium.id,
            buildingId: building,
            update: form,
            onSuccess: () => {
                onClose();
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

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={style}>
                <Custommodal>
                    <Form onSubmit={handleSubmit}>
                        <h2>Auditoriyani yangilash</h2>
                        <Label>Nomi</Label>
                        <Input name="name" value={form.name} onChange={handleChange} />

                        <Label>Kafedrasi</Label>
                        <Input name="department" value={form.department} onChange={handleChange} />

                        <Label>Sig'imi</Label>
                        <Input name="capacity" value={form.capacity} onChange={handleChange} type="number" />

                        <Label>Izoh</Label>
                        <Input name="description" value={form.description} onChange={handleChange} />

                        <Label><input type="checkbox" name="hasElectronicScreen" checked={form.hasElectronicScreen} onChange={handleChange} /> Elektron doska</Label>
                        <Label><input type="checkbox" name="hasProjector" checked={form.hasProjector} onChange={handleChange} /> Proyektor</Label>

                        <UpdateButton type="submit">Yangilash</UpdateButton>
                    </Form>
                </Custommodal>
            </Box>
        </Modal>
    );
}

export default UpdateAuditoriumModal;
