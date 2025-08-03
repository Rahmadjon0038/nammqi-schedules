import styled from "styled-components";

export const PagesizeAndTitle = styled.div`
`;

export const Select = styled.select`
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid var(--borderColor);
  background-color: var(--bg);
  color: var(--color); 
  outline: none;
  margin-left: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-left: 10px;
    margin-top: 15px;
    padding: 8px 12px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    margin-left: 5px;
    margin-top: 10px;
    padding: 6px 10px;
    font-size: 13px;
  }
`;

export const Title = styled.h2`
  color: var(--color);
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const Wrapper = styled.div`
  margin-top: 30px;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 14px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 12px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 10px;
    margin-top: 15px;
  }
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
    box-shadow: 0 4px 12px var(--shadow);
  }

  h3 {
    margin-bottom: 10px;
    color: var(--color);
    text-align: center;

    @media (max-width: 768px) {
      font-size: 18px;
    }

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }

  p {
    margin-top: 8px;
    color: var(--color);
    text-align: center;

    @media (max-width: 768px) {
      font-size: 14px;
    }

    @media (max-width: 480px) {
      font-size: 13px;
    }
  }
`;

export const Crud = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: end;
  gap: 20px;

  .icon {
    font-size: 20px;
    color: orange;
    cursor: pointer;

    @media (max-width: 480px) {
      font-size: 18px;
    }
  }

  .trash {
    color: rgb(244, 74, 74);
  }

  @media (max-width: 480px) {
    gap: 15px;
  }
`;

export const Filter = styled.div`
  background-color: var(--bg);
  box-shadow: 0 0 10px var(--shadow);
  border: 1px solid var(--borderColor);
  padding: 10px;
  margin-top: 30px;
  margin-bottom: 40px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 10px;
  }
`;

export const FilterItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    width: 100%;
  }
`;

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

  &:active {
    transform: scale(0.98);
  }

  .exel {
    color: green;
    margin-bottom: 2px;
  }

  .xls {
    position: absolute;
    opacity: 0;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 6px 12px;
  }
`;

export const FilterInput = styled.input`
  background-color: var(--bg);
  border: 1px solid var(--borderColor);
  outline: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  color: white;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 6px 12px;
  }
`;

export const NextPages = styled.div`
  margin: 50px 0px;
  display: flex;
  justify-content: center;

  @media (max-width: 480px) {
    margin: 30px 0;
  }
`;

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
    background-color: rgb(48, 48, 48);
    opacity: 0.5;
    color: #a0a0a0;
    border-color: #ccc;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    padding: 10px 24px;
    font-size: 14px;
    margin-right: 8px;
  }

  @media (max-width: 480px) {
    padding: 8px 20px;
    font-size: 13px;
    margin-right: 6px;
  }
`;

export const CustomPagination = styled.div`
  margin: 50px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    margin: 30px 20px;
  }

  @media (max-width: 480px) {
    margin: 20px 10px;
  }
`;
