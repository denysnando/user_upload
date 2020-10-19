import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 32px;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100%;

  background: var(--background);

  position: relative;
`;

export const Header = styled.div``;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;

  padding: 40px;

  border-radius: 10px;
  box-shadow: 3px 1px 15px -5px rgba(0, 0, 0, 0.65);

  background: var(--box);

  width: 950px;
  height: 650px;

  & > form {
    flex: 1;
    display: flex;
    flex-direction: column;

    height: 100%;
  }
`;
