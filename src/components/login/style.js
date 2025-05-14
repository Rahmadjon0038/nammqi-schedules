import styled from "styled-components";
import { Modal } from 'antd';

export const ModalContent = styled.div`
    h2{
        text-align: center;
        font-size: 30px;
        margin-bottom: 10px;
    }
    p{
        font-size: 22px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .renameIcon{
        cursor: pointer;
        font-size: 24px;
    }

    form input{
      width: 100%;
      padding: 14px;
      background-color: var(--navColor);
      border: 1px solid var(--borderColor);
      margin-top: 20px;
      color: var(--color);
      outline: none;
      border-radius: 5px;

    }
    button{
      padding: 12px 60px;
      margin: 0 auto;
      margin-top: 20px;
      background-color: var(--navColor);
      display: block;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      color: var(--color);
      cursor: pointer;
    }

`

export const CustomModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 20px;
    background-color: var(--formBgcolor);
    border: 1px solid var(--borderColor);
    color: var(--color);
    padding: 24px 40px;
  }
  .ant-modal-title {
    display: none;
  }
  .ant-modal-close{
    color: var(--color);
  }
  .ant-modal-close:hover{
    color: var(--color);
  }
`;
