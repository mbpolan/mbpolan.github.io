import styled from "styled-components";
import { Stack } from "../layout";

const HeadingText = styled.div`
    font-weight: bold;
`;

const Text = styled.div`
    font-size: 1.2rem;
`;

export interface ErrorProps {
    message: string;
}

export const Error = ({ message }: ErrorProps) => {
    return (
        <Stack>
            <HeadingText>Oh snap!</HeadingText>
            <Text>{message}</Text>
        </Stack>
    );
}