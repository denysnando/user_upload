import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 50px;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100%;

  background: var(--background);

  position: relative;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;

  position: relative;

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

export const LogoutButton = styled.div`
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);

  height: 32px;
  padding: 8px;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  color: var(--white);
  font-weight: bold;
`;

export const Name = styled.div`
  color: var(--white);
  font: 20px/22px 'Roboto', sans-serif;

  > label {
    text-transform: uppercase;
  }

  > label > span {
    text-transform: lowercase;
    font-size: 16px;
  }
`;
