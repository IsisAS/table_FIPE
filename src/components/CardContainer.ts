import styled from "@emotion/styled";

export const CardContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.02);
  padding: 16px;
  max-width: 500px;
  width: 80%;
  margin: auto;
  gap: 16px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
