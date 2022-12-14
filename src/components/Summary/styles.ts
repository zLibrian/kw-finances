import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  margin-top: -8.5rem;
`;

export const SummaryCard = styled.div`
  background: var(--shape);
  padding: 1.5rem 2rem;
  border-radius: 0.3rem;
  &:last-child {
    background: var(--green);
    color: #fff;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 500;
    line-height: 3rem;
  }
`;
