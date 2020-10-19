import styled from 'styled-components';
import { lighten } from 'polished';
import { CloseOutline } from '@styled-icons/evaicons-outline';
import { motion } from 'framer-motion';

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

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
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

  overflow-y: auto;
  overflow-x: hidden;

  position: relative;

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

export const ImageWrapper = styled(motion.div).attrs({
  initial: { visibility: 'visible' },
  animate: { visibility: 'visible' },
  exit: { visibility: 'visible' },
})`
  height: 200px;

  border-radius: 10px;
  background: var(--white);
  overflow: hidden;

  box-shadow: 0px 0px 5px 3px (0, 0, 0, 0.7);
`;

export const Image = styled.img`
  width: auto;
  height: auto;
  max-height: 100%;
  max-width: 100%;

  display: block;

  object-fit: contain;
`;

export const EmptyImagesContainer = styled.div`
  grid-column: 1/5;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EmptyMessage = styled.span`
  margin-top: 20px;

  color: var(--white);
  font: bold 18px/20px 'Roboto', sans-serif;
`;

export const HighlightContainer = styled(motion.div).attrs({})`
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0px;
  top: 0px;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CloseButtonContainer = styled(motion.button)`
  width: 32px;
  height: 32px;
  border-radius: 50%;

  background: ${lighten(0.35, '#6e86d6')};

  position: absolute;

  top: 3%;
  left: 95%;
  box-shadow: 3px 1px 15px -5px rgba(0, 0, 0, 0.9);
`;

export const BigImageWrapper = styled.div`
  width: 950px;
  height: 650px;

  position: absolute;
`;

export const ResizedImage = styled.img`
  height: 500px;
  width: 500px;

  object-fit: contain;
`;

export const Wrapper = styled.div`
  height: 100%;
  overflow: hidden;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  color: var(--white);

  > span {
    color: var(--notification);
    margin-left: 5px;
  }
`;

export const CloseIcon = styled(CloseOutline).attrs({
  size: 20,
})`
  color: var(--link);
`;
