// style.js
import styled from 'styled-components'

export const TableWrapper = styled.div`
  background: var(--bg);
  border-radius: 10px;
  margin-top: 20px;
  width: 100%;
  overflow-x: auto;

  .text {
    color: var(--color);
    font-size: 24px;
    margin-top: 10px;
  }

  /* Tablet */
  @media (max-width: 768px) {
    padding: 15px;

    .text {
      font-size: 20px;
    }
  }

  /* Mobile */
  @media (max-width: 600px) {
    padding: 10px;

    .text {
      font-size: 16px;
      text-align: center;
    }
  }
`

export const StyledTable = styled.table`
  width: max-content;
  min-width: 100%;
  border-collapse: collapse;
  margin-top: 10px;

  /* Mobile */
  @media (max-width: 600px) {
    font-size: 12px;
  }

  tbody td:nth-child(1){
    background-color: var(--tableHeaderBg);
  color: var(--tableTitleColor);
  }
`

export const Th = styled.th`
  background-color: var(--tableHeaderBg);
  color: var(--tableTitleColor);
  padding: 12px;
  border: 1px solid var(--borderColor);
  font-weight: 600;
  text-align: center;

  /* Tablet */
  @media (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
  }

  /* Mobile */
  @media (max-width: 600px) {
    padding: 8px;
    font-size: 12px;
  }
`

export const Td = styled.td`
  padding: 10px;
  border: 1px solid var(--borderColor);
  text-align: center;
  font-size: 14px;
  color: var(--color);
  background-color: var(--bg);

  
  /* Tablet */
  @media (max-width: 768px) {
    padding: 8px;
    font-size: 13px;
  }

  /* Mobile */
  @media (max-width: 600px) {
    padding: 6px;
    font-size: 12px;
  }
`
