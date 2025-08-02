import React, { useState } from 'react';
import { Modal } from 'antd';
import styled, { createGlobalStyle } from 'styled-components';
import { IoIosAddCircle } from "react-icons/io";
import { userAddAuditoiumLesson } from '@/hooks/addBildings';

const GlobalModalStyle = createGlobalStyle`
  .ant-modal-content {
    background-color: var(--bg) !important;
    color: var(--color);
    border-radius: 12px;
    padding: 24px;
    border: 1px solid var(--borderColor) !important;
  }

  .ant-modal-mask {
    background-color: rgba(0, 0, 0, 0.6) !important;
  }
`;

const Title = styled.h2`
  font-size: 22px;
  color: var(--color);
  margin-bottom: 12px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid ${props => (props.error ? 'red' : '#666')};
  border-radius: 8px;
  background-color: var(--bg2, #222);
  color: var(--color, #fff);
  font-size: 15px;
  width: 100%;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid ${props => (props.error ? 'red' : '#666')};
  border-radius: 8px;
  background-color: var(--bg2, #222);
  color: var(--color, #fff);
  font-size: 15px;
`;

const ErrorMsg = styled.span`
  color: red;
  font-size: 13px;
  margin-top: -8px;
`;

const RadioWrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  label {
    display: flex;
    align-items: center;
    gap: 5px;
    color: var(--color, #fff);
  }
`;

const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid #666;
  border-radius: 8px;
  background-color: var(--bg2, #222);
  color: var(--color, #fff);
  font-size: 15px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  gap: 12px;
`;

const CancelButton = styled.button`
  background-color: #444;
  color: #ddd;
  padding: 8px 18px;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background-color: #555;
  }
`;

const SubmitButton = styled.button`
  background-color: #4cafef;
  color: #fff;
  padding: 8px 18px;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background-color: #3b8edc;
  }
`;

const Addlesson = ({ data, children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    group: "",
    subject: "",
    subjectType: "",
    teacher: "",
    auditoriumID: "",
    dayID: "",
    timeSlotID: "",
    shift: "ertalab",
    weekType: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const addlessonMutation = userAddAuditoiumLesson();

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => {
    setIsModalOpen(false);
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value, auditoriumID: data?.id }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (key !== "description" && !formData[key]) {
        newErrors[key] = "Majburiy maydon";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    addlessonMutation.mutate(formData)
    // handleCancel();
  };

  return (
    <>
      <GlobalModalStyle />
      <div className="icon trash" onClick={showModal}>
        {children ? children : <IoIosAddCircle style={{ transform: 'scale(1.5)', cursor: 'pointer' }} />}
      </div>
      <Modal
        title={null}
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
        closable={false}
      >
        <Title>Yangi Dars Qo‘shish</Title>
        <Form onSubmit={handleSubmit}>
          <div>
            <Input name="group" placeholder="Guruh" value={formData.group} onChange={handleChange} error={errors.group} />
            {errors.group && <ErrorMsg>{errors.group}</ErrorMsg>}
          </div>

          <div>
            <Input name="subject" placeholder="Fan nomi" value={formData.subject} onChange={handleChange} error={errors.subject} />
            {errors.subject && <ErrorMsg>{errors.subject}</ErrorMsg>}
          </div>

          <div>
            <Input name="subjectType" placeholder="Turi (masalan: maruza)" value={formData.subjectType} onChange={handleChange} error={errors.subjectType} />
            {errors.subjectType && <ErrorMsg>{errors.subjectType}</ErrorMsg>}
          </div>

          <div>
            <Input name="teacher" placeholder="O‘qituvchi" value={formData.teacher} onChange={handleChange} error={errors.teacher} />
            {errors.teacher && <ErrorMsg>{errors.teacher}</ErrorMsg>}
          </div>

          <div>
            <Input name="dayID" type="number" placeholder="Hafta kuni (1=Du, 7=Yak)" value={formData.dayID} onChange={handleChange} error={errors.dayID} />
            {errors.dayID && <ErrorMsg>{errors.dayID}</ErrorMsg>}
          </div>

          <div>
            <Input name="timeSlotID" type="number" placeholder="Vaqt sloti ID" value={formData.timeSlotID} onChange={handleChange} error={errors.timeSlotID} />
            {errors.timeSlotID && <ErrorMsg>{errors.timeSlotID}</ErrorMsg>}
          </div>

          <RadioWrapper>
            <label>
              <input
                type="radio"
                name="shift"
                value="1"
                checked={formData.shift === "1"}
                onChange={handleChange}
              /> Ertalab
            </label>
            <label>
              <input
                type="radio"
                name="shift"
                value="2"
                checked={formData.shift === "2"}
                onChange={handleChange}
              /> Kechki
            </label>
          </RadioWrapper>

          <div>
            <Select name="weekType" value={formData.weekType} onChange={handleChange} error={errors.weekType}>
              <option value="">Hafta turi</option>
              <option value="odd">Toq hafta</option>
              <option value="even">Juft hafta</option>
            </Select>
            {errors.weekType && <ErrorMsg>{errors.weekType}</ErrorMsg>}
          </div>

          <div>
            <Input name="startDate" type="date" value={formData.startDate} onChange={handleChange} error={errors.startDate} />
            {errors.startDate && <ErrorMsg>{errors.startDate}</ErrorMsg>}
          </div>

          <div>
            <Input name="endDate" type="date" value={formData.endDate} onChange={handleChange} error={errors.endDate} />
            {errors.endDate && <ErrorMsg>{errors.endDate}</ErrorMsg>}
          </div>

          <Textarea name="description" placeholder="Izoh" value={formData.description} onChange={handleChange} />

          <ButtonWrapper>
            <CancelButton type="button" onClick={handleCancel}>Bekor qilish</CancelButton>
            <SubmitButton type="submit">Saqlash</SubmitButton>
          </ButtonWrapper>
        </Form>
      </Modal>
    </>
  );
};

export default Addlesson;
