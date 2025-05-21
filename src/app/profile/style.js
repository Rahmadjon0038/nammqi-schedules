import styled from "styled-components";

export const Wrapper = styled.div`
    border: 1px solid var(--borderColor);
    height: 100%;
    padding: 40px;
    border-radius: 10px;

    .imagebox{
        display: flex;
        align-items: center;
        gap: 40px;
    }
    h1{
        margin-bottom: 20px;
    }
    .image{
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 50%;
        margin-bottom: 20px;
    }

    p{
        font-size: 18px;
        margin-top: 10px;
    }
`
export const UserBox = styled.div`
    border-top: 1px solid var(--borderColor);
    padding: 20px 0px;
    max-width: 80%;
   
    
    .changeBox{
    display: flex;
    justify-content: space-between;
    align-items: center;
    }

    .change{
        display: flex;
        align-items: end;
        gap: 20px;
        width: 100%;
        align-items: center;
    }
    .rename{
    }
`
export const Msg = styled.h1`
    display: flex;
    align-items: center;
    color: green;
    gap: 20px;
   
`
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
    &:active{
      transform: scale(0.97);
    }
`
export const SaveBtn = styled.button`
    background-color: green;
`

export const CustomInput = styled.input`
    background-color: var(--navColor);
    border: 1px solid var(--borderColor);
    color: var(--color);
    padding: 10px;
    border-radius: 5px;
    outline: none;
    width: 300px;
`

export const Confarimpass = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 10px;

`

export const DeleteAccount = styled.button`
   padding: 16px 60px;
    background-color: red;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    color: white;
    cursor: pointer;
    margin-top: 30px;
    font-size: 16px;
    &:active{
      transform: scale(0.97);
    }
`
