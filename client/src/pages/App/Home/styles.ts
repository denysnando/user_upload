import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div``;

export const UploaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;

  > input {
    margin: 8px 16px 8px 0;
    padding: 5px;
    width: 100%;

    background: var(--white);

    height: 32px;
    border-radius: 5px;
    box-shadow: 0px 0px 25px 3px var(--input-border);
  }

  > button,
  > div > button {
    height: 36px;
    width: 120px;

    cursor: pointer;

    border-radius: 5px;

    background: var(--link);
    color: var(--white);
    transition: all 200ms ease;

    font: bold 14px/16px 'Roboto', sans-serif;

    &:hover {
      background: ${lighten(0.02, '#6e86d6')};
    }
  }

  > div > a {
    margin-top: 8px;

    text-decoration: none;

    font: 14px/16px 'OpenSans', sans-serif;
    color: var(--link);

    &:hover {
      color: ${lighten(0.02, '#6e86d6')};
    }
  }
`;

export const Separator = styled.div`
  background: var(--gray);
  margin-bottom: 25px;
  width: 80%;
  margin: 10px auto;
  height: 1px;

  &::before {
    display: block;
    margin-left: -10%;
    content: '';
    background: linear-gradient(to left, var(--gray), transparent);
    width: 10%;
    height: 1px;
  }

  &::after {
    display: block;
    margin-left: 100%;
    margin-top: -1px;
    content: '';
    background: linear-gradient(to right, var(--gray), transparent);
    width: 10%;
    height: 1px;
  }
`;

export const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-template-rows: 200px;
  justify-content: space-evenly;
  height: 100%;
  grid-gap: 20px 0;

  overflow: auto;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--link);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--gray);
    border-radius: 10px;
  }
`;

export const Image = styled.div`
  height: 200px;

  border-radius: 10px;
  background: var(--white);

  box-shadow: 0px 0px 5px 3px (0, 0, 0, 0.7);
`;

export const Wrapper = styled.div`
  height: 100%;
  overflow: hidden;
`;
