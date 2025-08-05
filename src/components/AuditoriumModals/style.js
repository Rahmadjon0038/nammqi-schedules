import styled from 'styled-components';

export const Wrapper = styled.div`
  color: var(--color);  
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(400px,1fr));
  gap: 20px;
  padding-top: 100px;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 24px;
  text-align: center;
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
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;

  h2 {
    text-align: center;
    margin-bottom: 10px;
  }
`;

export const Label = styled.label`
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid var(--borderColor);
  background-color: transparent;
  color: var(--color);
  width: 100%;
  margin-top: 4px;

  &:focus {
    outline: none;
    border-color: #3498db;
    background-color: var(--hoverColor);
  }
`;

export const UpdateButton = styled.button`
  padding: 8px 14px;
  border-radius: 8px;
  border: none;
  background-color: #10b981;
  color: white;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const DeleteButton = styled.button`
  padding: 8px 14px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const Custommodal = styled.div`
  background-color: var(--bg);
  border-radius: 18px;
  border: 1px solid var(--borderColor);

 
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

export const DisplayField = styled.p`
  margin: 6px 0;
`;

export const FieldRow = styled.div`
  display: flex;
  gap: 20px;
`;