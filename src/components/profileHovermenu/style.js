import styled from "styled-components";

export const HoverMenuBox = styled.div`
    position: absolute;
    background-color:var(--formBgcolor) ;
    border: 1px solid var(--borderColor);
    left: 70px;
    bottom: 60px;
    border-radius: 5px;
    .imagebox{
        padding: 10px;
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .image{
        width: 44px;
        height: 44px;
        border-radius: 50%;
        object-fit: cover;
    }
    .link{
        text-decoration: none;
    }
    button{
        width: 100%;
        padding: 10px;
        background-color: transparent;
        border: none;
        font-size: 16px;
        color: var(--color);
        text-align: left;
        display: flex;
        align-items: center;
        gap: 10px;
        &:hover{
            background-color: var(--navColor);
        }
    }
    

`