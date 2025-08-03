import styled from 'styled-components';

export const Wrapper = styled.div`
  color: var(--color);  
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
  padding-top: 100px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 16px;
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    padding-top: 80px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding-top: 60px;
  }

  @media (max-width: 480px) {
    padding-top: 40px;
    gap: 12px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 24px;
  text-align: center;

  @media (max-width: 992px) {
    font-size: 22px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const Info = styled.div`
  font-size: 20px;
  line-height: 1.6;
  background-color: var(--formBgcolor);
  border: 1px solid var(--borderColor);
  box-shadow: 0 4px 8px var(--shadow);
  padding: 30px;
  border-radius: 10px;
  max-width: 50%;

  .edit {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .pen {
    font-size: 24px;
    cursor: pointer;
  }

  @media (max-width: 1200px) {
    max-width: 70%;
  }

  @media (max-width: 992px) {
    max-width: 90%;
    font-size: 18px;
    padding: 25px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 16px;
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 16px;
    font-size: 14px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  max-width: 100%; 
  box-sizing: border-box;

  h2 {
    text-align: center;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    gap: 12px;
    padding: 16px;
  }

  @media (max-width: 480px) {
    gap: 10px;
    padding: 12px;
  }
`;

export const Label = styled.label`
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Input = styled.input`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid var(--borderColor);
  background-color: transparent;
  color: var(--color);
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #3498db;
    background-color: var(--hoverColor);
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 15px;
  }

  @media (max-width: 480px) {
    padding: 8px;
    font-size: 14px;
  }
`;

export const UpdateButton = styled.button`
  padding: 12px;
  font-size: 18px;
  border-radius: 8px;
  border: none;
  background-color: #10b981;
  color: white;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    padding: 8px;
    font-size: 14px;
  }
`;

export const DeleteButton = styled.button`
  padding: 10px 28px;
  font-size: 16px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    padding: 8px 20px;
    font-size: 15px;
  }

  @media (max-width: 480px) {
    padding: 6px 16px;
    font-size: 14px;
  }
`;

export const Custommodal = styled.div`
  background-color: var(--bg);
  border-radius: 18px;
  border: 1px solid var(--borderColor);
  padding: 20px;
  max-height: 80vh;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

export const Select = styled.select`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid var(--borderColor);
  background-color: transparent;
  color: var(--color);
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #3498db;
    background-color: var(--hoverColor);
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 15px;
  }

  @media (max-width: 480px) {
    padding: 8px;
    font-size: 14px;
  }
`;
