import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '~/@types';

import AuthActions from '~/store/ducks/auth';

import { Container, Header, Box, LogoutButton, Name } from './styles';

const { signOutRequest } = AuthActions;

const Default: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  const { name, email } = useSelector((state: ApplicationState) => state.user);

  const handleSignOut = useCallback(() => {
    dispatch(signOutRequest());
  }, [dispatch]);

  return (
    <Container>
      <Header>
        <Name>
          Hello,{' '}
          <label>
            {name}
            <span>{`(${email})`}</span>
          </label>
        </Name>
        <LogoutButton onClick={handleSignOut}>Logout</LogoutButton>
      </Header>
      <Box>{children}</Box>
    </Container>
  );
};

export default Default;
