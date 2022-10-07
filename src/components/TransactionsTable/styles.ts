import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 0;
`;

export const TableContent = styled.table`
  width: 100%;
  border-spacing: 0 0.5rem;

  th {
    color: var(--text-body);
    font-weight: 400;
    padding: 1rem 2rem;
    text-align: left;
    line-height: 1.5rem;
  }

  td {
    padding: 1rem 2rem;
    border: 0;
    font-weight: 400;
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
    background-color: var(--shape);
    color: var(--text-body);

    &:first-child {
      color: var(--text-title);
    }

    &.withdraw {
      color: var(--red);
    }

    &.deposit {
      color: var(--green);
    }
  }
`;
