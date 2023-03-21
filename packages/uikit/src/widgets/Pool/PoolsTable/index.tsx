import { useRef } from "react";
import styled from "styled-components";

const StyledTable = styled.div`
  border-radius: ${({ theme }) => theme.radii.card};
  scroll-margin-top: 64px;

  // background-color: ${({ theme }) => theme.card.background};
  // background: linear-gradient(90deg, #090809 0%, #13090c 50%, #090909 100%);
  background: rgba(15, 11, 14, 0.2);
  border-radius: 16px;
  margin: 16px 20px;
  > div:not(:last-child) {
    border-bottom: 2px solid ${({ theme }) => theme.colors.disabled};
  }

  > div:last-child {
    border-bottom-left-radius: ${({ theme }) => theme.radii.card};
    border-bottom-right-radius: ${({ theme }) => theme.radii.card};
  }
`;

const StyledTableBorder = styled.div`
  border-radius: ${({ theme }) => theme.radii.card};
  // background-color: ${({ theme }) => theme.colors.cardBorder};
  // background-color: #060103;
  
  padding: 1px 1px 3px 1px;
  background-size: 400% 400%;
`;

export const PoolsTable: React.FC<React.PropsWithChildren> = ({ children }) => {
  const tableWrapperEl = useRef<HTMLDivElement>(null);

  return (
    <StyledTableBorder>
      <StyledTable id="pools-table" role="table" ref={tableWrapperEl}>
        {children}
      </StyledTable>
    </StyledTableBorder>
  );
};
