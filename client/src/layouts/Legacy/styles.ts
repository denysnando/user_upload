import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100%;

  background: var(--background);
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px;

  border-radius: 10px;
  box-shadow: 3px 1px 15px -5px rgba(0, 0, 0, 0.65);

  width: 450px;
  min-height: 300px;
  background: var(--box);

  & > form {
    display: flex;
    flex-direction: column;
    flex: 1;

    > input {
      margin: 8px 0px;
      padding: 0 8px;

      height: 32px;
      border-radius: 5px;
      box-shadow: 0px 0px 25px 3px var(--input-border);
    }

    > button,
    > div > button {
      height: 36px;
      width: 120px;

      cursor: pointer;

      margin: 0 auto;
      border-radius: 5px;

      background: var(--link);
      color: var(--white);

      &:hover {
        background: ${lighten(0.02, '#6e86d6')};
      }
    }
  }
`;

export const Logo = styled.span`
  display: block;

  font: 22px/26px 'Roboto', sans-serif;
  text-align: center;
  color: var(--white);

  margin-bottom: 20px;

  & > span {
    font: bold 22px/26px 'Open-Sans', sans-serif;
    color: var(--link);
  }
`;
