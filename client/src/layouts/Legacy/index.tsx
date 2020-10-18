import React from 'react';

import { Container, Box, Logo } from './styles';

const LegacyLayout: React.FC = ({ children }) => {
  return (
    <Container>
      <Box>
        <Logo>
          User<span>Upload</span>
        </Logo>
        {children}
      </Box>
    </Container>
  );
};

export default LegacyLayout;
