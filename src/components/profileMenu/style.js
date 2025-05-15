const { default: styled } = require("styled-components");
import { Modal } from 'antd';
export const ProfileBox = styled.div`
    display: flex;
    align-items: center;
    /* justify-content: center; */
    margin-top: 20px;
    gap: 10px;
    div p{
        color: var(--color);
        font-weight: 600;
        margin-bottom: 2px;
        font-size: 14px;
    }
    .my-custom-modal{
        background-color: red;
    }

`
export const ModalContent = styled.div`
    h2{
        text-align: center;
        font-size: 30px;
        margin-bottom: 20px;
      
      .renameIcon{
        margin-left: 20px;
        font-size: 24px;
      }
    }
    p{
        font-size: 22px;
        /* display: flex; */
        align-items: center;
        /* justify-content: space-between; */
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        margin-top: 10px;


        input{
          background-color: var(--navColor);
        border: 1px solid var(--borderColor);
        color: var(--color);
        padding: 10px;
        outline: none;
        width: 60%;
        }
    }
    .renameIcon{
        cursor: pointer;
        font-size: 24px;
    }
`

export const CustomModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 20px;
    background-color: var(--formBgcolor);
    border: 1px solid var(--borderColor);
    color: var(--color);
    padding: 24px;
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

