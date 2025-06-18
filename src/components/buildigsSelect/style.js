import styled from 'styled-components';

export const StyledMenu = styled.div`
  background-color: var(--navColor); 
  border-radius: 8px;
  overflow: hidden;
  min-width: 180px;
  box-shadow:var(--navColor);
  border: 1px solid var(--borderColor);
  margin-top: 10px;
`;

export const StyledMenuItem = styled.div`
  padding: 10px 16px;
  font-size: 15px;
  color: var(--color);
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: var(--hoverColor);
  }
`;
