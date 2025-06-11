import styled from "styled-components";

export const CustomFilter = styled.div`

    display: flex;
    align-items: center;
    justify-content: end;
    gap: 20px;
    margin-bottom: 10px;
    margin-top: 120px;

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
          @media (max-width:600px){
        padding: 8px;
    }
    }
   
`
export const StychkiTable = styled.div`
    width: 100%;
    overflow: auto;
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


  @media(max-width:600px){
         th,td{
            font-size: 14px;
            padding: 10px;
         }
    }
`
export const CustomInput = styled.input`
    padding: 10px;
    border: none;
    color: var(--color);
    background-color: var(--navColor);
    outline: none;
    border-radius: 4px;
    border: 1px solid var(--borderColor);
`
