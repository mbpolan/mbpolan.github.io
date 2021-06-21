import styled from 'styled-components';
import { Stack } from '../layout';

const HeadingText = styled.div`
  font-family: monospace;
  font-size: 1.1rem;
  font-weight: bold;
`;

const Text = styled.div`
  font-size: 1.2rem;
`;

export interface NoDataProps {
  message: string;
}

export const NoData = ({ message }: NoDataProps) => {
  return (
    <Stack>
      <HeadingText>:(</HeadingText>
      <Text>{message}</Text>
    </Stack>
  );
};
