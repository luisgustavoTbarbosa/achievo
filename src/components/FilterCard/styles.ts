import styled from "styled-components";

interface CardProps {
  $variant: string
}

export const Card = styled.div<CardProps>`
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.5rem;
  background-color: #2A2A30;
  border: 1px solid #3F3F46;
  border-radius: 6px;
  font-size: 0.875rem;
  color: #A1A1AA;

  svg {
    margin-bottom: 0.2rem;
    padding: 0.2rem;
    background-color: ${props => props.$variant};
    border-radius: 100%;
  }

  .count {
    font-size: 1rem;
    font-weight: 600;
    color: #E4E4E7;
  }
`
