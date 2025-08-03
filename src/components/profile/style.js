import styled from "styled-components";
import { Modal } from 'antd';

export const Container = styled.div``;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  img {
    width: 48px;
    height: 48px;
    object-fit: cover;
    border: 1px solid;
    border-radius: 50%;
  }

  @media (max-width: 600px) {
    img {
      width: 30px;
      height: 30px;
    }
  }
`;

export const Glass = styled.div`
  height: 60px;
  background: linear-gradient(90deg, var(--gradientleft), var(--gradientright));
`;

export const ModalContent = styled.div`
  background-color: var(--bg);
  padding: 20px;

  .profileimg {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    .img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: aliceblue;

      @media (max-width: 600px) {
        width: 80px;
        height: 80px;
      }
    }

    .info {
      display: flex;
      align-items: center;
      gap: 20px;
      flex-wrap: wrap;
    }

    .infotext p {
      margin-top: 5px;
      color: var(--color);
    }
     @media (max-width: 600px) {
      .infotext h2{
        font-size: 18px;
      }
      }
    

    button {
      background-color: rgb(65, 130, 249);
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: 0.3s ease;
      

      @media (max-width: 600px) {
        padding: 8px;
        font-size: 12px;
        margin-top: 4px;

      }
    }
    button:hover {
      background-color: rgb(44, 111, 236);
    }
    button:active {
      transform: scale(0.97);
    }
  }
`;

export const UserInfoContainer = styled.div`
  margin-top: 10px;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;

  .userInput {
    background-color: var(--navColor);
    border-radius: 4px;
    margin-top: 10px;

    
  }

`;

export const UserInfo = styled.div`
  .userInfo {
    margin-top: 20px;
    @media (max-width: 600px) {
    margin-top: 10px;
  }
  }


  .userInput{
    background-color: var(--hoverColor);
  }
  .userInput p {
    padding: 14px;
    color: rgb(128, 128, 128);

    @media (max-width: 600px) {
    margin-top: 10px;
    padding: 8px;

  }
  }
`;

export const CreateAt = styled.p`
  margin: 20px 10px;
  color: rgb(71, 69, 69);
`;

export const CustomInput = styled.input`
  width: 100%;
  padding: 14px;
  border: none;
  color: var(--color);
  background-color: var(--navColor);
  outline: none;
  border-radius: 4px;
  border: 1px solid var(--borderColor);

  @media (max-width: 600px) {
    padding: 8px;
    font-size: 14px;
  }
`;

export const Logoutbtn = styled.button`
  padding: 10px 20px;
  color: white;
  background: red;
  border: none;
  border-radius: 4px;
  margin-left: 10px;
  margin-top: 30px;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const File = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    position: absolute;
    cursor: pointer;
    opacity: 0;
  }

  .renameicon {
    position: absolute;
    bottom: -5px;
    right: -5px;
    font-size: 20px;
    color: rgb(71, 69, 69);
  }
`;

export const ConfarimpassTitle = styled.p`
  margin: 16px 0;
`;

export const CustomButton = styled.button`
  padding: 12px 30px;
  background-color: var(--navColor);
  border: none;
  border-radius: 5px;
  font-weight: bold;
  color: var(--color);
  cursor: pointer;
  border: 1px solid var(--borderColor);
  margin-right: 10px;

  &:active {
    transform: scale(0.97);
  }

  @media (max-width: 600px) {
    width: 100%;
    margin-right: 0;
    padding: 8px;
  }
`;

export const ReplacePass = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;
`;

export const DeleteAccount = styled.button`
  padding: 10px 60px;
  background-color: red;
  border: none;
  border-radius: 5px;
  color: white;
  margin-left: 30px;
  cursor: pointer;

  &:active {
    transform: scale(0.97);
  }

  @media (max-width: 600px) {
    width: 100%;
    margin-left: 0;
    padding: 8px;
    
  }
`;

export const DeleteCustomModal = styled(Modal)`
  z-index: 1000;

  .ant-modal-content {
    border-radius: 20px;
    background-color: aliceblue;
    color: var(--color);
    padding: 24px 40px;

    @media (max-width: 600px) {
      padding: 16px 20px;
    }
  }

  .ant-modal-title {
    display: none;
  }

  .ant-modal-close {
    color: var(--color);
  }

  .ant-modal-close:hover {
    color: var(--color);
  }
`;

export const DeleteModalcontent = styled.div`
  z-index: 1000;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const ModalBox = styled.div`
  background: var(--navColor);
  padding: 30px;
  border-radius: 12px;
  width: 500px;
  text-align: center;

  @media (max-width: 600px) {
    width: 90%;
    padding: 20px;
  }
`;
