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
  line-height: 1.6;
  background-color: var(--bg);
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
    font-size: 20px;
    cursor: pointer;
  }

  p{
    font-size: 16px;
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
  font-size: 18px;
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
`;

export const DeleteButton = styled.button`
  padding: 8px 20px;
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
`;

export const Custommodal = styled.div`
  background-color: var(--bg);
  border-radius: 18px;
  border: 1px solid var(--borderColor);
  padding: 20px;

 
`;
