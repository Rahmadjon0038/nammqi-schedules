import styled from "styled-components";

export const Title = styled.h2`
    color: var(--color);
    margin-top: 40px;
`

export const Wrapper = styled.div`
    margin-top: 30px;
    border-radius: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
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
    }

    p {
        margin-top: 8px;
        color: var(--color);
        font-size: 18px;

        strong {
            margin-top: 8px;
        }
    }
`;

export const Crud = styled.div`
    background-color: var(--bg);
    box-shadow: 0 0 10px var(--shadow);
    border: 1px solid var(--borderColor);
    margin-top: 20px;
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
    grid-template-columns: repeat(2,1fr);
    gap: 100px;

`
export const FilterItem = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    justify-content: end;
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

    &:active{
        transform: scale(0.98);
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
    width: 100%;
` 