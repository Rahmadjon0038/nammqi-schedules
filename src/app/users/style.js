import styled from "styled-components";

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