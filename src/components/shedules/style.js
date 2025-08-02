import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid var(--borderColor);
  margin-top: 120px;
  border-radius: 10px;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 20px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  font-family: Arial, sans-serif;
  align-items: center;
  justify-content: space-between;

  .wrapchild{
  display: flex;
  gap: 20px;
  font-family: Arial, sans-serif;
  align-items: center;
  }
`;

export const SelectBox = styled.p`
  padding: 10px 15px;
  border: 1px solid var(--borderColor);
  border-radius: 10px;
  background-color: var(--bg);
  cursor: pointer;
  box-shadow: 0 2px 6px var(--shadow);
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 220px;
  &:hover {
    background-color: var(--hoverColor);
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 110%;
  left: 0;
  width: 220px;
  max-height: 200px;
  overflow-y: auto;
  background-color: var(--bg);
  border-radius: 10px;
  border: 1px solid var(--borderColor);
  z-index: 100;
  box-shadow: 0 4px 10px var(--shadow);
`;

export const Option = styled.button`
  width: 100%;
  padding: 10px 15px;
  background: transparent;
  border: none;
  text-align: left;
  color: var(--color);
  cursor: pointer;
  &:hover {
    background-color: var(--hoverColor);
  }
`;

export const SearchInput = styled.input`
  width: 90%;
  padding: 8px 10px;
  margin: 10px;
  border-radius: 8px;
  border: 1px solid var(--borderColor);
  outline: none;
  background-color: transparent;
  color: var(--color);
`;

export const StyledSelect = styled.select`
  padding: 10px 15px;
  border-radius: 10px;
  border: 1px solid var(--borderColor);
  background-color: var(--bg);
  color: var(--color);
  box-shadow: 0 2px 6px var(--shadow);
  cursor: pointer;
  min-width: 160px;

  &:hover {
    background-color: var(--hoverColor);
  }

  option {
    background-color: var(--bg);
    color: var(--color);
  }
`;

export const DateInput = styled.input`
  padding: 10px 15px;
  border-radius: 10px;
  border: 1px solid var(--borderColor);
  background-color: var(--bg);
  color: var(--color);
  box-shadow: 0 2px 6px var(--shadow);
  cursor: pointer;
  min-width: 160px;

  &::-webkit-calendar-picker-indicator {
    filter: invert(0.5);
    cursor: pointer;
  }
`;

export const AddBtn = styled.button`
    padding: 12px 30px;
    background-color: var(--navColor);
    border: 1px solid var(--borderColor);
    border-radius: 5px;
    font-weight: bold;
    color: var(--color);
    cursor: pointer;
    margin-right: 10px;
    transition: all 0.3s ease;
    display: flex;
    gap: 15px;
    align-items: center;

`