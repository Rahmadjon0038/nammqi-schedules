import styled from "styled-components";

export const CustomFilter = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 20px;
    margin-bottom: 10px;

    .custom-dropdown{
        background-color: var(--navColor);
        color: var(--color);
        border: 1px solid var(--borderColor);
    }
    .customBtn {
        border: 1px solid var(--borderColor);
        background-color: var(--navColor) !important;
        color: var(--color) !important;
        /* border: none !important; */
        padding:18px;
        box-shadow: none !important;
    }
   
`


export const Table = styled.table`
    border-collapse:collapse;
    width: 100%;
    tr {
        border: 1px solid var(--hoverColor);
    }

    th,td{
        text-align: left;
        padding: 20px;
        font-size: 18px;
    }
    th{
        background-color: var(--navColor);
    }

`