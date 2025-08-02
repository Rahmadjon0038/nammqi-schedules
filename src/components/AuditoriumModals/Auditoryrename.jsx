'use client';
import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import {
  Custommodal,
  Form,
  Label,
  Input,
  UpdateButton,
  DeleteButton,
  ButtonGroup,
  DisplayField,
  FieldRow
} from './style';
import { useUpdateAuditorium } from '@/hooks/users/useUpdateProfile';
import { useAuth } from '@/context/authContext';

function UpdateAuditoriumModal({ open, onClose, auditorium }) {
  const upDateMutation = useUpdateAuditorium();
  const { role } = useAuth();


  const [editMode, setEditMode] = useState(false);

  const [form, setForm] = useState({
    name: auditorium.name || '',
    department: auditorium.department || '',
    capacity: auditorium.capacity || '',
    description: auditorium.description || '',
    hasElectronicScreen: Boolean(auditorium.hasElectronicScreen),
    hasProjector: Boolean(auditorium.hasProjector),
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setForm((prev) => ({ ...prev, [name]: newValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editMode) {
      setEditMode(true);
      return;
    }

    upDateMutation.mutate({
      auditoriumId: auditorium.id,
      buildingId: auditorium.buildingDTO?.id,
      update: form,
      onSuccess: (data) => {
        setEditMode(false);
        onClose();
        console.log('iye salomat')
      }
    });
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    bgcolor: 'transparent',
    p: 1,
    outline:"none"
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Custommodal>
          <Form onSubmit={handleSubmit}>
            <h2>
              {editMode ? (
                <Input name="name" value={form.name} onChange={handleChange} />
              ) : (
                form.name
              )}
            </h2>

            <DisplayField>
              <strong>Kafedra:</strong>{' '}
              {editMode ? (
                <Input name="department" value={form.department} onChange={handleChange} />
              ) : (
                form.department
              )}
            </DisplayField>

            <DisplayField>
              <strong>Sig'imi:</strong>{' '}
              {editMode ? (
                <Input
                  name="capacity"
                  type="number"
                  value={form.capacity}
                  onChange={handleChange}
                />
              ) : (
                form.capacity
              )}
            </DisplayField>

            <DisplayField>
              <strong>Izoh:</strong>{' '}
              {editMode ? (
                <Input name="description" value={form.description} onChange={handleChange} />
              ) : (
                form.description
              )}
            </DisplayField>

            <FieldRow>
              <Label>
                <span>Elektron doska:</span>{' '}
                {editMode ? (
                  <input
                    type="checkbox"
                    name="hasElectronicScreen"
                    checked={form.hasElectronicScreen}
                    onChange={handleChange}
                  />
                ) : form.hasElectronicScreen ? (
                  'Bor'
                ) : (
                  'Yo‘q'
                )}
              </Label>

              <Label>
                <span>Proyektor:</span>{' '}
                {editMode ? (
                  <input
                    type="checkbox"
                    name="hasProjector"
                    checked={form.hasProjector}
                    onChange={handleChange}
                  />
                ) : form.hasProjector ? (
                  'Bor'
                ) : (
                  'Yo‘q'
                )}
              </Label>
            </FieldRow>

            <hr />

            <DisplayField>
              <strong>Yaratuvchi:</strong>{' '}
              {auditorium.creatorDTO.firstname} {auditorium.creatorDTO.lastname} (
              {auditorium.creatorDTO.role})
            </DisplayField>

            <DisplayField>
              <strong>Username:</strong> {auditorium.creatorDTO.username}
            </DisplayField>

            <hr />

            <DisplayField>
              <strong>Bino nomi:</strong> {auditorium.buildingDTO.name}
            </DisplayField>
            <DisplayField>
              <strong>Manzili:</strong> {auditorium.buildingDTO.address}
            </DisplayField>

            <DisplayField>
              <strong>Binoni yaratgan:</strong>{' '}
              
              {auditorium.buildingDTO.creatorDTO.firstname}{' '}
              {auditorium.buildingDTO.creatorDTO.lastname} (
              {auditorium.buildingDTO.creatorDTO.role})
            </DisplayField>
            <i>{auditorium?.buildingDTO?.id}</i>

            <ButtonGroup>
              {role == 'admin' && <UpdateButton type="submit">
                {editMode ? 'Saqlash' : 'Yangilash'}
              </UpdateButton>}
              <DeleteButton onClick={onClose}>Yopish</DeleteButton>
            </ButtonGroup>
          </Form>
        </Custommodal>
      </Box>
    </Modal>
  );
}

export default UpdateAuditoriumModal;
