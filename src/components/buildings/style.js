const { default: styled } = require("styled-components");
export const TableContainer = styled.div`
    width: 100%;
    
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
    .nmap{
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }  
    .icon{
        display: flex;
        align-items: center;
        gap: 20px;
    }
    .copy{
        cursor: pointer;
    }
    .nmap{
        text-align: left;
        display: flex;
        justify-content: start;
    }
    .nmap span{
        background-color: var(--navColor);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        padding: 10px;
        border-radius: 6px;
        cursor: pointer;
        margin-left: 20px;

        &:hover{
            background-color: var(--hoverColor);
        }
    }  
`
