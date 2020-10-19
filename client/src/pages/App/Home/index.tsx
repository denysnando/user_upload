import React, { useCallback, useState, useRef } from 'react';
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { useWatch } from 'react-hook-form';
import _ from 'lodash';
import * as Yup from 'yup';

import { ApplicationState } from '~/@types';

import Form, { FormHandles } from '~/components/Form';
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
  file: undefined,
};

const schema = Yup.object().shape({
  file: Yup.mixed().required(),
});

const InputContainer: React.FC = () => {
  const teste = useWatch({ name: 'file', defaultValue: undefined });

  return (
    <UploaderContainer>
      <FileInput name="file" />
      <button disabled={_.isUndefined(teste) || _.isEmpty(teste)}>
        Upload!
      </button>
    </UploaderContainer>
  );
};

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const formRef = useRef<FormHandles>(null);

  const { photos } = useSelector((state: ApplicationState) => state.photos);
  const { id } = useSelector((state: ApplicationState) => state.user);
  const [selectedId, setSelectedId] = useState<string | undefined>();

  const resizedImg = photos.find((i) => i.id.toString() === selectedId);

  const handleSubmit = useCallback(
    ({ file }) => {
      const [image] = file;

      const attributes = { image, user_id: id };
      dispatch(uploadPhotoRequest(attributes));
      formRef.current?.handleResetForm({ ...initialValues });
    },
    [dispatch, id]
  );

  return (
    <AnimateSharedLayout type="crossfade">
      <Form
        ref={formRef}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Text>
          Upload your <span>photos!</span>
        </Text>
        <InputContainer />
        <Separator />
        <Wrapper>
          <ImagesContainer>
            {photos.length > 0 ? (
              photos
                .map((photo) => (
                  <ImageWrapper
                    key={photo.id}
                    layoutId={photo.id.toString()}
                    onClick={() => {
                      setSelectedId(photo.id.toString());
                    }}
                  >
                    <Image src={photo.image.thumb.url} />
                  </ImageWrapper>
                ))
                .reverse()
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
          <HighlightContainer layoutId={selectedId.toString()}>
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
