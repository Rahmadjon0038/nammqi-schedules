import styled, { createGlobalStyle } from 'styled-components';

const Container = styled.div`
  background-color: var(--tableHeaderBg);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 30px;
  box-shadow: 0 0 4px var(--shadow);
  z-index: 1000;
  h1 {
    text-shadow: 0 0 2px white;
    cursor: pointer;
    color: var(--tableTitleColor);
  }
  h1 span {
    color: blue;
    text-shadow: 0 0 2px blue;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 25px;
  
  .link {
    color: var(--tableTitleColor);
    text-decoration: none;
    font-weight: 500;
  }

  .nav-group {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const CustomMenu = styled.div`
  .menu {
    font-size: 26px;
    cursor: pointer;
    color: var(--color);
  }

  @media (min-width: 600px) {
    display: none;
  }
`;

export const ModalMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: flex-start;

  .link {
    font-size: 18px;
    font-weight: 500;
    color: var(--color);
    text-decoration: none;
    transition: color 0.2s ease;
  }
  .link:hover {
    color: orange;
  }

  .dark_icon {
    margin-top: 10px;
    cursor: pointer;
  }

  .nav-group {
    display: flex;
    gap: 8px;
    align-items: center;
  }
`;

const Settings = styled.div`
  cursor: pointer;
  .info {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .login {
    padding: 8px 16px;
    border-radius: 6px;
    background-color: var(--navColor);
    border: 1px solid var(--borderColor);
    cursor: pointer;
    font-size: 15px;
  }
`;

export const GlobalModalStyle = createGlobalStyle`
  .ant-modal-content {
    background-color: var(--bg) !important;
    color: var(--color);
    border-radius: 14px;
    padding: 20px;
    border: 1px solid var(--borderColor) !important;
  }
  .ant-modal-mask {
    background-color: rgba(0,0,0,0.6) !important;
  }
`;

export { Container, Nav, Settings };
