import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 30px;
    border-radius: 10px;
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(400px,1fr));
    gap: 10px;
`
export const Info = styled.div`
    border: 1px solid var(--borderColor);
    padding: 10px;
    border-radius: 4px;
    box-shadow: 0 0 10px var(--shadow);

    p{
        margin-top: 4px;
    }
`