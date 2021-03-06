import { createActions } from 'reduxsauce';

import { ITypes, ICreators } from './types';

/* Types & Action Creators */

const { Types, Creators } = createActions<ITypes, ICreators>(
  {
    uploadPhotoRequest: ['attributes'],
    uploadPhotoSuccess: ['photo'],
    getPhotosSuccess: ['photos'],
  },
  { prefix: '@photos/' }
);

export const PhotosTypes = Types;
export default Creators;
