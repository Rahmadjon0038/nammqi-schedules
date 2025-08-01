import styled from "styled-components";

export const PagesizeAndTitle = styled.div`
   
`

export const Select = styled.select`
        padding: 5px 10px;
        border-radius: 5px;
        border: 1px solid var(--borderColor);
        background-color: var(--bg);
        color: var(--coloer);
        outline: none;
        margin-left: 20px;
        margin-top: 20px;
`
export const Title = styled.h2`
    color: var(--color);
`

export const Wrapper = styled.div`
    margin-top: 30px;
    border-radius: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
    margin-top: 20px;
`;

export const Info = styled.div`
    background-color: var(--bg);
    border: 1px solid var(--borderColor);
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 0 10px var(--shadow);
    transition: 0.3s;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 4px 12px var(--shadow) ;
    }

    h3 {
        margin-bottom: 10px;
        color: var(--color);
        text-align: center;
    }

    p {
        margin-top: 8px;
        color: var(--color);
        text-align: center;
    }
`;

export const Crud = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: end;
    gap: 20px;
    .icon{
        font-size: 20px;
        color: var(--color);
        color: orange;
        cursor: pointer;
    }
    .trash{
        color: rgb(244, 74, 74);
    }
`


export const Filter = styled.div`
    background-color: var(--bg);
    box-shadow: 0 0 10px var(--shadow);
    border: 1px solid var(--borderColor);
    padding: 10px;
    margin-top: 30px;
    margin-bottom: 40px;
    border-radius: 4px;
    display: grid;
    display: flex;
    justify-content: space-between;
    

`
export const FilterItem = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
export const FilterButtons = styled.button`
    font-size: 16px;
    color: var(--color);
    background-color: var(--bg);
    padding: 10px 20px;
    display: flex;
    align-items: center;
    gap: 6px;
    border: 1px solid var(--borderColor);
    border-radius: 4px;
    position: relative;

    &:active{
        transform: scale(0.98);
    }
    .exel{
        color: green;
        margin-bottom: 2px;
    }

    .xls{
        position: absolute;
        opacity: 0;
    }

`

export const FilterInput = styled.input`
    background-color: var(--bg);
    border: 1px solid var(--borderColor);
    outline: none;
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 16px;
    color: white;
`

export const NextPages = styled.div`
    margin: 50px 0px;
    display: flex;
    justify-content: center;
`
export const CustomButton = styled.button`
    padding: 12px 30px;
    background-color: var(--navColor);
    border: 1px solid var(--borderColor);
    border-radius: 5px;
    font-weight: bold;
    color: var(--color);
    cursor: pointer;
    margin-right: 10px;
    transition: all 0.3s ease;

    &:active {
        transform: scale(0.97);
    }

    &:disabled {
        background-color:rgb(48, 48, 48);
        opacity: 0.5;
        color: #a0a0a0;
        border-color: #ccc;
        cursor: not-allowed;
        transform: none;
    }
`;


export const CustomPagination = styled.div`
    margin: 50px;
    display: flex;
    justify-content: center;

    
`