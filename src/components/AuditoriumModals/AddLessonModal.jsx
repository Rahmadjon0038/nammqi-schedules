'use client';

import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Custommodal, Form, Label, Input, UpdateButton, Select } from './styles';
import { useAddLessons } from '@/hooks/addBildings';
import useMedia from 'use-media';

function AddLessonModal({ auditoriumID, children }) {
  const [open, setOpen] = useState(false);
  const { mutate: addLesson } = useAddLessons();

  const [formData, setFormData] = useState({
    group: '',
    subject: '',
    subjectType: '',
    teacher: '',
    dayID: '',
    timeSlotID: '',
    shift: '',
    weekType: '',
    startDate: '',
    endDate: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const lesson = {
      group: form.group.value,
      subject: form.subject.value,
      subjectType: form.subjectType.value,
      teacher: form.teacher.value,
      auditoriumID, // prop orqali kelmoqda
      dayID: Number(form.dayID.value),
      timeSlotID: Number(form.timeSlotID.value),
      shift: Number(form.shift.value),
      weekType: form.weekType.value,
      startDate: form.startDate.value,
      endDate: form.endDate.value,
      description: form.description.value,
    };

    addLesson({ lesson, getData: () => setOpen(false) }); // muvaffaqiyatli bo‘lsa modalni yopamiz
  };


  const isWide = useMedia("(max-width: 768px)");

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: isWide ? '90%' : '50%',
    bgcolor: 'transparent',
    p: 1,
    maxHeight: '90vh',    // ekran balandligining 90% dan oshmasin
    overflowY: 'auto',
  };

  return (
    <>
      <span onClick={handleOpen}> {children}</span>
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <Custommodal>
            <Form onSubmit={handleSubmit}>
              <h2>Yangi dars qo‘shish</h2>

              <Label>Guruh</Label>
              <Input name="group" required />

              <Label>Fan nomi</Label>
              <Input name="subject" required />

              <Label>Fan turi</Label>
              <Select name="subjectType" required>
                <option value="">Tanlang</option>
                <option value="maruza">Ma'ruza</option>
                <option value="amaliyot">Amaliyot</option>
                <option value="labaratoriya">Labaratoriya</option>
              </Select>

              <Label>O‘qituvchi</Label>
              <Input name="teacher" required />

              <Label>Hafta kuni</Label>
              <Select name="dayID" required>
                <option value="">Tanlang</option>
                <option value="1">Dushanba</option>
                <option value="2">Seshanba</option>
                <option value="3">Chorshanba</option>
                <option value="4">Payshanba</option>
                <option value="5">Juma</option>
                <option value="6">Shanba</option>
                <option value="7">Yakshanba</option>
              </Select>

              <Label>Vaqt bo‘lagi</Label>
              <Select name="timeSlotID" required>
                <option value="">Tanlang</option>
                <option value="1">1-par</option>
                <option value="2">2-par</option>
                <option value="3">3-par</option>
                <option value="4">4-par</option>
                <option value="5">5-par</option>
              </Select>

              <Label>Smana</Label>
              <Select name="shift" required>
                <option value="">Tanlang</option>
                <option value="1">1-smana</option>
                <option value="2">2-smana</option>
              </Select>

              <Label>Hafta turi</Label>
              <Select name="weekType" required>
                <option value="">Tanlang</option>
                <option value="odd">Toq hafta</option>
                <option value="even">Juft hafta</option>
              </Select>

              <Label>Boshlanish sanasi</Label>
              <Input name="startDate" type="date" required />

              <Label>Tugash sanasi</Label>
              <Input name="endDate" type="date" required />

              <Label>Izoh</Label>
              <Input name="description" />

              <UpdateButton type="submit">Qo‘shish</UpdateButton>
            </Form>

          </Custommodal>
        </Box>
      </Modal>
    </>
  );
}

export default AddLessonModal;
