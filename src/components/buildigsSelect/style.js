import styled from 'styled-components';

export const StyledMenu = styled.div`
  background-color: var(--navColor);
  color: var(--color);
  border-radius: 8px;
  overflow: hidden;
  min-width: 180px;
  box-shadow: 0px 4px 10px var(--shadow);
  border: 1px solid var(--borderColor);
  margin-top: 10px;

  .ant-dropdown-menu {
    background: var(--navColor);
    color: var(--color);
    border-radius: 8px;
    border: 1px solid var(--borderColor);
  }

  .ant-dropdown-menu-item {
    color: var(--color);
    &:hover {
      background: var(--hoverColor);
    }
  }
`;

export const StyledMenuItem = styled.div`
  color: var(--color);
  padding:2px 4px;
  cursor: pointer;

  &:hover {
    background-color: var(--hoverColor);
  }
`;
