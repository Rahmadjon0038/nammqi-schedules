const { default: styled } = require("styled-components");
export const TableContainer = styled.div`
    width: 100%;
    padding-top: 100px;
    `
export const StychkiTable = styled.div`
    width: 100%;
    overflow: auto;
`
export const Table = styled.table`
    border-collapse:collapse;
    width: 100%;
    min-width: 800px;
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
    .nmap .aye{
        color: var(--color);
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

    #copybox{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 60px;
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

    @media(max-width:600px){
         th,td{
            font-size: 14px;
            padding: 10px;
         }
    }
`
// ------------------- add building -------------------

export const FormWrapper = styled.div`
    display: flex;
    justify-content: end;
    margin-bottom: 10px;
    `
export const Form = styled.form`
    display: flex;
    gap: 10px;
    @media (max-width:768px){
        display: flex;
        flex-direction: column;
        width: 100%;
    }
`;


export const Input = styled.input`
  padding: 14px 18px;
  border-radius: 5px;
  font-size: 15px;
  background-color:var(--navColor);
  color: var(--color);
  border: 1px solid var(--borderColor);
  &:focus {
    border-color: #3b82f6;
    outline: none;
  }
   @media(max-width:600px){
    padding: 8px 10px;
    font-size: 14px;
    }
`;


export const Button = styled.button`
  background-color: #10b981;
  color: white;
  padding: 12px 16px;  
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #059669;
  }
     @media(max-width:600px){
    padding: 8px 10px;
    font-size: 14px;
    }
`;