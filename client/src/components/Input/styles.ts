import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const ErrorMessage = styled.div`
  position: absolute;
  top: 43px;

  font: 12px/14px 'OpenSans', sans-serif;
  text-transform: uppercase;
  color: var(--notification);
`;
