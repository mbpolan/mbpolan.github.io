import React from 'react';
import { Spinner } from 'react-bootstrap';
import styled from 'styled-components';
import { Stack } from '../layout';

const Text = styled.div`
  font-size: 1.2rem;
`;

export interface LoadingProps {
  message: string;
}

export const Loading = ({ message }: LoadingProps) => {
  return (
    <Stack>
      <Spinner animation="border" variant="primary" />
      <Text>{message}</Text>
    </Stack>
  );
};
