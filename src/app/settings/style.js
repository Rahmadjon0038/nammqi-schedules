import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 40px;
  background-color: var(--bg);
  color: var(--color);
  min-height: 100vh;
`;

export const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 30px;
  font-weight: 600;
  text-align: center;
  color: var(--color);
`;

export const Card = styled.div`
  background-color: var(--formBgcolor);
  border: 1px solid var(--borderColor);
  border-radius: 12px;
  box-shadow: 0 4px 12px var(--shadow);
  padding: 30px;
  max-width: 600px;
  margin: 0 auto;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  border-bottom: 1px solid var(--borderColor);
  padding-bottom: 10px;
`;

export const Label = styled.span`
  font-weight: bold;
  color: var(--color);
`;

export const Value = styled.span`
  color: var(--color);
  font-style: italic;
`;


export const ProfileBox = styled.div`
    display: flex;
    align-items: center;
    /* justify-content: center; */
    margin-top: 20px;
    gap: 10px;

    div p{
        color: var(--color);
        font-weight: 600;
        margin-bottom: 2px;
        font-size: 14px;
    }
`