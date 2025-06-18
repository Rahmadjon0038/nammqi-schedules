import styled from 'styled-components'

export const TableWrapper = styled.div`
  padding: 20px;
  background: var(--bg);
  border: 1px solid var(--borderColor);
  border-radius: 10px;
  margin-top: 20px;

  .text{
    color:var(--color);
    font-size: 24px;
    margin-top: 10px;
  }
`

export const RoomTitle = styled.h2`
  margin-top: 24px;
  color: var(--color);
`

export const LessonsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
  margin-top: 10px;
`

export const DayColumn = styled.div`
  background: var(--bg);
  border: 1px solid var(--borderColor);
  
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 0 4px var(--shadow);
  font-size: 14px;

  strong {
    display: block;
    margin-bottom: 8px;
    color: var(--color);
  }
`

export const LessonCell = styled.div`
  margin-bottom: 6px;
  background: var(--navColor);
  padding: 6px 10px;
  border-radius: 4px;
  color: var(--color);
  text-align: center;

  .empty {
    color: red;
  }
`
