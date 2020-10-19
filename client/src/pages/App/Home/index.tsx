import React, { useCallback, useState } from 'react';
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { ApplicationState } from '~/@types';

import Form from '~/components/Form';
import FileInput from '~/components/FileInput';

import PhotosActions from '~/store/ducks/photos';

import {
  UploaderContainer,
  Separator,
  ImagesContainer,
  Image,
  ImageWrapper,
  Wrapper,
  Text,
  HighlightContainer,
  ResizedImage,
  EmptyImagesContainer,
  EmptyMessage,
  CloseButtonContainer,
  BigImageWrapper,
  CloseIcon,
} from './styles';

const { uploadPhotoRequest } = PhotosActions;

const initialValues = {
  email: '',
  password: '',
};

const schema = Yup.object().shape({
  dasdas: Yup.string(),
});

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const { photos } = useSelector((state: ApplicationState) => state.photos);
  const { id } = useSelector((state: ApplicationState) => state.user);
  const [selectedId, setSelectedId] = useState<string | undefined>();

  const resizedImg = photos.find((i) => i.id.toString() === selectedId);

  const handleSubmit = useCallback(
    ({ file }) => {
      const [image] = file;

      const attributes = { image, user_id: id };
      dispatch(uploadPhotoRequest(attributes));
    },
    [dispatch, id]
  );

  return (
    <AnimateSharedLayout type="crossfade">
      <Form
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Text>
          Upload your <span>photos!</span>
        </Text>
        <UploaderContainer>
          <FileInput name="file" />
          <button>Upload!</button>
        </UploaderContainer>
        <Separator />
        <Wrapper>
          <ImagesContainer>
            {photos.length > 0 ? (
              photos.map((photo) => (
                <ImageWrapper
                  layoutId={photo.id.toString()}
                  onClick={() => setSelectedId(photo.id.toString())}
                >
                  <Image src={photo.image.thumb.url} />
                </ImageWrapper>
              ))
            ) : (
              <EmptyImagesContainer>
                <EmptyMessage>You don't have any images yet.</EmptyMessage>
              </EmptyImagesContainer>
            )}
          </ImagesContainer>
        </Wrapper>
      </Form>
      <AnimatePresence>
        {selectedId && (
          <HighlightContainer layoutId={selectedId}>
            <ResizedImage src={resizedImg?.image.url} />
            <BigImageWrapper>
              <CloseButtonContainer
                onClick={() => {
                  setSelectedId(undefined);
                }}
              >
                <CloseIcon />
              </CloseButtonContainer>
            </BigImageWrapper>
          </HighlightContainer>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};

export default Home;
