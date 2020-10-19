import React from 'react';

import { Container, Header, Box } from './styles';

const Default: React.FC = ({ children }) => {
  return (
    <Container>
      <Header>ddd</Header>
      <Box>{children}</Box>
    </Container>
  );
};

export default Default;
