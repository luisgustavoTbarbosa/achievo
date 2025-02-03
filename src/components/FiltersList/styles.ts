import styled from "styled-components";

export const FiltersListContainer = styled.div`
  margin-top: 1.5rem;
`

export const StatusFilters = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`

export const GoalsFilters = styled.div``

export const GoalsFiltersHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.25rem 0 0.5rem;
  color: #E4E4E7;

  button {
    display: flex;
    padding: 0.25rem;
    border-radius: 6px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition: background .2s ease;

    &:hover {
      background-color: #6366F1;
    }
  }
`

export const Goals = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    padding: 0.313rem 0.5rem;
    border: 1px solid #3F3F46;
    border-radius: 6px;
    background: #34343A;
    color: #E4E4E7;
    font-size: 0.875rem;

    span {
      color: #E4E4E7;
    }
  }

  div + div {
    margin-top: 0.5rem;
  }
`
