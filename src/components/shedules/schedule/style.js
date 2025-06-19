// style.js yoki birga yozilsa ham bo'ladi
import styled from 'styled-components'

export const TableWrapper = styled.div`
  padding: 20px;
  background: var(--bg);
  border: 1px solid var(--borderColor);
  border-radius: 10px;
  margin-top: 20px;

  .text {
    color: var(--color);
    font-size: 24px;
    margin-top: 10px;
  }
`

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
`

export const Th = styled.th`
  padding: 12px;
  background-color: var(--bg);
  border: 1px solid var(--borderColor);
  color: var(--color);
  font-weight: 600;
  text-align: center;
`

export const Td = styled.td`
  padding: 10px;
  border: 1px solid var(--borderColor);
  text-align: center;
  font-size: 14px;
  color: var(--color);
  background-color: var(--bg);
`
