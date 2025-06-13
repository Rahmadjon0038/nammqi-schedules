import styled from "styled-components";

export const Title = styled.h2`
    color: var(--color);
    margin-top: 20px;
`

export const Wrapper = styled.div`
    margin-top: 30px;
    border-radius: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
        margin-top: 6px;
        color: var(--color);


        strong {
            margin-top: 6px;
        }
    }
`;
