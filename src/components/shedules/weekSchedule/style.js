import styled from "styled-components";

// Styled components
const Container = styled.div`
  margin: 20px 0;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  border: 1px solid var(--borderColor);
  padding: 10px;
  background-color: var(--bg);
  text-align: center;
`;

const Td = styled.td`
  border: 1px solid var(--borderColor);
  padding: 10px;
  text-align: center;
`;

const RoomTitle = styled.h2`
  margin: 30px 0 10px;
  font-size: 24px;
  color: var(--color);
`;

const EmptyText = styled.div`
  color: var(--color);
  font-style: italic;
`;

// 🔄 Hafta kunlari mapping (EN -> UZ)


export {
    Container,Table,Td,Th,RoomTitle,EmptyText

}